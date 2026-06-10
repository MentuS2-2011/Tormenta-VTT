import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiScrollUnfurled, GiDiceTwentyFacesTwenty } from 'react-icons/gi'
import { FiCopy, FiCheck, FiPlus, FiLogIn, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { supabase } from '../lib/supabase'
import { useAuth } from '../App'
import './Mesas.css'

const REGRAS_OPCIONAIS = [
  { id:'racas-abertas',         label:'Raças Abertas',           resumo:'Aplique os modificadores de raça em qualquer atributo, não apenas nos padrões.', desc:'Pela regra padrão, cada raça possui modificadores de atributos que representam as tendências desse povo. Com esta variante, você pode usar cada modificador de atributo de sua raça em qualquer atributo. Por exemplo, um anão (normalmente Con +2, Sab +1, Des –1) terá os modificadores +2, +1 e –1 para aplicar nos atributos que quiser. Você não pode aplicar mais de um modificador no mesmo atributo.' },
  { id:'devocoes-abertas',      label:'Devoções Abertas',        resumo:'Qualquer personagem pode ser devoto de qualquer divindade, independente de raça ou classe.', desc:'Um personagem pode ser devoto de qualquer divindade, independente de sua raça ou classe. O Panteão está sempre imerso em conflitos, e faz sentido que um deus aceite qualquer devoto para ganhar poder sobre seus irmãos.' },
  { id:'pontos-variados',       label:'Pontos Variados',         resumo:'Altere a pontuação de criação de personagem: 5 pontos (pé no chão) até 15 pontos (épico).', desc:'Você pode usar o método de pontos do livro básico, mas aumentando ou diminuindo a pontuação. Para campanhas "pé no chão", use 5 pontos. Já para campanhas épicas e exageradas, 15 pontos.' },
  { id:'acoes-rapidas',         label:'Ações Rápidas',           resumo:'Novo tipo de ação: converta movimentos em duas ações rápidas para manobras simples.', desc:'Esta regra introduz um novo tipo de ação: rápida. Você pode usar suas ações de movimento para executá-las (cada movimento equivale a duas ações rápidas). São ações rápidas: levantar-se, manipular item, mirar e sacar ou guardar item.' },
  { id:'armas-leves',           label:'Armas Leves e Ágeis',     resumo:'Use Destreza em vez de Força para ataques e dano com armas leves, ágeis e de arremesso.', desc:'Com esta regra, você pode usar Destreza em vez de Força para testes de ataque corpo a corpo e na rolagem de dano com armas leves, ágeis e de arremesso. Se usar esta regra, ignore o pré-requisito de Acuidade com Arma.' },
  { id:'defesa-epica',          label:'Defesa Épica',            resumo:'+1 em Defesa a cada nível par. Indicado para campanhas de ação exagerada.', desc:'Com esta regra, sua Defesa aumenta em +1 para cada nível par (mesma progressão das perícias). Indicada para campanhas de ação exagerada!' },
  { id:'ataques-mirados',       label:'Ataques Mirados',         resumo:'Mire em partes do corpo com penalidade no ataque para causar efeitos adicionais.', desc:'Sempre que faz um ataque, você pode mirar em uma parte específica do corpo. Sofre –5 para membros ou –10 para cabeça. Se acertar, impõe efeito crítico de menor severidade para a parte atingida.' },
  { id:'cobertura-leve',        label:'Cobertura Leve e Efeitos',resumo:'Cobertura leve fornece +5 em Reflexos contra efeitos do lado oposto.', desc:'Cobertura leve fornece +5 em testes de Reflexos contra efeitos com alvo que tenham origem no lado oposto da cobertura e contra efeitos de área cujo centro esteja do lado oposto da cobertura.' },
  { id:'movimento-intercalado', label:'Movimento Intercalado',   resumo:'Intercale sua ação de movimento com outra ação durante o turno.', desc:'Com esta regra, você pode intercalar sua ação de movimento com uma outra ação. Por exemplo, se tiver deslocamento 9m, pode percorrer 6m, executar uma ação padrão e então percorrer os 3m restantes.' },
  { id:'lancinante-revisado',   label:'Lancinante Revisado',     resumo:'O bônus do encanto dilacerante também é multiplicado em acertos críticos.', desc:'Quando você faz um acerto crítico, o bônus em dano fornecido pelo encanto dilacerante também é multiplicado. Por exemplo, um machado de batalha lancinante causa +30 pontos de dano em um acerto crítico. Pré-requisito: dilacerante.' },
  { id:'lesoes',                label:'Lesões',                  resumo:'Atingir 0 PV causa lesões: –2 cumulativo em perícias, recuperado com descanso.', desc:'Sempre que os PV de um personagem são reduzidos a 0 ou menos, ele sofre uma lesão: penalidade cumulativa de –2 em testes de perícias. A cada noite de sono, você recupera uma lesão (ou duas, se tiver passado por cuidados prolongados).' },
  { id:'posicionamento',        label:'Posicionamento',          resumo:'A orientação do combatente (fronte, retaguarda, flancos) afeta sua defesa e escudo.', desc:'Cada personagem possui fronte, retaguarda e dois flancos. No final de cada turno, o personagem deve declarar sua fronte. Escudos só protegem a fronte ou o flanco da mão que o empunha. Ataques pela retaguarda deixam o personagem vulnerável.' },
  { id:'rd-combinada',          label:'RD Combinada',            resumo:'A redução de dano de armadura e escudo se acumulam.', desc:'A redução de dano fornecida por armaduras e por escudos se acumulam. Por exemplo, usando uma armadura e um escudo pesados de adamante, você tem RD 7.' },
  { id:'saque-rapido-limitado', label:'Saque Rápido Limitado',   resumo:'Efeitos de saque livre só podem ser usados uma vez por rodada cada.', desc:'Cada efeito que permite sacar ou guardar itens como ação livre só pode ser usado uma vez por rodada. Os efeitos se acumulam normalmente entre si.' },
]

export default function Mesas() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  const [mesas,        setMesas]        = useState([])
  const [loading,      setLoading]      = useState(true)
  const [modal,        setModal]        = useState(null) // 'criar' | 'entrar'
  const [codigoInput,  setCodigoInput]  = useState('')
  const [erroEntrar,   setErroEntrar]   = useState('')
  const [copiado,      setCopiado]      = useState(false)

  // Criar mesa
  const [nomeMesa,     setNomeMesa]     = useState('')
  const [descMesa,     setDescMesa]     = useState('')
  const [regras,       setRegras]       = useState([])
  const [criando,      setCriando]      = useState(false)
  const [erroCriar,    setErroCriar]    = useState('')
  const [novoCode,     setNovoCode]     = useState('')

  // UI regras
  const [showRegras,   setShowRegras]   = useState(false)
  const [expandedDesc, setExpandedDesc] = useState(null)

  useEffect(() => { if (user && profile) carregarMesas() }, [user, profile])

  async function carregarMesas() {
    setLoading(true)
    const { data } = await supabase
      .from('mesa_membros')
      .select('mesa:mesas(*)')
      .eq('profile_id', profile.id)
    setMesas(data?.map(d => d.mesa).filter(Boolean) || [])
    setLoading(false)
  }

  function gerarCodigo() {
    const arr = new Uint8Array(8)
    window.crypto.getRandomValues(arr)
    return Array.from(arr).map(b => b % 10).join('').padStart(16, '0')
  }

  function toggleRegra(id) {
    setRegras(r => r.includes(id) ? r.filter(x => x !== id) : [...r, id])
  }

  async function handleCriarMesa(e) {
    e.preventDefault()
    if (!nomeMesa.trim()) { setErroCriar('Dê um nome para a mesa.'); return }
    setCriando(true); setErroCriar('')
    try {
      const codigo = gerarCodigo()
      const { data: mesa, error } = await supabase
        .from('mesas')
        .insert({ nome: nomeMesa.trim(), descricao: descMesa.trim() || null, codigo, gm_id: profile.id, regras_opcionais: regras })
        .select().single()
      if (error) throw error
      await supabase.from('mesa_membros').insert({ mesa_id: mesa.id, profile_id: profile.id, papel: 'gm' })
      setNovoCode(codigo)
      await carregarMesas()
    } catch (err) {
      setErroCriar('Erro ao criar mesa: ' + err.message)
    } finally {
      setCriando(false)
    }
  }

  async function handleEntrarMesa(e) {
    e.preventDefault(); setErroEntrar('')
    const codigo = codigoInput.replace(/\D/g, '')
    if (codigo.length !== 16) { setErroEntrar('Código deve ter 16 dígitos.'); return }
    const { data: mesa, error } = await supabase.from('mesas').select('*').eq('codigo', codigo).single()
    if (error || !mesa) { setErroEntrar('Mesa não encontrada. Verifique o código.'); return }
    const { data: membro } = await supabase.from('mesa_membros').select('id').eq('mesa_id', mesa.id).eq('profile_id', profile.id).single()
    if (!membro) await supabase.from('mesa_membros').insert({ mesa_id: mesa.id, profile_id: profile.id, papel: 'jogador' })
    await carregarMesas(); setModal(null); setCodigoInput('')
  }

  function copiarCodigo(codigo) {
    navigator.clipboard.writeText(codigo)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  function fecharModal() {
    setModal(null)
    setNomeMesa(''); setDescMesa(''); setRegras([])
    setErroCriar(''); setErroEntrar(''); setCodigoInput('')
    setNovoCode(''); setShowRegras(false); setExpandedDesc(null)
  }

  return (
    <div className="mesas-page">
      <div className="mesas-bg" aria-hidden="true"><div className="mesas-bg__grid" /></div>

      <div className="mesas-container">
        {/* Cabeçalho */}
        <header className="mesas-header">
          <div>
            <p className="mesas-header__eyebrow">Suas Aventuras</p>
            <h1 className="mesas-header__title">Mesas de <span>Jogo</span></h1>
          </div>
          {user && (
            <div className="mesas-header__actions">
              <button className="btn btn-outline" onClick={() => setModal('entrar')}><FiLogIn size={14} /> Entrar na Mesa</button>
              <button className="btn btn-primary" onClick={() => setModal('criar')}><FiPlus size={14} /> Criar Mesa</button>
            </div>
          )}
        </header>

        <div className="mesas-divider">
          <div className="mesas-divider__line" /><div className="mesas-divider__diamond" /><div className="mesas-divider__line" />
        </div>

        {/* Lista */}
        {!user ? (
          <div className="mesas-empty">
            <p className="rune-row">ᚠ ᚢ ᚦ</p>
            <p className="mesas-empty__title">Faça login para ver suas mesas.</p>
          </div>
        ) : loading ? (
          <div className="mesas-empty">
            <GiDiceTwentyFacesTwenty size={40} style={{ color:'var(--clr-red)', opacity:0.4 }} />
            <p className="mesas-empty__title">Carregando mesas...</p>
          </div>
        ) : mesas.length === 0 ? (
          <div className="mesas-empty">
            <p className="rune-row">ᚠ ᚢ ᚦ</p>
            <p className="mesas-empty__title">Nenhuma mesa ainda.</p>
            <p className="mesas-empty__sub">Crie uma mesa ou entre com um código.</p>
            <div className="mesas-empty__actions">
              <button className="btn btn-outline" onClick={() => setModal('entrar')}><FiLogIn size={14} /> Entrar na Mesa</button>
              <button className="btn btn-primary" onClick={() => setModal('criar')}><FiPlus size={14} /> Criar Mesa</button>
            </div>
          </div>
        ) : (
          <div className="mesas-grid">
            {mesas.map(mesa => (
              <div key={mesa.id} className="mesa-card">
                <div className="mesa-card__corner mesa-card__corner--tl" />
                <div className="mesa-card__corner mesa-card__corner--br" />
                <div className="mesa-card__header">
                  <h2 className="mesa-card__nome">{mesa.nome}</h2>
                  <span className="mesa-card__papel">{mesa.gm_id === profile?.id ? '⚔ GM' : '🎲 Jogador'}</span>
                </div>
                {mesa.descricao && <p className="mesa-card__desc">{mesa.descricao}</p>}
                {mesa.regras_opcionais?.length > 0 && (
                  <p className="mesa-card__regras">{mesa.regras_opcionais.length} regra{mesa.regras_opcionais.length > 1 ? 's' : ''} opcional{mesa.regras_opcionais.length > 1 ? 'is' : ''}</p>
                )}
                <div className="mesa-card__codigo">
                  <span className="mesa-card__codigo-label">Código</span>
                  <span className="mesa-card__codigo-valor">{mesa.codigo}</span>
                  <button className="mesa-card__copy" onClick={() => copiarCodigo(mesa.codigo)}>
                    {copiado ? <FiCheck size={14} /> : <FiCopy size={14} />}
                  </button>
                </div>
                <button className="mesa-card__jogar" onClick={() => navigate(`/mesa/${mesa.id}`)}>
                  Jogar Mesa →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Modal Criar Mesa ── */}
      {modal === 'criar' && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && fecharModal()}>
          <div className="modal">
            <div className="modal__corner modal__corner--tl" /><div className="modal__corner modal__corner--tr" />
            <div className="modal__corner modal__corner--bl" /><div className="modal__corner modal__corner--br" />
            <div className="modal__header">
              <h2 className="modal__title"><GiScrollUnfurled size={20} /> Criar Mesa</h2>
              <button className="modal__close" onClick={fecharModal}><FiX size={18} /></button>
            </div>

            {novoCode ? (
              <div className="modal__success">
                <div className="modal__success-icon">✦</div>
                <p className="modal__success-label">Mesa criada com sucesso!</p>
                <p className="modal__success-hint">Compartilhe este código com seus jogadores:</p>
                <div className="modal__code-box">
                  <span className="modal__code">{novoCode}</span>
                  <button className="modal__copy-btn" onClick={() => copiarCodigo(novoCode)}>
                    {copiado ? <FiCheck size={14} /> : <FiCopy size={14} />}
                    {copiado ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
                <button className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }} onClick={fecharModal}>Fechar</button>
              </div>
            ) : (
              <form className="modal__form" onSubmit={handleCriarMesa}>
                <div className="modal__field">
                  <label className="modal__label" htmlFor="nome-mesa">Nome da Mesa</label>
                  <input id="nome-mesa" type="text" className="modal__input" placeholder="A Maldição do Anel Negro..." value={nomeMesa} onChange={e => setNomeMesa(e.target.value)} maxLength={80} required autoFocus />
                </div>
                <div className="modal__field">
                  <label className="modal__label" htmlFor="desc-mesa">
                    Descrição
                    <span className="modal__hint-count">{descMesa.length}/2500</span>
                  </label>
                  <textarea id="desc-mesa" className="modal__input modal__textarea" placeholder="Conte um pouco sobre a campanha..." value={descMesa} onChange={e => setDescMesa(e.target.value)} maxLength={2500} rows={3} />
                </div>

                {/* Regras opcionais */}
                <div className="modal__field">
                  <button type="button" className="modal__regras-toggle" onClick={() => setShowRegras(v => !v)} aria-expanded={showRegras}>
                    <FiPlus size={14} />
                    Adicionar Regras Opcionais
                    {regras.length > 0 && <span className="modal__regras-badge">{regras.length}</span>}
                    {showRegras ? <FiChevronUp size={14} style={{ marginLeft:'auto' }} /> : <FiChevronDown size={14} style={{ marginLeft:'auto' }} />}
                  </button>

                  {showRegras && (
                    <div className="modal__regras-list">
                      {REGRAS_OPCIONAIS.map(r => (
                        <div key={r.id} className={`modal__regra-item ${regras.includes(r.id) ? 'modal__regra-item--active' : ''}`}>
                          <div className="modal__regra-main">
                            <div className="modal__regra-info">
                              <p className="modal__regra-nome">{r.label}</p>
                              <p className="modal__regra-resumo">{r.resumo}</p>
                            </div>
                            <div className="modal__regra-actions">
                              <button type="button" className="modal__regra-btn modal__regra-btn--info"
                                onClick={() => setExpandedDesc(expandedDesc === r.id ? null : r.id)}>
                                {expandedDesc === r.id ? 'Fechar' : 'Saiba mais'}
                              </button>
                              <button type="button"
                                className={`modal__regra-btn ${regras.includes(r.id) ? 'modal__regra-btn--remove' : 'modal__regra-btn--add'}`}
                                onClick={() => toggleRegra(r.id)}>
                                {regras.includes(r.id) ? <><FiCheck size={11} /> Adicionada</> : <><FiPlus size={11} /> Adicionar</>}
                              </button>
                            </div>
                          </div>
                          {expandedDesc === r.id && <div className="modal__regra-desc">{r.desc}</div>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {erroCriar && <p className="error-msg">{erroCriar}</p>}
                <div className="modal__actions">
                  <button type="button" className="btn btn-outline" onClick={fecharModal}>Cancelar</button>
                  <button type="submit" className="btn btn-primary" disabled={criando}>{criando ? 'Criando...' : 'Criar Mesa'}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── Modal Entrar na Mesa ── */}
      {modal === 'entrar' && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && fecharModal()}>
          <div className="modal modal--sm">
            <div className="modal__corner modal__corner--tl" /><div className="modal__corner modal__corner--tr" />
            <div className="modal__corner modal__corner--bl" /><div className="modal__corner modal__corner--br" />
            <div className="modal__header">
              <h2 className="modal__title"><FiLogIn size={18} /> Entrar na Mesa</h2>
              <button className="modal__close" onClick={fecharModal}><FiX size={18} /></button>
            </div>
            <form className="modal__form" onSubmit={handleEntrarMesa}>
              <div className="modal__field">
                <label className="modal__label" htmlFor="codigo-mesa">Código da Mesa</label>
                <input id="codigo-mesa" type="text" className="modal__input modal__input--code"
                  placeholder="0000000000000000"
                  value={codigoInput}
                  onChange={e => setCodigoInput(e.target.value.replace(/\D/g, '').slice(0, 16))}
                  maxLength={16} autoFocus />
                <p className="modal__hint-text">Código de 16 dígitos fornecido pelo Mestre.</p>
              </div>
              {erroEntrar && <p className="error-msg">{erroEntrar}</p>}
              <div className="modal__actions">
                <button type="button" className="btn btn-outline" onClick={fecharModal}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}