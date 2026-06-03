import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './lib/supabase'

import './styles/global.css'

import Navbar  from './components/Navbar'
import Home    from './pages/Home'
import Login   from './pages/Login'
import SignUp  from './pages/SignUp'
import Profile from './pages/Profile'
import Mesas   from './pages/Mesas'
import Livros  from './pages/Livro'
import MesaJogo   from './pages/vtt/MesaJogo'
// import Racas      from './pages/Racas'
// import Classes    from './pages/Classes'
// import Divindades from './pages/Divindades'
// import Origens    from './pages/Origens'

export const AuthContext = createContext(null)
export const useAuth = () => useContext(AuthContext)

export default function App() {
  const [user,    setUser]    = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) { setLoading(false); return }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        if (session?.user) fetchProfile(session.user.id)
        else { setProfile(null); setLoading(false) }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  async function fetchProfile(userId, attempt = 0) {
    setLoading(true)
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('auth_id', userId)
      .single()

    if (data) {
      setProfile(data)
      setLoading(false)
    } else if (attempt < 5) {
      setTimeout(() => fetchProfile(userId, attempt + 1), 800)
    } else {
      setProfile(null)
      setLoading(false)
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  const navUser = profile
    ? { username: profile.username, avatar_url: profile.avatar_url }
    : null

  if (loading) return <AppLoader />

  return (
    <AuthContext.Provider value={{ user, profile, loading, fetchProfile }}>
      <BrowserRouter>
        <Navbar user={navUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/"         element={<Home user={user} />} />
          <Route path="/login"    element={user ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/cadastro" element={user ? <Navigate to="/" replace /> : <SignUp />} />
          <Route path="/perfil"   element={user ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/mesas"    element={user ? <Mesas /> : <Navigate to="/login" replace />} />
          <Route path="/livros"   element={<Livros />} />

          {<Route path="/mesa/:id" element={user ? <MesaJogo /> : <Navigate to="/login" replace />} /> }
          <Route path="/racas"      element={<Placeholder page="Raças" />} />
          <Route path="/classes"    element={<Placeholder page="Classes" />} />
          <Route path="/divindades" element={<Placeholder page="Divindades" />} />
          <Route path="/origens"    element={<Placeholder page="Origens" />} />
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

function AppLoader() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'1rem', background:'var(--clr-bg)' }}>
      <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
        <polygon points="22,2 41,12 41,32 22,42 3,32 3,12" fill="#5C0E0E" stroke="#8B1A1A" strokeWidth="1.5"/>
        <polygon points="22,7 37,15.5 37,28.5 22,37 7,28.5 7,15.5" fill="none" stroke="#A07830" strokeWidth="0.75" strokeDasharray="2,2"/>
        <text x="22" y="27" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="14" fontWeight="700" fill="#CC2222">T</text>
      </svg>
      <p style={{ fontFamily:'Cinzel,serif', fontSize:'12px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--clr-text-muted)', animation:'shimmer 1.5s ease infinite' }}>
        Abrindo os portões...
      </p>
    </div>
  )
}

function Placeholder({ page }) {
  return (
    <div className="page-centered" style={{ flexDirection:'column', gap:'1rem', textAlign:'center' }}>
      <p className="rune-row" aria-hidden="true">ᚠ ᚢ ᚦ</p>
      <h2 style={{ fontFamily:'var(--font-display)', color:'var(--clr-text-muted)', fontSize:'14px', letterSpacing:'0.2em', textTransform:'uppercase' }}>Em construção</h2>
      <p style={{ fontFamily:'var(--font-display)', fontSize:'28px', fontWeight:700, color:'var(--clr-red-light)' }}>{page}</p>
      <p style={{ fontStyle:'italic', color:'var(--clr-text-muted)' }}>Esta página ainda será forjada.</p>
    </div>
  )
}

function NotFound() {
  return (
    <div className="page-centered" style={{ flexDirection:'column', gap:'1rem', textAlign:'center' }}>
      <p className="rune-row" aria-hidden="true">ᛞ ᛖ ᚨ ᛞ</p>
      <p style={{ fontFamily:'var(--font-display)', fontSize:'80px', fontWeight:700, color:'var(--clr-red)', lineHeight:1, opacity:0.25 }}>404</p>
      <h2 style={{ fontFamily:'var(--font-display)', color:'var(--clr-text)' }}>Página não encontrada</h2>
      <p style={{ fontStyle:'italic', color:'var(--clr-text-muted)' }}>Esta rota não existe em Arton.</p>
    </div>
  )
}