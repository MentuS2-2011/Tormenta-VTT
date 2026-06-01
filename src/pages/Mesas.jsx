import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiScrollUnfurled, GiDiceTwentyFacesTwenty } from 'react-icons/gi'
import { FiCopy, FiCheck, FiPlus, FiLogIn, FiX, FiInfo } from 'react-icons/fi'
import { supabase } from '../lib/supabase'
import { useAuth } from '../App'
import './Mesas.css'

const REGRAS_OPCIONAIS = [
  { 
    id: 'racas-abertas', 
    label: 'Raças Abertas', 
    resumo: 'Modificadores de atributo da raça podem ser aplicados em qualquer atributo.',
    descricao: 'Pela regra padrão, cada raça possui modificadores de atributos que representam as tendências desse povo. Por exemplo, os meios-gigantes galokk tendem a ser mais fortes que os pequeninos hynne, por isso a primeira raça tem um bônus de Força e a segunda, uma penalidade. Mas heróis artonianos são tudo, menos "padrão"! Com esta variante, você pode usar cada modificador de atributo de sua raça em qualquer atributo. Por exemplo, um anão (normalmente Con +2, Sab +1, Des -1) terá os modificadores +2, +1 e -1 para aplicar nos atributos que quiser, enquanto um aggelus (normalmente Sab +2 e Car +1) terá os modificadores +2 e +1. Você não pode aplicar mais de um modificador no mesmo atributo.'
  },
  { 
    id: 'devoções-abertas', 
    label: 'Devoções Abertas', 
    resumo: 'Personagem pode ser devoto de qualquer divindade, independente de raça ou classe.',
    descricao: 'Esta variante é simples: um personagem pode ser devoto de qualquer divindade, independente de sua raça ou classe. O Panteão está sempre imerso em conflitos, e faz sentido que um deus aceite qualquer devoto para ganhar poder sobre seus irmãos.'
  },
  { 
    id: 'pontos-variados', 
    label: 'Pontos Variados', 
    resumo: 'Altere a pontuação de criação de personagem (5 a 15 pontos).',
    descricao: 'Você pode usar o método de pontos do livro básico, mas aumentando ou diminuindo a pontuação, para gerar personagens mais ou menos poderosos. Para campanhas "pé no chão", use 5 pontos. Já para campanhas épicas e exageradas, 15 pontos.'
  },
  { 
    id: 'acoes-rapidas', 
    label: 'Ações Rápidas', 
    resumo: 'Novo tipo de ação: conversão de movimentos em ações simples.',
    descricao: 'Esta regra introduz um novo tipo de ação: rápida. Esta ação é algo simples, que ocupa apenas uma fração do seu movimento. Você não recebe ações rápidas automaticamente, mas pode usar suas ações de movimento para executá-las (cada movimento equivale a duas ações rápidas). Quando converte uma ação de movimento em ações rápidas, elas devem ser executadas em sequência (a menos que seu grupo esteja usando a regra opcional Movimento Intercalado). As seguintes ações descritas em Tormenta20 (p. 234) são consideradas ações rápidas: levantar-se, manipular item, mirar e sacar ou guardar item. Além disso, você pode usar uma ação rápida para percorrer uma distância igual à metade do seu deslocamento.'
  },
  { 
    id: 'armas-leves', 
    label: 'Armas Leves e Ágeis', 
    resumo: 'Use Destreza em vez de Força com armas leves e ágeis.',
    descricao: 'Com esta regra, você pode usar Destreza em vez de Força para testes de ataque corpo a corpo e na rolagem de dano com armas leves, ágeis e de arremesso. Se usar esta regra, ignore o pré-requisito de Acuidade com Arma em qualquer habilidade ou item.'
  },
  { 
    id: 'defesa-epica', 
    label: 'Defesa Épica', 
    resumo: '+1 em Defesa a cada nível par.',
    descricao: 'Com esta regra, sua Defesa aumenta em +1 para cada nível par (mesma progressão das perícias). Indicada para campanhas de ação exagerada!'
  },
  { 
    id: 'ataques-mirados', 
    label: 'Ataques Mirados', 
    resumo: 'Mire em partes do corpo para efeitos adicionais.',
    descricao: 'Com esta regra, sempre que faz um ataque, você pode mirar em uma parte específica do corpo do oponente para causar um efeito adicional. Se fizer isso, você sofre uma penalidade no teste de ataque de -5 para pernas, braços, tronco, asas e outros membros locomotores, e de -10 para cabeça ou equivalente. Se o ataque acertar e causar dano, você impõe um efeito adicional ao alvo, equivalente ao efeito crítico de menor severidade para a parte do corpo atingida.'
  },
  { 
    id: 'cobertura-leve', 
    label: 'Cobertura Leve e Efeitos', 
    resumo: '+5 em Reflexos contra efeitos do lado oposto da cobertura.',
    descricao: 'Nesta regra, cobertura leve fornece +5 em testes de Reflexos contra efeitos com alvo que tenham origem no lado oposto da cobertura e contra efeitos de área cujo centro esteja do lado oposto da cobertura.'
  },
  { 
    id: 'movimento-intercalado', 
    label: 'Movimento Intercalado', 
    resumo: 'Intercale sua ação de movimento com outra ação.',
    descricao: 'Com esta regra, você pode intercalar sua ação de movimento com uma outra ação. Por exemplo, se tiver deslocamento 9m, pode usar uma ação de movimento para percorrer 6m, executar uma ação padrão e então percorrer os 3m restantes.'
  },
  { 
    id: 'lancinante-revisado', 
    label: 'Lancinante Revisado', 
    resumo: 'Bônus de encanto dilacerante multiplicado no crítico.',
    descricao: 'Esta regra muda o efeito do encanto lancinante. A arma inflige ferimentos mortais. Quando você faz um acerto crítico, o bônus em dano fornecido pelo encanto dilacerante também é multiplicado. Por exemplo, um machado de batalha lancinante causa +30 pontos de dano em um acerto crítico.'
  },
  { 
    id: 'lesoes', 
    label: 'Lesões', 
    resumo: '-2 cumulativo em perícias ao atingir 0 PV.',
    descricao: 'Esta regra apresenta machucados mais profundos do que aqueles representados por dano. Sempre que os PV de um personagem são reduzidos a 0 ou menos, ele sofre uma lesão, que significa uma penalidade cumulativa de -2 em testes de perícias. Lesões são recuperadas apenas com descanso. A cada noite de sono, você recupera uma lesão (ou duas, se tiver passado por cuidados prolongados).'
  },
  { 
    id: 'posicionamento', 
    label: 'Posicionamento', 
    resumo: 'A orientação do combatente afeta sua defesa.',
    descricao: 'Com esta regra, a orientação de cada combatente interfere em sua capacidade de defesa. Cada personagem possui uma fronte (o lado para o qual está voltado), uma retaguarda (o lado oposto a sua fronte) e dois flancos. Escudos só fornecem benefícios contra ataques pela fronte ou flanco da mão do escudo. Contra ataques na retaguarda, a criatura fica vulnerável.'
  },
  { 
    id: 'rd-combinada', 
    label: 'RD Combinada', 
    resumo: 'RD de armadura e escudo se acumulam.',
    descricao: 'Nesta regra, a redução de dano fornecida por armaduras e por escudos se acumulam. Por exemplo, se estiver usando uma armadura e um escudo pesados de adamante, você tem RD 7.'
  },
  { 
    id: 'saque-rapido-limitado', 
    label: 'Saque Rápido Limitado', 
    resumo: 'Efeitos de saque livre só podem ser usados uma vez por rodada.',
    descricao: 'Com esta regra, cada efeito que permite sacar ou guardar itens como ação livre só pode ser usado uma vez por rodada. Os efeitos se acumulam. Um personagem com o poder Saque Rápido e uma bandoleira de poções, por exemplo, pode sacar ou guardar um item qualquer e um item alquímico como ação livre na mesma rodada.'
  },
  {
    id: 'idades-variadas',
    label: 'Idades Variadas',
    resumo: 'Personagens podem ter diferentes faixas etárias com efeitos mecânicos.',
    descricao: `Personagens iniciantes em Tormenta20 normalmente são jovens, na casa dos 20 anos. Contudo, isso é apenas costume, não lei! Com esta regra, a idade do personagem tem consequências em jogo.

FAIXAS ETÁRIAS:
• Criança (9-12): For -2, Con -1, Sab -1, Tamanho Menor, Protegido dos Deuses, Sem Origem
• Adolescente (13-17): Sab -1, Ímpeto Juvenil, Origem em Construção
• Jovem (18-24): Nenhum modificador
• Adulto (25-39): Um poder geral extra, uma complicação de idade (opcional)
• Maduro (40-59): Um nível extra, duas complicações de idade
• Velho (60-79): For -1, Des -1, Con -1, dois níveis extras, três complicações de idade
• Ancião (80+): For -2, Des -2, Con -2, três níveis extras, quatro complicações de idade`
  }
]

