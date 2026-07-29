// Classes.jsx — Página de Classes de Tormenta 20
import { useState, useMemo, useEffect, createElement } from 'react'
import {
  GiSwordman,
  GiMagnifyingGlass,
  GiScrollUnfurled,
  GiHearts,
  GiPowerLightning,
  GiCrossedSwords,
  GiStarsStack
} from 'react-icons/gi'
import { FiX } from 'react-icons/fi'
import { classesData } from '../data/classesData'
import { getClassIcon, PODER_CATEGORIAS, categorizarPoder, extrairNivel } from '../data/classesMeta'
import './Classes.css'

const LIVROS = ['todas', 'Livro Básico', 'Heróis de Arton', 'Atlas de Arton']
const NIVEL_MAX = 20

const livroLabel = (livro) =>
  livro === 'Atlas de Arton' ? 'CNO — Conteúdo não Oficial' : livro

export default function Classes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLivro, setSelectedLivro] = useState('todas')
  const [activeClass, setActiveClass] = useState(null)

  const filtered = useMemo(() => {
    const termo = searchTerm.toLowerCase().trim()
    return classesData.filter((c) => {
      const passaTexto = !termo || c.nome.toLowerCase().includes(termo)
      const passaLivro = selectedLivro === 'todas' || c.livro === selectedLivro
      return passaTexto && passaLivro
    })
  }, [searchTerm, selectedLivro])

  useEffect(() => {
    document.body.style.overflow = activeClass ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeClass])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setActiveClass(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="classes">
      {/* Hero */}
      <section className="classes__hero">
        <div className="classes__hero-bg" />
        <div className="classes__hero-content">
          <div className="classes__hero-badge">
            <GiSwordman size={14} />
            Compêndio de Arton
            <GiSwordman size={14} />
          </div>
          <h1 className="classes__hero-title">
            Classes de <span className="classes__hero-accent">Tormenta</span>
          </h1>
          <div className="classes__hero-divider">
            <span className="classes__hero-diamond" />
            <span className="classes__hero-diamond" />
            <span className="classes__hero-diamond" />
          </div>
          <p className="classes__hero-desc">
            Acervo com Poderes do livro básico + Heróis de arton + DB 212
          </p>
        </div>
      </section>

      {/* Filtros */}
      <div className="classes__filters">
        <div className="container">
          <div className="classes__filters-inner">
            <div className="classes__search">
              <GiMagnifyingGlass className="classes__search-icon" />
              <input
                type="text"
                placeholder="Pesquisar classe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="classes__search-input"
              />
              {searchTerm && (
                <button
                  className="classes__search-clear"
                  aria-label="Limpar pesquisa"
                  onClick={() => setSearchTerm('')}
                >
                  <FiX />
                </button>
              )}
            </div>
            <div className="classes__categories">
              {LIVROS.map((livro) => (
                <button
                  key={livro}
                  className={`classes__category-btn ${selectedLivro === livro ? 'classes__category-btn--active' : ''}`}
                  onClick={() => setSelectedLivro(livro)}
                >
                  {livro === 'todas' ? 'Todos' : livroLabel(livro)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contador */}
      <div className="classes__count">
        <div className="container">
          <p className="classes__count-text">
            <span className="classes__count-number">{filtered.length}</span>
            {filtered.length === 1 ? 'classe encontrada' : 'classes encontradas'}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="classes__grid-section">
        <div className="container">
          {filtered.length > 0 ? (
            <div className="classes__grid">
              {filtered.map((c) => (
                <ClasseCard key={c.nome} classe={c} onSelect={() => setActiveClass(c)} />
              ))}
            </div>
          ) : (
            <div className="classes__empty">
              <GiScrollUnfurled size={48} />
              <p className="classes__empty-title">Nenhuma classe encontrada.</p>
              <p className="classes__empty-sub">Tente um termo diferente ou remova os filtros.</p>
            </div>
          )}
        </div>
      </div>

      {activeClass && (
        <ClasseModal classe={activeClass} onClose={() => setActiveClass(null)} />
      )}
    </div>
  )
}

function ClasseCard({ classe: c, onSelect }) {
  const iconEl = useMemo(
    () => createElement(getClassIcon(c.nome), { className: 'classe-card__icon' }),
    [c.nome]
  )

  return (
    <button className="classe-card" onClick={onSelect}>
      <span className="classe-card__corner classe-card__corner--tl" aria-hidden="true" />
      <span className="classe-card__corner classe-card__corner--tr" aria-hidden="true" />
      <span className="classe-card__corner classe-card__corner--bl" aria-hidden="true" />
      <span className="classe-card__corner classe-card__corner--br" aria-hidden="true" />

      <div className="classe-card__icon-wrap">
        {iconEl}
      </div>

      <div className="classe-card__content">
        <span className="classe-card__category">{livroLabel(c.livro)}</span>
        <h3 className="classe-card__title">{c.nome}</h3>
        <p className="classe-card__desc">{c.descricao.split('\n')[0]}</p>

        <div className="classe-card__meta">
          <span className="classe-card__meta-item"><GiHearts /> {c.pv.split(';')[0]}</span>
          <span className="classe-card__meta-item"><GiPowerLightning /> {c.pm}</span>
        </div>

        <span className="classe-card__view">Ver detalhes →</span>
      </div>
    </button>
  )
}

function ClasseModal({ classe, onClose }) {
  const iconEl = useMemo(
    () => createElement(getClassIcon(classe.nome), { className: 'classe-modal__icon' }),
    [classe.nome]
  )

  const [categoriasAtivas, setCategoriasAtivas] = useState([])
  const [nivelMax, setNivelMax] = useState('todos')

  // Pré-calcula categorias e nível de cada poder uma única vez
  const poderesInfo = useMemo(() => {
    return (classe.poderes || []).map((p) => ({
      ...p,
      _categorias: categorizarPoder(p),
      _nivel: extrairNivel(p.descricao)
    }))
  }, [classe])

  const poderesFiltrados = useMemo(() => {
    return poderesInfo.filter((p) => {
      const passaNivel = nivelMax === 'todos' || p._nivel <= Number(nivelMax)
      const passaCategoria =
        categoriasAtivas.length === 0 ||
        categoriasAtivas.some((cat) => p._categorias.includes(cat))
      return passaNivel && passaCategoria
    })
  }, [poderesInfo, categoriasAtivas, nivelMax])

  function toggleCategoria(cat) {
    setCategoriasAtivas((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  function limparFiltrosPoderes() {
    setCategoriasAtivas([])
    setNivelMax('todos')
  }

  const filtrosAtivos = categoriasAtivas.length > 0 || nivelMax !== 'todos'

  return (
    <div className="classe-modal-overlay" onClick={onClose}>
      <div className="classe-modal" onClick={(e) => e.stopPropagation()}>
        <button className="classe-modal__close" onClick={onClose} aria-label="Fechar">
          <FiX />
        </button>

        <div className="classe-modal__page">
          <div className="classe-modal__inner">
            <header className="classe-modal__header">
              <span className="classe-modal__book-label">{livroLabel(classe.livro)}</span>
              <h2 className="classe-modal__title">{classe.nome}</h2>
              <div className="classe-modal__ornament" aria-hidden="true">
                <span className="classe-modal__ornament-line" />
                <span className="classe-modal__ornament-center">◆ ◇ ◆</span>
                <span className="classe-modal__ornament-line" />
              </div>
              {classe.famosos && (
                <p className="classe-modal__famosos">Exemplos: {classe.famosos}</p>
              )}
            </header>

            <div className="classe-modal__stats">
              <div className="classe-modal__stat">
                <GiHearts />
                <div>
                  <span className="classe-modal__stat-label">Pontos de Vida</span>
                  <span className="classe-modal__stat-value">{classe.pv}</span>
                </div>
              </div>
              <div className="classe-modal__stat">
                <GiPowerLightning />
                <div>
                  <span className="classe-modal__stat-label">Pontos de Mana</span>
                  <span className="classe-modal__stat-value">{classe.pm}</span>
                </div>
              </div>
            </div>

            <div className="classe-modal__divider" aria-hidden="true">
              <span className="classe-modal__divider-line" />
              <span>◆</span>
              <span className="classe-modal__divider-line" />
            </div>

            <div className="classe-modal__icon-wrap">
              {iconEl}
            </div>

            <blockquote className="classe-modal__descricao">
              {classe.descricao.split('\n\n').map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </blockquote>

            {(classe.pericias || classe.proficiencias) && (
              <section className="classe-modal__section">
                <p className="classe-modal__section-label">Perícias &amp; Proficiências</p>
                <div className="classe-modal__info-grid">
                  {classe.pericias && (
                    <div className="classe-modal__info-item">
                      <span className="classe-modal__info-label">Perícias</span>
                      <span className="classe-modal__info-value">{classe.pericias}</span>
                    </div>
                  )}
                  {classe.proficiencias && (
                    <div className="classe-modal__info-item">
                      <span className="classe-modal__info-label">Proficiências</span>
                      <span className="classe-modal__info-value">{classe.proficiencias}</span>
                    </div>
                  )}
                </div>
              </section>
            )}

            {classe.tabela?.length > 0 && (
              <section className="classe-modal__section">
                <p className="classe-modal__section-label">Progressão da Classe</p>
                <div className="classe-modal__table-wrap">
                  <table className="classe-modal__table">
                    <thead>
                      <tr>
                        <th className="classe-modal__table-col-nivel">Nível</th>
                        <th>Habilidades de Classe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classe.tabela.map((row) => (
                        <tr key={row.nivel}>
                          <td className="classe-modal__table-col-nivel">{row.nivel}</td>
                          <td>{row.habilidades}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {classe.habilidades?.length > 0 && (
              <section className="classe-modal__section">
                <p className="classe-modal__section-label">
                  <GiCrossedSwords /> Habilidades de Classe
                </p>
                <div className="classe-modal__powers-list">
                  {classe.habilidades.map((h) => (
                    <div key={h.nome} className="classe-modal__power">
                      <h4>{h.nome}</h4>
                      <p>{h.descricao}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {poderesInfo.length > 0 && (
              <section className="classe-modal__section">
                <p className="classe-modal__section-label">
                  <GiStarsStack /> Poderes de Classe
                </p>

                {/* Filtros de poderes */}
                <div className="poderes-filtros">
                  <div className="poderes-filtros__row">
                    <span className="poderes-filtros__label">Foco</span>
                    <div className="poderes-filtros__chips">
                      {PODER_CATEGORIAS.map((cat) => (
                        <button
                          key={cat}
                          className={`poderes-filtros__chip ${categoriasAtivas.includes(cat) ? 'poderes-filtros__chip--active' : ''}`}
                          onClick={() => toggleCategoria(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="poderes-filtros__row">
                    <label className="poderes-filtros__label" htmlFor={`nivel-${classe.nome}`}>
                      Até o nível
                    </label>
                    <select
                      id={`nivel-${classe.nome}`}
                      className="poderes-filtros__select"
                      value={nivelMax}
                      onChange={(e) => setNivelMax(e.target.value)}
                    >
                      <option value="todos">Todos</option>
                      {Array.from({ length: NIVEL_MAX }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>{n}º nível</option>
                      ))}
                    </select>

                    {filtrosAtivos && (
                      <button className="poderes-filtros__clear" onClick={limparFiltrosPoderes}>
                        <FiX /> Limpar filtros
                      </button>
                    )}
                  </div>

                  <p className="poderes-filtros__count">
                    {poderesFiltrados.length} de {poderesInfo.length} poderes
                  </p>
                </div>

                {poderesFiltrados.length > 0 ? (
                  <div className="classe-modal__powers-list">
                    {poderesFiltrados.map((p) => (
                      <div key={p.nome} className="classe-modal__power">
                        <div className="classe-modal__power-head">
                          <h4>{p.nome}</h4>
                          {p._categorias.length > 0 && (
                            <div className="classe-modal__power-tags">
                              {p._categorias.map((cat) => (
                                <span key={cat} className="classe-modal__power-tag">{cat}</span>
                              ))}
                            </div>
                          )}
                        </div>
                        <p>{p.descricao}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="poderes-filtros__empty">Nenhum poder corresponde aos filtros selecionados.</p>
                )}
              </section>
            )}

            <p className="classe-modal__page-number">— Tormenta 20 —</p>
          </div>
        </div>
      </div>
    </div>
  )
}