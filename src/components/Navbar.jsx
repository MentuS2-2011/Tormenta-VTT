import { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { FiUser, FiLogIn, FiChevronDown, FiX } from 'react-icons/fi'
import { GiCrossedSwords, GiScrollUnfurled } from 'react-icons/gi'

export default function Navbar({ user = null, onLogout }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [mInfoOpen, setMInfoOpen] = useState(false)
  
  const infoDropdownRef = useRef(null)

  const isActive = (path) => location.pathname === path
  
  const closeAll = () => { 
    setMenuOpen(false)
    setMInfoOpen(false)
  }

  // Fecha o dropdown de informações ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (infoDropdownRef.current && !infoDropdownRef.current.contains(event.target)) {
        setInfoOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Fecha o menu mobile ao redimensionar para desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700 && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  const toggleInfo = () => setInfoOpen(!infoOpen)
  const toggleMInfo = () => setMInfoOpen(!mInfoOpen)

  const INFO_LINKS = [
    { to: '/racas',      label: 'Raças'      },
    { to: '/classes',    label: 'Classes'    },
    { to: '/divindades', label: 'Divindades' },
    { to: '/origens',    label: 'Origens'    },
  ]

  return (
    <nav className="navbar">
      <div className="navbar__top-line" aria-hidden="true" />

      <div className="navbar__inner">

        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Torment VTT">
          <NavEmblem />
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Torment VTT</span>
            <span className="navbar__logo-sub">Mesa Virtual para T20</span>
          </div>
        </Link>

        {/* Links desktop */}
        <ul className="navbar__links" role="navigation" aria-label="Menu principal">
          <li>
            <Link to="/mesas" className={`navbar__link ${isActive('/mesas') ? 'navbar__link--active' : ''}`}>
              Mesas
            </Link>
          </li>
          <li className="navbar__sep" aria-hidden="true">✦</li>
          <li>
            <Link to="/livros" className={`navbar__link ${isActive('/livros') ? 'navbar__link--active' : ''}`}>
              Livros
            </Link>
          </li>
          <li className="navbar__sep" aria-hidden="true">✦</li>
          
          {/* Dropdown Informações - Agora com clique */}
          <li className="navbar__dropdown-wrap" ref={infoDropdownRef}>
            <button
              className={`navbar__link navbar__dropdown-btn ${INFO_LINKS.some(l => isActive(l.to)) ? 'navbar__link--active' : ''}`}
              onClick={toggleInfo}
              aria-haspopup="true"
              aria-expanded={infoOpen}
            >
              Informações
              <FiChevronDown size={12} className={`navbar__dropdown-arrow ${infoOpen ? 'navbar__dropdown-arrow--open' : ''}`} aria-hidden="true" />
            </button>

            {infoOpen && (
              <div className="navbar__dropdown" role="menu">
                <div className="navbar__dropdown-inner">
                  {INFO_LINKS.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`navbar__dropdown-item ${isActive(link.to) ? 'navbar__dropdown-item--active' : ''}`}
                      role="menuitem"
                      onClick={() => setInfoOpen(false)}
                    >
                      <GiScrollUnfurled size={12} aria-hidden="true" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Direita desktop */}
        <div className="navbar__right">
          {user ? (
            <div className="navbar__profile">
              <Link to="/perfil" className="navbar__avatar-link" aria-label="Ver perfil">
                {user.avatar_url
                  ? <img src={user.avatar_url} alt={user.username} className="navbar__avatar-img" />
                  : <div className="navbar__avatar-placeholder"><FiUser size={18} /></div>
                }
                <span className="navbar__username">{user.username || 'Aventureiro'}</span>
              </Link>
              <button className="navbar__logout" onClick={onLogout} aria-label="Sair" title="Sair">✕</button>
            </div>
          ) : (
            <Link to="/login" className="navbar__btn-login">
              <FiLogIn size={14} aria-hidden="true" /> Entrar
            </Link>
          )}
        </div>

        {/* Hamburger - Agora com ícone de fechar quando aberto */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX size={20} style={{ color: 'var(--clr-nav-text)' }} />
          ) : (
            <>
              <span /><span /><span />
            </>
          )}
        </button>
      </div>

      {/* Menu mobile - Agora com overlay e melhor animação */}
      {menuOpen && (
        <>
          <div className="navbar__mobile-overlay" onClick={() => setMenuOpen(false)} />
          <div className="navbar__mobile-menu" role="navigation" aria-label="Menu mobile">
            {/* Perfil no topo se logado */}
            {user && (
              <Link to="/perfil" className="navbar__mobile-profile" onClick={closeAll}>
                <div className="navbar__mobile-avatar">
                  {user.avatar_url
                    ? <img src={user.avatar_url} alt={user.username} />
                    : (user.username ? user.username[0].toUpperCase() : 'A')
                  }
                </div>
                <div className="navbar__mobile-profile-info">
                  <span className="navbar__mobile-username">{user.username || 'Aventureiro'}</span>
                  <span className="navbar__mobile-email">{user.email || ''}</span>
                </div>
              </Link>
            )}

            <Link to="/mesas" className="navbar__mobile-link" onClick={closeAll}>
              <GiCrossedSwords size={14} aria-hidden="true" /> Mesas
            </Link>

            <Link to="/livros" className="navbar__mobile-link" onClick={closeAll}>
              <GiScrollUnfurled size={14} aria-hidden="true" /> Livros
            </Link>

            {/* Informações expansível */}
            <button
              className="navbar__mobile-link navbar__mobile-section"
              onClick={toggleMInfo}
              aria-expanded={mInfoOpen}
            >
              <GiScrollUnfurled size={14} aria-hidden="true" />
              Informações
              <FiChevronDown size={12} className={`navbar__mobile-chevron ${mInfoOpen ? 'navbar__mobile-chevron--open' : ''}`} aria-hidden="true" />
            </button>

            {mInfoOpen && (
              <div className="navbar__mobile-submenu">
                {INFO_LINKS.map(link => (
                  <Link key={link.to} to={link.to} className="navbar__mobile-sublink" onClick={closeAll}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {user ? (
              <button className="navbar__mobile-link navbar__mobile-logout" onClick={() => { onLogout(); closeAll() }}>
                Sair da conta
              </button>
            ) : (
              <Link to="/login" className="navbar__mobile-link" onClick={closeAll}>
                <FiLogIn size={14} aria-hidden="true" /> Entrar
              </Link>
            )}
          </div>
        </>
      )}

      <div className="navbar__bottom-line" aria-hidden="true" />
    </nav>
  )
}

function NavEmblem() {
  return (
    <svg className="navbar__emblem" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="22,2 41,12 41,32 22,42 3,32 3,12" fill="#5C0E0E" stroke="#8B1A1A" strokeWidth="1.5"/>
      <polygon points="22,7 37,15.5 37,28.5 22,37 7,28.5 7,15.5" fill="none" stroke="#A07830" strokeWidth="0.75" strokeDasharray="2,2"/>
      <text x="22" y="27" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="14" fontWeight="700" fill="#CC2222">T</text>
      <line x1="10" y1="22" x2="34" y2="22" stroke="#A07830" strokeWidth="0.5" opacity="0.4"/>
    </svg>
  )
}