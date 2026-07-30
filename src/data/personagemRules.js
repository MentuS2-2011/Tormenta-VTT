// personagemRules.js — regras simplificadas para a criação de personagens
// Baseado nas mesmas fontes de dados do status.html/ficha.js, mas com escopo
// reduzido para caber num criador React enxuto: raças "especiais" (golem,
// moreau, nagah, aberrante, humano etc.) usam a regra genérica "escolha 2
// atributos para +1", em vez do sub-sistema completo de cada uma.

// ── ATRIBUTOS ──
export const ATTR_KEYS = ["FOR", "DES", "CON", "INT", "SAB", "CAR"]

export const ATTR_LABELS = {
  FOR: "Força", DES: "Destreza", CON: "Constituição",
  INT: "Inteligência", SAB: "Sabedoria", CAR: "Carisma"
}

// Custo cumulativo em pontos para cada valor de atributo (método de compra)
export const ATTR_COST = { "-2": -2, "-1": -1, "0": 0, "1": 1, "2": 3, "3": 6, "4": 10 }
export const ATTR_MIN = -2
export const ATTR_MAX = 4
export const ATTR_BUDGET = 10

// ── RAÇAS ──
// `mods` = modificadores fixos. `variable: true` = raça "à escolha": o
// jogador escolhe 2 atributos distintos para receber +1 cada (simplificação
// da regra oficial de Humano, aplicada às demais raças de atributos livres).
export const RACES = {
  "Anão": { mods: { FOR: 0, DES: -1, CON: 2, INT: 0, SAB: 1, CAR: 0 } },
  "Aggelus": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 2, CAR: 1 } },
  "Bugbear": { mods: { FOR: 2, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: -1 } },
  "Centauro": { mods: { FOR: 1, DES: 0, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Ceratops": { mods: { FOR: 1, DES: -1, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Dahllan": { mods: { FOR: 0, DES: 1, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Eiradaan": { mods: { FOR: -1, DES: 0, CON: 0, INT: 0, SAB: 2, CAR: 1 } },
  "Elfo": { mods: { FOR: 0, DES: 1, CON: -1, INT: 2, SAB: 0, CAR: 0 } },
  "Elfo-do-Mar": { mods: { FOR: 0, DES: 2, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Elfo-Negro": { mods: { FOR: 0, DES: 2, CON: -1, INT: 0, SAB: 0, CAR: 1 } },
  "Finntroll": { mods: { FOR: -1, DES: 0, CON: 1, INT: 2, SAB: 0, CAR: 0 } },
  "Galokk": { mods: { FOR: 1, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: -1 } },
  "Gnoll": { mods: { FOR: 0, DES: 0, CON: 2, INT: -1, SAB: 1, CAR: 0 } },
  "Goblin": { mods: { FOR: 0, DES: 2, CON: 0, INT: 1, SAB: 0, CAR: -1 } },
  "Harpia": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 0, CAR: 1 } },
  "Hobgoblin": { mods: { FOR: 0, DES: 1, CON: 2, INT: 0, SAB: 0, CAR: -1 } },
  "Hynne": { mods: { FOR: -1, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 1 } },
  "Kaijin": { mods: { FOR: 2, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: -2 } },
  "Kappa": { mods: { FOR: 0, DES: 2, CON: 1, INT: 0, SAB: 0, CAR: -1 } },
  "Kliren": { mods: { FOR: -1, DES: 0, CON: 0, INT: 2, SAB: 0, CAR: 1 } },
  "Kobold": { mods: { FOR: -1, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Medusa": { mods: { FOR: 0, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 2 } },
  "Minotauro": { mods: { FOR: 2, DES: 0, CON: 1, INT: 0, SAB: -1, CAR: 0 } },
  "Nezumi": { mods: { FOR: 0, DES: 1, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Ogro": { mods: { FOR: 3, DES: 0, CON: 2, INT: -1, SAB: 0, CAR: -1 } },
  "Orc": { mods: { FOR: 2, DES: 0, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Qareen": { mods: { FOR: 0, DES: 0, CON: 0, INT: 1, SAB: -1, CAR: 2 } },
  "Sátiro": { mods: { FOR: 0, DES: 1, CON: 0, INT: 0, SAB: -1, CAR: 2 } },
  "Sílfide": { mods: { FOR: -2, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: 2 } },
  "Tengu": { mods: { FOR: 0, DES: 2, CON: 0, INT: 1, SAB: 0, CAR: 0 } },
  "Thri-Kreen": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 1, CAR: -1 } },
  "Trabachi": { mods: { FOR: 1, DES: 0, CON: 2, INT: 0, SAB: 0, CAR: -1 } },
  "Trog": { mods: { FOR: 1, DES: 0, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Vardak": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 0, CAR: 1 } },
  "Velocis": { mods: { FOR: 0, DES: 1, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Voracis": { mods: { FOR: 0, DES: 2, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Byxies'Mori": { mods: { FOR: 0, DES: 0, CON: -1, INT: 0, SAB: 2, CAR: 1 } },
  "Keisarinna": { mods: { FOR: -2, DES: 3, CON: 2, INT: 0, SAB: 0, CAR: 0 } },
  // Raças de atributos livres / sub-sistema especial — simplificadas
  "Humano": { variable: true },
  "Duende": { variable: true },
  "Aberrante": { variable: true },
  "Golem": { variable: true },
  "Moreau": { variable: true },
  "Nagah": { variable: true },
  "Kallyanach": { variable: true },
  "Lefou": { variable: true },
  "Mashin": { variable: true },
  "Minauro": { variable: true },
  "Meio-Elfo": { variable: true },
  "Meio-Orc": { variable: true },
  "Nimbus": { variable: true },
  "Osteon": { variable: true },
  "Sereia / Tritão": { variable: true },
  "Yidishan": { variable: true },
  "Vampiro": { variable: true }
}

// Bônus racial fixo de perícia (soma direta, sem gastar treino)
export const RACE_SKILL_BONUS = {
  "Anão": { percepcao: 2, sobrevivencia: 2 },
  "Dahllan": { adestramento: 2 },
  "Duende": { adestramento: 2, sobrevivencia: 2 },
  "Elfo": { misticismo: 2, percepcao: 2 },
  "Elfo-do-Mar": { furtividade: 2, sobrevivencia: 2 },
  "Finntroll": { misticismo: 2 },
  "Harpia": { intimidacao: 2, sobrevivencia: 2 },
  "Hobgoblin": { furtividade: 2 },
  "Hynne": { enganacao: 2 },
  "Kobold": { sobrevivencia: 2 },
  "Meio-Orc": { intimidacao: 2 },
  "Minauro": { diplomacia: 2, investigacao: 2 },
  "Nagah": { enganacao: 2 },
  "Nezumi": { intimidacao: 2 },
  "Orc": { percepcao: 2, sobrevivencia: 2 },
  "Sátiro": { atuacao: 2, fortitude: 2 },
  "Tengu": { percepcao: 2 }
}

// ── IDADE ──
export const AGE = {
  none: { label: "Adulto", mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  young: { label: "Jovem", mods: { FOR: 1, DES: 1, CON: 1, INT: -1, SAB: -1, CAR: -1 } },
  old: { label: "Idoso", mods: { FOR: -1, DES: -1, CON: -1, INT: 1, SAB: 1, CAR: 1 } }
}

// ── TAMANHO ──
export const SIZES = {
  minusculo: { label: "Minúsculo", atk: 2, def: 2 },
  pequeno: { label: "Pequeno", atk: 1, def: 1 },
  medio: { label: "Médio", atk: 0, def: 0 },
  grande: { label: "Grande", atk: -1, def: -1 },
  enorme: { label: "Enorme", atk: -2, def: -2 }
}

// ── PERÍCIAS ──
export const SKILLS = [
  { key: "acrobacia", name: "Acrobacia", attr: "DES" },
  { key: "adestramento", name: "Adestramento", attr: "CAR" },
  { key: "atletismo", name: "Atletismo", attr: "FOR" },
  { key: "atuacao", name: "Atuação", attr: "CAR" },
  { key: "cavalgar", name: "Cavalgar", attr: "DES" },
  { key: "conhecimento", name: "Conhecimento", attr: "INT", noUntrained: true },
  { key: "cura", name: "Cura", attr: "SAB" },
  { key: "diplomacia", name: "Diplomacia", attr: "CAR" },
  { key: "enganacao", name: "Enganação", attr: "CAR" },
  { key: "fortitude", name: "Fortitude", attr: "CON" },
  { key: "furtividade", name: "Furtividade", attr: "DES" },
  { key: "guerra", name: "Guerra", attr: "INT", noUntrained: true },
  { key: "iniciativa", name: "Iniciativa", attr: "DES" },
  { key: "intimidacao", name: "Intimidação", attr: "CAR" },
  { key: "intuicao", name: "Intuição", attr: "SAB" },
  { key: "investigacao", name: "Investigação", attr: "INT" },
  { key: "jogatina", name: "Jogatina", attr: "CAR", noUntrained: true },
  { key: "ladinagem", name: "Ladinagem", attr: "DES", noUntrained: true },
  { key: "luta", name: "Luta", attr: "FOR" },
  { key: "misticismo", name: "Misticismo", attr: "INT", noUntrained: true },
  { key: "nobreza", name: "Nobreza", attr: "INT", noUntrained: true },
  { key: "oficio1", name: "Ofício Engenhoqueiro", attr: "INT", noUntrained: true },
  { key: "oficio2", name: "Ofício Cozinheiro", attr: "INT", noUntrained: true },
  { key: "oficio3", name: "Ofício Alquimista", attr: "INT", noUntrained: true },
  { key: "oficio4", name: "Ofício (Outro)", attr: "INT", noUntrained: true },
  { key: "percepcao", name: "Percepção", attr: "SAB" },
  { key: "pilotagem", name: "Pilotagem", attr: "DES", noUntrained: true },
  { key: "pontaria", name: "Pontaria", attr: "DES" },
  { key: "reflexos", name: "Reflexos", attr: "DES" },
  { key: "religiao", name: "Religião", attr: "SAB", noUntrained: true },
  { key: "sobrevivencia", name: "Sobrevivência", attr: "SAB" },
  { key: "vontade", name: "Vontade", attr: "SAB" }
]

// ── CLASSES ──
// hp1 = PV no 1º nível (fixo, sem CON), hpN = PV ganho por nível (sem CON)
// pmN = PM por nível, pmAttr = atributo somado ao total de PM (se houver)
export const CLASSES = {
  "Guerreiro": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["fortitude"] },
  "Bárbaro": { hp1: 24, hpN: 6, pmN: 3, pmAttr: null, startingSkills: ["fortitude", "luta"] },
  "Nobre": { hp1: 16, hpN: 4, pmN: 4, pmAttr: null, startingSkills: ["vontade"] },
  "Burguês": { hp1: 12, hpN: 4, pmN: 4, pmAttr: null, startingSkills: ["diplomacia", "vontade"] },
  "Comandante": { hp1: 16, hpN: 4, pmN: 4, pmAttr: null, startingSkills: ["intimidacao", "guerra"] },
  "Arcanista": { hp1: 8, hpN: 2, pmN: 6, pmAttr: "INT", startingSkills: ["misticismo", "vontade"] },
  "Inventor": { hp1: 12, hpN: 3, pmN: 4, pmAttr: null, startingSkills: ["oficio", "vontade"] },
  "Alquimista": { hp1: 12, hpN: 3, pmN: 4, pmAttr: null, startingSkills: ["oficio", "vontade"] },
  "Treinador": { hp1: 16, hpN: 4, pmN: 4, pmAttr: null, startingSkills: ["adestramento", "vontade"] },
  "Inovador": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["luta", "pontaria"] },
  "Ladino": { hp1: 12, hpN: 3, pmN: 4, pmAttr: null, startingSkills: ["ladinagem", "reflexos"] },
  "Paladino": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["luta", "vontade"] },
  "Santo": { hp1: 20, hpN: 5, pmN: 4, pmAttr: null, startingSkills: ["religiao", "vontade"] },
  "Samurai": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["luta", "vontade"] },
  "Cavaleiro": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["fortitude", "luta"] },
  "Vassalo": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["fortitude", "luta"] }
}

export const CLASS_NAMES = Object.keys(CLASSES)