export default function Mesas() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  const [mesas, setMesas] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)
  const [codigoInput, setCodigoInput] = useState('')
  const [erroEntrar, setErroEntrar] = useState('')
  const [copiado, setCopiado] = useState(false)
  const [regraInfo, setRegraInfo] = useState(null)

  const [nomeMesa, setNomeMesa] = useState('')
  const [descMesa, setDescMesa] = useState('')
  const [regras, setRegras] = useState([])
  const [criando, setCriando] = useState(false)
  const [erroCriar, setErroCriar] = useState('')
  const [novoCode, setNovoCode] = useState('')

  useEffect(() => {
    if (user && profile) {
      carregarMesas()
    }
  }, [user, profile])

  async function carregarMesas() {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('mesa_membros')
        .select('mesa:mesas(*)')
        .eq('profile_id', profile?.id)

      if (error) throw error
      setMesas(data?.map(d => d.mesa) || [])
    } catch (err) {
      console.error('Erro ao carregar mesas:', err)
    } finally {
      setLoading(false)
    }
  }

  function gerarCodigo() {
    return Math.random().toString(36).substring(2, 10).padEnd(16, '0') + 
           Math.random().toString(36).substring(2, 10).padEnd(16, '0')
  }

  function toggleRegra(id) {
    setRegras(r => r.includes(id) ? r.filter(x => x !== id) : [...r, id])
  }

  async function handleCriarMesa(e) {
    e.preventDefault()
    if (!nomeMesa.trim()) { 
      setErroCriar('Dê um nome para a mesa.')
      return 
    }
    
    setCriando(true)
    setErroCriar('')
    
    try {
      const codigo = gerarCodigo()
      
      console.log('Tentando criar mesa com:', {
        nome: nomeMesa.trim(),
        descricao: descMesa.trim(),
        codigo,
        gm_id: profile?.id,
        regras_opcionais: regras
      })

      // Inserção simplificada sem política RLS
      const { data: mesa, error } = await supabase
        .from('mesas')
        .insert({
          nome: nomeMesa.trim(),
          descricao: descMesa.trim() || null,
          codigo,
          gm_id: profile?.id,
          regras_opcionais: regras
        })
        .select()

      if (error) {
        console.error('Erro detalhado do Supabase:', error)
        throw error
      }

      if (!mesa || mesa.length === 0) {
        throw new Error('Nenhum dado retornado')
      }

      const mesaCriada = mesa[0]
      console.log('Mesa criada com sucesso:', mesaCriada)

      // Adiciona o GM como membro
      const { error: memberError } = await supabase
        .from('mesa_membros')
        .insert({
          mesa_id: mesaCriada.id,
          profile_id: profile?.id,
          papel: 'gm'
        })

      if (memberError) {
        console.error('Erro ao adicionar membro:', memberError)
      }

      setNovoCode(codigo)
      await carregarMesas()
      
    } catch (err) {
      console.error('Erro completo:', err)
      setErroCriar('Erro ao criar mesa: ' + (err.message || JSON.stringify(err)))
    } finally {
      setCriando(false)
    }
  }

  async function handleEntrarMesa(e) {
    e.preventDefault()
    setErroEntrar('')
    const codigo = codigoInput.replace(/\D/g, '')
    if (codigo.length !== 16) { 
      setErroEntrar('Código deve ter 16 dígitos.')
      return 
    }

    const { data: mesa, error } = await supabase
      .from('mesas')
      .select('*')
      .eq('codigo', codigo)
      .single()

    if (error || !mesa) { 
      setErroEntrar('Mesa não encontrada. Verifique o código.')
      return 
    }

    const { data: membro } = await supabase
      .from('mesa_membros')
      .select('id')
      .eq('mesa_id', mesa.id)
      .eq('profile_id', profile?.id)
      .single()

    if (!membro) {
      await supabase.from('mesa_membros').insert({
        mesa_id: mesa.id,
        profile_id: profile?.id,
        papel: 'jogador',
      })
    }

    await carregarMesas()
    setModal(null)
    setCodigoInput('')
  }

  function copiarCodigo(codigo) {
    navigator.clipboard.writeText(codigo)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  function fecharModal() {
    setModal(null)
    setNomeMesa('')
    setDescMesa('')
    setRegras([])
    setErroCriar('')
    setErroEntrar('')
    setCodigoInput('')
    setNovoCode('')
    setRegraInfo(null)
  }

  return (
    <div className="mesas-page">
      <div className="mesas-bg" aria-hidden="true"><div className="mesas-bg__grid" /></div>

      <div className="mesas-container">
        <header className="mesas-header">
          <div>
            <p className="mesas-header__eyebrow">Suas Aventuras</p>
            <h1 className="mesas-header__title">Mesas de <span>Jogo</span></h1>
          </div>
          {user && (
            <div className="mesas-header__actions">
              <button className="btn btn-outline" onClick={() => setModal('entrar')}>
                <FiLogIn size={14} /> Entrar na Mesa
              </button>
              <button className="btn btn-primary" onClick={() => setModal('criar')}>
                <FiPlus size={14} /> Criar Mesa
              </button>
            </div>
          )}
        </header>

        <div className="mesas-divider" aria-hidden="true">
          <div className="mesas-divider__line" />
          <div className="mesas-divider__diamond" />
          <div className="mesas-divider__line" />
        </div>

        {!user ? (
          <div className="mesas-empty">
            <p className="rune-row">ᚠ ᚢ ᚦ</p>
            <p className="mesas-empty__title">Faça login para ver suas mesas.</p>
          </div>
        ) : loading ? (
          <div className="mesas-empty">
            <GiDiceTwentyFacesTwenty size={40} style={{ color: 'var(--clr-red)', opacity: 0.4 }} />
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
                  <span className="mesa-card__papel">
                    {mesa.gm_id === profile?.id ? '⚔ GM' : '🎲 Jogador'}
                  </span>
                </div>
                {mesa.descricao && <p className="mesa-card__desc">{mesa.descricao}</p>}
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

      {/* Modal Criar Mesa */}
      {modal === 'criar' && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && fecharModal()}>
          <div className="modal">
            <div className="modal__corner modal__corner--tl" />
            <div className="modal__corner modal__corner--tr" />
            <div className="modal__corner modal__corner--bl" />
            <div className="modal__corner modal__corner--br" />

            <div className="modal__header">
              <h2 className="modal__title">
                <GiScrollUnfurled size={20} /> Criar Mesa
              </h2>
              <button className="modal__close" onClick={fecharModal}><FiX size={18} /></button>
            </div>

            {novoCode ? (
              <div className="modal__success">
                <p className="modal__success-label">Mesa criada! Compartilhe o código:</p>
                <div className="modal__code-box">
                  <span className="modal__code">{novoCode}</span>
                  <button className="modal__copy-btn" onClick={() => copiarCodigo(novoCode)}>
                    {copiado ? <FiCheck size={16} /> : <FiCopy size={16} />}
                    {copiado ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={fecharModal}>
                  Fechar
                </button>
              </div>
            ) : (
              <form className="modal__form" onSubmit={handleCriarMesa}>
                <div className="modal__field">
                  <label className="modal__label">Nome da Mesa</label>
                  <input
                    type="text"
                    className="modal__input"
                    placeholder="A Maldição do Anel Negro..."
                    value={nomeMesa}
                    onChange={e => setNomeMesa(e.target.value)}
                    required
                  />
                </div>

                <div className="modal__field">
                  <label className="modal__label">Descrição</label>
                  <textarea
                    className="modal__input modal__textarea"
                    placeholder="Conte um pouco sobre a campanha..."
                    value={descMesa}
                    onChange={e => setDescMesa(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="modal__field">
                  <label className="modal__label">+ Adicionar Regras Opcionais</label>
                  <div className="modal__regras">
                    {REGRAS_OPCIONAIS.map(r => (
                      <div key={r.id} className="modal__regra-item">
                        <button
                          type="button"
                          className={`modal__regra ${regras.includes(r.id) ? 'modal__regra--active' : ''}`}
                          onClick={() => toggleRegra(r.id)}
                        >
                          {regras.includes(r.id) && <FiCheck size={11} />}
                          {r.label}
                        </button>
                        <div className="modal__regra-info">
                          <p className="modal__regra-resumo">{r.resumo}</p>
                          <div className="modal__regra-botoes">
                            <button 
                              type="button" 
                              className="modal__regra-saiba-mais"
                              onClick={() => setRegraInfo(r)}
                            >
                              <FiInfo size={12} /> Saiba Mais
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {regras.length > 0 && (
                    <p className="modal__regras-hint">{regras.length} regra{regras.length > 1 ? 's' : ''} selecionada{regras.length > 1 ? 's' : ''}</p>
                  )}
                </div>

                {erroCriar && <p className="error-msg" style={{ color: 'red', fontSize: '14px' }}>{erroCriar}</p>}

                <div className="modal__actions">
                  <button type="button" className="btn btn-outline" onClick={fecharModal}>Cancelar</button>
                  <button type="submit" className="btn btn-primary" disabled={criando}>
                    {criando ? 'Criando...' : 'Criar Mesa'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Modal Entrar na Mesa */}
      {modal === 'entrar' && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && fecharModal()}>
          <div className="modal modal--sm">
            <div className="modal__corner modal__corner--tl" />
            <div className="modal__corner modal__corner--tr" />
            <div className="modal__corner modal__corner--bl" />
            <div className="modal__corner modal__corner--br" />

            <div className="modal__header">
              <h2 className="modal__title">
                <FiLogIn size={18} /> Entrar na Mesa
              </h2>
              <button className="modal__close" onClick={fecharModal}><FiX size={18} /></button>
            </div>

            <form className="modal__form" onSubmit={handleEntrarMesa}>
              <div className="modal__field">
                <label className="modal__label">Código da Mesa</label>
                <input
                  type="text"
                  className="modal__input modal__input--code"
                  placeholder="0000000000000000"
                  value={codigoInput}
                  onChange={e => setCodigoInput(e.target.value.replace(/\D/g, '').slice(0, 16))}
                  maxLength={16}
                  autoFocus
                />
              </div>

              {erroEntrar && <p className="error-msg" style={{ color: 'red', fontSize: '14px' }}>{erroEntrar}</p>}

              <div className="modal__actions">
                <button type="button" className="btn btn-outline" onClick={fecharModal}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Saiba Mais */}
      {regraInfo && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setRegraInfo(null)}>
          <div className="modal">
            <div className="modal__header">
              <h2 className="modal__title">{regraInfo.label}</h2>
              <button className="modal__close" onClick={() => setRegraInfo(null)}><FiX size={18} /></button>
            </div>
            <div className="modal__form">
              <div className="modal__field">
                <p style={{ lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{regraInfo.descricao}</p>
              </div>
              <div className="modal__actions">
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => {
                    toggleRegra(regraInfo.id)
                    setRegraInfo(null)
                  }}
                >
                  {regras.includes(regraInfo.id) ? 'Remover Regra' : 'Adicionar Regra'}
                </button>
                <button type="button" className="btn btn-outline" onClick={() => setRegraInfo(null)}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}