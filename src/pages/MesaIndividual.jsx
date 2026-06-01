// src/pages/MesaIndividual.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../App'
import { FiUsers, FiBookOpen, FiSettings, FiArrowLeft, FiCopy, FiCheck } from 'react-icons/fi'

export default function MesaIndividual() {
  const { codigo } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  
  const [mesa, setMesa] = useState(null)
  const [participantes, setParticipantes] = useState([])
  const [loading, setLoading] = useState(true)
  const [isGM, setIsGM] = useState(false)
  const [copied, setCopied] = useState(false)
  
  useEffect(() => {
    if (user && codigo) {
      carregarMesa()
    }
  }, [user, codigo])
  
  async function carregarMesa() {
    setLoading(true)
    try {
      // Carregar dados da mesa
      const { data: mesaData, error: mesaError } = await supabase
        .from('mesas')
        .select('*')
        .eq('id', codigo)
        .single()
      
      if (mesaError || !mesaData) {
        console.error('Mesa não encontrada:', mesaError)
        navigate('/mesas')
        return
      }
      
      setMesa(mesaData)
      setIsGM(mesaData.gm_id === user?.id)
      
      // Carregar participantes com seus perfis
      const { data: participantesData, error: partError } = await supabase
        .from('mesa_participantes')
        .select(`
          *,
          profiles:user_id (
            username,
            avatar_url
          )
        `)
        .eq('mesa_id', codigo)
      
      if (partError) {
        console.error('Erro ao carregar participantes:', partError)
      } else {
        setParticipantes(participantesData || [])
      }
      
    } catch (err) {
      console.error('Erro:', err)
      navigate('/mesas')
    } finally {
      setLoading(false)
    }
  }
  
  function copyCode() {
    navigator.clipboard.writeText(codigo)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '3px solid var(--clr-border-light)',
          borderTopColor: 'var(--clr-red)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }} />
        <p>Carregando mesa...</p>
      </div>
    )
  }
  
  if (!mesa) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Mesa não encontrada</h2>
        <button onClick={() => navigate('/mesas')}>Voltar para Mesas</button>
      </div>
    )
  }
  
  return (
    <div style={{ minHeight: 'calc(100vh - var(--nav-height))', background: 'var(--clr-bg)' }}>
      {/* Header */}
      <div style={{
        position: 'relative',
        padding: '2rem 2rem',
        background: 'linear-gradient(135deg, var(--clr-surface) 0%, var(--clr-bg) 100%)',
        borderBottom: '1px solid var(--clr-border-light)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <button
            onClick={() => navigate('/mesas')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: 'none',
              color: 'var(--clr-text-muted)',
              cursor: 'pointer',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '13px'
            }}
          >
            <FiArrowLeft size={16} />
            Voltar para Mesas
          </button>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                <div style={{ fontSize: '48px' }}>🎲</div>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 5vw, 42px)',
                  fontWeight: 700,
                  color: 'var(--clr-text)',
                  margin: 0
                }}>
                  {mesa.nome}
                </h1>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: 'var(--clr-text-faint)',
                  background: 'var(--clr-surface)',
                  padding: '6px 12px',
                  borderRadius: '6px'
                }}>
                  <span>Código: {codigo}</span>
                  <button
                    onClick={copyCode}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--clr-gold)',
                      padding: '2px'
                    }}
                  >
                    {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                  </button>
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  background: isGM ? 'var(--clr-red-dark)' : 'var(--clr-surface-2)',
                  borderRadius: '20px',
                  color: isGM ? '#F0D4A0' : 'var(--clr-text-muted)'
                }}>
                  {isGM ? '👑 Mestre' : '🎲 Jogador'}
                </div>
              </div>
            </div>
            
            <button
              style={{
                background: 'var(--clr-red)',
                color: '#F0E6D3',
                border: 'none',
                padding: '12px 28px',
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '8px'
              }}
            >
              🎮 Jogar Mesa
            </button>
          </div>
          
          {mesa.descricao && (
            <p style={{
              marginTop: '1.5rem',
              fontSize: '15px',
              lineHeight: '1.6',
              color: 'var(--clr-text-muted)',
              fontStyle: 'italic',
              padding: '1rem',
              background: 'var(--clr-surface)',
              borderRadius: '8px',
              borderLeft: '3px solid var(--clr-red)'
            }}>
              {mesa.descricao}
            </p>
          )}
        </div>
      </div>
      
      {/* Conteúdo Principal */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem' }}>
          
          {/* Área Principal - Grid do Jogo */}
          <div>
            <div style={{
              background: 'var(--clr-surface)',
              border: '1px solid var(--clr-border-light)',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--clr-border-light)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  🎨 Grid de Jogo
                </h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{
                    background: 'transparent',
                    border: '1px solid var(--clr-border-light)',
                    padding: '6px 12px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}>
                    Zoom +
                  </button>
                  <button style={{
                    background: 'transparent',
                    border: '1px solid var(--clr-border-light)',
                    padding: '6px 12px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}>
                    Zoom -
                  </button>
                </div>
              </div>
              
              {/* Placeholder do Grid - Aqui será integrado o PixiJS */}
              <div style={{
                background: '#1a1a2e',
                minHeight: '500px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
                color: 'rgba(255,255,255,0.5)'
              }}>
                <div style={{ fontSize: '48px', opacity: 0.3 }}>🎲</div>
                <p style={{ fontFamily: 'monospace', fontSize: '14px' }}>Grid de Jogo (PixiJS)</p>
                <p style={{ fontSize: '12px', maxWidth: '300px', textAlign: 'center' }}>
                  Aqui será renderizado o grid com tokens dos personagens
                </p>
              </div>
            </div>
            
            {/* Chat */}
            <div style={{
              background: 'var(--clr-surface)',
              border: '1px solid var(--clr-border-light)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '0.75rem 1rem',
                background: 'var(--clr-surface-2)',
                borderBottom: '1px solid var(--clr-border-light)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  💬 Chat da Mesa
                </h3>
              </div>
              
              <div style={{
                minHeight: '200px',
                maxHeight: '250px',
                overflowY: 'auto',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ textAlign: 'center', color: 'var(--clr-text-faint)', fontSize: '12px' }}>
                  Nenhuma mensagem ainda. Use /roll 1d20 para rolar dados!
                </div>
              </div>
              
              <div style={{
                padding: '0.75rem 1rem',
                borderTop: '1px solid var(--clr-border-light)',
                display: 'flex',
                gap: '8px'
              }}>
                <input
                  type="text"
                  placeholder="Digite sua mensagem... Use /roll 1d20 para rolar dados"
                  style={{
                    flex: 1,
                    background: 'var(--clr-bg)',
                    border: '1px solid var(--clr-border-light)',
                    borderRadius: '6px',
                    padding: '10px 14px',
                    color: 'var(--clr-text)',
                    fontSize: '14px'
                  }}
                />
                <button style={{
                  background: 'var(--clr-red)',
                  color: '#F0E6D3',
                  border: 'none',
                  padding: '0 20px',
                  cursor: 'pointer',
                  borderRadius: '6px'
                }}>
                  Enviar
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Jogadores e Regras */}
          <div>
            {/* Mestre / GM */}
            <div style={{
              background: 'var(--clr-surface)',
              border: '1px solid var(--clr-border-light)',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '0.75rem 1rem',
                background: 'var(--clr-red-dark)',
                color: '#F0D4A0'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                  👑 Mestre
                </h3>
              </div>
              <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--clr-red-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>
                  👑
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--clr-text)' }}>
                    {participantes.find(p => p.user_id === mesa.gm_id)?.profiles?.username || 'Mestre'}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--clr-text-muted)' }}>Mestre da Mesa</div>
                </div>
              </div>
            </div>
            
            {/* Jogadores */}
            <div style={{
              background: 'var(--clr-surface)',
              border: '1px solid var(--clr-border-light)',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '0.75rem 1rem',
                background: 'var(--clr-surface-2)',
                borderBottom: '1px solid var(--clr-border-light)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                  <FiUsers size={14} style={{ marginRight: '6px' }} />
                  Jogadores ({participantes.filter(p => p.user_id !== mesa.gm_id).length})
                </h3>
              </div>
              <div style={{ padding: '0.5rem' }}>
                {participantes.filter(p => p.user_id !== mesa.gm_id).map(p => (
                  <div key={p.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '0.75rem',
                    borderBottom: '1px solid var(--clr-border-light)'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--clr-surface-2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px'
                    }}>
                      {p.profiles?.avatar_url ? (
                        <img src={p.profiles.avatar_url} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                      ) : (
                        '🎲'
                      )}
                    </div>
                    <div>
                      <div style={{ fontWeight: 'bold', color: 'var(--clr-text)' }}>
                        {p.profiles?.username || 'Jogador'}
                      </div>
                      {p.personagem_nome && (
                        <div style={{ fontSize: '11px', color: 'var(--clr-text-faint)' }}>
                          {p.personagem_nome}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {participantes.filter(p => p.user_id !== mesa.gm_id).length === 0 && (
                  <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--clr-text-faint)' }}>
                    Nenhum jogador ainda. Compartilhe o código!
                  </div>
                )}
              </div>
            </div>
            
            {/* Livros e Regras */}
            {mesa.livros && mesa.livros.length > 0 && (
              <div style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border-light)',
                borderRadius: '12px',
                marginBottom: '1rem',
                padding: '1rem'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  <FiBookOpen size={12} style={{ marginRight: '6px' }} />
                  Livros Utilizados
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {mesa.livros.map(livro => (
                    <span key={livro} style={{
                      fontSize: '12px',
                      background: 'var(--clr-bg)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid var(--clr-border-light)'
                    }}>
                      {livro === 'basico' && '📖 Básico'}
                      {livro === 'ameacas' && '👹 Ameaças'}
                      {livro === 'atlas' && '🗺️ Atlas'}
                      {livro === 'herois' && '⚔️ Heróis'}
                      {livro === 'deuses' && '⛪ Deuses'}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Regras Opcionais */}
            {mesa.regras_opcionais && mesa.regras_opcionais.length > 0 && (
              <div style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border-light)',
                borderRadius: '12px',
                padding: '1rem'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  <FiSettings size={12} style={{ marginRight: '6px' }} />
                  Regras Opcionais
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {mesa.regras_opcionais.map(regra => (
                    <span key={regra} style={{
                      fontSize: '10px',
                      background: 'rgba(160,120,48,0.15)',
                      color: 'var(--clr-gold)',
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}>
                      {regra.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}