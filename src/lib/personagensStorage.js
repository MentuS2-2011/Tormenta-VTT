// personagensStorage.js — banco de personagens salvo no localStorage do navegador
// Simples e sem backend: funciona offline, por navegador/dispositivo.

const KEY = "t20_personagens"
export const MAX_PERSONAGENS = 20

function readAll() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeAll(list) {
  localStorage.setItem(KEY, JSON.stringify(list))
}

export function listarPersonagens() {
  return readAll().sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
}

export function contarPersonagens() {
  return readAll().length
}

export function obterPersonagem(id) {
  return readAll().find((p) => p.id === id) || null
}

export function salvarPersonagem(personagem) {
  const list = readAll()
  const now = Date.now()
  const idx = list.findIndex((p) => p.id === personagem.id)

  if (idx >= 0) {
    list[idx] = { ...personagem, updatedAt: now }
  } else {
    if (list.length >= MAX_PERSONAGENS) {
      throw new Error(`Limite de ${MAX_PERSONAGENS} personagens atingido. Apague um personagem para criar outro.`)
    }
    list.push({
      ...personagem,
      id: personagem.id || `char_${now}_${Math.random().toString(36).slice(2, 8)}`,
      createdAt: now,
      updatedAt: now
    })
  }

  writeAll(list)
  return list
}

export function excluirPersonagem(id) {
  const list = readAll().filter((p) => p.id !== id)
  writeAll(list)
  return list
}