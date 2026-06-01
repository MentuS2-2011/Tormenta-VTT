import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { supabase } from '../lib/supabase'
import { hashPassword } from '../lib/crypto'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const captchaRef = useRef(null)

  const [email,        setEmail]        = useState('')
  const [password,     setPassword]     = useState('')
  const [captchaToken, setCaptchaToken] = useState(null)
  const [loading,      setLoading]      = useState(false)
  const [error,        setError]        = useState('')
  const [showPass,     setShowPass]     = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    if (!captchaToken) { setError('Complete a verificação de segurança.'); return }

    setLoading(true)
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email:    email.toLowerCase().trim(),
        password: hashPassword(password),
        options:  { captchaToken },
      })
      if (authError) throw authError

      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await supabase.from('profiles')
          .update({ last_active: new Date().toISOString() })
          .eq('auth_id', user.id)
      }
      navigate('/')
    } catch (err) {
      captchaRef.current?.resetCaptcha()
      setCaptchaToken(null)
      setError(
        err.message?.includes('Invalid login credentials')
          ? 'Email ou senha incorretos.'
          : 'Erro ao entrar. Tente novamente.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      {/* Fundo com padrão de runas */}
      <div className="login-bg" aria-hidden="true">
        <div className="login-bg__grid" />
        <div className="login-bg__vignette" />
      </div>

      <div className="login-layout">

        {/* Painel esquerdo — decorativo */}
        <aside className="login-side" aria-hidden="true">
          <div className="login-side__inner">
            <div className="login-side__runes">
              {['ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᚾ','ᛁ','ᛃ','ᛇ','ᛈ','ᛉ','ᛊ','ᛏ','ᛒ','ᛖ','ᛗ','ᛚ','ᛜ','ᛞ','ᛟ'].map((r, i) => (
                <span key={i} className="login-side__rune" style={{ animationDelay: `${i * 0.18}s` }}>{r}</span>
              ))}
            </div>
            <div className="login-side__quote">
              <p>"O herói não é aquele que nunca cai,</p>
              <p>mas aquele que rola novamente."</p>
              <span>— Ditado de Arton</span>
            </div>
            <div className="login-side__emblem">
              <LoginEmblem />
            </div>
          </div>
        </aside>

        {/* Formulário */}
        <main className="login-main">
          <div className="login-card">
            <div className="login-card__corner login-card__corner--tl" />
            <div className="login-card__corner login-card__corner--tr" />
            <div className="login-card__corner login-card__corner--bl" />
            <div className="login-card__corner login-card__corner--br" />

            <header className="login-card__header">
              <p className="login-card__eyebrow">Portões de Arton</p>
              <h1 className="login-card__title">
                <span className="login-card__title-line">Bem-vindo</span>
                <span className="login-card__title-accent">de volta.</span>
              </h1>
              <p className="login-card__subtitle">
                Sua mesa aguarda, aventureiro.
              </p>
            </header>

            <div className="login-divider" aria-hidden="true">
              <div className="login-divider__line" />
              <div className="login-divider__symbol">⚔</div>
              <div className="login-divider__line" />
            </div>

            <form className="login-form" onSubmit={handleLogin} noValidate>

              <div className="login-field">
                <label className="login-field__label" htmlFor="login-email">
                  Email
                </label>
                <div className="login-field__wrap">
                  <span className="login-field__icon" aria-hidden="true">✉</span>
                  <input
                    id="login-email"
                    type="email"
                    className="login-field__input"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="login-field">
                <label className="login-field__label" htmlFor="login-password">
                  Senha
                </label>
                <div className="login-field__wrap">
                  <span className="login-field__icon" aria-hidden="true">🔒</span>
                  <input
                    id="login-password"
                    type={showPass ? 'text' : 'password'}
                    className="login-field__input"
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="login-field__eye"
                    onClick={() => setShowPass(v => !v)}
                    aria-label={showPass ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {showPass ? '🙈' : '👁'}
                  </button>
                </div>
              </div>

              <div className="login-captcha">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY || '10000000-ffff-ffff-ffff-000000000001'}
                  onVerify={t => setCaptchaToken(t)}
                  onExpire={() => setCaptchaToken(null)}
                  theme="dark"
                />
              </div>

              {error && (
                <div className="login-error" role="alert">
                  <span aria-hidden="true">⚠</span> {error}
                </div>
              )}

              <button
                type="submit"
                className={`login-submit ${loading ? 'login-submit--loading' : ''}`}
                disabled={loading}
              >
                <span className="login-submit__text">
                  {loading ? 'Abrindo portões...' : 'Entrar na Mesa'}
                </span>
                {!loading && <span className="login-submit__arrow" aria-hidden="true">→</span>}
                {loading && <span className="login-submit__spinner" aria-hidden="true" />}
              </button>
            </form>

            <footer className="login-card__footer">
              <div className="login-divider" aria-hidden="true">
                <div className="login-divider__line" />
                <div className="login-divider__diamond" />
                <div className="login-divider__line" />
              </div>
              <p className="login-card__switch">
                Primeira vez em Arton?{' '}
                <Link to="/cadastro" className="login-card__link">Criar conta</Link>
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}

function LoginEmblem() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="login-side__svg">
      <polygon points="60,4 112,32 112,88 60,116 8,88 8,32" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
      <polygon points="60,12 104,37 104,83 60,108 16,83 16,37" fill="none" stroke="#A07830" strokeWidth="0.5" strokeDasharray="3,4"/>
      <polygon points="60,22 96,43 96,77 60,98 24,77 24,43" fill="none" stroke="#5C0E0E" strokeWidth="1"/>
      <line x1="60" y1="4"  x2="60"  y2="116" stroke="#8B1A1A" strokeWidth="0.4" opacity="0.3"/>
      <line x1="8"  y1="60" x2="112" y2="60"  stroke="#8B1A1A" strokeWidth="0.4" opacity="0.3"/>
      <text x="60" y="68" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="32" fontWeight="700" fill="#CC2222">T</text>
      <circle cx="60" cy="60" r="4" fill="none" stroke="#A07830" strokeWidth="0.8"/>
    </svg>
  )
}