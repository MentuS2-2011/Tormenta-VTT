import { useState, useEffect, useCallback, useRef } from 'react'
import { 
  FiFolder, FiFolderPlus, FiFile, FiImage, FiUsers, FiUserPlus, 
  FiShield, FiFileText, FiTrash2, FiEdit2, FiChevronRight, 
  FiChevronDown, FiPlus, FiUpload, FiDownload, FiX, FiSave,
  FiUser, FiAlertCircle
} from 'react-icons/fi'
import { supabase } from '../../../lib/supabase'
import './Pastas.css'

export default function Pastas({ mesaId, papel, profile }) {
  const [pastas, setPastas] = useState([])
  const [arquivos, setArquivos] = useState([])
  const [pastaAtual, setPastaAtual] = useState(null)
  const [caminho, setCaminho] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalAberto, setModalAberto] = useState(null)
  const [modalData, setModalData] = useState({})
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, item: null })
  const [renameInput, setRenameInput] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    carregarArquivos()
  }, [mesaId, pastaAtual])

  async function carregarArquivos() {
    setLoading(true)
    const parentId = pastaAtual?.id || null
    
    const { data, error } = await supabase
      .from('mesa_arquivos')
      .select('*')
      .eq('mesa_id', mesaId)
      .eq('parent_id', parentId)
      .order('tipo', { ascending: false })
      .order('nome', { ascending: true })

    if (!error && data) {
      const pastasList = data.filter(f => f.tipo === 'pasta')
      const arquivosList = data.filter(f => f.tipo !== 'pasta')
      setPastas(pastasList)
      setArquivos(arquivosList)
    }
    setLoading(false)
  }

  async function criarPasta(nome) {
    if (!nome.trim()) return
    
    const { error } = await supabase
      .from('mesa_arquivos')
      .insert({
        mesa_id: mesaId,
        parent_id: pastaAtual?.id || null,
        nome: nome.trim(),
        tipo: 'pasta',
        criado_por: profile.id
      })
    
    if (!error) {
      carregarArquivos()
      fecharModal()
    }
  }

  async function criarItem(tipo, nome) {
    if (!nome.trim()) return
    
    const { error } = await supabase
      .from('mesa_arquivos')
      .insert({
        mesa_id: mesaId,
        parent_id: pastaAtual?.id || null,
        nome: nome.trim(),
        tipo: tipo,
        conteudo: tipo === 'nota' ? { texto: '' } : {},
        criado_por: profile.id
      })
    
    if (!error) {
      carregarArquivos()
      fecharModal()
    }
  }

  async function uploadArquivo(file, tipo) {
    if (!file) return
    
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}_${file.name}`
    const filePath = `${mesaId}/${pastaAtual?.id || 'root'}/${fileName}`
    
    const { error: uploadError } = await supabase.storage
      .from('mesa-arquivos')
      .upload(filePath, file)
    
    if (uploadError) {
      console.error('Erro no upload:', uploadError)
      return
    }
    
    const { data: urlData } = supabase.storage
      .from('mesa-arquivos')
      .getPublicUrl(filePath)
    
    const { error } = await supabase
      .from('mesa_arquivos')
      .insert({
        mesa_id: mesaId,
        parent_id: pastaAtual?.id || null,
        nome: file.name,
        tipo: tipo === 'pdf' ? 'pdf' : 'imagem',
        url: urlData.publicUrl,
        criado_por: profile.id
      })
    
    if (!error) carregarArquivos()
  }

  async function deletarItem(item) {
    if (item.tipo === 'pasta') {
      // Deletar recursivamente
      const { error } = await supabase
        .from('mesa_arquivos')
        .delete()
        .eq('id', item.id)
      
      if (!error) carregarArquivos()
    } else {
      if (item.url) {
        const path = item.url.split('/').slice(-3).join('/')
        await supabase.storage.from('mesa-arquivos').remove([path])
      }
      
      const { error } = await supabase
        .from('mesa_arquivos')
        .delete()
        .eq('id', item.id)
      
      if (!error) carregarArquivos()
    }
    fecharContextMenu()
  }

  async function renomearItem(item, novoNome) {
    if (!novoNome.trim() || novoNome === item.nome) return
    
    const { error } = await supabase
      .from('mesa_arquivos')
      .update({ nome: novoNome.trim() })
      .eq('id', item.id)
    
    if (!error) carregarArquivos()
    setRenameInput('')
  }

  async function atualizarNota(item, conteudo) {
    const { error } = await supabase
      .from('mesa_arquivos')
      .update({ conteudo: { texto: conteudo } })
      .eq('id', item.id)
    
    if (!error) carregarArquivos()
  }

  function abrirPasta(pasta) {
    setCaminho([...caminho, pasta])
    setPastaAtual(pasta)
  }

  function voltarPasta() {
    const novoCaminho = [...caminho]
    novoCaminho.pop()
    setCaminho(novoCaminho)
    setPastaAtual(novoCaminho[novoCaminho.length - 1] || null)
  }

  function abrirModal(tipo, dados = {}) {
    setModalData({ tipo, ...dados })
    setModalAberto(tipo)
  }

  function fecharModal() {
    setModalAberto(null)
    setModalData({})
  }

  function abrirContextMenu(e, item) {
    e.preventDefault()
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      item: item
    })
  }

  function fecharContextMenu() {
    setContextMenu({ visible: false, x: 0, y: 0, item: null })
  }

  useEffect(() => {
    const handleClick = () => fecharContextMenu()
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const getIcon = (item) => {
    if (item.tipo === 'pasta') return <FiFolder size={20} />
    if (item.tipo === 'pdf') return <FiFile size={20} />
    if (item.tipo === 'imagem') return <FiImage size={20} />
    if (item.tipo === 'personagem') return <FiUsers size={20} />
    if (item.tipo === 'ameaca') return <FiShield size={20} />
    if (item.tipo === 'nota') return <FiFileText size={20} />
    return <FiFile size={20} />
  }

  return (
    <div className="pastas-container" onClick={fecharContextMenu}>
      {/* Header com botões */}
      <div className="pastas-header">
        <div className="pastas-breadcrumb">
          <button className="breadcrumb-btn" onClick={() => { setPastaAtual(null); setCaminho([]) }}>
            Raiz
          </button>
          {caminho.map((pasta, idx) => (
            <span key={pasta.id}>
              <FiChevronRight size={12} />
              <button className="breadcrumb-btn" onClick={() => {
                setCaminho(caminho.slice(0, idx + 1))
                setPastaAtual(pasta)
              }}>
                {pasta.nome}
              </button>
            </span>
          ))}
        </div>
        
        <div className="pastas-actions">
          <button className="action-btn" onClick={() => abrirModal('pasta')} title="Nova Pasta">
            <FiFolderPlus size={16} /> Pasta
          </button>
          <button className="action-btn" onClick={() => fileInputRef.current?.click()} title="Upload PDF/Imagem">
            <FiUpload size={16} /> Upload
          </button>
          <button className="action-btn" onClick={() => abrirModal('personagem')} title="Novo Personagem">
            <FiUserPlus size={16} /> Personagem
          </button>
          {papel === 'gm' && (
            <button className="action-btn" onClick={() => abrirModal('ameaca')} title="Nova Ameaça">
              <FiShield size={16} /> Ameaça
            </button>
          )}
          <button className="action-btn" onClick={() => abrirModal('nota')} title="Nova Nota">
            <FiFileText size={16} /> Nota
          </button>
        </div>
      </div>

      {/* Input file escondido */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,image/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files[0]
          if (file) {
            const tipo = file.type.includes('pdf') ? 'pdf' : 'imagem'
            uploadArquivo(file, tipo)
          }
          e.target.value = ''
        }}
      />

      {/* Loading */}
      {loading && (
        <div className="pastas-loading">
          <div className="spinner" />
          <p>Carregando arquivos...</p>
        </div>
      )}

      {/* Conteúdo */}
      {!loading && (
        <div className="pastas-content">
          {/* Pastas */}
          {pastas.length > 0 && (
            <div className="pastas-section">
              <h4 className="section-title"><FiFolder size={14} /> Pastas</h4>
              <div className="pastas-grid">
                {pastas.map(pasta => (
                  <div
                    key={pasta.id}
                    className="pasta-item"
                    onDoubleClick={() => abrirPasta(pasta)}
                    onContextMenu={(e) => abrirContextMenu(e, pasta)}
                  >
                    <div className="pasta-icon"><FiFolder size={32} /></div>
                    <span className="pasta-nome">{pasta.nome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Arquivos */}
          {arquivos.length > 0 && (
            <div className="arquivos-section">
              <h4 className="section-title"><FiFile size={14} /> Arquivos</h4>
              <div className="arquivos-grid">
                {arquivos.map(arquivo => (
                  <div
                    key={arquivo.id}
                    className={`arquivo-item tipo-${arquivo.tipo}`}
                    onContextMenu={(e) => abrirContextMenu(e, arquivo)}
                    onClick={() => {
                      if (arquivo.tipo === 'nota') abrirModal('editar-nota', { item: arquivo })
                      if (arquivo.tipo === 'personagem') console.log('Abrir personagem:', arquivo)
                      if (arquivo.tipo === 'ameaca') console.log('Abrir ameaça:', arquivo)
                    }}
                  >
                    <div className="arquivo-icon">{getIcon(arquivo)}</div>
                    <span className="arquivo-nome">{arquivo.nome}</span>
                    {arquivo.tipo === 'imagem' && (
                      <div className="arquivo-preview">
                        <img src={arquivo.url} alt={arquivo.nome} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vazio */}
          {pastas.length === 0 && arquivos.length === 0 && (
            <div className="pastas-empty">
              <FiFolder size={48} />
              <p>Pasta vazia</p>
              <span>Clique em "+" para adicionar arquivos</span>
            </div>
          )}
        </div>
      )}

      {/* Context Menu */}
      {contextMenu.visible && (
        <div 
          className="context-menu"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button onClick={() => {
            setRenameInput(contextMenu.item.nome)
            fecharContextMenu()
            const novoNome = prompt('Novo nome:', contextMenu.item.nome)
            if (novoNome) renomearItem(contextMenu.item, novoNome)
          }}>
            <FiEdit2 size={14} /> Renomear
          </button>
          <button className="danger" onClick={() => {
            if (confirm(`Tem certeza que deseja excluir "${contextMenu.item.nome}"?`)) {
              deletarItem(contextMenu.item)
            }
          }}>
            <FiTrash2 size={14} /> Excluir
          </button>
        </div>
      )}

      {/* Modal de criação */}
      {modalAberto && modalAberto !== 'editar-nota' && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {modalData.tipo === 'pasta' && <FiFolderPlus size={18} />}
                {modalData.tipo === 'personagem' && <FiUsers size={18} />}
                {modalData.tipo === 'ameaca' && <FiShield size={18} />}
                {modalData.tipo === 'nota' && <FiFileText size={18} />}
                {modalData.tipo === 'pasta' && 'Nova Pasta'}
                {modalData.tipo === 'personagem' && 'Novo Personagem'}
                {modalData.tipo === 'ameaca' && 'Nova Ameaça'}
                {modalData.tipo === 'nota' && 'Nova Nota'}
              </h3>
              <button className="close-btn" onClick={fecharModal}><FiX size={18} /></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="modal-input"
                placeholder={`Nome da ${modalData.tipo === 'pasta' ? 'pasta' : modalData.tipo === 'personagem' ? 'personagem' : modalData.tipo === 'ameaca' ? 'ameaça' : 'nota'}`}
                autoFocus
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    if (modalData.tipo === 'pasta') criarPasta(e.target.value)
                    else if (modalData.tipo === 'personagem') criarItem('personagem', e.target.value)
                    else if (modalData.tipo === 'ameaca') criarItem('ameaca', e.target.value)
                    else if (modalData.tipo === 'nota') criarItem('nota', e.target.value)
                  }
                }}
              />
              {modalData.tipo === 'personagem' && (
                <p className="modal-hint">⚡ Em breve: ficha completa de personagem</p>
              )}
              {modalData.tipo === 'ameaca' && (
                <p className="modal-hint">⚔️ Em breve: ficha completa de ameaça</p>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={fecharModal}>Cancelar</button>
              <button className="btn-primary" onClick={() => {
                const input = document.querySelector('.modal-input')
                if (modalData.tipo === 'pasta') criarPasta(input.value)
                else if (modalData.tipo === 'personagem') criarItem('personagem', input.value)
                else if (modalData.tipo === 'ameaca') criarItem('ameaca', input.value)
                else if (modalData.tipo === 'nota') criarItem('nota', input.value)
              }}>Criar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de editar nota */}
      {modalAberto === 'editar-nota' && modalData.item && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3><FiFileText size={18} /> Editar Nota: {modalData.item.nome}</h3>
              <button className="close-btn" onClick={fecharModal}><FiX size={18} /></button>
            </div>
            <div className="modal-body">
              <textarea
                className="modal-textarea"
                defaultValue={modalData.item.conteudo?.texto || ''}
                placeholder="Escreva sua nota aqui..."
                rows={15}
                id="nota-conteudo"
              />
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={fecharModal}>Cancelar</button>
              <button className="btn-primary" onClick={() => {
                const conteudo = document.getElementById('nota-conteudo').value
                atualizarNota(modalData.item, conteudo)
                fecharModal()
              }}>
                <FiSave size={14} /> Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}