import CryptoJS from 'crypto-js'

const SECRET = import.meta.env.VITE_CRYPTO_SECRET || 'torment-vtt-secret-key'

export function encryptEmail(email) {
  return CryptoJS.AES.encrypt(email.toLowerCase().trim(), SECRET).toString()
}

export function decryptEmail(cipher) {
  try {
    const bytes = CryptoJS.AES.decrypt(cipher, SECRET)
    return bytes.toString(CryptoJS.enc.Utf8)
  } catch {
    return ''
  }
}

export function hashPassword(password) {
  return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)
}

/* Usa window.crypto explicitamente para não conflitar com CryptoJS */
export function generateId16() {
  const arr = new Uint8Array(8)
  window.crypto.getRandomValues(arr)
  return Array.from(arr)
    .map(b => b % 10)
    .join('')
    .padStart(16, '0')
}

const PROFANITY_LIST = [
  'porra', 'merda', 'caralho', 'viado', 'puta', 'buceta',
  'cu', 'foda', 'foder', 'fodase', 'puta que pariu',
  'filho da puta', 'vai se foder', 'arrombado', 'desgraça',
]

export function censorText(text) {
  if (!text) return ''
  let result = text
  PROFANITY_LIST.forEach(word => {
    const regex = new RegExp(word, 'gi')
    result = result.replace(regex, '#'.repeat(word.length))
  })
  return result
}