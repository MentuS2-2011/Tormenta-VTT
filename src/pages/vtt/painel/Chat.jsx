import { useState, useEffect } from 'react'
import { FiSend, FiUser, FiMessageSquare } from 'react-icons/fi'
import { supabase } from '../../../lib/supabase'
import './Chat.css'

export default function Chat({ mesaId, profile }) {
  const [mensagens, setMensagens] = useState([])
  const [novaMsg, setNovaMsg] = useState('')

  useEffect(() => {
    carregarMensagens()
    subscreverChat()

    return () => {
      if (window.chatChannel) supabase.removeChannel(window.chatChannel)
    }
  }, [mesaId])

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
    if (window.chatChannel) supabase.removeChannel(window.chatChannel)
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
        if (msgWithProfile) setMensagens(prev => [...prev, msgWithProfile])
      })
      .subscribe()
  }

  async function enviarMensagem(e) {
    e.preventDefault()
    if (!novaMsg.trim()) return
    await supabase.from('chat_messages').insert({
      mesa_id: mesaId,
      usuario_id: profile.id,
      conteudo: novaMsg.trim(),
      tipo: 'normal'
    })
    setNovaMsg('')
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {mensagens.map(msg => (
          <div key={msg.id} className={`chat-message ${msg.usuario_id === profile.id ? 'own' : ''}`}>
            <div className="chat-message-avatar">
              {msg.profiles?.avatar_url ? (
                <img src={msg.profiles.avatar_url} alt="" />
              ) : (
                <FiUser />
              )}
            </div>
            <div className="chat-message-content">
              <div className="chat-message-header">
                <span className="chat-message-author">{msg.profiles?.username || 'Usuário'}</span>
                <span className="chat-message-time">
                  {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="chat-message-text">{msg.conteudo}</p>
            </div>
          </div>
        ))}
        {mensagens.length === 0 && (
          <div className="chat-empty">
            <FiMessageSquare size={32} />
            <p>Nenhuma mensagem ainda</p>
            <span>Seja o primeiro a enviar uma mensagem!</span>
          </div>
        )}
      </div>
      <form className="chat-form" onSubmit={enviarMensagem}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={novaMsg}
          onChange={e => setNovaMsg(e.target.value)}
          maxLength={500}
        />
        <button type="submit"><FiSend /></button>
      </form>
    </div>
  )
}