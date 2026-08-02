// personagemCalc.js — cálculos derivados da ficha (PV, PM, Defesa, perícias)
// Suporta multiclasse, atributos alternativos (PV/Defesa por outro atributo),
// regra de idade opcional (Livro Básico ou Heróis de Arton) e bônus manuais.
import { ATTR_KEYS, RACES, RACE_SKILL_BONUS, AGE_BASICO, AGE_HEROIS, SIZES, SIZE_ORDER, SKILLS, CLASSES } from '../data/personagemRules'

const ZERO_MODS = { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 }

export function racaMods(racaNome, racaEscolhas) {
  const raca = RACES[racaNome]
  if (!raca) return { ...ZERO_MODS }
  if (raca.variable) {
    const mods = { ...ZERO_MODS }
    ;(racaEscolhas || []).forEach((attr) => { if (mods[attr] !== undefined) mods[attr] += 1 })
    return mods
  }
  return raca.mods
}

// Normaliza os efeitos de idade conforme o modo escolhido (nenhuma/básico/heróis).
export function efeitosIdade(ageMode, ageKey) {
  if (ageMode === 'basico') {
    const faixa = AGE_BASICO[ageKey]
    return { mods: faixa?.mods || ZERO_MODS, pmBonus: 0, defesaBonus: 0, tamanhoMenor: false, niveisExtras: 0 }
  }
  if (ageMode === 'herois') {
    const faixa = AGE_HEROIS[ageKey]
    return {
      mods: faixa?.mods || ZERO_MODS,
      pmBonus: faixa?.pmBonus || 0,
      defesaBonus: faixa?.defesaBonus || 0,
      tamanhoMenor: !!faixa?.tamanhoMenor,
      niveisExtras: faixa?.niveisExtras || 0
    }
  }
  return { mods: { ...ZERO_MODS }, pmBonus: 0, defesaBonus: 0, tamanhoMenor: false, niveisExtras: 0 }
}

export function tamanhoEfetivo(tamanhoBase, tamanhoMenor) {
  if (!tamanhoMenor) return tamanhoBase
  const idx = SIZE_ORDER.indexOf(tamanhoBase)
  if (idx <= 0) return tamanhoBase
  return SIZE_ORDER[idx - 1]
}

export function atributosFinais(base, racaNome, racaEscolhas, ageMode, ageKey) {
  const raceMods = racaMods(racaNome, racaEscolhas)
  const ageMods = efeitosIdade(ageMode, ageKey).mods
  const final = {}
  ATTR_KEYS.forEach((k) => {
    final[k] = (base[k] ?? 0) + (raceMods[k] ?? 0) + (ageMods[k] ?? 0)
  })
  return final
}

// ── MULTICLASSE ──
export function calcularNivelTotal(classes) {
  return (classes || []).reduce((sum, c) => sum + (Number(c.nivel) || 0), 0)
}

// PV: a classe "principal" (primeira da lista) fornece a base (hp1); todo
// nível adicional, em qualquer classe, soma o hpN daquela classe.
export function calcularPV(classes, atributosFinal, atributoPV = 'CON') {
  const lista = (classes || []).filter((c) => c.nome)
  if (!lista.length) return 0
  const attrVal = atributosFinal[atributoPV] || 0
  const principal = CLASSES[lista[0].nome]
  if (!principal) return 0

  let pv = principal.hp1 + attrVal
  lista.forEach((c, i) => {
    const info = CLASSES[c.nome]
    if (!info) return
    const niveisExtras = i === 0 ? Math.max(0, (Number(c.nivel) || 1) - 1) : (Number(c.nivel) || 0)
    pv += niveisExtras * (info.hpN + attrVal)
  })
  return pv
}

// PM: soma pmN*nível de cada classe, mais o bônus de atributo de cada classe
// que conceda isso (concedido uma vez, não escala com nível), mais bônus de idade.
export function calcularPM(classes, atributosFinal, pmBonusIdade = 0) {
  const lista = (classes || []).filter((c) => c.nome)
  let pm = 0
  lista.forEach((c) => {
    const info = CLASSES[c.nome]
    if (!info) return
    pm += info.pmN * (Number(c.nivel) || 0)
    if (info.pmAttr) pm += atributosFinal[info.pmAttr] || 0
  })
  return pm + pmBonusIdade
}

export function calcularDefesa(atributosFinal, tamanhoKey, atributoDefesa = 'DES', bonusDefesa = [], defesaBonusIdade = 0) {
  const size = SIZES[tamanhoKey] || SIZES.medio
  const extras = (bonusDefesa || []).reduce((s, b) => s + (Number(b.valor) || 0), 0)
  return 10 + (atributosFinal[atributoDefesa] || 0) + size.def + extras + defesaBonusIdade
}

export function bonusTreino(nivel) {
  if (nivel >= 15) return 6
  if (nivel >= 11) return 5
  if (nivel >= 7) return 4
  if (nivel >= 3) return 3
  return 2
}

export function calcularBonusPericia(skillKey, { atributosFinal, treinadas, racaNome, nivel, outros }) {
  const skill = SKILLS.find((s) => s.key === skillKey)
  if (!skill) return 0
  const meio = Math.floor(nivel / 2)
  const attrVal = atributosFinal[skill.attr] || 0
  const treinada = treinadas.includes(skillKey)
  const treino = treinada ? bonusTreino(nivel) : 0
  const racial = RACE_SKILL_BONUS[racaNome]?.[skillKey] || 0
  const outro = Number(outros?.[skillKey]) || 0
  return meio + attrVal + treino + racial + outro
}

// Mantida por compatibilidade — não é mais usada para bloquear treinos na UI.
export function maxTreinos(atributosFinal) {
  return Math.max(0, 2 + (atributosFinal.INT || 0))
}