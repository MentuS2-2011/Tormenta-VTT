import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  FiMenu, FiMessageSquare, FiUsers, FiMap, FiFileText, 
  FiBookOpen, FiFolder, FiMusic
} from 'react-icons/fi'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../App'
import PainelLateral from './PainelLateral'
import './MesaJogo.css'

export default function MesaJogo() {
  const { id: mesaId } = useParams()
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [mesa, setMesa] = useState(null)
  const [papel, setPapel] = useState(null)
  const [painelAberto, setPainelAberto] = useState(false) // começa fechado
  const [abaAtiva, setAbaAtiva] = useState('chat')
  const [mapaAtual, setMapaAtual] = useState(null)

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
      const { data: mesaData, error: mesaError } = await supabase
        .from('mesas')
        .select('*')
        .eq('id', mesaId)
        .single()

      if (mesaError) throw mesaError
      setMesa(mesaData)

      const { data: membroData } = await supabase
        .from('mesa_membros')
        .select('papel')
        .eq('mesa_id', mesaId)
        .eq('profile_id', profile.id)
        .single()

      setPapel(membroData?.papel || null)

      if (!membroData) {
        navigate('/mesas')
        return
      }

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

  // Função para abrir o painel com a aba específica
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

  return (
    <div className="mesa-jogo">
      {/* Topbar */}
      <div className="mesa-topbar">
        <button 
          className="mesa-toggle"
          onClick={() => setPainelAberto(!painelAberto)}
          title={painelAberto ? 'Fechar painel' : 'Abrir painel'}
        >
          <FiMenu size={18} />
        </button>

        {/* Botões de abas - SEMPRE visíveis na topbar */}
        <div className="mesa-topbar__tabs">
          <button 
            className={`topbar-tab ${abaAtiva === 'chat' && !painelAberto ? 'active' : ''}`}
            onClick={() => abrirPainelComAba('chat')}
          >
            <FiMessageSquare size={14} />
            <span></span>
          </button>
          <button 
            className={`topbar-tab ${abaAtiva === 'jogadores' && !painelAberto ? 'active' : ''}`}
            onClick={() => abrirPainelComAba('jogadores')}
          >
            <FiUsers size={14} />
            <span></span>
          </button>
          <button 
            className={`topbar-tab ${abaAtiva === 'mapas' && !painelAberto ? 'active' : ''}`}
            onClick={() => abrirPainelComAba('mapas')}
          >
            <FiMap size={14} />
            <span></span>
          </button>
          <button 
            className={`topbar-tab ${abaAtiva === 'resumo' && !painelAberto ? 'active' : ''}`}
            onClick={() => abrirPainelComAba('resumo')}
          >
            <FiFileText size={14} />
            <span></span>
          </button>
          <button 
            className={`topbar-tab ${abaAtiva === 'regras' && !painelAberto ? 'active' : ''}`}
            onClick={() => abrirPainelComAba('regras')}
          >
            <FiBookOpen size={14} />
            <span></span>
          </button>
          <button 
            className={`topbar-tab ${abaAtiva === 'pastas' && !painelAberto ? 'active' : ''}`}
            onClick={() => abrirPainelComAba('pastas')}
          >
            <FiFolder size={14} />
            <span></span>
          </button>
          <button 
            className={`topbar-tab ${abaAtiva === 'musica' && !painelAberto ? 'active' : ''}`}
            onClick={() => abrirPainelComAba('musica')}
          >
            <FiMusic size={14} />
            <span></span>
          </button>
        </div>

        <div className="mesa-topbar__info">
          <span className="mesa-topbar__nome">{mesa?.nome}</span>
          <span className={`mesa-topbar__badge ${papel === 'gm' ? 'badge--gm' : 'badge--player'}`}>
            {papel === 'gm' ? 'Mestre' : 'Jogador'}
          </span>
        </div>
      </div>

      {/* Área do VTT */}
      <div className={`mesa-vtt ${!painelAberto ? 'mesa-vtt--full' : ''}`}>
        <div className="mesa-vtt__canvas">
          {mapaAtual ? (
            <div className="mesa-mapa">
              <img src={mapaAtual.url} alt={mapaAtual.nome} className="mesa-mapa__img" />
              <div className="mesa-mapa__overlay"><span>{mapaAtual.nome}</span></div>
            </div>
          ) : (
            <div className="mesa-vtt__empty">
              <FiMap size={48} />
              <p>Nenhum mapa disponível</p>
              {papel === 'gm' && <button className="btn btn-sm">Adicionar Mapa</button>}
            </div>
          )}
        </div>
      </div>

      {/* Painel lateral - aparece à direita quando aberto */}
      <PainelLateral 
        aberto={painelAberto}
        abaAtiva={abaAtiva}
        setAbaAtiva={setAbaAtiva}
        setPainelAberto={setPainelAberto}
        mesaId={mesaId}
        papel={papel}
        profile={profile}
      />
    </div>
  )
}