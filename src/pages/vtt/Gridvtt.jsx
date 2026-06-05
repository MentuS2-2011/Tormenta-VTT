import { useEffect, useRef, useState, useCallback } from 'react'
import './Gridvtt.css'

/* ─────────────────────────────────────────────────────────
   GridVTT.jsx
   Grid PixiJS para Tormenta 20
   
   Regras T20:
   - Cada quadrado = 1,5m
   - Diagonal: alterna 1-2-1-2 quadrados
   - Minúsculo: 0.25×0.25  Pequeno: 0.5×0.5  Médio: 1×1
   - Grande: 2×2  Enorme: 3×3  Colossal: 6×6
   
   Grid padrão: 90×90 quadrados
───────────────────────────────────────────────────────── */

const CELL_SIZE        = 60   // px por quadrado na tela (base)
const DEFAULT_COLS     = 90
const DEFAULT_ROWS     = 90
const MIN_ZOOM         = 0.2
const MAX_ZOOM         = 4
const ZOOM_STEP        = 0.15

// Tamanho de criatura em quadrados
const TAMANHO_QUAD = {
  minusculo: 0.25,
  pequeno:   0.5,
  medio:     1,
  grande:    2,
  enorme:    3,
  colossal:  6,
}

export default function GridVTT({
  mesaId,
  papel,
  mapaAtual,      // { id, url, nome, tem_grid_proprio }
  tokens = [],    // [{ id, x, y, img, nome, tamanho, pv, pv_max, pm, pm_max }]
  onTokenMove,    // (id, x, y) => void
  onTokenSelect,  // (id) => void
  tokenSelecionado,
  ferramenta = 'selecionar', // 'selecionar' | 'mover' | 'medir' | 'fog'
}) {
  const containerRef = useRef(null)
  const canvasRef    = useRef(null)
  const pixiRef      = useRef(null)   // PIXI.Application
  const layersRef    = useRef({})     // { grid, map, tokens, fog, ui }
  const stateRef     = useRef({
    zoom: 1,
    panX: 0,
    panY: 0,
    cols: DEFAULT_COLS,
    rows: DEFAULT_ROWS,
    dragging: false,
    lastX: 0,
    lastY: 0,
    dragToken: null,
    medindo: false,
    medidaInicio: null,
    mapaTemGrid: false,
  })

  const [zoom,          setZoom]          = useState(1)
  const [gridInfo,      setGridInfo]      = useState({ cols: DEFAULT_COLS, rows: DEFAULT_ROWS })
  const [showGridPanel, setShowGridPanel] = useState(false)
  const [showMapPanel,  setShowMapPanel]  = useState(false)
  const [cols,          setCols]          = useState(DEFAULT_COLS)
  const [rows,          setRows]          = useState(DEFAULT_ROWS)
  const [mapaTemGrid,   setMapaTemGrid]   = useState(false)

  // ── Init PixiJS ──────────────────────────────────────
  useEffect(() => {
    let app = null
    let destroyed = false

    async function init() {
      const PIXI = await import('pixi.js')
      if (destroyed) return

      app = new PIXI.Application()
      await app.init({
        canvas:     canvasRef.current,
        resizeTo:   containerRef.current,
        background: 0x1A1A1A,
        antialias:  true,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
      })

      pixiRef.current = app

      // Cria layers em ordem
      const layerMap    = new PIXI.Container(); layerMap.label    = 'map'
      const layerGrid   = new PIXI.Container(); layerGrid.label   = 'grid'
      const layerFog    = new PIXI.Container(); layerFog.label    = 'fog'
      const layerTokens = new PIXI.Container(); layerTokens.label = 'tokens'
      const layerUI     = new PIXI.Container(); layerUI.label     = 'ui'

      app.stage.addChild(layerMap)
      app.stage.addChild(layerGrid)
      app.stage.addChild(layerFog)
      app.stage.addChild(layerTokens)
      app.stage.addChild(layerUI)

      layersRef.current = { map: layerMap, grid: layerGrid, fog: layerFog, tokens: layerTokens, ui: layerUI }

      desenharGrid(PIXI)
      renderizarTokens(PIXI)

      app.renderer.on('resize', () => desenharGrid(PIXI))
    }

    init()
    return () => {
      destroyed = true
      if (pixiRef.current) {
        pixiRef.current.destroy(true)
        pixiRef.current = null
      }
    }
  }, [])

  // ── Re-renderiza quando muda mapa ou tokens ──────────
  useEffect(() => {
    if (!pixiRef.current) return
    import('pixi.js').then(PIXI => {
      carregarMapa(PIXI)
    })
  }, [mapaAtual, mapaTemGrid])

  useEffect(() => {
    if (!pixiRef.current) return
    import('pixi.js').then(PIXI => renderizarTokens(PIXI))
  }, [tokens, tokenSelecionado])

  useEffect(() => {
    if (!pixiRef.current) return
    import('pixi.js').then(PIXI => {
      stateRef.current.cols = cols
      stateRef.current.rows = rows
      desenharGrid(PIXI)
    })
  }, [cols, rows])

  // ── Desenha o grid ───────────────────────────────────
  function desenharGrid(PIXI) {
    const layer = layersRef.current.grid
    if (!layer) return
    layer.removeChildren()

    const { cols, rows } = stateRef.current
    const cs = CELL_SIZE * stateRef.current.zoom
    const g  = new PIXI.Graphics()

    if (!stateRef.current.mapaTemGrid) {
      // Linhas verticais
      g.setStrokeStyle({ width: 1, color: 0x2E2E2E, alpha: 0.9 })
      for (let c = 0; c <= cols; c++) {
        const x = stateRef.current.panX + c * cs
        g.moveTo(x, stateRef.current.panY)
         .lineTo(x, stateRef.current.panY + rows * cs)
      }
      // Linhas horizontais
      for (let r = 0; r <= rows; r++) {
        const y = stateRef.current.panY + r * cs
        g.moveTo(stateRef.current.panX, y)
         .lineTo(stateRef.current.panX + cols * cs, y)
      }
      g.stroke()

      // Marcadores de coordenada a cada 5 quadrados
      if (stateRef.current.zoom >= 0.5) {
        const style = new PIXI.TextStyle({
          fontFamily: 'monospace',
          fontSize:   Math.max(8, 10 * stateRef.current.zoom),
          fill:       0x444444,
        })
        for (let c = 0; c <= cols; c += 5) {
          for (let r = 0; r <= rows; r += 5) {
            if (c === 0 && r === 0) continue
            const txt = new PIXI.Text({
              text: `${c},${r}`,
              style,
            })
            txt.x = stateRef.current.panX + c * cs + 2
            txt.y = stateRef.current.panY + r * cs + 2
            layer.addChild(txt)
          }
        }
      }
    }

    layer.addChild(g)
  }

  // ── Carrega imagem de mapa ───────────────────────────
  async function carregarMapa(PIXI) {
    const layer = layersRef.current.map
    if (!layer) return
    layer.removeChildren()

    if (!mapaAtual?.url) return

    try {
      const texture = await PIXI.Assets.load(mapaAtual.url)
      const sprite  = new PIXI.Sprite(texture)

      const { cols, rows } = stateRef.current
      const totalW = cols * CELL_SIZE * stateRef.current.zoom
      const totalH = rows * CELL_SIZE * stateRef.current.zoom

      sprite.width  = totalW
      sprite.height = totalH
      sprite.x = stateRef.current.panX
      sprite.y = stateRef.current.panY

      layer.addChild(sprite)
    } catch (e) {
      console.warn('Erro ao carregar mapa:', e)
    }
  }

  // ── Renderiza tokens ─────────────────────────────────
  async function renderizarTokens(PIXI) {
    const layer = layersRef.current.tokens
    if (!layer) return
    layer.removeChildren()

    for (const token of tokens) {
      await renderToken(PIXI, token)
    }
  }

  async function renderToken(PIXI, token) {
    const layer = layersRef.current.tokens
    const cs    = CELL_SIZE * stateRef.current.zoom
    const quad  = TAMANHO_QUAD[token.tamanho || 'medio']
    const size  = cs * quad

    const container = new PIXI.Container()
    container.label = `token-${token.id}`
    container.x = stateRef.current.panX + token.x * cs
    container.y = stateRef.current.panY + token.y * cs

    // Círculo de seleção
    if (token.id === tokenSelecionado) {
      const sel = new PIXI.Graphics()
      sel.setStrokeStyle({ width: 2, color: 0x4A90E2 })
      sel.circle(size / 2, size / 2, size / 2 + 3)
      sel.stroke()
      container.addChild(sel)
    }

    // Imagem do token (circular)
    if (token.img) {
      try {
        const texture = await PIXI.Assets.load(token.img)
        const sprite  = new PIXI.Sprite(texture)
        sprite.width  = size
        sprite.height = size

        // Máscara circular
        const mask = new PIXI.Graphics()
        mask.circle(size / 2, size / 2, size / 2)
        mask.fill(0xFFFFFF)
        container.addChild(mask)
        sprite.mask = mask
        container.addChild(sprite)
      } catch {
        // Fallback: círculo colorido
        const circle = new PIXI.Graphics()
        circle.circle(size / 2, size / 2, size / 2)
        circle.fill(0x8B1A1A)
        container.addChild(circle)
      }
    } else {
      const circle = new PIXI.Graphics()
      circle.circle(size / 2, size / 2, size / 2)
      circle.fill(0x5C0E0E)
      circle.setStrokeStyle({ width: 1, color: 0xCC2222 })
      circle.stroke()
      container.addChild(circle)

      // Inicial do nome
      if (token.nome) {
        const style = new PIXI.TextStyle({
          fontFamily: 'Cinzel, serif',
          fontSize:   Math.max(10, size * 0.35),
          fill:       0xF0E6D3,
          fontWeight: '700',
        })
        const txt = new PIXI.Text({ text: token.nome[0].toUpperCase(), style })
        txt.anchor.set(0.5)
        txt.x = size / 2
        txt.y = size / 2
        container.addChild(txt)
      }
    }

    // Barra de PV
    if (token.pv_max > 0) {
      const barW  = size
      const barH  = Math.max(4, size * 0.08)
      const barY  = size + 2
      const ratio = Math.max(0, Math.min(1, token.pv / token.pv_max))

      const bgBar = new PIXI.Graphics()
      bgBar.rect(0, barY, barW, barH).fill(0x330000)
      container.addChild(bgBar)

      const hpColor = ratio > 0.5 ? 0x2D6A2D : ratio > 0.25 ? 0xC49A40 : 0xCC2222
      const fgBar   = new PIXI.Graphics()
      fgBar.rect(0, barY, barW * ratio, barH).fill(hpColor)
      container.addChild(fgBar)
    }

    // Nome abaixo
    if (token.nome && stateRef.current.zoom >= 0.5) {
      const style = new PIXI.TextStyle({
        fontFamily: 'Cinzel, serif',
        fontSize:   Math.max(8, 11 * stateRef.current.zoom),
        fill:       0xF0E6D3,
        stroke:     { color: 0x000000, width: 2 },
      })
      const txt = new PIXI.Text({ text: token.nome, style })
      txt.anchor.set(0.5, 0)
      txt.x = size / 2
      txt.y = size + (token.pv_max > 0 ? Math.max(4, size * 0.08) + 4 : 4)
      container.addChild(txt)
    }

    // Interatividade
    container.interactive  = true
    container.cursor       = 'pointer'

    let dragStart = null

    container.on('pointerdown', (e) => {
      e.stopPropagation()
      onTokenSelect?.(token.id)
      if (ferramenta === 'selecionar' || ferramenta === 'mover') {
        dragStart = { x: e.global.x - container.x, y: e.global.y - container.y }
        stateRef.current.dragToken = { container, token, dragStart }
      }
    })

    container.on('pointermove', (e) => {
      if (!stateRef.current.dragToken || stateRef.current.dragToken.token.id !== token.id) return
      const ds = stateRef.current.dragToken.dragStart
      container.x = e.global.x - ds.x
      container.y = e.global.y - ds.y
    })

    container.on('pointerup', (e) => {
      if (!stateRef.current.dragToken || stateRef.current.dragToken.token.id !== token.id) return
      const cs    = CELL_SIZE * stateRef.current.zoom
      const snapX = Math.round((container.x - stateRef.current.panX) / cs)
      const snapY = Math.round((container.y - stateRef.current.panY) / cs)
      onTokenMove?.(token.id, snapX, snapY)
      stateRef.current.dragToken = null
    })

    layer.addChild(container)
  }

  // ── Pan & Zoom ────────────────────────────────────────
  const handleWheel = useCallback((e) => {
    e.preventDefault()
    const delta   = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP
    const novoZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, stateRef.current.zoom + delta))
    stateRef.current.zoom = novoZoom
    setZoom(novoZoom)
    import('pixi.js').then(PIXI => {
      desenharGrid(PIXI)
      carregarMapa(PIXI)
      renderizarTokens(PIXI)
    })
  }, [mapaAtual, tokens])

  const handlePointerDown = useCallback((e) => {
    if (stateRef.current.dragToken) return
    if (ferramenta === 'medir') {
      const cs = CELL_SIZE * stateRef.current.zoom
      stateRef.current.medindo = true
      stateRef.current.medidaInicio = {
        x: Math.floor((e.clientX - containerRef.current.getBoundingClientRect().left - stateRef.current.panX) / cs),
        y: Math.floor((e.clientY - containerRef.current.getBoundingClientRect().top  - stateRef.current.panY) / cs),
      }
      return
    }
    stateRef.current.dragging = true
    stateRef.current.lastX    = e.clientX
    stateRef.current.lastY    = e.clientY
  }, [ferramenta])

  const handlePointerMove = useCallback((e) => {
    if (!stateRef.current.dragging) return
    const dx = e.clientX - stateRef.current.lastX
    const dy = e.clientY - stateRef.current.lastY
    stateRef.current.panX += dx
    stateRef.current.panY += dy
    stateRef.current.lastX = e.clientX
    stateRef.current.lastY = e.clientY
    import('pixi.js').then(PIXI => {
      desenharGrid(PIXI)
      carregarMapa(PIXI)
      renderizarTokens(PIXI)
    })
  }, [mapaAtual, tokens])

  const handlePointerUp = useCallback(() => {
    stateRef.current.dragging  = false
    stateRef.current.medindo   = false
    stateRef.current.dragToken = null
  }, [])

  // ── Centraliza o grid ────────────────────────────────
  function centralizar() {
    if (!containerRef.current) return
    const { clientWidth: w, clientHeight: h } = containerRef.current
    const cs      = CELL_SIZE * stateRef.current.zoom
    stateRef.current.panX = (w - stateRef.current.cols * cs) / 2
    stateRef.current.panY = (h - stateRef.current.rows * cs) / 2
    import('pixi.js').then(PIXI => {
      desenharGrid(PIXI)
      carregarMapa(PIXI)
      renderizarTokens(PIXI)
    })
  }

  function alterarZoom(novoZoom) {
    stateRef.current.zoom = novoZoom
    setZoom(novoZoom)
    import('pixi.js').then(PIXI => {
      desenharGrid(PIXI)
      carregarMapa(PIXI)
      renderizarTokens(PIXI)
    })
  }

  function aplicarGridConfig() {
    stateRef.current.cols = cols
    stateRef.current.rows = rows
    stateRef.current.mapaTemGrid = mapaTemGrid
    setGridInfo({ cols, rows })
    setShowGridPanel(false)
    import('pixi.js').then(PIXI => {
      desenharGrid(PIXI)
      carregarMapa(PIXI)
    })
  }

  // ── Cursor de acordo com ferramenta ──────────────────
  const cursorMap = {
    selecionar: 'default',
    mover:      'grab',
    medir:      'crosshair',
    fog:        'cell',
  }

  return (
    <div className="grid-vtt" ref={containerRef}
      style={{ cursor: cursorMap[ferramenta] || 'default' }}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Canvas PixiJS */}
      <canvas ref={canvasRef} className="grid-vtt__canvas" />

      {/* HUD — canto superior esquerdo */}
      <div className="grid-hud grid-hud--tl">
        <div className="grid-hud__info">
          <span>{gridInfo.cols}×{gridInfo.rows}</span>
          <span className="grid-hud__sep">·</span>
          <span>{(gridInfo.cols * 1.5).toFixed(0)}m × {(gridInfo.rows * 1.5).toFixed(0)}m</span>
        </div>
        <div className="grid-hud__info">
          <span>1 quad = 1,5m</span>
        </div>
      </div>

      {/* HUD — zoom — canto superior direito */}
      <div className="grid-hud grid-hud--tr">
        <button className="grid-btn" onClick={() => alterarZoom(Math.min(MAX_ZOOM, zoom + ZOOM_STEP))} title="Zoom +">＋</button>
        <div className="grid-zoom-slider">
          <input
            type="range"
            min={MIN_ZOOM} max={MAX_ZOOM} step={0.05}
            value={zoom}
            onChange={e => alterarZoom(parseFloat(e.target.value))}
            className="grid-slider"
          />
          <span className="grid-zoom-label">{Math.round(zoom * 100)}%</span>
        </div>
        <button className="grid-btn" onClick={() => alterarZoom(Math.max(MIN_ZOOM, zoom - ZOOM_STEP))} title="Zoom -">－</button>
        <button className="grid-btn" onClick={centralizar} title="Centralizar">⊕</button>
        <button className="grid-btn" onClick={() => alterarZoom(1)} title="100%">1:1</button>
      </div>

      {/* Painel de configuração do grid */}
      {papel === 'gm' && (
        <div className="grid-hud grid-hud--bl">
          <button
            className={`grid-btn grid-btn--label ${showGridPanel ? 'grid-btn--active' : ''}`}
            onClick={() => { setShowGridPanel(v => !v); setShowMapPanel(false) }}
          >
            ⊞ Grid
          </button>
          <button
            className={`grid-btn grid-btn--label ${showMapPanel ? 'grid-btn--active' : ''}`}
            onClick={() => { setShowMapPanel(v => !v); setShowGridPanel(false) }}
          >
            🖼 Mapa
          </button>
        </div>
      )}

      {/* Popup: configuração do grid */}
      {showGridPanel && (
        <div className="grid-popup grid-popup--bl">
          <div className="grid-popup__title">⊞ Configuração do Grid</div>
          <div className="grid-popup__row">
            <label>Colunas</label>
            <input type="number" value={cols} min={10} max={200} onChange={e => setCols(parseInt(e.target.value) || 90)} />
          </div>
          <div className="grid-popup__row">
            <label>Linhas</label>
            <input type="number" value={rows} min={10} max={200} onChange={e => setRows(parseInt(e.target.value) || 90)} />
          </div>
          <div className="grid-popup__info">
            Área: {(cols * 1.5).toFixed(0)}m × {(rows * 1.5).toFixed(0)}m
          </div>
          <button className="grid-popup__btn" onClick={aplicarGridConfig}>Aplicar</button>
          <button className="grid-popup__btn grid-popup__btn--ghost" onClick={() => { setCols(90); setRows(90) }}>Padrão (90×90)</button>
        </div>
      )}

      {/* Popup: configuração do mapa */}
      {showMapPanel && (
        <div className="grid-popup grid-popup--bl">
          <div className="grid-popup__title">🖼 Mapa</div>
          {mapaAtual ? (
            <>
              <div className="grid-popup__mapa-nome">📍 {mapaAtual.nome}</div>
              <div className="grid-popup__row grid-popup__row--check">
                <label>Imagem tem grid próprio?</label>
                <div className="grid-popup__opcoes">
                  <button
                    className={`grid-popup__opt ${mapaTemGrid ? 'grid-popup__opt--active' : ''}`}
                    onClick={() => setMapaTemGrid(true)}
                  >Sim</button>
                  <button
                    className={`grid-popup__opt ${!mapaTemGrid ? 'grid-popup__opt--active' : ''}`}
                    onClick={() => setMapaTemGrid(false)}
                  >Não</button>
                </div>
              </div>
              <p className="grid-popup__info">
                {mapaTemGrid
                  ? 'Apenas a imagem será exibida, sem grid por cima.'
                  : 'O grid T20 será desenhado sobre a imagem.'}
              </p>
              <button className="grid-popup__btn" onClick={aplicarGridConfig}>Aplicar</button>
            </>
          ) : (
            <div className="grid-popup__info">Nenhum mapa carregado.<br/>Adicione um mapa no painel de Mapas.</div>
          )}
        </div>
      )}

      {/* Régua de medida ativa */}
      {ferramenta === 'medir' && (
        <div className="grid-hud grid-hud--bc">
          <span className="grid-medida-hint">Clique e arraste para medir distâncias · 1 quad = 1,5m</span>
        </div>
      )}
    </div>
  )
}