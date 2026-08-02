// PersonagemFicha.jsx — Visualização da ficha do personagem, com PV/PM
// atual e temporário editáveis (para acompanhar durante o jogo).
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FiEdit2, FiDownload, FiArrowLeft } from 'react-icons/fi'
import { GiHearts, GiPowerLightning, GiShield } from 'react-icons/gi'
import { obterPersonagem, salvarPersonagem } from '../lib/personagensStorage'
import { exportarPersonagemPdf } from '../lib/personagemPdf'
import { ATTR_KEYS, ATTR_LABELS, SKILLS, AGE_BASICO, AGE_HEROIS, COMPLICACOES_IDADE } from '../data/personagemRules'
import { calcularBonusPericia, calcularNivelTotal } from '../lib/personagemCalc'
import './PersonagemFicha.css'

export default function PersonagemFicha() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [personagem, setPersonagem] = useState(undefined)
  const [baixando, setBaixando] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPersonagem(obterPersonagem(id))
  }, [id])

  function salvarCampo(patch) {
    const atualizado = { ...personagem, ...patch }
    setPersonagem(atualizado)
    salvarPersonagem(atualizado)
  }

  async function handlePdf() {
    setBaixando(true)
    try {
      await exportarPersonagemPdf(personagem)
    } catch (err) {
      alert('Erro ao gerar PDF: ' + err.message)
    } finally {
      setBaixando(false)
    }
  }

  if (personagem === undefined) return null

  if (personagem === null) {
    return (
      <div className="pficha__not-found container">
        <p>Personagem não encontrado.</p>
        <Link to="/personagens" className="pficha__back-link"><FiArrowLeft /> Voltar ao banco</Link>
      </div>
    )
  }

  const nivelTotal = calcularNivelTotal(personagem.classes)
  const atributosFinal = personagem.atributosFinais || {}
  const treinadas = personagem.treinadas || []
  const classesLabel = (personagem.classes || [])
    .filter((c) => c.nome)
    .map((c) => `${c.nome}${c.subclasse ? ` (${c.subclasse})` : ''} ${c.nivel}`)
    .join(' / ')

  const pvAtual = personagem.pvAtual ?? personagem.pv
  const pmAtual = personagem.pmAtual ?? personagem.pm

  const faixaEtaria = personagem.ageMode === 'basico'
    ? AGE_BASICO[personagem.ageKey]
    : personagem.ageMode === 'herois'
      ? AGE_HEROIS[personagem.ageKey]
      : null

  const complicacoesEscolhidas = (personagem.complicacoesIdade || [])
    .map((key) => COMPLICACOES_IDADE.find((c) => c.key === key))
    .filter(Boolean)

  return (
    <div className="pficha">
      <div className="container pficha__topbar">
        <button className="pficha__back" onClick={() => navigate('/personagens')}><FiArrowLeft /> Banco</button>
        <div className="pficha__topbar-actions">
          <button className="pficha__action" onClick={() => navigate(`/personagens/${id}/editar`)}><FiEdit2 /> Editar</button>
          <button className="pficha__action pficha__action--primary" onClick={handlePdf} disabled={baixando}>
            <FiDownload /> {baixando ? 'Gerando...' : 'Baixar PDF'}
          </button>
        </div>
      </div>

      <div className="container pficha__header">
        <div className="pficha__image-wrap">
          {personagem.imagem ? (
            <img src={personagem.imagem} alt={personagem.nome} className="pficha__image" />
          ) : (
            <div className="pficha__image-placeholder">🎭</div>
          )}
        </div>
        <div className="pficha__identity">
          <h1 className="pficha__name">{personagem.nome}</h1>
          <p className="pficha__subtitle">
            {personagem.sexo ? `${personagem.sexo} · ` : ''}{personagem.raca || '—'} · {classesLabel || '—'} · Nível Total {nivelTotal}
          </p>
          {(personagem.divindade || personagem.origem) && (
            <p className="pficha__extra">
              {personagem.divindade && <>Devoto de {personagem.divindade}</>}
              {personagem.divindade && personagem.origem && ' · '}
              {personagem.origem && <>Origem: {personagem.origem}</>}
            </p>
          )}
          {faixaEtaria && (
            <p className="pficha__extra">Faixa etária: {faixaEtaria.label}</p>
          )}
        </div>
      </div>

      {/* PV / PM / Defesa — editáveis durante o jogo */}
      <div className="container pficha__stats">
        <div className="pficha__stat-card">
          <div className="pficha__stat-head"><GiHearts /> Pontos de Vida</div>
          <div className="pficha__stat-editors">
            <label>
              Atual
              <input
                type="number"
                value={pvAtual}
                onChange={(e) => salvarCampo({ pvAtual: Number(e.target.value) })}
              />
            </label>
            <span className="pficha__stat-max">/ {personagem.pv} máx.</span>
            <label>
              Temp.
              <input
                type="number"
                value={personagem.pvTemp || 0}
                onChange={(e) => salvarCampo({ pvTemp: Number(e.target.value) })}
              />
            </label>
          </div>
        </div>

        <div className="pficha__stat-card">
          <div className="pficha__stat-head"><GiPowerLightning /> Pontos de Mana</div>
          <div className="pficha__stat-editors">
            <label>
              Atual
              <input
                type="number"
                value={pmAtual}
                onChange={(e) => salvarCampo({ pmAtual: Number(e.target.value) })}
              />
            </label>
            <span className="pficha__stat-max">/ {personagem.pm} máx.</span>
            <label>
              Temp.
              <input
                type="number"
                value={personagem.pmTemp || 0}
                onChange={(e) => salvarCampo({ pmTemp: Number(e.target.value) })}
              />
            </label>
          </div>
        </div>

        <div className="pficha__stat-card">
          <div className="pficha__stat-head"><GiShield /> Defesa</div>
          <div className="pficha__defense-value">{personagem.defesa}</div>
          <div className="pficha__defense-breakdown">
            10 base + {atributosFinal[personagem.atributoDefesa || 'DES'] >= 0 ? '+' : ''}
            {atributosFinal[personagem.atributoDefesa || 'DES'] || 0} {personagem.atributoDefesa || 'DES'}
            {(personagem.bonusDefesa || []).map((b, i) => (
              <span key={i}> + {b.valor} {b.nome}</span>
            ))}
          </div>
        </div>
      </div>

      {complicacoesEscolhidas.length > 0 && (
        <div className="container pficha__section">
          <h2 className="pficha__section-title">Complicações de Idade</h2>
          <div className="pficha__complicacoes-list">
            {complicacoesEscolhidas.map((c) => (
              <div key={c.key} className="pficha__complicacao-item">
                <h4>{c.nome}</h4>
                <p>{c.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container pficha__section">
        <h2 className="pficha__section-title">Atributos</h2>
        <div className="pficha__attrs">
          {ATTR_KEYS.map((k) => (
            <div key={k} className="pficha__attr">
              <span className="pficha__attr-key">{k}</span>
              <span className="pficha__attr-val">{atributosFinal[k] >= 0 ? '+' : ''}{atributosFinal[k]}</span>
              <span className="pficha__attr-name">{ATTR_LABELS[k]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container pficha__section">
        <h2 className="pficha__section-title">Perícias</h2>
        <div className="pficha__skills">
          {SKILLS.map((s) => {
            const treinada = treinadas.includes(s.key)
            const bonus = calcularBonusPericia(s.key, {
              atributosFinal, treinadas, racaNome: personagem.raca, nivel: nivelTotal, outros: personagem.periciaOutros
            })
            return (
              <div key={s.key} className={`pficha__skill ${treinada ? 'pficha__skill--trained' : ''}`}>
                <span className="pficha__skill-dot">{treinada ? '●' : '○'}</span>
                <span className="pficha__skill-name">{s.name}</span>
                <span className="pficha__skill-bonus">{bonus >= 0 ? '+' : ''}{bonus}</span>
              </div>
            )
          })}
        </div>
      </div>

      {(personagem.inventario || []).length > 0 && (
        <div className="container pficha__section">
          <h2 className="pficha__section-title">Inventário</h2>
          <div className="pficha__item-grid">
            {personagem.inventario.map((it, i) => (
              <div key={i} className="pficha__item">
                <div className="pficha__item-head">
                  <h4>{it.nome}</h4>
                  <div className="pficha__item-tags">
                    {it.vestido && <span className="pficha__item-tag pficha__item-tag--worn">Equipado</span>}
                    <span className="pficha__item-tag">{it.espacos ?? 0} esp.</span>
                  </div>
                </div>
                {it.descricao && <p>{it.descricao}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {(personagem.habilidades || []).length > 0 && (
        <div className="container pficha__section">
          <h2 className="pficha__section-title">Habilidades</h2>
          <div className="pficha__item-grid">
            {personagem.habilidades.map((h, i) => (
              <div key={i} className="pficha__item">
                <h4>{h.nome}</h4>
                {h.descricao && <p>{h.descricao}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {personagem.historia && (
        <div className="container pficha__section">
          <h2 className="pficha__section-title">História</h2>
          <blockquote className="pficha__historia">{personagem.historia}</blockquote>
        </div>
      )}
    </div>
  )
}