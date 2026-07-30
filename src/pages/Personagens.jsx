// Personagens.jsx — Banco de Personagens (até 20, salvos no navegador)
import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus, FiEdit2, FiTrash2, FiDownload, FiEye } from 'react-icons/fi'
import { GiScrollUnfurled } from 'react-icons/gi'
import { listarPersonagens, excluirPersonagem, MAX_PERSONAGENS } from '../lib/personagensStorage'
import { exportarPersonagemPdf } from '../lib/personagemPdf'
import './Personagens.css'

export default function Personagens() {
  const navigate = useNavigate()
  const [personagens, setPersonagens] = useState([])
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [baixandoId, setBaixandoId] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPersonagens(listarPersonagens())
  }, [])

  const cheio = personagens.length >= MAX_PERSONAGENS

  function handleDelete(id) {
    excluirPersonagem(id)
    setPersonagens(listarPersonagens())
    setConfirmDelete(null)
  }

  async function handlePdf(p) {
    setBaixandoId(p.id)
    try {
      await exportarPersonagemPdf(p)
    } catch (err) {
      alert('Erro ao gerar PDF: ' + err.message)
    } finally {
      setBaixandoId(null)
    }
  }

  return (
    <div className="personagens">
      <section className="personagens__hero">
        <div className="personagens__hero-content">
          <div className="personagens__hero-badge">
            <GiScrollUnfurled size={14} />
            Banco de Heróis
            <GiScrollUnfurled size={14} />
          </div>
          <h1 className="personagens__hero-title">Meus Personagens</h1>
          <p className="personagens__hero-desc">
            {personagens.length} de {MAX_PERSONAGENS} fichas criadas
          </p>
        </div>
      </section>

      <div className="container personagens__body">
        <div className="personagens__toolbar">
          <button
            className="personagens__new-btn"
            disabled={cheio}
            onClick={() => navigate('/personagens/novo')}
            title={cheio ? `Limite de ${MAX_PERSONAGENS} personagens atingido` : 'Criar novo personagem'}
          >
            <FiPlus /> Criar Personagem
          </button>
          {cheio && (
            <p className="personagens__limit-msg">
              Limite atingido — apague um personagem para criar outro.
            </p>
          )}
        </div>

        {personagens.length === 0 ? (
          <div className="personagens__empty">
            <GiScrollUnfurled size={44} />
            <p className="personagens__empty-title">Nenhum personagem por aqui ainda.</p>
            <p className="personagens__empty-sub">Crie seu primeiro herói para começar a aventura.</p>
          </div>
        ) : (
          <div className="personagens__grid">
            {personagens.map((p) => (
              <PersonagemCard
                key={p.id}
                p={p}
                baixando={baixandoId === p.id}
                onEdit={() => navigate(`/personagens/${p.id}/editar`)}
                onView={() => navigate(`/personagens/${p.id}`)}
                onPdf={() => handlePdf(p)}
                onDeleteRequest={() => setConfirmDelete(p)}
              />
            ))}
          </div>
        )}
      </div>

      {confirmDelete && (
        <div className="personagens__modal-overlay" onClick={() => setConfirmDelete(null)}>
          <div className="personagens__modal" onClick={(e) => e.stopPropagation()}>
            <h3>Apagar {confirmDelete.nome || 'personagem'}?</h3>
            <p>Essa ação não pode ser desfeita.</p>
            <div className="personagens__modal-actions">
              <button className="personagens__modal-cancel" onClick={() => setConfirmDelete(null)}>Cancelar</button>
              <button className="personagens__modal-confirm" onClick={() => handleDelete(confirmDelete.id)}>Apagar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PersonagemCard({ p, baixando, onEdit, onView, onPdf, onDeleteRequest }) {
  const classeLabel = useMemo(() => {
    const lista = (p.classes || []).filter((c) => c.nome)
    if (!lista.length) return 'Classe?'
    return lista.map((c) => `${c.nome}${c.subclasse ? ` (${c.subclasse})` : ''} ${c.nivel}`).join(' / ')
  }, [p.classes])

  return (
    <div className="personagem-card">
      <div className="personagem-card__image-wrap">
        {p.imagem ? (
          <img src={p.imagem} alt={p.nome} className="personagem-card__image" />
        ) : (
          <div className="personagem-card__image-placeholder">🎭</div>
        )}
      </div>

      <div className="personagem-card__body">
        <h3 className="personagem-card__name">{p.nome || 'Sem Nome'}</h3>
        <p className="personagem-card__meta">{p.raca || 'Raça?'} · {classeLabel}</p>

        <div className="personagem-card__stats">
          <span className="personagem-card__stat">❤️ {p.pvAtual ?? p.pv ?? 0}/{p.pv ?? 0}</span>
          <span className="personagem-card__stat">✨ {p.pmAtual ?? p.pm ?? 0}/{p.pm ?? 0}</span>
          <span className="personagem-card__stat">🛡️ {p.defesa ?? 0}</span>
        </div>

        <div className="personagem-card__actions">
          <button className="personagem-card__btn" onClick={onView} title="Ver ficha">
            <FiEye /> Ficha
          </button>
          <button className="personagem-card__btn" onClick={onEdit} title="Editar">
            <FiEdit2 /> Editar
          </button>
          <button className="personagem-card__btn" onClick={onPdf} disabled={baixando} title="Baixar PDF">
            <FiDownload /> {baixando ? '...' : 'PDF'}
          </button>
          <button className="personagem-card__btn personagem-card__btn--danger" onClick={onDeleteRequest} title="Apagar">
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  )
}