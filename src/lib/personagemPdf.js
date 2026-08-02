// personagemPdf.js — exporta a ficha em PDF com o visual do site (dourado/vinho sobre fundo escuro)
import { jsPDF } from 'jspdf'
import { ATTR_KEYS, ATTR_LABELS, SKILLS, COMPLICACOES_IDADE as COMPLICACOES } from '../data/personagemRules'
import { calcularBonusPericia } from './personagemCalc'

const DARK = [26, 20, 18]
const PANEL = [38, 28, 24]
const GOLD = [212, 175, 110]
const GOLD_DARK = [139, 107, 58]
const RED = [139, 26, 26]
const TEXT = [230, 220, 205]
const MUTED = [150, 135, 115]
const GREEN = [110, 190, 130]

export async function exportarPersonagemPdf(personagem) {
  const pdf = new jsPDF({ unit: 'mm', format: 'a4' })
  const PW = 210, PH = 297, ML = 14, MR = 14, TW = PW - ML - MR
  let y = 0

  const fnt = (style, size) => pdf.setFont('helvetica', style).setFontSize(size)
  const tc = (...c) => pdf.setTextColor(...c)
  const fill = (...c) => pdf.setFillColor(...c)

  function background() {
    fill(...DARK)
    pdf.rect(0, 0, PW, PH, 'F')
  }

  function ornLine(yy) {
    pdf.setDrawColor(...GOLD_DARK)
    pdf.setLineWidth(0.3)
    pdf.line(ML, yy, PW - MR, yy)
  }

  function panel(x, yy, w, h, border = GOLD_DARK) {
    fill(...PANEL)
    pdf.rect(x, yy, w, h, 'F')
    pdf.setDrawColor(...border)
    pdf.setLineWidth(0.25)
    pdf.rect(x, yy, w, h, 'S')
  }

  function sectionBar(title, yy) {
    fill(...RED)
    pdf.rect(ML, yy, TW, 6.5, 'F')
    fnt('bold', 8); tc(255, 240, 220)
    pdf.text(title.toUpperCase(), ML + 4, yy + 4.6)
    return yy + 9
  }

  // ═══ CABEÇALHO ═══
  background()
  fill(...RED); pdf.rect(0, 0, PW, 3, 'F')
  fnt('bold', 8); tc(...GOLD_DARK)
  pdf.text('T O R M E N T A   2 0', PW / 2, 14, { align: 'center' })
  fnt('bold', 22); tc(...GOLD)
  pdf.text('FICHA DE PERSONAGEM', PW / 2, 23, { align: 'center' })
  ornLine(27)
  y = 34

  const classesLabel = (personagem.classes || [])
    .filter((c) => c.nome)
    .map((c) => `${c.nome}${c.subclasse ? ` (${c.subclasse})` : ''} ${c.nivel}`)
    .join(' / ')
  const nivelTotal = (personagem.classes || []).reduce((s, c) => s + (Number(c.nivel) || 0), 0)

  // Imagem + identidade
  const imgSize = 38
  if (personagem.imagem) {
    try {
      panel(ML, y, imgSize, imgSize)
      pdf.addImage(personagem.imagem, 'JPEG', ML + 1, y + 1, imgSize - 2, imgSize - 2)
    } catch {
      panel(ML, y, imgSize, imgSize)
    }
  } else {
    panel(ML, y, imgSize, imgSize)
    fnt('normal', 22); tc(...MUTED)
    pdf.text('—', ML + imgSize / 2, y + imgSize / 2 + 3, { align: 'center' })
  }

  const infoX = ML + imgSize + 8
  fnt('bold', 16); tc(...GOLD)
  pdf.text(personagem.nome || 'Sem Nome', infoX, y + 8)
  fnt('normal', 9.5); tc(...TEXT)
  pdf.text(`${personagem.sexo ? personagem.sexo + ' · ' : ''}${personagem.raca || '—'} · ${classesLabel || '—'} · Nível ${nivelTotal}`, infoX, y + 15)
  fnt('italic', 8.5); tc(...MUTED)
  pdf.text(`${personagem.divindade ? 'Devoto de ' + personagem.divindade : 'Sem devoção declarada'}`, infoX, y + 21)
  if (personagem.origem) pdf.text(`Origem: ${personagem.origem}`, infoX, y + 26)

  y += imgSize + 6

  // ═══ COMBATE ═══
  const combatW = TW / 3 - 3
  const pvAtual = personagem.pvAtual ?? personagem.pv
  const pmAtual = personagem.pmAtual ?? personagem.pm
  const pvTemp = personagem.pvTemp || 0
  const pmTemp = personagem.pmTemp || 0
  const stats = [
    { label: 'PONTOS DE VIDA', value: `${pvAtual}/${personagem.pv}${pvTemp ? ` (+${pvTemp})` : ''}`, color: [230, 90, 90] },
    { label: 'PONTOS DE MANA', value: `${pmAtual}/${personagem.pm}${pmTemp ? ` (+${pmTemp})` : ''}`, color: [110, 160, 230] },
    { label: 'DEFESA', value: personagem.defesa, color: GOLD }
  ]
  let sx = ML
  stats.forEach((s) => {
    panel(sx, y, combatW, 18)
    fnt('bold', 7); tc(...GOLD_DARK)
    pdf.text(s.label, sx + combatW / 2, y + 6, { align: 'center' })
    fnt('bold', String(s.value).length > 6 ? 11 : 16); tc(...s.color)
    pdf.text(String(s.value ?? 0), sx + combatW / 2, y + 14.5, { align: 'center' })
    sx += combatW + 4.5
  })
  y += 24

  // ═══ ATRIBUTOS ═══
  y = sectionBar('Atributos', y)
  const attrW = TW / 6
  let ax = ML
  ATTR_KEYS.forEach((k) => {
    const val = personagem.atributosFinais?.[k] ?? 0
    panel(ax, y, attrW - 2, 20)
    fnt('bold', 6.5); tc(...GOLD_DARK)
    pdf.text(k, ax + (attrW - 2) / 2, y + 6, { align: 'center' })
    fnt('bold', 15); tc(...GOLD)
    pdf.text((val >= 0 ? '+' : '') + val, ax + (attrW - 2) / 2, y + 14, { align: 'center' })
    fnt('normal', 5); tc(...MUTED)
    pdf.text(ATTR_LABELS[k], ax + (attrW - 2) / 2, y + 18, { align: 'center' })
    ax += attrW
  })
  y += 25

  // ═══ PERÍCIAS ═══
  y = sectionBar('Perícias', y)
  const treinadas = personagem.treinadas || []
  const rows = SKILLS.map((s) => ({
    nome: s.name,
    treinada: treinadas.includes(s.key),
    bonus: calcularBonusPericia(s.key, {
      atributosFinal: personagem.atributosFinais || {},
      treinadas,
      racaNome: personagem.raca,
      nivel: nivelTotal,
      outros: personagem.periciaOutros
    })
  }))

  const colW = TW / 2 - 3
  const rowH = 5.4
  const half = Math.ceil(rows.length / 2)
  const cols = [rows.slice(0, half), rows.slice(half)]

  cols.forEach((colRows, ci) => {
    let ry = y
    const rx0 = ML + ci * (colW + 6)
    colRows.forEach((r, ri) => {
      fill(...(ri % 2 === 0 ? DARK : PANEL))
      pdf.rect(rx0, ry, colW, rowH, 'F')
      fnt(r.treinada ? 'bold' : 'normal', 6.8)
      tc(...(r.treinada ? GREEN : MUTED))
      pdf.text(r.treinada ? '●' : '○', rx0 + 2, ry + 3.8)
      tc(...TEXT)
      pdf.text(r.nome, rx0 + 6, ry + 3.8)
      fnt('bold', 6.8); tc(...GOLD)
      pdf.text((r.bonus >= 0 ? '+' : '') + r.bonus, rx0 + colW - 3, ry + 3.8, { align: 'right' })
      ry += rowH
    })
  })
  y += half * rowH + 6

  function ensureSpace(minH) {
    if (y + minH > PH - 16) { pdf.addPage(); background(); y = 16 }
  }

  function listSection(title, items, getNome, getDesc, getTag) {
    if (!items || !items.length) return
    ensureSpace(20)
    y = sectionBar(title, y)
    items.forEach((item) => {
      const nome = getNome(item)
      const desc = getDesc ? getDesc(item) : ''
      const tag = getTag ? getTag(item) : ''
      fnt('bold', 8)
      const lines = desc ? pdf.splitTextToSize(desc, TW - 8) : []
      const boxH = 6 + lines.length * 4 + 2
      ensureSpace(boxH + 2)
      panel(ML, y, TW, boxH)
      fill(...GOLD_DARK); pdf.rect(ML, y, 1.2, boxH, 'F')
      tc(...GOLD)
      pdf.text(nome, ML + 4, y + 5)
      if (tag) {
        fnt('normal', 6.5); tc(...MUTED)
        pdf.text(tag, PW - MR - 3, y + 5, { align: 'right' })
      }
      fnt('normal', 7.5); tc(...TEXT)
      lines.forEach((line, i) => pdf.text(line, ML + 4, y + 9.5 + i * 4, { maxWidth: TW - 8 }))
      y += boxH + 3
    })
    y += 3
  }

  // ═══ COMPLICAÇÕES DE IDADE ═══
  listSection(
    'Complicações de Idade',
    personagem.complicacoesIdade?.map((key) => COMPLICACOES.find((c) => c.key === key)).filter(Boolean),
    (c) => c.nome,
    (c) => c.descricao
  )

  // ═══ INVENTÁRIO ═══
  listSection(
    'Inventário',
    personagem.inventario,
    (it) => it.nome,
    (it) => it.descricao,
    (it) => `${it.vestido ? 'Equipado · ' : ''}${it.espacos ?? 0} esp.`
  )

  // ═══ HABILIDADES ═══
  listSection(
    'Habilidades',
    personagem.habilidades,
    (h) => h.nome,
    (h) => h.descricao
  )

  // ═══ HISTÓRIA ═══
  const historia = (personagem.historia || '').trim()
  if (historia) {
    if (y > PH - 40) { pdf.addPage(); background(); y = 16 }
    y = sectionBar('História', y)
    fnt('italic', 8); tc(...TEXT)
    const lines = pdf.splitTextToSize(historia, TW - 8)
    const lh = 4.4
    const boxH = lines.length * lh + 6
    if (y + boxH > PH - 16) { pdf.addPage(); background(); y = 16; y = sectionBar('História', y) }
    panel(ML, y, TW, boxH)
    fill(...GOLD_DARK); pdf.rect(ML, y, 1.4, boxH, 'F')
    lines.forEach((line, i) => pdf.text(line, ML + 5, y + 5 + lh * i, { maxWidth: TW - 8 }))
    y += boxH + 4
  }

  // ═══ RODAPÉ ═══
  const totalPages = pdf.getNumberOfPages()
  for (let p = 1; p <= totalPages; p++) {
    pdf.setPage(p)
    ornLine(PH - 12)
    fnt('normal', 6); tc(...MUTED)
    pdf.text(`Tormenta VTT · ${personagem.nome || 'Personagem'}`, ML, PH - 8)
    pdf.text(`${p} / ${totalPages}`, PW - MR, PH - 8, { align: 'right' })
  }

  pdf.save(`${(personagem.nome || 'personagem').replace(/\s+/g, '_')}_T20.pdf`)
}