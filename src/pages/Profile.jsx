import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCamera, FiSave, FiLogOut, FiSettings, FiUser } from 'react-icons/fi'
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi'
import { supabase } from '../lib/supabase'
import { useAuth } from '../App'
import { censorText } from '../lib/crypto'
import './Profile.css'

const DICE_COLORS = [
  { hex: '#CC2222', name: 'Sangue'    },
  { hex: '#E05C00', name: 'Chama'     },
  { hex: '#C49A40', name: 'Ouro'      },
  { hex: '#2D6A2D', name: 'Floresta'  },
  { hex: '#185FA5', name: 'Oceano'    },
  { hex: '#7B3FBE', name: 'Arcano'    },
  { hex: '#C4357A', name: 'Rosa'      },
  { hex: '#1A1A1A', name: 'Obsidiana' },
  { hex: '#E8E0D2', name: 'Osso'      },
  { hex: '#5C8A6A', name: 'Musgo'     },
]

export default function Profile() {
  const { user, profile, fetchProfile } = useAuth()
  const navigate = useNavigate()

  /* ── Estado dos campos ── */
  const [username,     setUsername]     = useState(profile?.username      || '')
  const [bio,          setBio]          = useState(profile?.bio           || '')
  const [rpgRole,      setRpgRole]      = useState(profile?.rpg_role      || '')
  const [dragonAnswer, setDragonAnswer] = useState(profile?.dragon_answer || '')
  const [favSystem,    setFavSystem]    = useState('')
  const [otherSystem,  setOtherSystem]  = useState('')

  /* Configurações */
  const [theme,     setTheme]     = useState(profile?.theme      || 'light')
  const [diceColor, setDiceColor] = useState(profile?.dice_color || '#CC2222')

  /* Avatar */
  const [avatarPreview, setAvatarPreview] = useState(profile?.avatar_url || null)
  const [avatarFile,    setAvatarFile]    = useState(null)
  const fileRef = useRef(null)

  /* UI */
  const [activeTab, setActiveTab] = useState('perfil')
  const [saving,    setSaving]    = useState(false)
  const [saveMsg,   setSaveMsg]   = useState({ type: '', text: '' })
  const [diceAnim,  setDiceAnim]  = useState(false)

  /* Init fav system */
  useEffect(() => {
    if (!profile?.fav_system) return
    const known = ['tormenta20','ordem-paranormal','dnd']
    if (known.includes(profile.fav_system)) {
      setFavSystem(profile.fav_system)
    } else {
      setFavSystem('outro')
      setOtherSystem(profile.fav_system)
    }
  }, [profile])

  /* Aplica tema imediatamente */
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  /* Animação do dado ao mudar cor */
  function handleDiceColor(hex) {
    setDiceColor(hex)
    setDiceAnim(true)
    setTimeout(() => setDiceAnim(false), 600)
  }

  /* Avatar upload */
  function handleAvatarChange(e) {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) {
      setSaveMsg({ type: 'error', text: 'Imagem muito grande. Máximo: 2MB.' })
      return
    }
    setAvatarFile(file)
    setAvatarPreview(URL.createObjectURL(file))
  }

  async function uploadAvatar() {
    if (!avatarFile || !user) return profile?.avatar_url || null
    const ext  = avatarFile.name.split('.').pop()
    const path = `${user.id}/avatar.${ext}`
    const { error } = await supabase.storage.from('avatars').upload(path, avatarFile, { upsert: true })
    if (error) throw error
    const { data } = supabase.storage.from('avatars').getPublicUrl(path)
    return data.publicUrl
  }

  /* Salvar */
  async function handleSave() {
    setSaving(true)
    setSaveMsg({ type: '', text: '' })
    try {
      const avatarUrl   = await uploadAvatar()
      const finalSystem = favSystem === 'outro' ? otherSystem : favSystem

      const { error } = await supabase.from('profiles').update({
        username:      username.trim(),
        bio:           censorText(bio.trim()),
        rpg_role:      rpgRole      || null,
        dragon_answer: dragonAnswer || null,
        fav_system:    finalSystem  || null,
        avatar_url:    avatarUrl,
        theme,
        dice_color:    diceColor,
        last_active:   new Date().toISOString(),
      }).eq('auth_id', user.id)

      if (error) throw error
      await fetchProfile(user.id)
      setSaveMsg({ type: 'success', text: '✓ Perfil salvo com sucesso!' })
    } catch (err) {
      setSaveMsg({ type: 'error', text: '✗ Erro ao salvar: ' + err.message })
    } finally {
      setSaving(false)
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/')
  }

  const jogadorLabel = profile?.gender === 'mulher' ? 'Jogadora' : 'Jogador'

  const GENDER_MAP = { homem:'Homem', mulher:'Mulher', 'nao-binario':'Não-binário', outros:'Outros' }

  return (
    <div className="profile-page">
      <div className="profile-bg" aria-hidden="true"><div className="profile-bg__grid" /></div>

      <div className="profile-container">

        {/* ── HERO DO PERFIL ── */}
        <div className="profile-hero">
          {/* Avatar */}
          <div className="profile-avatar-wrap">
            <button
              className="profile-avatar"
              onClick={() => fileRef.current?.click()}
              aria-label="Alterar foto de perfil"
              type="button"
            >
              {avatarPreview
                ? <img src={avatarPreview} alt="" className="profile-avatar__img" />
                : <span className="profile-avatar__initials">{(username||'A')[0].toUpperCase()}</span>
              }
              <div className="profile-avatar__hover" aria-hidden="true">
                <FiCamera size={22} />
                <span>Alterar</span>
              </div>
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleAvatarChange}
              style={{ display:'none' }}
              aria-label="Upload de avatar"
            />
          </div>

          {/* Info */}
          <div className="profile-hero__info">
            <div className="profile-hero__badges">
              {rpgRole && (
                <span className="profile-hero__tag">
                  {{ mestre:'⚔ Mestre', jogador:`🎲 ${jogadorLabel}`, ambos:'⚔🎲 Ambos' }[rpgRole]}
                </span>
              )}
              {favSystem && favSystem !== 'outro' && (
                <span className="profile-hero__tag profile-hero__tag--gold">
                  {{ tormenta20:'🌩 T20', 'ordem-paranormal':'👁 OP', dnd:'⚔ D&D' }[favSystem] || favSystem}
                </span>
              )}
            </div>
            <h1 className="profile-hero__name">{profile?.username || 'Aventureiro'}</h1>
            <p className="profile-hero__meta">
              #{profile?.id || '—'} &nbsp;·&nbsp; {GENDER_MAP[profile?.gender] || ''}
            </p>
            {profile?.bio && (
              <p className="profile-hero__bio">{profile.bio}</p>
            )}
          </div>
        </div>

        {/* ── ABAS ── */}
        <div className="profile-tabs" role="tablist">
          {[
            { id: 'perfil', icon: <FiUser size={14}/>,     label: 'Perfil' },
            { id: 'config', icon: <FiSettings size={14}/>, label: 'Configurações' },
          ].map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`profile-tab ${activeTab === tab.id ? 'profile-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* ══════════════ ABA PERFIL ══════════════ */}
        {activeTab === 'perfil' && (
          <div className="profile-body" role="tabpanel">

            {/* Nome */}
            <div className="profile-section">
              <h2 className="profile-section__title">Identidade</h2>
              <div className="pf-field">
                <label className="pf-field__label" htmlFor="pf-username">Nome de Aventureiro</label>
                <input
                  id="pf-username"
                  type="text"
                  className="pf-field__input"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  maxLength={32}
                />
                <p className="pf-field__hint">{username.length}/32</p>
              </div>

              <div className="pf-field">
                <label className="pf-field__label" htmlFor="pf-bio">
                  Descrição
                  <span className="pf-field__hint-inline">(palavrões censurados com #)</span>
                </label>
                <textarea
                  id="pf-bio"
                  className="pf-field__input pf-field__textarea"
                  value={bio}
                  onChange={e => setBio(e.target.value)}
                  placeholder="Conta um pouco sobre você, aventureiro..."
                  maxLength={280}
                  rows={3}
                />
                <p className="pf-field__hint" style={{ textAlign: 'right' }}>{bio.length}/280</p>
              </div>
            </div>

            {/* Perguntas */}
            <div className="profile-section">
              <h2 className="profile-section__title">Sua Ficha de Aventureiro</h2>

              {/* Q1 */}
              <div className="pf-question">
                <p className="pf-question__label">
                  <span aria-hidden="true">⚔</span>
                  Que tipo de pessoa você é no RPG?
                </p>
                <div className="pf-question__opts">
                  {[
                    { v:'mestre',  l:'Mestre',      desc:'Narro as histórias' },
                    { v:'jogador', l:jogadorLabel,   desc:'Vivo os personagens' },
                    { v:'ambos',   l:'Ambos',        desc:'Faço tudo isso' },
                  ].map(opt => (
                    <button
                      key={opt.v}
                      type="button"
                      className={`pf-opt ${rpgRole === opt.v ? 'pf-opt--active' : ''}`}
                      onClick={() => setRpgRole(opt.v)}
                      aria-pressed={rpgRole === opt.v}
                    >
                      <span className="pf-opt__main">{opt.l}</span>
                      <span className="pf-opt__desc">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2 */}
              <div className="pf-question">
                <p className="pf-question__label">
                  <span aria-hidden="true">🐉</span>
                  O que você faz quando vê um dragão?
                </p>
                <div className="pf-question__opts pf-question__opts--col">
                  {[
                    { v:'ataca', l:'Parto pra cima dele!',              emoji:'⚔' },
                    { v:'foge',  l:'Vamos fugir, não sou louco!',       emoji:'💨' },
                    { v:'seduz', l:'Mestre, caiu 20 natural na sedução.',emoji:'🎲' },
                  ].map(opt => (
                    <button
                      key={opt.v}
                      type="button"
                      className={`pf-opt pf-opt--wide ${dragonAnswer === opt.v ? 'pf-opt--active' : ''}`}
                      onClick={() => setDragonAnswer(opt.v)}
                      aria-pressed={dragonAnswer === opt.v}
                    >
                      <span className="pf-opt__emoji" aria-hidden="true">{opt.emoji}</span>
                      <span className="pf-opt__main">{opt.l}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3 */}
              <div className="pf-question">
                <p className="pf-question__label">
                  <span aria-hidden="true">📜</span>
                  Qual seu sistema favorito?
                </p>
                <div className="pf-question__opts pf-question__opts--grid">
                  {[
                    { v:'tormenta20',       l:'Tormenta 20' },
                    { v:'ordem-paranormal', l:'Ordem Paranormal' },
                    { v:'dnd',              l:'D&D' },
                    { v:'outro',            l:'Outro' },
                  ].map(opt => (
                    <button
                      key={opt.v}
                      type="button"
                      className={`pf-opt ${favSystem === opt.v ? 'pf-opt--active' : ''}`}
                      onClick={() => setFavSystem(opt.v)}
                      aria-pressed={favSystem === opt.v}
                    >
                      <span className="pf-opt__main">{opt.l}</span>
                    </button>
                  ))}
                </div>
                {favSystem === 'outro' && (
                  <input
                    type="text"
                    className="pf-field__input"
                    style={{ marginTop: '0.75rem' }}
                    placeholder="Qual sistema?"
                    value={otherSystem}
                    onChange={e => setOtherSystem(e.target.value)}
                    maxLength={60}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* ══════════════ ABA CONFIGURAÇÕES ══════════════ */}
        {activeTab === 'config' && (
          <div className="profile-body" role="tabpanel">

            {/* Tema */}
            <div className="profile-section">
              <h2 className="profile-section__title">Aparência</h2>
              <div className="pf-question">
                <p className="pf-question__label"><span aria-hidden="true">🌙</span> Tema da Interface</p>
                <div className="pf-theme-btns">
                  <button
                    type="button"
                    className={`pf-theme-btn ${theme === 'light' ? 'pf-theme-btn--active' : ''}`}
                    onClick={() => setTheme('light')}
                    aria-pressed={theme === 'light'}
                  >
                    <span className="pf-theme-btn__preview pf-theme-btn__preview--light" aria-hidden="true" />
                    <span>☀ Claro</span>
                  </button>
                  <button
                    type="button"
                    className={`pf-theme-btn ${theme === 'dark' ? 'pf-theme-btn--active' : ''}`}
                    onClick={() => setTheme('dark')}
                    aria-pressed={theme === 'dark'}
                  >
                    <span className="pf-theme-btn__preview pf-theme-btn__preview--dark" aria-hidden="true" />
                    <span>☽ Escuro</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dado 3D */}
            <div className="profile-section">
              <h2 className="profile-section__title">Dado 3D</h2>
              <div className="pf-question">
                <p className="pf-question__label"><GiDiceTwentyFacesTwenty size={15} aria-hidden="true" /> Cor do Dado</p>

                {/* Preview */}
                <div className="pf-dice-preview">
                  <GiDiceTwentyFacesTwenty
                    size={72}
                    style={{ color: diceColor, transition: 'color 0.3s' }}
                    className={diceAnim ? 'pf-dice-spin' : ''}
                    aria-label={`Dado na cor ${diceColor}`}
                  />
                  <span className="pf-dice-preview__hex">{diceColor.toUpperCase()}</span>
                </div>

                {/* Swatches */}
                <div className="pf-dice-colors">
                  {DICE_COLORS.map(c => (
                    <button
                      key={c.hex}
                      type="button"
                      className={`pf-dice-swatch ${diceColor === c.hex ? 'pf-dice-swatch--active' : ''}`}
                      style={{ background: c.hex }}
                      onClick={() => handleDiceColor(c.hex)}
                      aria-label={c.name}
                      title={c.name}
                    >
                      {diceColor === c.hex && <span className="pf-dice-swatch__check">✓</span>}
                    </button>
                  ))}

                  {/* Seletor livre */}
                  <label className="pf-dice-swatch pf-dice-swatch--custom" title="Cor personalizada" aria-label="Cor personalizada">
                    <input
                      type="color"
                      value={diceColor}
                      onChange={e => handleDiceColor(e.target.value)}
                      style={{ opacity:0, position:'absolute', width:0, height:0 }}
                    />
                    <span aria-hidden="true">+</span>
                  </label>
                </div>

                {/* Nome da cor selecionada */}
                <p className="pf-dice-colorname">
                  {DICE_COLORS.find(c => c.hex === diceColor)?.name || 'Personalizada'}
                </p>
              </div>
            </div>

            {/* Sessão */}
            <div className="profile-section profile-section--danger">
              <h2 className="profile-section__title">Sessão</h2>
              <p className="profile-section__desc">
                Sua conta desconecta automaticamente após <strong>90 dias</strong> de inatividade.
              </p>
              <button
                type="button"
                className="pf-logout-btn"
                onClick={handleLogout}
              >
                <FiLogOut size={16} aria-hidden="true" />
                Sair da Conta
              </button>
            </div>

          </div>
        )}

        {/* ── BARRA DE SALVAR ── */}
        <div className="profile-save-bar">
          {saveMsg.text && (
            <p
              className={saveMsg.type === 'success' ? 'success-msg' : 'error-msg'}
              role="status"
              aria-live="polite"
            >
              {saveMsg.text}
            </p>
          )}
          <button
            type="button"
            className={`profile-save-btn ${saving ? 'profile-save-btn--saving' : ''}`}
            onClick={handleSave}
            disabled={saving}
          >
            <FiSave size={15} aria-hidden="true" />
            {saving ? 'Salvando...' : 'Salvar Perfil'}
            {saving && <span className="profile-save-btn__spinner" aria-hidden="true" />}
          </button>
        </div>

      </div>
    </div>
  )
}