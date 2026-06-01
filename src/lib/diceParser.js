// src/lib/diceParser.js

export function rollDice(macro) {
  // Remove espaços extras
  macro = macro.trim().toLowerCase()
  
  // Expressão regular para macros
  // Suporta: 1d20, 3d6, 1d20+5, 2d8-3, 3#1d20, 3#1d20+12
  const rollPattern = /^(?:(\d+)#)?(\d*)d(\d+)([+-]\d+)?$/
  
  const match = macro.match(rollPattern)
  if (!match) {
    return { error: 'Macro inválida. Use formato: 1d20, 3d6, 1d20+5, 3#1d20' }
  }
  
  const [, repeatsStr, countStr, sidesStr, modifierStr] = match
  const repeats = repeatsStr ? parseInt(repeatsStr) : 1
  const count = countStr ? parseInt(countStr) : 1
  const sides = parseInt(sidesStr)
  const modifier = modifierStr ? parseInt(modifierStr) : 0
  
  // Validação dos dados
  const validDice = [3, 4, 6, 8, 10, 12, 20, 100]
  if (!validDice.includes(sides)) {
    return { error: `Dado inválido. Use: ${validDice.join(', ')}` }
  }
  
  if (count > 100) {
    return { error: 'Máximo de 100 dados por rolagem' }
  }
  
  if (repeats > 10) {
    return { error: 'Máximo de 10 repetições' }
  }
  
  const results = []
  
  for (let r = 0; r < repeats; r++) {
    const rolls = []
    let total = 0
    
    for (let i = 0; i < count; i++) {
      const roll = Math.floor(Math.random() * sides) + 1
      rolls.push(roll)
      total += roll
    }
    
    let finalTotal = total
    let formula = `${count}d${sides}`
    
    if (modifier !== 0) {
      finalTotal += modifier
      formula += `${modifier > 0 ? '+' : ''}${modifier}`
    }
    
    results.push({
      rolls,
      total,
      modifier,
      finalTotal,
      formula
    })
  }
  
  if (repeats === 1) {
    const r = results[0]
    return {
      success: true,
      formula: r.formula,
      rolls: r.rolls,
      total: r.total,
      finalTotal: r.finalTotal,
      result: `${r.formula} = ${r.rolls.join(' + ')} = ${r.total}${r.modifier !== 0 ? ` ${r.modifier > 0 ? '+' : '-'} ${Math.abs(r.modifier)}` : ''} = ${r.finalTotal}`
    }
  } else {
    const allResults = results.map((r, i) => 
      `Rolagem ${i+1}: ${r.formula} = ${r.rolls.join(' + ')} = ${r.total} → ${r.finalTotal}`
    )
    return {
      success: true,
      repeats,
      results,
      result: allResults.join('\n')
    }
  }
}

export function parseChatMessage(message) {
  // Detecta macros /roll ou /r
  const rollRegex = /^\/(roll|r)\s+(.+)$/i
  const match = message.match(rollRegex)
  
  if (match) {
    const macro = match[2]
    return { type: 'roll', macro }
  }
  
  return { type: 'message', content: message }
}