import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  FiMenu, FiMessageSquare, FiUsers, FiMap, FiFileText,
  FiBookOpen, FiFolder, FiMusic, FiMousePointer, FiMove,
  FiMaximize, FiEyeOff
} from 'react-icons/fi'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../App'
import PainelLateral from './PainelLateral'
import GridVTT from './Gridvtt'
import './MesaJogo.css'

const FERRAMENTAS = [
  { id: 'selecionar', icon: <FiMousePointer size={16} />, label: 'Selecionar', tecla: 'S' },
  { id: 'mover',      icon: <FiMove        size={16} />, label: 'Mover',      tecla: 'M' },
  { id: 'medir',      icon: <FiMaximize    size={16} />, label: 'Medir',      tecla: 'R' },
  { id: 'fog',        icon: <FiEyeOff      size={16} />, label: 'Névoa',      tecla: 'F', gmOnly: true },
]

export default function MesaJogo() {
  const { id: mesaId } = useParams()
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  const [loading,       setLoading]       = useState(true)
  const [mesa,          setMesa]          = useState(null)
  const [papel,         setPapel]         = useState(null)
  const [painelAberto,  setPainelAberto]  = useState(false)
  const [abaAtiva,      setAbaAtiva]      = useState('chat')
  const [mapaAtual,     setMapaAtual]     = useState(null)
  const [tokens,        setTokens]        = useState([])
  const [tokenSel,      setTokenSel]      = useState(null)
  const [ferramenta,    setFerramenta]    = useState('selecionar')

  useEffect(() => {
    if (!user || !profile) { navigate('/login'); return }
    carregarMesa()
  }, [mesaId, user, profile])

  // Atalhos de teclado para ferramentas
  useEffect(() => {
    function handleKey(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      const t = FERRAMENTAS.find(f => f.tecla === e.key.toUpperCase())
      if (t && !(t.gmOnly && papel !== 'gm')) setFerramenta(t.id)
      if (e.key === 'Escape') setTokenSel(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [papel])

  async function carregarMesa() {
    setLoading(true)
    try {
      const { data: mesaData, error } = await supabase
        .from('mesas').select('*').eq('id', mesaId).single()
      if (error) throw error
      setMesa(mesaData)

      const { data: membroData } = await supabase
        .from('mesa_membros').select('papel')
        .eq('mesa_id', mesaId).eq('profile_id', profile.id).single()

      if (!membroData) { navigate('/mesas'); return }
      setPapel(membroData.papel)

      await carregarMapas()
      await carregarTokens()
    } catch (err) {
      console.error('Erro ao carregar mesa:', err)
      navigate('/mesas')
    } finally {
      setLoading(false)
    }
  }

  async function carregarMapas() {
    const { data } = await supabase
      .from('mapas').select('*').eq('mesa_id', mesaId)
      .order('favorito', { ascending: false })
      .order('created_at', { ascending: true })
    if (data?.length) setMapaAtual(data.find(m => m.visivel) || data[0])
  }

  async function carregarTokens() {
    // Tokens: personagens + ameaças com posição no mapa
    const { data: posicoes } = await supabase
      .from('tokens_positions')
      .select('*, personagem:personagens(*), ameaca:ameacas(*)')
      .eq('mesa_id', mesaId)

    if (posicoes) {
      setTokens(posicoes.map(pos => {
        const ent = pos.personagem || pos.ameaca
        return {
          id:      pos.id,
          x:       pos.pos_x,
          y:       pos.pos_y,
          img:     ent?.token_url || null,
          nome:    ent?.nome || '?',
          tamanho: ent?.tamanho || 'medio',
          pv:      ent?.pv_atual || 0,
          pv_max:  ent?.pv_max  || 0,
          pm:      ent?.pm_atual || 0,
          pm_max:  ent?.pm_max  || 0,
          visivel: pos.visivel,
        }
      }))
    }
  }

  async function handleTokenMove(tokenId, x, y) {
    await supabase
      .from('tokens_positions')
      .update({ pos_x: x, pos_y: y, updated_at: new Date().toISOString() })
      .eq('id', tokenId)
    setTokens(prev => prev.map(t => t.id === tokenId ? { ...t, x, y } : t))
  }

  // Expõe setMapaAtual para o painel de Mapas via callback
  const handleMapaChange = useCallback((mapa) => {
    setMapaAtual(mapa)
  }, [])

  function abrirPainelComAba(aba) {
    setAbaAtiva(aba)
    setPainelAberto(true)
  }

  if (loading) {
    return (
      <div className="mesa-loading">
        <div className="mesa-loading__rune">ᚠ ᚢ ᚦ</div>
        <p>Carregando a mesa...</p>
      </div>
    )
  }

  const ferramentasVisiveis = FERRAMENTAS.filter(f => !f.gmOnly || papel === 'gm')

  return (
    <div className="mesa-jogo">

      {/* ── Topbar ── */}
      <div className="mesa-topbar">
        {/* Botão toggle do painel */}
        <button
          className={`mesa-toggle ${painelAberto ? 'mesa-toggle--active' : ''}`}
          onClick={() => setPainelAberto(v => !v)}
          title={painelAberto ? 'Fechar painel' : 'Abrir painel'}
        >
          <FiMenu size={18} />
        </button>

        {/* Atalhos de painel na topbar */}
        <div className="mesa-topbar__tabs">
          {[
            { id:'chat',      icon:<FiMessageSquare size={14}/> },
            { id:'jogadores', icon:<FiUsers         size={14}/> },
            { id:'mapas',     icon:<FiMap           size={14}/> },
            { id:'resumo',    icon:<FiFileText       size={14}/> },
            { id:'regras',    icon:<FiBookOpen       size={14}/> },
            { id:'pastas',    icon:<FiFolder         size={14}/> },
            { id:'musica',    icon:<FiMusic          size={14}/> },
          ].map(btn => (
            <button
              key={btn.id}
              className={`topbar-tab ${abaAtiva === btn.id && painelAberto ? 'active' : ''}`}
              onClick={() => abrirPainelComAba(btn.id)}
            >
              {btn.icon}
            </button>
          ))}
        </div>

        {/* Nome da mesa + papel */}
        <div className="mesa-topbar__info">
          <span className="mesa-topbar__nome">{mesa?.nome}</span>
          <span className={`mesa-topbar__badge ${papel === 'gm' ? 'badge--gm' : 'badge--player'}`}>
            {papel === 'gm' ? '⚔ Mestre' : '🎲 Jogador'}
          </span>
        </div>
      </div>

      {/* ── Corpo: toolbar + grid + painel ── */}
      <div className="mesa-body">

        {/* Toolbar vertical de ferramentas (esquerda) */}
        <div className="mesa-toolbar">
          {ferramentasVisiveis.map(f => (
            <button
              key={f.id}
              className={`mesa-tool ${ferramenta === f.id ? 'mesa-tool--active' : ''}`}
              onClick={() => setFerramenta(f.id)}
              title={`${f.label} (${f.tecla})`}
            >
              {f.icon}
              <span className="mesa-tool__key">{f.tecla}</span>
            </button>
          ))}
        </div>

        {/* Grid PixiJS — área central */}
        <div className="mesa-grid-area">
          <GridVTT
            mesaId={mesaId}
            papel={papel}
            mapaAtual={mapaAtual}
            tokens={tokens.filter(t => t.visivel || papel === 'gm')}
            onTokenMove={handleTokenMove}
            onTokenSelect={setTokenSel}
            tokenSelecionado={tokenSel}
            ferramenta={ferramenta}
          />
        </div>

        {/* Painel lateral */}
        <PainelLateral
          aberto={painelAberto}
          abaAtiva={abaAtiva}
          setAbaAtiva={setAbaAtiva}
          setPainelAberto={setPainelAberto}
          mesaId={mesaId}
          papel={papel}
          profile={profile}
          onMapaChange={handleMapaChange}
        />
      </div>
    </div>
  )
}