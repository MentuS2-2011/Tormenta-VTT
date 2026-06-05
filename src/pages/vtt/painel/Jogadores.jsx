import { useState, useEffect } from 'react'
import { FiUsers, FiUser, FiUserCheck } from 'react-icons/fi'
import { supabase } from '../../../lib/supabase'
import './Jogadores.css'

export default function Jogadores({ mesaId }) {
  const [jogadores, setJogadores] = useState([])

  useEffect(() => {
    carregarJogadores()
  }, [mesaId])

  async function carregarJogadores() {
    const { data } = await supabase
      .from('mesa_membros')
      .select('papel, profile:profiles(id, username, avatar_url)')
      .eq('mesa_id', mesaId)
    if (data) setJogadores(data)
  }

  return (
    <div className="jogadores-container">
      <div className="jogadores-header">
        <h3><FiUsers size={16} /> Jogadores</h3>
        <span className="jogadores-count">{jogadores.length}</span>
      </div>
      <div className="jogadores-list">
        {jogadores.map((membro, idx) => (
          <div key={idx} className="jogador-item">
            <div className="jogador-avatar">
              {membro.profile?.avatar_url ? (
                <img src={membro.profile.avatar_url} alt="" />
              ) : (
                <FiUser size={20} />
              )}
            </div>
            <div className="jogador-info">
              <p className="jogador-nome">{membro.profile?.username || 'Carregando...'}</p>
              <span className={`jogador-papel ${membro.papel}`}>
                {membro.papel === 'gm' ? <FiUserCheck size={10} /> : <FiUser size={10} />}
                {membro.papel === 'gm' ? 'Mestre' : 'Jogador'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}