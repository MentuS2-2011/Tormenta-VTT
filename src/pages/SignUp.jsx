import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { supabase } from '../lib/supabase'
import { hashPassword, encryptEmail, generateId16 } from '../lib/crypto'
import './SignUp.css'

const STEPS = ['Identidade', 'Acesso', 'Confirmação']

export default function SignUp() {
  const navigate   = useNavigate()
  const captchaRef = useRef(null)

  const [step, setStep] = useState(0)

  /* Dados */
  const [username,     setUsername]     = useState('')
  const [gender,       setGender]       = useState('')
  const [email,        setEmail]        = useState('')
  const [password,     setPassword]     = useState('')
  const [passConfirm,  setPassConfirm]  = useState('')
  const [captchaToken, setCaptchaToken] = useState(null)

  /* UI */
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
  const [showP,   setShowP]   = useState(false)
  const [showC,   setShowC]   = useState(false)

  /* Força da senha */
  function passwordStrength(p) {
    if (!p) return 0
    let s = 0
    if (p.length >= 6)  s++
    if (p.length >= 10) s++
    if (/[A-Z]/.test(p)) s++
    if (/[0-9]/.test(p)) s++
    if (/[^A-Za-z0-9]/.test(p)) s++
    return s
  }
  const strength = passwordStrength(password)
  const strengthLabel = ['','Fraca','Razoável','Boa','Forte','Épica!'][strength]
  const strengthColor = ['','#CC2222','#E05C00','#C49A40','#2D6A2D','#7B3FBE'][strength]

  function goNext(e) {
    e.preventDefault()
    setError('')
    if (step === 0) {
      if (!username.trim() || username.trim().length < 3) return setError('Nome precisa ter pelo menos 3 caracteres.')
      if (!gender) return setError('Selecione um gênero.')
    }
    if (step === 1) {
      if (!email.includes('@')) return setError('Email inválido.')
      if (password.length < 6)  return setError('Senha precisa ter no mínimo 6 caracteres.')
      if (password !== passConfirm) return setError('As senhas não coincidem.')
    }
    setStep(s => s + 1)
  }

  async function handleSignUp(e) {
    e.preventDefault()
    setError('')
    if (!captchaToken) { setError('Complete a verificação de segurança.'); return }

    console.log('supabase:', supabase)
    console.log('hashPassword:', typeof hashPassword)
    console.log('encryptEmail:', typeof encryptEmail)
    console.log('generateId16:', typeof generateId16)

    setLoading(true)
    try {
      const hashedPassword = hashPassword(password)
      const encryptedEmail = encryptEmail(email)
      const profileId      = generateId16()

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email:    email.toLowerCase().trim(),
        password: hashedPassword,
        options:  { captchaToken },
        })
        if (authError) throw authError

        // Com confirmação de email, user pode ser null até confirmar
        // Usa o id da session ou do identities como fallback
        const authUser = authData.user ?? authData.session?.user
        if (!authUser?.id) throw new Error('Verifique seu email para confirmar o cadastro.')

        const { error: profileError } = await supabase.from('profiles').insert({
        id:         profileId,
        auth_id:    authUser.id,
        username:   username.trim(),
        gender,
        email_hash: encryptEmail(email),  // ← só aqui criptografa
      })
        if (profileError) throw profileError

      navigate('/')
    } catch (err) {
  console.error('ERRO COMPLETO:', err)
  console.error('Código:', err.code)
  console.error('Mensagem:', err.message)
  console.error('Detalhes:', err.details)
  captchaRef.current?.resetCaptcha()
  setCaptchaToken(null)
  if (err.message?.includes('already registered'))
    setError('Este email já está cadastrado.')
  else
    setError('Erro ao criar conta: ' + err.message)
} finally {
      setLoading(false)
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-bg" aria-hidden="true">
        <div className="signup-bg__grid" />
      </div>

      <div className="signup-container">

        {/* Cabeçalho fixo */}
        <header className="signup-header">
          <p className="signup-header__eyebrow">Nova Saga</p>
          <h1 className="signup-header__title">Forje sua <span>lenda.</span></h1>
        </header>

        {/* Indicador de progresso */}
        <div className="signup-progress" role="progressbar" aria-valuenow={step+1} aria-valuemax={3}>
          {STEPS.map((label, i) => (
            <div key={i} className={`signup-progress__step ${i <= step ? 'signup-progress__step--done' : ''} ${i === step ? 'signup-progress__step--active' : ''}`}>
              <div className="signup-progress__dot">
                {i < step ? '✓' : <span>{i + 1}</span>}
              </div>
              <p className="signup-progress__label">{label}</p>
              {i < STEPS.length - 1 && <div className="signup-progress__line" />}
            </div>
          ))}
        </div>

        {/* Card principal */}
        <div className="signup-card">
          <div className="signup-card__corner signup-card__corner--tl" />
          <div className="signup-card__corner signup-card__corner--tr" />
          <div className="signup-card__corner signup-card__corner--bl" />
          <div className="signup-card__corner signup-card__corner--br" />

          {/* ── STEP 0: Identidade ── */}
          {step === 0 && (
            <form className="signup-form" onSubmit={goNext} noValidate>
              <div className="signup-step-title">
                <span className="signup-step-title__num">01</span>
                Quem és tu, aventureiro?
              </div>

              <div className="signup-field">
                <label className="signup-field__label" htmlFor="su-username">Nome de Aventureiro</label>
                <input
                  id="su-username"
                  type="text"
                  className="signup-field__input"
                  placeholder="Como te chamam em Arton?"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  maxLength={32}
                  required
                  autoFocus
                />
                <p className="signup-field__hint">{username.length}/32 caracteres</p>
              </div>

              <div className="signup-field">
                <label className="signup-field__label">Gênero</label>
                <div className="signup-gender">
                  {[
                    { v: 'homem',       l: 'Homem',       icon: '⚔' },
                    { v: 'mulher',      l: 'Mulher',       icon: '✨' },
                    { v: 'nao-binario', l: 'Não-binário', icon: '☯' },
                    { v: 'outros',      l: 'Outros',       icon: '∞' },
                  ].map(opt => (
                    <button
                      key={opt.v}
                      type="button"
                      className={`signup-gender__btn ${gender === opt.v ? 'signup-gender__btn--active' : ''}`}
                      onClick={() => setGender(opt.v)}
                      aria-pressed={gender === opt.v}
                    >
                      <span className="signup-gender__icon" aria-hidden="true">{opt.icon}</span>
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>

              {error && <div className="signup-error" role="alert"><span>⚠</span>{error}</div>}

              <button type="submit" className="signup-submit">
                Próximo <span aria-hidden="true">→</span>
              </button>
            </form>
          )}

          {/* ── STEP 1: Acesso ── */}
          {step === 1 && (
            <form className="signup-form" onSubmit={goNext} noValidate>
              <div className="signup-step-title">
                <span className="signup-step-title__num">02</span>
                Escolha sua chave de acesso
              </div>

              <div className="signup-field">
                <label className="signup-field__label" htmlFor="su-email">Email</label>
                <div className="signup-field__wrap">
                  <span className="signup-field__icon" aria-hidden="true">✉</span>
                  <input
                    id="su-email"
                    type="email"
                    className="signup-field__input signup-field__input--icon"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <p className="signup-field__hint">Armazenado de forma protegida (AES).</p>
              </div>

              <div className="signup-field">
                <label className="signup-field__label" htmlFor="su-pass">Senha</label>
                <div className="signup-field__wrap">
                  <span className="signup-field__icon" aria-hidden="true">🔒</span>
                  <input
                    id="su-pass"
                    type={showP ? 'text' : 'password'}
                    className="signup-field__input signup-field__input--icon signup-field__input--eye"
                    placeholder="Mínimo 6 caracteres"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    minLength={6}
                    required
                    autoComplete="new-password"
                  />
                  <button type="button" className="signup-field__eye" onClick={() => setShowP(v=>!v)} aria-label="Ver senha">
                    {showP ? '🙈' : '👁'}
                  </button>
                </div>
                {/* Barra de força */}
                {password && (
                  <div className="signup-strength">
                    <div className="signup-strength__bar">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="signup-strength__seg" style={{ background: i <= strength ? strengthColor : 'var(--clr-border-light)' }} />
                      ))}
                    </div>
                    <span className="signup-strength__label" style={{ color: strengthColor }}>{strengthLabel}</span>
                  </div>
                )}
              </div>

              <div className="signup-field">
                <label className="signup-field__label" htmlFor="su-confirm">Confirmar Senha</label>
                <div className="signup-field__wrap">
                  <span className="signup-field__icon" aria-hidden="true">🔒</span>
                  <input
                    id="su-confirm"
                    type={showC ? 'text' : 'password'}
                    className="signup-field__input signup-field__input--icon signup-field__input--eye"
                    placeholder="Repita a senha"
                    value={passConfirm}
                    onChange={e => setPassConfirm(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                  <button type="button" className="signup-field__eye" onClick={() => setShowC(v=>!v)} aria-label="Ver confirmação">
                    {showC ? '🙈' : '👁'}
                  </button>
                </div>
                {passConfirm && (
                  <p className="signup-field__hint" style={{ color: password === passConfirm ? 'var(--clr-success)' : 'var(--clr-error)' }}>
                    {password === passConfirm ? '✓ Senhas coincidem' : '✗ Senhas não coincidem'}
                  </p>
                )}
              </div>

              {error && <div className="signup-error" role="alert"><span>⚠</span>{error}</div>}

              <div className="signup-form__btns">
                <button type="button" className="signup-back" onClick={() => { setStep(0); setError('') }}>
                  ← Voltar
                </button>
                <button type="submit" className="signup-submit signup-submit--flex">
                  Próximo <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          )}

          {/* ── STEP 2: Confirmação ── */}
          {step === 2 && (
            <form className="signup-form" onSubmit={handleSignUp} noValidate>
              <div className="signup-step-title">
                <span className="signup-step-title__num">03</span>
                Confirme que és humano
              </div>

              {/* Resumo */}
              <div className="signup-summary">
                <div className="signup-summary__avatar">
                  {username[0]?.toUpperCase()}
                </div>
                <div>
                  <p className="signup-summary__name">{username}</p>
                  <p className="signup-summary__email">{email}</p>
                  <p className="signup-summary__gender">
                    {{ homem:'Homem', mulher:'Mulher', 'nao-binario':'Não-binário', outros:'Outros' }[gender]}
                  </p>
                </div>
              </div>

              <div className="signup-captcha">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY || '10000000-ffff-ffff-ffff-000000000001'}
                  onVerify={t => setCaptchaToken(t)}
                  onExpire={() => setCaptchaToken(null)}
                  theme="dark"
                />
              </div>

              {error && <div className="signup-error" role="alert"><span>⚠</span>{error}</div>}

              <div className="signup-form__btns">
                <button type="button" className="signup-back" onClick={() => { setStep(1); setError('') }}>
                  ← Voltar
                </button>
                <button type="submit" className={`signup-submit signup-submit--flex ${loading ? 'signup-submit--loading' : ''}`} disabled={loading}>
                  {loading ? 'Criando lenda...' : 'Entrar em Arton'}
                  {loading && <span className="signup-spinner" aria-hidden="true" />}
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="signup-footer">
          Já tem conta? <Link to="/login" className="signup-footer__link">Entrar</Link>
        </p>
      </div>
    </div>
  )
}