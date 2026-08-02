// PersonagemCriar.jsx — Wizard de criação/edição de personagem
import { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiUpload, FiX, FiCheck, FiHelpCircle, FiPlus, FiTrash2 } from 'react-icons/fi'
import { GiScrollUnfurled } from 'react-icons/gi'
import {
  ATTR_KEYS, ATTR_LABELS, ATTR_MIN, ATTR_MAX,
  RACES, SEXO_OPTIONS, AGE_MODES, AGE_BASICO, AGE_HEROIS, COMPLICACOES_IDADE,
  SIZES, SKILLS, CLASS_NAMES, CLASSES
} from '../data/personagemRules'
import {
  atributosFinais, calcularPV, calcularPM, calcularDefesa,
  calcularBonusPericia, calcularNivelTotal, efeitosIdade, tamanhoEfetivo
} from '../lib/personagemCalc'
import { salvarPersonagem, obterPersonagem } from '../lib/personagensStorage'
import { lerImagemComoDataUrl } from '../lib/imagemUtils'
import './PersonagemCriar.css'

const STEPS = ['Identidade', 'Raça', 'Classes', 'Atributos', 'Combate', 'Perícias', 'Inventário', 'Habilidades', 'Finalizar']

const BASE_ATTR = { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 }

function novoForm() {
  return {
    id: null,
    nome: '',
    sexo: '',
    imagem: '',
    ageMode: 'nenhuma',
    ageKey: '',
    complicacoesIdade: [],
    tamanho: 'medio',
    raca: '',
    racaEscolhas: [],
    classes: [{ nome: '', nivel: 1, subclasse: '' }],
    atributosBase: { ...BASE_ATTR },
    atributoPV: 'CON',
    atributoDefesa: 'DES',
    bonusDefesa: [],
    treinadas: [],
    periciaOutros: {},
    inventario: [],
    habilidades: [],
    divindade: '',
    origem: '',
    historia: '',
    // rastreamento de jogo (preservado ao editar)
    pvAtual: null,
    pvTemp: 0,
    pmAtual: null,
    pmTemp: 0
  }
}

