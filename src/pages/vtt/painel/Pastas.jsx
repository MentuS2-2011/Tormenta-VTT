import { useState, useEffect, useRef, useCallback } from 'react'
import {
  FiFolder, FiFolderPlus, FiFile, FiFileText, FiImage,
  FiPlus, FiTrash2, FiEdit2, FiChevronRight, FiChevronDown,
  FiAlertTriangle, FiX, FiCheck, FiUpload, FiEye, FiEyeOff,
  FiMove, FiDownload
} from 'react-icons/fi'

const ESCUDO_MESTRE_NOME = 'escudo-do-mestre.pdf'
const ESCUDO_MESTRE_URL = '/src/assets/escudo/escudo-do-mestre.pdf'
import { GiDragonHead, GiScrollUnfurled, GiPerson } from 'react-icons/gi'
import { BsFilePdf, BsFileImage } from 'react-icons/bs'
import { supabase } from '../../../lib/supabase'
import './Pastas.css'

const TIPO_ICONE = {
  pasta:      { icon: FiFolder,        cor: '#C49A40', label: 'Pasta'       },
  pdf:        { icon: BsFilePdf,       cor: '#CC2222', label: 'PDF'         },
  imagem:     { icon: BsFileImage,     cor: '#185FA5', label: 'Imagem'      },
  nota:       { icon: GiScrollUnfurled,cor: '#2D6A2D', label: 'Nota'        },
  personagem: { icon: GiPerson,        cor: '#7B3FBE', label: 'Personagem'  },
  ameaca:     { icon: GiDragonHead,    cor: '#8B1A1A', label: 'Ameaça'      },
}

