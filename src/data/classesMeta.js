// classesMeta.js — ícones e utilitários de classificação para a página de Classes

import {
  GiBroadsword,
  GiAxeSword,
  GiCrown,
  GiCoins,
  GiSpellBook,
  GiGearHammer,
  GiPotionBall,
  GiWolfHead,
  GiLightBulb,
  GiHoodedFigure,
  GiTemplarShield,
  GiScrollUnfurled
} from 'react-icons/gi'

// Ícone temático de cada classe (usado no lugar da imagem de apresentação)
export const CLASS_ICONS = {
  Guerreiro: GiBroadsword,
  Bárbaro: GiAxeSword,
  Nobre: GiCrown,
  Burguês: GiCoins,
  Arcanista: GiSpellBook,
  Inventor: GiGearHammer,
  Alquimista: GiPotionBall,
  Treinador: GiWolfHead,
  Inovador: GiLightBulb,
  Ladino: GiHoodedFigure,
  Paladino: GiTemplarShield
}

export function getClassIcon(nome) {
  return CLASS_ICONS[nome] || GiScrollUnfurled
}

// Categorias de poderes disponíveis para filtro
export const PODER_CATEGORIAS = [
  'Focado em Defesa',
  'Acerto',
  'Dano',
  'Margem de Ameaça',
  'Suporte',
  'Defesa'
]

// Classifica um poder em uma ou mais categorias, com base em palavras-chave
// presentes em seu nome e descrição. Heurística — pode não cobrir 100% dos casos.
export function categorizarPoder(poder) {
  const texto = `${poder.nome} ${poder.descricao}`.toLowerCase()
  const tags = []

  if (/margem de amea[çc]a|amea[çc]a|multiplicador de cr[íi]tico|cr[íi]tico/.test(texto)) {
    tags.push('Margem de Ameaça')
  }
  if (/redu[çc][ãa]o de dano|\brd \d|esquiv|apara(r|do)?|resist[êe]ncia a dano|evita.*dano|sofre menos dano|reduz.*dano sofrido/.test(texto)) {
    tags.push('Focado em Defesa')
  }
  if (/\bna defesa\b|b[ôo]nus.*defesa|defesa.*b[ôo]nus|\+\d.*defesa/.test(texto)) {
    tags.push('Defesa')
  }
  if (/teste de ataque|b[ôo]nus de ataque|rolagem de ataque|acerto|chance de acertar/.test(texto)) {
    tags.push('Acerto')
  }
  if (/dano (extra|adicional)|rolagens? de dano|dado de dano|causa \d*d?\d* pontos? de dano|soma.*dano/.test(texto)) {
    tags.push('Dano')
  }
  if (/aliad|cura( |r|do)|recupera pv|concede.*b[ôo]nus a|ajuda seus aliados|ao seu grupo/.test(texto)) {
    tags.push('Suporte')
  }

  return tags
}

// Extrai o nível mínimo exigido por um poder a partir do texto de pré-requisito.
// Poderes sem pré-requisito de nível explícito são tratados como nível 1 (disponíveis desde o início).
export function extrairNivel(descricao) {
  const match = descricao.match(/pré-requisitos?:[^.]*?(\d+)[ºo°]\s*n[íi]vel/i)
  if (match) return parseInt(match[1], 10)
  return 1
}