export default function PersonagemCriar() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEdit = Boolean(id)

  const [step, setStep] = useState(0)
  const [form, setForm] = useState(novoForm())
  const [erro, setErro] = useState('')
  const [imagemCarregando, setImagemCarregando] = useState(false)

  useEffect(() => {
    if (isEdit) {
      const existente = obterPersonagem(id)
      if (existente) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setForm({
          id: existente.id,
          nome: existente.nome || '',
          sexo: existente.sexo || '',
          imagem: existente.imagem || '',
          ageMode: existente.ageMode || 'nenhuma',
          ageKey: existente.ageKey || '',
          complicacoesIdade: existente.complicacoesIdade || [],
          tamanho: existente.tamanho || 'medio',
          raca: existente.raca || '',
          racaEscolhas: existente.racaEscolhas || [],
          classes: existente.classes?.length ? existente.classes : [{ nome: '', nivel: 1, subclasse: '' }],
          atributosBase: existente.atributosBase || { ...BASE_ATTR },
          atributoPV: existente.atributoPV || 'CON',
          atributoDefesa: existente.atributoDefesa || 'DES',
          bonusDefesa: existente.bonusDefesa || [],
          treinadas: existente.treinadas || [],
          periciaOutros: existente.periciaOutros || {},
          inventario: existente.inventario || [],
          habilidades: existente.habilidades || [],
          divindade: existente.divindade || '',
          origem: existente.origem || '',
          historia: existente.historia || '',
          pvAtual: existente.pvAtual ?? null,
          pvTemp: existente.pvTemp || 0,
          pmAtual: existente.pmAtual ?? null,
          pmTemp: existente.pmTemp || 0
        })
      } else {
        navigate('/personagens')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const efeitosIdadeAtual = useMemo(() => efeitosIdade(form.ageMode, form.ageKey), [form.ageMode, form.ageKey])

  const atributosFinal = useMemo(
    () => atributosFinais(form.atributosBase, form.raca, form.racaEscolhas, form.ageMode, form.ageKey),
    [form.atributosBase, form.raca, form.racaEscolhas, form.ageMode, form.ageKey]
  )

  const tamanhoUsado = useMemo(
    () => tamanhoEfetivo(form.tamanho, efeitosIdadeAtual.tamanhoMenor),
    [form.tamanho, efeitosIdadeAtual]
  )

  const nivelTotal = useMemo(() => calcularNivelTotal(form.classes), [form.classes])
  const pv = useMemo(() => calcularPV(form.classes, atributosFinal, form.atributoPV), [form.classes, atributosFinal, form.atributoPV])
  const pm = useMemo(
    () => calcularPM(form.classes, atributosFinal, efeitosIdadeAtual.pmBonus),
    [form.classes, atributosFinal, efeitosIdadeAtual]
  )
  const defesa = useMemo(
    () => calcularDefesa(atributosFinal, tamanhoUsado, form.atributoDefesa, form.bonusDefesa, efeitosIdadeAtual.defesaBonus),
    [atributosFinal, tamanhoUsado, form.atributoDefesa, form.bonusDefesa, efeitosIdadeAtual]
  )

  const racaAtual = RACES[form.raca]
  const faixaEtariaAtual = form.ageMode === 'basico' ? AGE_BASICO[form.ageKey] : form.ageMode === 'herois' ? AGE_HEROIS[form.ageKey] : null
  const complicacoesNecessarias = form.ageMode === 'herois' ? (faixaEtariaAtual?.complicacoesQtd || 0) : 0

  function update(patch) {
    setForm((f) => ({ ...f, ...patch }))
  }

  function updateAttr(key, delta) {
    setForm((f) => {
      const atual = f.atributosBase[key] ?? 0
      const novo = Math.max(ATTR_MIN, Math.min(ATTR_MAX, atual + delta))
      return { ...f, atributosBase: { ...f.atributosBase, [key]: novo } }
    })
  }

  function toggleRacaEscolha(attr) {
    setForm((f) => {
      const has = f.racaEscolhas.includes(attr)
      let novas
      if (has) {
        novas = f.racaEscolhas.filter((a) => a !== attr)
      } else {
        if (f.racaEscolhas.length >= 2) novas = [f.racaEscolhas[1], attr]
        else novas = [...f.racaEscolhas, attr]
      }
      return { ...f, racaEscolhas: novas }
    })
  }

  function toggleTreino(key) {
    setForm((f) => {
      const has = f.treinadas.includes(key)
      return { ...f, treinadas: has ? f.treinadas.filter((k) => k !== key) : [...f.treinadas, key] }
    })
  }

  function updatePericiaOutros(key, valor) {
    setForm((f) => ({ ...f, periciaOutros: { ...f.periciaOutros, [key]: valor } }))
  }

  function toggleComplicacao(key) {
    setForm((f) => {
      const has = f.complicacoesIdade.includes(key)
      if (has) return { ...f, complicacoesIdade: f.complicacoesIdade.filter((k) => k !== key) }
      return { ...f, complicacoesIdade: [...f.complicacoesIdade, key] }
    })
  }

  // ── CLASSES (multiclasse) ──
  function updateClasseSlot(idx, patch) {
    setForm((f) => {
      const classes = f.classes.map((c, i) => (i === idx ? { ...c, ...patch } : c))
      return { ...f, classes }
    })
  }

  function addClasseSlot() {
    setForm((f) => {
      if (f.classes.length >= 4) return f
      return { ...f, classes: [...f.classes, { nome: '', nivel: 1, subclasse: '' }] }
    })
  }

  function removeClasseSlot(idx) {
    setForm((f) => {
      if (f.classes.length <= 1) return f
      return { ...f, classes: f.classes.filter((_, i) => i !== idx) }
    })
  }

  // ── BÔNUS DE DEFESA ──
  function addBonusDefesa() {
    setForm((f) => ({ ...f, bonusDefesa: [...f.bonusDefesa, { nome: '', valor: 0 }] }))
  }
  function updateBonusDefesa(idx, patch) {
    setForm((f) => ({ ...f, bonusDefesa: f.bonusDefesa.map((b, i) => (i === idx ? { ...b, ...patch } : b)) }))
  }
  function removeBonusDefesa(idx) {
    setForm((f) => ({ ...f, bonusDefesa: f.bonusDefesa.filter((_, i) => i !== idx) }))
  }

  // ── INVENTÁRIO ──
  function addItem() {
    setForm((f) => ({ ...f, inventario: [...f.inventario, { nome: '', descricao: '', vestido: false, espacos: 1 }] }))
  }
  function updateItem(idx, patch) {
    setForm((f) => ({ ...f, inventario: f.inventario.map((it, i) => (i === idx ? { ...it, ...patch } : it)) }))
  }
  function removeItem(idx) {
    setForm((f) => ({ ...f, inventario: f.inventario.filter((_, i) => i !== idx) }))
  }

  // ── HABILIDADES ──
  function addHabilidade() {
    setForm((f) => ({ ...f, habilidades: [...f.habilidades, { nome: '', descricao: '' }] }))
  }
  function updateHabilidade(idx, patch) {
    setForm((f) => ({ ...f, habilidades: f.habilidades.map((h, i) => (i === idx ? { ...h, ...patch } : h)) }))
  }
  function removeHabilidade(idx) {
    setForm((f) => ({ ...f, habilidades: f.habilidades.filter((_, i) => i !== idx) }))
  }

  async function handleImagemUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setImagemCarregando(true)
    try {
      const dataUrl = await lerImagemComoDataUrl(file)
      update({ imagem: dataUrl })
    } catch (err) {
      setErro(err.message)
    } finally {
      setImagemCarregando(false)
    }
  }

  function validarStep() {
    setErro('')
    if (step === 0 && !form.nome.trim()) { setErro('Dê um nome ao seu personagem.'); return false }
    if (step === 0 && form.ageMode !== 'nenhuma' && !form.ageKey) { setErro('Escolha uma faixa etária.'); return false }
    if (step === 0 && complicacoesNecessarias > 0 && form.complicacoesIdade.length !== complicacoesNecessarias) {
      setErro(`Escolha exatamente ${complicacoesNecessarias} complicações de idade para essa faixa etária.`); return false
    }
    if (step === 1 && !form.raca) { setErro('Escolha uma raça.'); return false }
    if (step === 1 && racaAtual?.variable && form.racaEscolhas.length !== 2) {
      setErro('Escolha 2 atributos diferentes para o bônus racial.'); return false
    }
    if (step === 2) {
      if (!form.classes.some((c) => c.nome)) { setErro('Escolha ao menos uma classe.'); return false }
      const semSubclasse = form.classes.find((c) => CLASSES[c.nome]?.subclasses && !c.subclasse)
      if (semSubclasse) { setErro(`Escolha uma especialização de ${semSubclasse.nome} (${CLASSES[semSubclasse.nome].subclasses.join(' / ')}).`); return false }
    }
    return true
  }

  function proximo() {
    if (!validarStep()) return
    setStep((s) => Math.min(STEPS.length - 1, s + 1))
  }

  function voltar() {
    setErro('')
    setStep((s) => Math.max(0, s - 1))
  }

  function salvar() {
    if (!validarStep()) return
    try {
      const personagem = {
        id: form.id,
        nome: form.nome.trim(),
        sexo: form.sexo,
        imagem: form.imagem,
        ageMode: form.ageMode,
        ageKey: form.ageMode === 'nenhuma' ? '' : form.ageKey,
        complicacoesIdade: form.complicacoesIdade,
        tamanho: form.tamanho,
        raca: form.raca,
        racaEscolhas: form.racaEscolhas,
        classes: form.classes.filter((c) => c.nome),
        atributosBase: form.atributosBase,
        atributosFinais: atributosFinal,
        atributoPV: form.atributoPV,
        atributoDefesa: form.atributoDefesa,
        bonusDefesa: form.bonusDefesa.filter((b) => b.nome),
        treinadas: form.treinadas,
        periciaOutros: form.periciaOutros,
        inventario: form.inventario.filter((it) => it.nome),
        habilidades: form.habilidades.filter((h) => h.nome),
        divindade: form.divindade,
        origem: form.origem,
        historia: form.historia,
        pv, pm, defesa,
        pvAtual: form.pvAtual ?? pv,
        pvTemp: form.pvTemp || 0,
        pmAtual: form.pmAtual ?? pm,
        pmTemp: form.pmTemp || 0
      }
      salvarPersonagem(personagem)
      navigate('/personagens')
    } catch (err) {
      setErro(err.message)
    }
  }

  return (
    <div className="pcriar">
      <section className="pcriar__hero">
        <div className="pcriar__hero-badge">
          <GiScrollUnfurled size={14} />
          {isEdit ? 'Editando Herói' : 'Novo Herói'}
        </div>
        <h1 className="pcriar__hero-title">{isEdit ? 'Editar Personagem' : 'Criar Personagem'}</h1>
      </section>

      <div className="container pcriar__body">
        <div className="pcriar__steps">
          {STEPS.map((label, i) => (
            <div
              key={label}
              className={`pcriar__step ${i === step ? 'pcriar__step--active' : ''} ${i < step ? 'pcriar__step--done' : ''}`}
              onClick={() => i < step && setStep(i)}
            >
              <span className="pcriar__step-dot">{i < step ? <FiCheck /> : i + 1}</span>
              <span className="pcriar__step-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="pcriar__panel">
          {erro && <div className="pcriar__erro">{erro}</div>}

          {step === 0 && (
            <StepIdentidade
              form={form} update={update} onImagem={handleImagemUpload} imagemCarregando={imagemCarregando}
              faixaEtariaAtual={faixaEtariaAtual} complicacoesNecessarias={complicacoesNecessarias}
              toggleComplicacao={toggleComplicacao}
            />
          )}
          {step === 1 && (
            <StepRaca form={form} update={update} racaAtual={racaAtual} toggleRacaEscolha={toggleRacaEscolha} />
          )}
          {step === 2 && (
            <StepClasses
              form={form}
              updateClasseSlot={updateClasseSlot}
              addClasseSlot={addClasseSlot}
              removeClasseSlot={removeClasseSlot}
            />
          )}
          {step === 3 && (
            <StepAtributos form={form} updateAttr={updateAttr} atributosFinal={atributosFinal} />
          )}
          {step === 4 && (
            <StepCombate
              form={form} update={update} pv={pv} pm={pm} defesa={defesa}
              addBonusDefesa={addBonusDefesa} updateBonusDefesa={updateBonusDefesa} removeBonusDefesa={removeBonusDefesa}
            />
          )}
          {step === 5 && (
            <StepPericias
              form={form} toggleTreino={toggleTreino} atributosFinal={atributosFinal} nivelTotal={nivelTotal}
              updatePericiaOutros={updatePericiaOutros}
            />
          )}
          {step === 6 && (
            <StepInventario form={form} addItem={addItem} updateItem={updateItem} removeItem={removeItem} />
          )}
          {step === 7 && (
            <StepHabilidades form={form} addHabilidade={addHabilidade} updateHabilidade={updateHabilidade} removeHabilidade={removeHabilidade} />
          )}
          {step === 8 && (
            <StepFinalizar form={form} update={update} pv={pv} pm={pm} defesa={defesa} atributosFinal={atributosFinal} nivelTotal={nivelTotal} />
          )}
        </div>

        <div className="pcriar__nav">
          {step > 0 && (
            <button className="pcriar__nav-btn pcriar__nav-btn--prev" onClick={voltar}>
              <FiChevronLeft /> Voltar
            </button>
          )}
          <span className="pcriar__nav-spacer" />
          {step < STEPS.length - 1 ? (
            <button className="pcriar__nav-btn pcriar__nav-btn--next" onClick={proximo}>
              Próximo <FiChevronRight />
            </button>
          ) : (
            <button className="pcriar__nav-btn pcriar__nav-btn--save" onClick={salvar}>
              <FiCheck /> Salvar Personagem
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function AjudaClasseLink() {
  return (
    <a
      className="pcriar__help-btn"
      href="/classes"
      target="_blank"
      rel="noopener noreferrer"
      title="Ver detalhes das classes"
      onClick={(e) => e.stopPropagation()}
    >
      <FiHelpCircle />
    </a>
  )
}

// ── STEP 1: IDENTIDADE ──
function StepIdentidade({ form, update, onImagem, imagemCarregando, faixaEtariaAtual, complicacoesNecessarias, toggleComplicacao }) {
  return (
    <div className="pcriar__grid">
      <div className="pcriar__field-col">
        <label className="pcriar__label">Nome do Personagem</label>
        <input
          className="pcriar__input"
          type="text"
          placeholder="Ex.: Gregor Vahn"
          value={form.nome}
          onChange={(e) => update({ nome: e.target.value })}
        />

        <label className="pcriar__label">Sexo</label>
        <div className="pcriar__pills">
          {SEXO_OPTIONS.map((s) => (
            <button
              key={s}
              className={`pcriar__pill ${form.sexo === s ? 'pcriar__pill--active' : ''}`}
              onClick={() => update({ sexo: s })}
            >
              {s}
            </button>
          ))}
        </div>

        <label className="pcriar__label">Tamanho</label>
        <div className="pcriar__pills">
          {Object.entries(SIZES).map(([key, s]) => (
            <button
              key={key}
              className={`pcriar__pill ${form.tamanho === key ? 'pcriar__pill--active' : ''}`}
              onClick={() => update({ tamanho: key })}
            >
              {s.label}
            </button>
          ))}
        </div>

        <label className="pcriar__label">Regra de Idade</label>
        <div className="pcriar__pills">
          {AGE_MODES.map((m) => (
            <button
              key={m.key}
              className={`pcriar__pill ${form.ageMode === m.key ? 'pcriar__pill--active' : ''}`}
              onClick={() => update({ ageMode: m.key, ageKey: '', complicacoesIdade: [] })}
            >
              {m.label}
            </button>
          ))}
        </div>

        {form.ageMode === 'basico' && (
          <div className="pcriar__pills" style={{ marginTop: '0.5rem' }}>
            {Object.entries(AGE_BASICO).map(([key, a]) => (
              <button
                key={key}
                className={`pcriar__pill ${form.ageKey === key ? 'pcriar__pill--active' : ''}`}
                onClick={() => update({ ageKey: key })}
              >
                {a.label}
              </button>
            ))}
          </div>
        )}

        {form.ageMode === 'herois' && (
          <div className="pcriar__pills" style={{ marginTop: '0.5rem' }}>
            {Object.entries(AGE_HEROIS).map(([key, a]) => (
              <button
                key={key}
                className={`pcriar__pill ${form.ageKey === key ? 'pcriar__pill--active' : ''}`}
                onClick={() => update({ ageKey: key, complicacoesIdade: [] })}
              >
                {a.label}
              </button>
            ))}
          </div>
        )}

        {faixaEtariaAtual?.nota && (
          <p className="pcriar__hint" style={{ marginTop: '0.75rem' }}>{faixaEtariaAtual.nota}</p>
        )}

        {complicacoesNecessarias > 0 && (
          <>
            <label className="pcriar__label">
              Complicações de Idade ({form.complicacoesIdade.length} / {complicacoesNecessarias})
            </label>
            <div className="pcriar__complicacoes">
              {COMPLICACOES_IDADE.map((c) => (
                <button
                  key={c.key}
                  className={`pcriar__complicacao ${form.complicacoesIdade.includes(c.key) ? 'pcriar__complicacao--active' : ''}`}
                  onClick={() => toggleComplicacao(c.key)}
                  title={c.descricao}
                >
                  {c.nome}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="pcriar__field-col pcriar__field-col--image">
        <label className="pcriar__label">Retrato</label>
        <div className="pcriar__image-upload">
          {form.imagem ? (
            <img src={form.imagem} alt="Retrato do personagem" className="pcriar__image-preview" />
          ) : (
            <div className="pcriar__image-placeholder">🎭</div>
          )}
          <label className="pcriar__upload-btn">
            <FiUpload /> {imagemCarregando ? 'Carregando...' : 'Escolher da Galeria'}
            <input type="file" accept="image/*" hidden onChange={onImagem} disabled={imagemCarregando} />
          </label>
          {form.imagem && (
            <button className="pcriar__remove-image" onClick={() => update({ imagem: '' })}>
              <FiX /> Remover imagem
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ── STEP 2: RAÇA ──
function StepRaca({ form, update, racaAtual, toggleRacaEscolha }) {
  const racas = Object.keys(RACES).sort()
  return (
    <div>
      <label className="pcriar__label">Raça</label>
      <select className="pcriar__select" value={form.raca} onChange={(e) => update({ raca: e.target.value, racaEscolhas: [] })}>
        <option value="">Selecione uma raça...</option>
        {racas.map((r) => <option key={r} value={r}>{r}</option>)}
      </select>

      {racaAtual && !racaAtual.variable && (
        <div className="pcriar__race-mods">
          {ATTR_KEYS.map((k) => (
            racaAtual.mods[k] !== 0 && (
              <span key={k} className={`pcriar__race-mod ${racaAtual.mods[k] > 0 ? 'pcriar__race-mod--pos' : 'pcriar__race-mod--neg'}`}>
                {k} {racaAtual.mods[k] > 0 ? '+' : ''}{racaAtual.mods[k]}
              </span>
            )
          ))}
        </div>
      )}

      {racaAtual?.variable && (
        <div className="pcriar__variable-race">
          <p className="pcriar__hint">Essa raça tem atributos flexíveis — escolha 2 atributos diferentes para receber +1 em cada.</p>
          <div className="pcriar__pills">
            {ATTR_KEYS.map((k) => (
              <button
                key={k}
                className={`pcriar__pill ${form.racaEscolhas.includes(k) ? 'pcriar__pill--active' : ''}`}
                onClick={() => toggleRacaEscolha(k)}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── STEP 3: CLASSES (multiclasse) ──
function StepClasses({ form, updateClasseSlot, addClasseSlot, removeClasseSlot }) {
  return (
    <div>
      <p className="pcriar__hint">
        Você pode combinar até 4 classes (multiclasse). A primeira da lista é considerada a classe principal.
      </p>
      <div className="pcriar__classe-slots">
        {form.classes.map((slot, idx) => {
          const infoClasse = CLASSES[slot.nome]
          return (
            <div key={idx} className="pcriar__classe-slot">
              <div className="pcriar__classe-slot-row">
                <select
                  className="pcriar__select"
                  value={slot.nome}
                  onChange={(e) => updateClasseSlot(idx, { nome: e.target.value, subclasse: '' })}
                >
                  <option value="">Selecione uma classe...</option>
                  {CLASS_NAMES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <AjudaClasseLink />
                <input
                  className="pcriar__input pcriar__classe-nivel"
                  type="number"
                  min="1"
                  max="20"
                  value={slot.nivel}
                  onChange={(e) => updateClasseSlot(idx, { nivel: Math.max(1, Math.min(20, Number(e.target.value) || 1)) })}
                />
                {form.classes.length > 1 && (
                  <button className="pcriar__icon-btn" onClick={() => removeClasseSlot(idx)} title="Remover classe">
                    <FiTrash2 />
                  </button>
                )}
              </div>

              {infoClasse?.subclasses && (
                <div className="pcriar__pills pcriar__classe-subclasses">
                  {infoClasse.subclasses.map((sub) => (
                    <button
                      key={sub}
                      className={`pcriar__pill ${slot.subclasse === sub ? 'pcriar__pill--active' : ''}`}
                      onClick={() => updateClasseSlot(idx, { subclasse: sub })}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {form.classes.length < 4 && (
        <button className="pcriar__add-btn" onClick={addClasseSlot}>
          <FiPlus /> Adicionar Classe
        </button>
      )}
    </div>
  )
}

// ── STEP 4: ATRIBUTOS ──
function StepAtributos({ form, updateAttr, atributosFinal }) {
  return (
    <div>
      <p className="pcriar__hint">Distribua os atributos livremente (sem limite de pontos).</p>
      <div className="pcriar__attrs-grid">
        {ATTR_KEYS.map((k) => (
          <div key={k} className="pcriar__attr-card">
            <span className="pcriar__attr-label">{ATTR_LABELS[k]}</span>
            <div className="pcriar__attr-controls">
              <button className="pcriar__attr-btn" onClick={() => updateAttr(k, -1)}>−</button>
              <span className="pcriar__attr-value">{form.atributosBase[k] >= 0 ? '+' : ''}{form.atributosBase[k]}</span>
              <button className="pcriar__attr-btn" onClick={() => updateAttr(k, 1)}>+</button>
            </div>
            <span className="pcriar__attr-final">final: {atributosFinal[k] >= 0 ? '+' : ''}{atributosFinal[k]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── STEP 5: COMBATE (PV/PM/Defesa) ──
function StepCombate({ form, update, pv, pm, defesa, addBonusDefesa, updateBonusDefesa, removeBonusDefesa }) {
  return (
    <div>
      <p className="pcriar__hint">
        Alguns poderes trocam o atributo usado para calcular PV ou Defesa (ex.: Sabedoria no lugar de Constituição).
        Ajuste aqui se for o caso do seu personagem.
      </p>

      <div className="pcriar__grid">
        <div className="pcriar__field-col">
          <label className="pcriar__label">Atributo usado para PV</label>
          <select className="pcriar__select" value={form.atributoPV} onChange={(e) => update({ atributoPV: e.target.value })}>
            {ATTR_KEYS.map((k) => <option key={k} value={k}>{ATTR_LABELS[k]}</option>)}
          </select>
          <p className="pcriar__combat-preview">PV calculado: <strong>{pv}</strong></p>
        </div>

        <div className="pcriar__field-col">
          <label className="pcriar__label">Atributo usado para Defesa</label>
          <select className="pcriar__select" value={form.atributoDefesa} onChange={(e) => update({ atributoDefesa: e.target.value })}>
            {ATTR_KEYS.map((k) => <option key={k} value={k}>{ATTR_LABELS[k]}</option>)}
          </select>
          <p className="pcriar__combat-preview">Defesa calculada: <strong>{defesa}</strong></p>
        </div>
      </div>

      <p className="pcriar__combat-preview" style={{ marginTop: '0.5rem' }}>PM calculado: <strong>{pm}</strong></p>

      <label className="pcriar__label">Bônus adicionais de Defesa</label>
      <p className="pcriar__hint">Ex.: escudo, poder de classe, item mágico...</p>
      <div className="pcriar__bonus-list">
        {form.bonusDefesa.map((b, idx) => (
          <div key={idx} className="pcriar__bonus-row">
            <input
              className="pcriar__input"
              type="text"
              placeholder="Nome (ex.: Escudo)"
              value={b.nome}
              onChange={(e) => updateBonusDefesa(idx, { nome: e.target.value })}
            />
            <input
              className="pcriar__input pcriar__bonus-valor"
              type="number"
              placeholder="Valor"
              value={b.valor}
              onChange={(e) => updateBonusDefesa(idx, { valor: Number(e.target.value) || 0 })}
            />
            <button className="pcriar__icon-btn" onClick={() => removeBonusDefesa(idx)} title="Remover bônus">
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
      <button className="pcriar__add-btn" onClick={addBonusDefesa}>
        <FiPlus /> Adicionar Bônus de Defesa
      </button>
    </div>
  )
}

// ── STEP 6: PERÍCIAS ──
function StepPericias({ form, toggleTreino, atributosFinal, nivelTotal, updatePericiaOutros }) {
  return (
    <div>
      <p className="pcriar__hint">
        Treinos usados: <strong className="pcriar__hint-good">{form.treinadas.length}</strong> (sem limite fixo — use bom senso com seu mestre).
        Use o campo "Outros" para bônus manuais (itens, poderes etc.).
      </p>
      <div className="pcriar__skills-grid">
        {SKILLS.map((s) => {
          const treinada = form.treinadas.includes(s.key)
          const bonus = calcularBonusPericia(s.key, {
            atributosFinal, treinadas: form.treinadas, racaNome: form.raca, nivel: nivelTotal || 1, outros: form.periciaOutros
          })
          return (
            <div key={s.key} className={`pcriar__skill-row ${treinada ? 'pcriar__skill-row--active' : ''}`}>
              <button className="pcriar__skill-toggle" onClick={() => toggleTreino(s.key)}>
                <span className="pcriar__skill-name">{s.name}</span>
                <span className="pcriar__skill-attr">{s.attr}</span>
              </button>
              <input
                className="pcriar__skill-outros"
                type="number"
                title="Bônus de 'outros' (itens, poderes...)"
                placeholder="0"
                value={form.periciaOutros[s.key] || ''}
                onChange={(e) => updatePericiaOutros(s.key, Number(e.target.value) || 0)}
              />
              <span className="pcriar__skill-bonus">{bonus >= 0 ? '+' : ''}{bonus}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── STEP 7: INVENTÁRIO ──
function StepInventario({ form, addItem, updateItem, removeItem }) {
  return (
    <div>
      <p className="pcriar__hint">Adicione os itens que seu personagem carrega.</p>
      <div className="pcriar__item-list">
        {form.inventario.map((it, idx) => (
          <div key={idx} className="pcriar__item-card">
            <div className="pcriar__item-row">
              <input
                className="pcriar__input"
                type="text"
                placeholder="Nome do item"
                value={it.nome}
                onChange={(e) => updateItem(idx, { nome: e.target.value })}
              />
              <input
                className="pcriar__input pcriar__item-espacos"
                type="number"
                min="0"
                placeholder="Espaços"
                value={it.espacos}
                onChange={(e) => updateItem(idx, { espacos: Number(e.target.value) || 0 })}
              />
              <button className="pcriar__icon-btn" onClick={() => removeItem(idx)} title="Remover item">
                <FiTrash2 />
              </button>
            </div>
            <textarea
              className="pcriar__textarea"
              rows={2}
              placeholder="Descrição do item..."
              value={it.descricao}
              onChange={(e) => updateItem(idx, { descricao: e.target.value })}
            />
            <label className="pcriar__checkbox">
              <input
                type="checkbox"
                checked={it.vestido}
                onChange={(e) => updateItem(idx, { vestido: e.target.checked })}
              />
              Vestido / equipado
            </label>
          </div>
        ))}
      </div>
      <button className="pcriar__add-btn" onClick={addItem}>
        <FiPlus /> Adicionar Item
      </button>
    </div>
  )
}

// ── STEP 8: HABILIDADES ──
function StepHabilidades({ form, addHabilidade, updateHabilidade, removeHabilidade }) {
  return (
    <div>
      <p className="pcriar__hint">Registre poderes, talentos ou habilidades especiais do seu personagem.</p>
      <div className="pcriar__item-list">
        {form.habilidades.map((h, idx) => (
          <div key={idx} className="pcriar__item-card">
            <div className="pcriar__item-row">
              <input
                className="pcriar__input"
                type="text"
                placeholder="Nome da habilidade"
                value={h.nome}
                onChange={(e) => updateHabilidade(idx, { nome: e.target.value })}
              />
              <button className="pcriar__icon-btn" onClick={() => removeHabilidade(idx)} title="Remover habilidade">
                <FiTrash2 />
              </button>
            </div>
            <textarea
              className="pcriar__textarea"
              rows={2}
              placeholder="Descrição da habilidade..."
              value={h.descricao}
              onChange={(e) => updateHabilidade(idx, { descricao: e.target.value })}
            />
          </div>
        ))}
      </div>
      <button className="pcriar__add-btn" onClick={addHabilidade}>
        <FiPlus /> Adicionar Habilidade
      </button>
    </div>
  )
}

// ── STEP 9: FINALIZAR ──
function StepFinalizar({ form, update, pv, pm, defesa, atributosFinal, nivelTotal }) {
  const classesLabel = form.classes
    .filter((c) => c.nome)
    .map((c) => `${c.nome}${c.subclasse ? ` (${c.subclasse})` : ''} ${c.nivel}`)
    .join(' / ')

  return (
    <div className="pcriar__grid">
      <div className="pcriar__field-col">
        <label className="pcriar__label">Divindade (opcional)</label>
        <input className="pcriar__input" type="text" value={form.divindade} onChange={(e) => update({ divindade: e.target.value })} />

        <label className="pcriar__label">Origem (opcional)</label>
        <input className="pcriar__input" type="text" value={form.origem} onChange={(e) => update({ origem: e.target.value })} />

        <label className="pcriar__label">História (opcional)</label>
        <textarea
          className="pcriar__textarea"
          rows={6}
          value={form.historia}
          onChange={(e) => update({ historia: e.target.value })}
          placeholder="Um resumo da jornada do seu herói..."
        />
      </div>

      <div className="pcriar__field-col">
        <label className="pcriar__label">Resumo</label>
        <div className="pcriar__summary">
          <div className="pcriar__summary-row"><span>Herói</span><strong>{form.nome || '—'}</strong></div>
          <div className="pcriar__summary-row"><span>Sexo</span><strong>{form.sexo || '—'}</strong></div>
          <div className="pcriar__summary-row"><span>Raça</span><strong>{form.raca || '—'}</strong></div>
          <div className="pcriar__summary-row"><span>Classes</span><strong>{classesLabel || '—'}</strong></div>
          <div className="pcriar__summary-row"><span>Nível Total</span><strong>{nivelTotal}</strong></div>
          <div className="pcriar__summary-row"><span>PV</span><strong>{pv}</strong></div>
          <div className="pcriar__summary-row"><span>PM</span><strong>{pm}</strong></div>
          <div className="pcriar__summary-row"><span>Defesa</span><strong>{defesa}</strong></div>
          <div className="pcriar__summary-row"><span>Itens</span><strong>{form.inventario.filter((i) => i.nome).length}</strong></div>
          <div className="pcriar__summary-row"><span>Habilidades</span><strong>{form.habilidades.filter((h) => h.nome).length}</strong></div>
          <div className="pcriar__summary-attrs">
            {ATTR_KEYS.map((k) => (
              <span key={k}>{k} {atributosFinal[k] >= 0 ? '+' : ''}{atributosFinal[k]}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}