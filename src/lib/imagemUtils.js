// imagemUtils.js — redimensiona imagens da galeria antes de salvar (localStorage
// tem limite de espaço, então comprimimos para caber confortavelmente).

export function lerImagemComoDataUrl(file, maxSize = 480, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error("Não foi possível ler a imagem."))
    reader.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error("Arquivo de imagem inválido."))
      img.onload = () => {
        let { width, height } = img
        if (width > maxSize || height > maxSize) {
          if (width >= height) {
            height = Math.round((height * maxSize) / width)
            width = maxSize
          } else {
            width = Math.round((width * maxSize) / height)
            height = maxSize
          }
        }
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext("2d")
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL("image/jpeg", quality))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}