import { useState, useEffect } from 'react'
import { 
  FiMessageSquare, FiUsers, FiMap, FiFileText, FiBookOpen, 
  FiFolder, FiMusic, FiSend, FiUser, FiUserCheck, FiBookmark,
  FiChevronRight, FiPlus, FiImage
} from 'react-icons/fi'
import { supabase } from '../../lib/supabase'
import './PainelLateral.css'

export default function PainelLateral({ 
  aberto, 
  abaAtiva, 
  setAbaAtiva,
  mesaId,
  papel,
  profile 
}) {
  const [mensagens, setMensagens] = useState([])
  const [novaMsg, setNovaMsg] = useState('')
  const [jogadores, setJogadores] = useState([])
  const [mapas, setMapas] = useState([])

  useEffect(() => {
    if (!aberto) return

    if (abaAtiva === 'chat') {
      carregarMensagens()
      subscreverChat()
    } else if (abaAtiva === 'jogadores') {
      carregarJogadores()
    } else if (abaAtiva === 'mapas') {
      carregarMapas()
    }

    return () => {
      if (window.chatChannel) {
        supabase.removeChannel(window.chatChannel)
      }
    }
  }, [aberto, abaAtiva, mesaId])

  async function carregarMensagens() {
    const { data } = await supabase
      .from('chat_messages')
      .select('*, profiles:usuario_id(username, avatar_url)')
      .eq('mesa_id', mesaId)
      .order('created_at', { ascending: true })
      .limit(100)

    if (data) setMensagens(data)
  }

  function subscreverChat() {
    if (window.chatChannel) {
      supabase.removeChannel(window.chatChannel)
    }

    window.chatChannel = supabase
      .channel(`chat-${mesaId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'chat_messages',
        filter: `mesa_id=eq.${mesaId}`,
      }, async (payload) => {
        const { data: msgWithProfile } = await supabase
          .from('chat_messages')
          .select('*, profiles:usuario_id(username, avatar_url)')
          .eq('id', payload.new.id)
          .single()
        
        if (msgWithProfile) {
          setMensagens(prev => [...prev, msgWithProfile])
        }
      })
      .subscribe()
  }

  async function carregarJogadores() {
    const { data } = await supabase
      .from('mesa_membros')
      .select('papel, profile:profiles(id, username, avatar_url)')
      .eq('mesa_id', mesaId)

    if (data) setJogadores(data)
  }

  async function carregarMapas() {
    const { data } = await supabase
      .from('mapas')
      .select('*')
      .eq('mesa_id', mesaId)
      .order('favorito', { ascending: false })

    if (data) setMapas(data)
  }

  async function enviarMensagem(e) {
    e.preventDefault()
    if (!novaMsg.trim()) return

    const { error } = await supabase
      .from('chat_messages')
      .insert({
        mesa_id: mesaId,
        usuario_id: profile.id,
        conteudo: novaMsg.trim(),
        tipo: 'normal'
      })

    if (!error) setNovaMsg('')
  }

  if (!aberto) return null

  const renderConteudo = () => {
    switch (abaAtiva) {
      case 'chat':
        return (
          <div className="painel-chat">
            <div className="painel-chat__messages">
              {mensagens.map(msg => (
                <div key={msg.id} className={`chat-mensagem ${msg.usuario_id === profile.id ? 'chat-mensagem--own' : ''}`}>
                  <div className="chat-mensagem__avatar">
                    {msg.profiles?.avatar_url ? (
                      <img src={msg.profiles.avatar_url} alt="" />
                    ) : (
                      <div className="avatar-placeholder">
                        <FiUser size={14} />
                      </div>
                    )}
                  </div>
                  <div className="chat-mensagem__content">
                    <div className="chat-mensagem__header">
                      <span className="chat-mensagem__autor">
                        {msg.profiles?.username || 'Usuário'}
                      </span>
                      <span className="chat-mensagem__hora">
                        {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="chat-mensagem__texto">{msg.conteudo}</p>
                  </div>
                </div>
              ))}
              {mensagens.length === 0 && (
                <div className="painel-empty">
                  <FiMessageSquare size={32} />
                  <p>Nenhuma mensagem ainda</p>
                  <span>Seja o primeiro a enviar uma mensagem!</span>
                </div>
              )}
            </div>
            <form className="painel-chat__form" onSubmit={enviarMensagem}>
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={novaMsg}
                onChange={e => setNovaMsg(e.target.value)}
                maxLength={500}
              />
              <button type="submit">
                <FiSend size={16} />
              </button>
            </form>
          </div>
        )

      case 'jogadores':
        return (
          <div className="painel-jogadores">
            <div className="painel-header">
              <h3>
                <FiUsers size={16} />
                Jogadores
              </h3>
              <span className="painel-header__count">{jogadores.length}</span>
            </div>
            <div className="jogadores-list">
              {jogadores.map((membro, idx) => (
                <div key={idx} className="jogador-card">
                  <div className="jogador-card__avatar">
                    {membro.profile?.avatar_url ? (
                      <img src={membro.profile.avatar_url} alt="" />
                    ) : (
                      <div className="avatar-placeholder">
                        <FiUser size={16} />
                      </div>
                    )}
                  </div>
                  <div className="jogador-card__info">
                    <p className="jogador-card__nome">{membro.profile?.username || 'Carregando...'}</p>
                    <div className={`jogador-card__papel papel--${membro.papel}`}>
                      {membro.papel === 'gm' ? <FiUserCheck size={10} /> : <FiUser size={10} />}
                      <span>{membro.papel === 'gm' ? 'Mestre' : 'Jogador'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'mapas':
        return (
          <div className="painel-mapas">
            <div className="painel-header">
              <h3>
                <FiMap size={16} />
                Mapas
              </h3>
              {papel === 'gm' && (
                <button className="btn-icon">
                  <FiPlus size={14} />
                </button>
              )}
            </div>
            <div className="mapas-list">
              {mapas.length > 0 ? (
                mapas.map(mapa => (
                  <div key={mapa.id} className="mapa-card">
                    <div className="mapa-card__preview">
                      <FiImage size={24} />
                    </div>
                    <div className="mapa-card__info">
                      <p className="mapa-card__nome">{mapa.nome}</p>
                      {mapa.favorito && <FiBookmark size={12} className="mapa-card__fav" />}
                    </div>
                    <FiChevronRight size={14} className="mapa-card__arrow" />
                  </div>
                ))
              ) : (
                <div className="painel-empty">
                  <FiMap size={32} />
                  <p>Nenhum mapa</p>
                  {papel === 'gm' && <span>Adicione mapas para seus jogadores</span>}
                </div>
              )}
            </div>
          </div>
        )

      case 'resumo':
        return (
          <div className="painel-resumo">
            <div className="painel-header">
              <h3>
                <FiFileText size={16} />
                Resumo da Campanha
              </h3>
            </div>
            <div className="resumo-content">
              <p className="resumo-placeholder">
                Anotações e resumos das sessões aparecerão aqui.
              </p>
            </div>
          </div>
        )

      case 'regras':
        return (
          <div className="painel-regras">
            <div className="painel-header">
              <h3>
                <FiBookOpen size={16} />
                Regras da Mesa
              </h3>
            </div>
            <div className="regras-content">
              <p className="regras-placeholder">
                As regras opcionais configuradas para esta mesa serão exibidas aqui.
              </p>
            </div>
          </div>
        )

      default:
        return (
          <div className="painel-empty">
            <FiBookOpen size={32} />
            <p>Em desenvolvimento</p>
            <span>Em breve mais funcionalidades</span>
          </div>
        )
    }
  }

  return (
    <aside className="painel-lateral">
      <div className="painel-lateral__header">
        <div className="painel-lateral__tabs">
          <button 
            className={`painel-tab ${abaAtiva === 'chat' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('chat')}
            title="Chat"
          >
            <FiMessageSquare size={16} />
          </button>
          <button 
            className={`painel-tab ${abaAtiva === 'jogadores' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('jogadores')}
            title="Jogadores"
          >
            <FiUsers size={16} />
          </button>
          <button 
            className={`painel-tab ${abaAtiva === 'mapas' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('mapas')}
            title="Mapas"
          >
            <FiMap size={16} />
          </button>
          <button 
            className={`painel-tab ${abaAtiva === 'resumo' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('resumo')}
            title="Resumo"
          >
            <FiFileText size={16} />
          </button>
          <button 
            className={`painel-tab ${abaAtiva === 'regras' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('regras')}
            title="Regras"
          >
            <FiBookOpen size={16} />
          </button>
          <button 
            className={`painel-tab ${abaAtiva === 'pastas' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('pastas')}
            title="Pastas"
          >
            <FiFolder size={16} />
          </button>
          <button 
            className={`painel-tab ${abaAtiva === 'musica' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('musica')}
            title="Música"
          >
            <FiMusic size={16} />
          </button>
        </div>
      </div>

      <div className="painel-lateral__content">
        {renderConteudo()}
      </div>
    </aside>
  )
}