import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../App'
import PainelLateral from './PainelLateral'
import './MesaJogo.css'

// Ícones temporários (até integrar com react-icons)
const IconMenu = () => <span className="icon-mock">☰</span>
const IconUsers = () => <span className="icon-mock">👥</span>
const IconMap = () => <span className="icon-mock">🗺️</span>
const IconChat = () => <span className="icon-mock">💬</span>
const IconDice = () => <span className="icon-mock">🎲</span>
const IconBook = () => <span className="icon-mock">📖</span>
const IconFolder = () => <span className="icon-mock">📁</span>
const IconMusic = () => <span className="icon-mock">🎵</span>
const IconGear = () => <span className="icon-mock">⚙️</span>

export default function MesaJogo() {
  const { id: mesaId } = useParams()
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [mesa, setMesa] = useState(null)
  const [papel, setPapel] = useState(null) // 'gm' ou 'jogador'
  const [painelAberto, setPainelAberto] = useState(true)
  const [abaAtiva, setAbaAtiva] = useState('chat') // chat, jogadores, mapas, resumo, regras, compendio, pastas, musica

  // Estado do mapa/vtt
  const [mapaAtual, setMapaAtual] = useState(null)
  const [tokens, setTokens] = useState([])

  useEffect(() => {
    if (!user || !profile) {
      navigate('/login')
      return
    }
    carregarMesa()
  }, [mesaId, user, profile])

  async function carregarMesa() {
    setLoading(true)
    try {
      // Carregar dados da mesa
      const { data: mesaData, error: mesaError } = await supabase
        .from('mesas')
        .select('*')
        .eq('id', mesaId)
        .single()

      if (mesaError) throw mesaError
      setMesa(mesaData)

      // Verificar papel do usuário
      const { data: membroData } = await supabase
        .from('mesa_membros')
        .select('papel')
        .eq('mesa_id', mesaId)
        .eq('profile_id', profile.id)
        .single()

      setPapel(membroData?.papel || null)

      // Se não for membro, redirecionar
      if (!membroData) {
        navigate('/mesas')
        return
      }

      // Carregar mapas
      await carregarMapas()

    } catch (err) {
      console.error('Erro ao carregar mesa:', err)
      navigate('/mesas')
    } finally {
      setLoading(false)
    }
  }

  async function carregarMapas() {
    const { data } = await supabase
      .from('mapas')
      .select('*')
      .eq('mesa_id', mesaId)
      .order('favorito', { ascending: false })
      .order('created_at', { ascending: true })

    if (data?.length) {
      const primeiroMapa = data.find(m => m.visivel) || data[0]
      setMapaAtual(primeiroMapa)
    }
  }

  if (loading) {
    return (
      <div className="mesa-loading">
        <div className="mesa-loading__rune">ᚠ ᚢ ᚦ</div>
        <p>Carregando a mesa...</p>
      </div>
    )
  }

  return (
    <div className="mesa-jogo">
      {/* Botão toggle do painel */}
      <button 
        className={`mesa-toggle ${!painelAberto ? 'mesa-toggle--closed' : ''}`}
        onClick={() => setPainelAberto(!painelAberto)}
        title={painelAberto ? 'Fechar painel' : 'Abrir painel'}
      >
        <IconMenu />
      </button>

      {/* Área principal do VTT */}
      <div className={`mesa-vtt ${!painelAberto ? 'mesa-vtt--full' : ''}`}>
        <div className="mesa-vtt__header">
          <h1 className="mesa-vtt__title">{mesa?.nome}</h1>
          <div className="mesa-vtt__badge">
            {papel === 'gm' ? 'Mestre' : 'Jogador'}
          </div>
        </div>

        <div className="mesa-vtt__canvas">
          {/* Placeholder do mapa */}
          {mapaAtual ? (
            <div className="mesa-mapa">
              <img 
                src={mapaAtual.url} 
                alt={mapaAtual.nome}
                className="mesa-mapa__img"
              />
              <div className="mesa-mapa__overlay">
                <p className="mesa-mapa__nome">{mapaAtual.nome}</p>
              </div>
            </div>
          ) : (
            <div className="mesa-vtt__empty">
              <div className="mesa-vtt__empty-icon">🗺️</div>
              <p>Nenhum mapa disponível</p>
              {papel === 'gm' && (
                <button className="btn btn-sm">Adicionar Mapa</button>
              )}
            </div>
          )}
        </div>

        {/* Barra de ações rápida */}
        <div className="mesa-actions">
          <button className="mesa-actions__btn" title="Rolar Dado">
            <IconDice /> D20
          </button>
          <button className="mesa-actions__btn" title="Iniciativa">
            <span>⚡</span> Iniciativa
          </button>
          <button className="mesa-actions__btn" title="Turno">
            <span>⟳</span> Turno
          </button>
        </div>
      </div>

      {/* Painel lateral */}
      <PainelLateral 
        aberto={painelAberto}
        abaAtiva={abaAtiva}
        setAbaAtiva={setAbaAtiva}
        mesaId={mesaId}
        papel={papel}
        profile={profile}
      />
    </div>
  )
}