export default function Pastas({ mesaId, papel, profile }) {
  const [itens, setItens] = useState([])
  const [abertas, setAbertas] = useState({})
  const [loading, setLoading] = useState(true)
  const [ctxMenu, setCtxMenu] = useState(null)
  const [modal, setModal] = useState(null)
  const [renomear, setRenomear] = useState(null)
  const [nomeTemp, setNomeTemp] = useState('')
  const [itemVisualizando, setItemVisualizando] = useState(null)
  const [movendoItem, setMovendoItem] = useState(null)
  const pdfRef = useRef(null)
  const imgRef = useRef(null)
  const rootRef = useRef(null)

  const isGM = papel === 'gm'

  useEffect(() => { carregarItens() }, [mesaId])

  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest('.ctx-menu')) setCtxMenu(null)
      if (!e.target.closest('.modal-visualizar')) setItemVisualizando(null)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  async function carregarItens() {
    setLoading(true)
    
    let query = supabase
      .from('mesa_arquivos')
      .select('*')
      .eq('mesa_id', mesaId)

    // Se não for GM, só mostra itens visíveis
    if (!isGM) {
      query = query.eq('visivel', true)
    }

    const { data, error } = await query
      .order('tipo', { ascending: true })
      .order('nome', { ascending: true })

    if (!error) {
      setItens(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
  // Só executa se for GM e a lista já foi carregada
  if (isGM && !loading && itens) {
    verificarECriarEscudoMestre()
  }
}, [isGM, loading, itens])



async function verificarECriarEscudoMestre() {
  // Verifica se o escudo já existe
  const escudoExistente = itens.find(item => 
    item.nome === ESCUDO_MESTRE_NOME && item.tipo === 'pdf'
  )
  
  if (!escudoExistente) {
    console.log('Criando Escudo do Mestre...')
    
    // Cria o registro do escudo no banco
    const { data, error } = await supabase
      .from('mesa_arquivos')
      .insert({
        mesa_id: mesaId,
        parent_id: null,
        nome: ESCUDO_MESTRE_NOME,
        tipo: 'pdf',
        url: ESCUDO_MESTRE_URL,
        criado_por: profile.id,
        visivel: true,
        criado_em: new Date().toISOString(),
        atualizado_em: new Date().toISOString()
      })
      .select()
      .single()
    
    if (!error && data) {
      console.log('Escudo do Mestre criado com sucesso!')
      setItens(prev => [...prev, data])
    } else if (error) {
      console.error('Erro ao criar Escudo do Mestre:', error)
    }
  }
}

  async function criarItem(tipo, nome, parentId = null, extra = {}) {
    const novoItem = {
      mesa_id: mesaId,
      parent_id: parentId,
      tipo,
      nome,
      criado_por: profile.id,
      visivel: true,
      ...extra,
    }

    const { data, error } = await supabase
      .from('mesa_arquivos')
      .insert(novoItem)
      .select()
      .single()

    if (!error && data) {
      setItens(prev => [...prev, data])
      if (parentId) setAbertas(prev => ({ ...prev, [parentId]: true }))
    }
    return data
  }

  async function atualizarItem(id, updates) {
    const { error } = await supabase
      .from('mesa_arquivos')
      .update(updates)
      .eq('id', id)

    if (!error) {
      setItens(prev => prev.map(i => i.id === id ? { ...i, ...updates } : i))
    }
  }

  async function moverItem(itemId, novaPastaId) {
    await atualizarItem(itemId, { parent_id: novaPastaId })
    setMovendoItem(null)
  }

  async function toggleVisibilidade(id, visivelAtual) {
    if (!isGM) return
    await atualizarItem(id, { visivel: !visivelAtual })
  }

  async function excluirItem(id) {
    const ids = coletarIds(id)
    await supabase.from('mesa_arquivos').delete().in('id', ids)
    setItens(prev => prev.filter(i => !ids.includes(i.id)))
  }

  function coletarIds(id) {
    const filhos = itens.filter(i => i.parent_id === id)
    return [id, ...filhos.flatMap(f => coletarIds(f.id))]
  }

  async function handleUpload(e, tipo, parentId) {
    const file = e.target.files[0]
    if (!file) return
    
    const ext = file.name.split('.').pop()
    const path = `${mesaId}/${Date.now()}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('mesa-arquivos')
      .upload(path, file, { upsert: true })

    if (uploadError) {
      alert('Erro ao enviar arquivo.')
      return
    }

    const { data: urlData } = supabase.storage
      .from('mesa-arquivos')
      .getPublicUrl(path)

    await criarItem(tipo, file.name, parentId, { url: urlData.publicUrl })
    e.target.value = ''
  }

  function abrirCtx(e, alvo) {
    e.preventDefault()
    e.stopPropagation()
    setCtxMenu({ x: e.clientX, y: e.clientY, alvo })
  }

  function filhosDirectos(parentId) {
    const filhos = itens.filter(i => i.parent_id === (parentId || null))
    // Ordenar: 1º Escudo do Mestre (se for GM), 2º Pastas, 3º Demais em ordem alfabética
    return filhos.sort((a, b) => {
      // Escudo do Mestre primeiro (apenas para GM)
      if (isGM && a.nome === 'escudo-do-mestre.pdf') return -1
      if (isGM && b.nome === 'escudo-do-mestre.pdf') return 1
      
      // Pastas depois
      if (a.tipo === 'pasta' && b.tipo !== 'pasta') return -1
      if (a.tipo !== 'pasta' && b.tipo === 'pasta') return 1
      
      // Ordem alfabética
      return a.nome.localeCompare(b.nome)
    })
  }

  function togglePasta(id) {
    setAbertas(prev => ({ ...prev, [id]: !prev[id] }))
  }

  function abrirItem(item) {
    setItemVisualizando(item)
  }

  function opcoesCtx(alvo) {
    const ehPasta = alvo === 'root' || alvo?.tipo === 'pasta'
    const parentId = alvo === 'root' ? null : alvo?.tipo === 'pasta' ? alvo.id : alvo?.parent_id
    const opts = []

    if (ehPasta) {
      opts.push({ label: 'Nova Pasta', icon: FiFolderPlus, acao: () => abrirModal('pasta', parentId) })
      opts.push({ label: 'Adicionar PDF', icon: BsFilePdf, acao: () => { setModal({ tipo: 'upload-pdf', parentId }); setTimeout(() => pdfRef.current?.click(), 100) } })
      opts.push({ label: 'Adicionar Imagem', icon: BsFileImage, acao: () => { setModal({ tipo: 'upload-img', parentId }); setTimeout(() => imgRef.current?.click(), 100) } })
      opts.push({ label: 'Criar Nota', icon: GiScrollUnfurled, acao: () => abrirModal('nota', parentId) })
      opts.push({ label: 'Criar Personagem', icon: GiPerson, acao: () => abrirModal('personagem', parentId) })
      if (isGM) opts.push({ label: 'Criar Ameaça', icon: GiDragonHead, acao: () => abrirModal('ameaca', parentId) })
      
      if (alvo !== 'root') {
        opts.push({ sep: true })
        opts.push({ label: 'Renomear', icon: FiEdit2, acao: () => { setRenomear(alvo.id); setNomeTemp(alvo.nome); setCtxMenu(null) } })
        if (isGM) {
          opts.push({ 
            label: alvo.visivel !== false ? 'Ocultar para todos' : 'Mostrar para todos', 
            icon: alvo.visivel !== false ? FiEyeOff : FiEye, 
            acao: () => toggleVisibilidade(alvo.id, alvo.visivel !== false)
          })
        }
        opts.push({ label: 'Excluir', icon: FiTrash2, acao: () => abrirModal('confirmar-excluir', alvo), danger: true })
      }
    } else if (alvo) {
      opts.push({ label: 'Abrir', icon: FiFileText, acao: () => { abrirItem(alvo); setCtxMenu(null) } })
      opts.push({ label: 'Mover para...', icon: FiMove, acao: () => setMovendoItem(alvo) })
      opts.push({ label: 'Renomear', icon: FiEdit2, acao: () => { setRenomear(alvo.id); setNomeTemp(alvo.nome); setCtxMenu(null) } })
      if (isGM && alvo.nome === ESCUDO_MESTRE_NOME) {
        opts.push({ 
          label: 'Remover Escudo (não recomendado)', 
          icon: FiTrash2, 
          acao: () => abrirModal('confirmar-excluir', alvo),
          danger: true 
        })
      }
      if (isGM) {
        opts.push({ 
          label: alvo.visivel !== false ? 'Ocultar para todos' : 'Mostrar para todos', 
          icon: alvo.visivel !== false ? FiEyeOff : FiEye, 
          acao: () => toggleVisibilidade(alvo.id, alvo.visivel !== false)
        })
      }
      opts.push({ label: 'Excluir', icon: FiTrash2, acao: () => abrirModal('confirmar-excluir', alvo), danger: true })
    }
    return opts
  }

  function abrirModal(tipo, dados) {
    setModal({ tipo, dados })
    setCtxMenu(null)
  }

  function fecharModal() { setModal(null) }

  function RenderNo({ item, depth = 0 }) {
    const cfg = TIPO_ICONE[item.tipo] || TIPO_ICONE.nota
    const Icon = cfg.icon
    const aberta = abertas[item.id]
    const filhos = item.tipo === 'pasta' ? filhosDirectos(item.id) : []
    const editando = renomear === item.id
    const isHidden = item.visivel === false && isGM

    return (
      <div className="pasta-no">
        <div
          className={`pasta-no__linha ${isHidden ? 'pasta-no__linha--hidden' : ''}`}
          style={{ paddingLeft: `${12 + depth * 16}px` }}
          onContextMenu={e => abrirCtx(e, item)}
          onClick={() => item.tipo === 'pasta' ? togglePasta(item.id) : abrirItem(item)}
          onDoubleClick={() => item.tipo !== 'pasta' && abrirItem(item)}
        >
          {item.tipo === 'pasta' ? (
            <span className="pasta-no__chevron">
              {aberta ? <FiChevronDown size={12} /> : <FiChevronRight size={12} />}
            </span>
          ) : (
            <span className="pasta-no__chevron pasta-no__chevron--leaf" />
          )}

          <Icon size={15} style={{ color: cfg.cor, flexShrink: 0 }} />
          {isHidden && <FiEyeOff size={10} style={{ color: '#888' }} />}

          {editando ? (
            <input
              className="pasta-no__rename-input"
              value={nomeTemp}
              autoFocus
              onChange={e => setNomeTemp(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') { atualizarItem(item.id, { nome: nomeTemp }); setRenomear(null) }
                if (e.key === 'Escape') setRenomear(null)
              }}
              onBlur={() => { atualizarItem(item.id, { nome: nomeTemp }); setRenomear(null) }}
              onClick={e => e.stopPropagation()}
            />
          ) : (
            <span className="pasta-no__nome">{item.nome}</span>
          )}

          <span className="pasta-no__tipo" style={{ color: cfg.cor }}>{cfg.label}</span>
        </div>

        {item.tipo === 'pasta' && aberta && filhos.length > 0 && (
          <div className="pasta-no__filhos">
            {filhos.map(f => <RenderNo key={f.id} item={f} depth={depth + 1} />)}
          </div>
        )}

        {item.tipo === 'pasta' && aberta && filhos.length === 0 && (
          <div className="pasta-no__vazia" style={{ paddingLeft: `${28 + depth * 16}px` }}>
            Pasta vazia
          </div>
        )}
      </div>
    )
  }

  function ModalVisualizar({ item, onClose }) {
    const cfg = TIPO_ICONE[item.tipo]
    const podeEditar = isGM || item.criado_por === profile.id
    const [personagemData, setPersonagemData] = useState(null)
    const [ameacaData, setAmeacaData] = useState(null)

    useEffect(() => {
      if (item.tipo === 'personagem' && item.conteudo) {
        setPersonagemData(item.conteudo)
      } else if (item.tipo === 'ameaca' && item.conteudo) {
        setAmeacaData(item.conteudo)
      }
    }, [item])

    if (item.tipo === 'pdf') {
      return (
        <div className="modal-visualizar modal-visualizar--pdf" onClick={e => e.target === e.currentTarget && onClose()}>
          <div className="modal-visualizar__container">
            <div className="modal-visualizar__header">
              <h3>{item.nome}</h3>
              <button onClick={onClose}><FiX /></button>
            </div>
            <iframe src={item.url} className="modal-visualizar__pdf" title={item.nome} />
          </div>
        </div>
      )
    }

    if (item.tipo === 'imagem') {
      return (
        <div className="modal-visualizar modal-visualizar--imagem" onClick={e => e.target === e.currentTarget && onClose()}>
          <div className="modal-visualizar__container">
            <div className="modal-visualizar__header">
              <h3>{item.nome}</h3>
              <button onClick={onClose}><FiX /></button>
            </div>
            <img src={item.url} alt={item.nome} className="modal-visualizar__imagem" />
          </div>
        </div>
      )
    }

    if (item.tipo === 'personagem') {
      const dados = personagemData || {}
      const isOwner = item.criado_por === profile.id
      const showFull = isGM || isOwner

      return (
        <div className="modal-visualizar modal-visualizar--personagem" onClick={e => e.target === e.currentTarget && onClose()}>
          <div className="modal-visualizar__container">
            <div className="modal-visualizar__header">
              <h3>{item.nome}</h3>
              <button onClick={onClose}><FiX /></button>
            </div>
            <div className="personagem-visualizacao">
              <div className="personagem-visualizacao__header">
                {dados.imagem_url && <img src={dados.imagem_url} alt={item.nome} className="personagem-imagem" />}
                {dados.token_url && <img src={dados.token_url} alt="Token" className="personagem-token" />}
              </div>
              <div className="personagem-visualizacao__stats">
                <div className="stat">
                  <span className="stat-label">PV</span>
                  <span className="stat-value">{showFull ? `${dados.pv_atual || 0}/${dados.pv_max || 0}` : '???'}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">PM</span>
                  <span className="stat-value">{showFull ? `${dados.pm_atual || 0}/${dados.pm_max || 0}` : '???'}</span>
                </div>
                {showFull && (
                  <>
                    <div className="stat">
                      <span className="stat-label">Nível</span>
                      <span className="stat-value">{dados.nivel_principal || 1}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Classe</span>
                      <span className="stat-value">{dados.classe_principal || '-'}</span>
                    </div>
                  </>
                )}
              </div>
              {showFull && dados.historia && (
                <div className="personagem-visualizacao__historia">
                  <h4>História</h4>
                  <p>{dados.historia}</p>
                </div>
              )}
              {!showFull && <p className="personagem-visualizacao__aviso">Apenas o Mestre e o Jogador podem ver detalhes completos.</p>}
            </div>
          </div>
        </div>
      )
    }

    if (item.tipo === 'ameaca') {
      const dados = ameacaData || {}

      return (
        <div className="modal-visualizar modal-visualizar--ameaca" onClick={e => e.target === e.currentTarget && onClose()}>
          <div className="modal-visualizar__container">
            <div className="modal-visualizar__header">
              <h3>{item.nome}</h3>
              <button onClick={onClose}><FiX /></button>
            </div>
            <div className="ameaca-visualizacao">
              <div className="ameaca-visualizacao__header">
                {dados.imagem_url && <img src={dados.imagem_url} alt={item.nome} className="ameaca-imagem" />}
                {dados.token_url && <img src={dados.token_url} alt="Token" className="ameaca-token" />}
              </div>
              <div className="ameaca-visualizacao__stats">
                <div className="stat">
                  <span className="stat-label">ND</span>
                  <span className="stat-value">{isGM ? (dados.nd || '-') : '???'}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">PV</span>
                  <span className="stat-value">{isGM ? (dados.pv || '???') : '???'}</span>
                </div>
                {isGM && (
                  <>
                    <div className="stat">
                      <span className="stat-label">Defesa</span>
                      <span className="stat-value">{dados.defesa || '-'}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Tamanho</span>
                      <span className="stat-value">{dados.tamanho || '-'}</span>
                    </div>
                  </>
                )}
              </div>
              {!isGM && <p className="ameaca-visualizacao__aviso">Apenas o Mestre pode ver os detalhes completos da ameaça.</p>}
            </div>
          </div>
        </div>
      )
    }

    if (item.tipo === 'nota') {
      const podeEditarNota = isGM || item.criado_por === profile.id
      const [conteudo, setConteudo] = useState(item.conteudo?.texto || '')

      const salvarNota = async () => {
        await atualizarItem(item.id, { conteudo: { ...item.conteudo, texto: conteudo } })
      }

      return (
        <div className="modal-visualizar modal-visualizar--nota" onClick={e => e.target === e.currentTarget && onClose()}>
          <div className="modal-visualizar__container">
            <div className="modal-visualizar__header">
              <h3>{item.nome}</h3>
              <button onClick={onClose}><FiX /></button>
            </div>
            <div className="nota-visualizacao">
              {podeEditarNota ? (
                <textarea
                  className="nota-editor"
                  value={conteudo}
                  onChange={e => setConteudo(e.target.value)}
                  onBlur={salvarNota}
                  placeholder="Escreva sua nota aqui..."
                />
              ) : (
                <p className="nota-conteudo">{conteudo || 'Sem conteúdo'}</p>
              )}
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  function ModalMoverItem({ item, onClose }) {
    const [selectedParent, setSelectedParent] = useState(null)
    
    const pastas = itens.filter(i => i.tipo === 'pasta')
    
    const renderPastaOption = (pasta, depth = 0) => {
      return (
        <div key={pasta.id}>
          <button
            className={`mover-option ${selectedParent === pasta.id ? 'selected' : ''}`}
            style={{ paddingLeft: `${12 + depth * 16}px` }}
            onClick={() => setSelectedParent(pasta.id)}
          >
            <FiFolder size={14} /> {pasta.nome}
          </button>
          {abertas[pasta.id] && pastas.filter(p => p.parent_id === pasta.id).map(p => renderPastaOption(p, depth + 1))}
        </div>
      )
    }

    return (
      <div className="pp-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
        <div className="pp-box pp-box--mover">
          <div className="pp-header">
            <span>Mover "{item.nome}" para...</span>
            <button className="pp-close" onClick={onClose}><FiX /></button>
          </div>
          <div className="pp-body mover-items">
            <button
              className={`mover-option ${selectedParent === null ? 'selected' : ''}`}
              onClick={() => setSelectedParent(null)}
            >
              <FiFolder size={14} /> Raiz
            </button>
            {pastas.filter(p => !p.parent_id).map(p => renderPastaOption(p))}
          </div>
          <div className="pp-footer">
            <button className="pp-btn pp-btn--ghost" onClick={onClose}>Cancelar</button>
            <button className="pp-btn pp-btn--confirm" onClick={() => { moverItem(item.id, selectedParent); onClose() }}>
              Mover
            </button>
          </div>
        </div>
      </div>
    )
  }

  const raiz = filhosDirectos(null)

  return (
    <div className="pastas-painel" ref={rootRef}>
      <div className="pastas-header">
        <span className="pastas-header__title">
          <FiFolder size={14} /> Arquivos
        </span>
        <div className="pastas-header__actions">
          <AddDropdown isGM={isGM} pdfRef={pdfRef} imgRef={imgRef}
            onAction={(tipo, parentId) => abrirModal(tipo, parentId)} />
        </div>
      </div>

      <div className="pastas-raiz">
        {loading ? (
          <div className="pastas-empty"><span>Carregando...</span></div>
        ) : raiz.length === 0 ? (
          <div className="pastas-empty">
            <FiFolder size={28} style={{ opacity: 0.2 }} />
            <span>Nenhum arquivo ainda</span>
            <small>Clique em + Add ou botão direito</small>
          </div>
        ) : (
          raiz.map(item => <RenderNo key={item.id} item={item} />)
        )}
      </div>

      <input ref={pdfRef} type="file" accept=".pdf" style={{ display: 'none' }}
        onChange={e => handleUpload(e, 'pdf', modal?.dados || null)} />
      <input ref={imgRef} type="file" accept="image/*" style={{ display: 'none' }}
        onChange={e => handleUpload(e, 'imagem', modal?.dados || null)} />

      {ctxMenu && (
        <div className="ctx-menu" style={{ top: ctxMenu.y, left: ctxMenu.x }}>
          {opcoesCtx(ctxMenu.alvo).map((opt, i) =>
            opt.sep ? <div key={i} className="ctx-sep" /> :
            <button key={i} className={`ctx-item ${opt.danger ? 'ctx-item--danger' : ''}`}
              onClick={() => { opt.acao(); setCtxMenu(null) }}>
              <opt.icon size={13} /> {opt.label}
            </button>
          )}
        </div>
      )}

      {itemVisualizando && <ModalVisualizar item={itemVisualizando} onClose={() => setItemVisualizando(null)} />}
      {movendoItem && <ModalMoverItem item={movendoItem} onClose={() => setMovendoItem(null)} />}
      
      {modal?.tipo === 'pasta' && <ModalNovaPasta parentId={modal.dados} onClose={fecharModal} />}
      {modal?.tipo === 'nota' && <ModalNovaNota parentId={modal.dados} onClose={fecharModal} />}
      {modal?.tipo === 'personagem' && <ModalPersonagem parentId={modal.dados} onClose={fecharModal} />}
      {modal?.tipo === 'ameaca' && <ModalAmeaca parentId={modal.dados} onClose={fecharModal} />}
      {modal?.tipo === 'confirmar-excluir' && <ModalConfirmarExcluir item={modal.dados} onClose={fecharModal} />}
    </div>
  )
}

// Modais simplificados...
function ModalNovaPasta({ parentId, onClose }) {
  const [nome, setNome] = useState('')
  return (
    <PopupSimples titulo="Nova Pasta" onClose={onClose} onConfirm={() => {}} confirmLabel="Criar">
      <input className="pp-input" placeholder="Nome da pasta" value={nome} onChange={e => setNome(e.target.value)} autoFocus />
    </PopupSimples>
  )
}

function ModalNovaNota({ parentId, onClose }) {
  const [nome, setNome] = useState('')
  return (
    <PopupSimples titulo="Nova Nota" onClose={onClose} onConfirm={() => {}} confirmLabel="Criar">
      <input className="pp-input" placeholder="Título da nota" value={nome} onChange={e => setNome(e.target.value)} autoFocus />
    </PopupSimples>
  )
}

function ModalPersonagem({ parentId, onClose }) {
  const [nome, setNome] = useState('')
  return (
    <PopupSimples titulo="Novo Personagem" onClose={onClose} onConfirm={() => {}} confirmLabel="Criar">
      <input className="pp-input" placeholder="Nome do personagem" value={nome} onChange={e => setNome(e.target.value)} autoFocus />
    </PopupSimples>
  )
}

function ModalAmeaca({ parentId, onClose }) {
  const [nome, setNome] = useState('')
  return (
    <PopupSimples titulo="Nova Ameaça" onClose={onClose} onConfirm={() => {}} confirmLabel="Criar">
      <input className="pp-input" placeholder="Nome da ameaça" value={nome} onChange={e => setNome(e.target.value)} autoFocus />
    </PopupSimples>
  )
}

function ModalConfirmarExcluir({ item, onClose }) {
  return (
    <PopupSimples titulo="Confirmar exclusão" onClose={onClose} onConfirm={() => {}} confirmLabel="Excluir" danger>
      <p>Excluir "{item.nome}" permanentemente?</p>
    </PopupSimples>
  )
}

function AddDropdown({ isGM, onAction, pdfRef, imgRef }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) { if (!ref.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const opcoes = [
    { label: 'Nova Pasta', icon: FiFolderPlus, acao: () => onAction('pasta', null) },
    { label: 'Adicionar PDF', icon: BsFilePdf, acao: () => pdfRef.current?.click() },
    { label: 'Adicionar Imagem', icon: BsFileImage, acao: () => imgRef.current?.click() },
    { label: 'Criar Nota', icon: GiScrollUnfurled, acao: () => onAction('nota', null) },
    { label: 'Criar Personagem', icon: GiPerson, acao: () => onAction('personagem', null) },
    ...(isGM ? [{ label: 'Criar Ameaça', icon: GiDragonHead, acao: () => onAction('ameaca', null) }] : []),
  ]

  return (
    <div className="add-dropdown" ref={ref}>
      <button className="add-btn" onClick={() => setOpen(v => !v)}>
        <FiPlus size={13} /> Add
      </button>
      {open && (
        <div className="add-dropdown__menu">
          {opcoes.map((opt, i) => (
            <button key={i} className="add-dropdown__item" onClick={() => { opt.acao(); setOpen(false) }}>
              <opt.icon size={13} /> {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function PopupSimples({ titulo, children, onClose, onConfirm, confirmLabel = 'Confirmar', danger = false }) {
  return (
    <div className="pp-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="pp-box">
        <div className="pp-header">
          <span>{titulo}</span>
          <button className="pp-close" onClick={onClose}><FiX size={15} /></button>
        </div>
        <div className="pp-body">{children}</div>
        <div className="pp-footer">
          <button className="pp-btn pp-btn--ghost" onClick={onClose}>Cancelar</button>
          <button className={`pp-btn ${danger ? 'pp-btn--danger' : 'pp-btn--confirm'}`} onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}