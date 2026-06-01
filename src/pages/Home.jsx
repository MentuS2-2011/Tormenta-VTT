import { Link } from 'react-router-dom'
import { GiCrossedSwords, GiScrollUnfurled, GiDiceTwentyFacesTwenty, GiTreasureMap, GiSpellBook } from 'react-icons/gi'
import { FiArrowRight } from 'react-icons/fi'
import './Home.css'

/* ─────────────────────────────────────────────
   Home.jsx
   Página inicial — apresentação do Torment VTT
   ───────────────────────────────────────────── */
export default function Home({ user }) {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero" aria-label="Apresentação">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="hero__bg-vignette" aria-hidden="true" />

        <div className="hero__content">

          <p className="rune-row anim-fade-up" aria-hidden="true">
            ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ
          </p>

          <div className="hero__badge anim-fade-up delay-1">
            <GiCrossedSwords size={12} aria-hidden="true" />
            Mesa Virtual
            <GiCrossedSwords size={12} aria-hidden="true" />
          </div>

          <h1 className="hero__title anim-fade-up delay-2">
            A mesa que
            <span className="hero__title-accent"> Arton</span>
            <br />
            merecia.
          </h1>

          <div className="divider anim-fade-up delay-2" aria-hidden="true">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-diamond" style={{ background: 'var(--clr-gold)' }} />
            <div className="divider-diamond" />
            <div className="divider-line" style={{ background: 'linear-gradient(90deg, var(--clr-gold), transparent)' }} />
          </div>

          <p className="hero__subtitle anim-fade-up delay-3">
            "Roll20 tem Tormenta. Mas Tormenta merece mais."
          </p>

          <p className="hero__desc anim-fade-up delay-3">
            O <strong>Torment VTT</strong> é um Virtual Tabletop construído do zero
            para <strong>Tormenta 20</strong> — com fichas nativas, regras do sistema,
            mapas interativos e dados 3D. Sem limitações, sem gambiarras.
            Feito por um aventureiro, para aventureiros.
          </p>

          <div className="hero__actions anim-fade-up delay-4">
            {user ? (
              <Link to="/mesas" className="btn btn-primary btn-lg">
                Minhas Mesas <FiArrowRight size={16} aria-hidden="true" />
              </Link>
            ) : (
              <>
                <Link to="/cadastro" className="btn btn-primary btn-lg">
                  Criar Conta <FiArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/login" className="btn btn-outline btn-lg">
                  Já tenho conta
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="hero__scroll-hint anim-fade-up delay-5" aria-hidden="true">
          <span>▼</span>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features" aria-label="Recursos">
        <div className="container">

          <div className="features__header">
            <div className="section-badge">
              <GiScrollUnfurled size={12} aria-hidden="true" />
              O que você encontra aqui
            </div>
          </div>

          <div className="features__grid">
            <FeatureCard
              icon={<GiDiceTwentyFacesTwenty size={36} />}
              title="Dados 3D"
              desc="Role os dados com animação física real. Customize a cor do seu dado e veja o resultado na mesa junto com seus amigos."
              delay="1"
            />
            <FeatureCard
              icon={<GiTreasureMap size={36} />}
              title="Mapas Interativos"
              desc="Explore Arton com mapas renderizados em PixiJS. Mova tokens, revele névoa de guerra e narre sua aventura com precisão."
              delay="2"
            />
            <FeatureCard
              icon={<GiSpellBook size={36} />}
              title="Fichas Nativas T20"
              desc="Fichas de personagem feitas para Tormenta 20 de verdade — atributos, perícias, poderes e equipamentos do jeito que o sistema pede."
              delay="3"
            />
            <FeatureCard
              icon={<GiCrossedSwords size={36} />}
              title="Combate Integrado"
              desc="Ordem de iniciativa, rastreamento de HP, condições e testes automáticos. O Mestre foca na história, não nas planilhas."
              delay="4"
            />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta" aria-label="Chamada para ação">
        <div className="cta__ornament" aria-hidden="true">✦ ✦ ✦</div>
        <h2 className="cta__title">Pronto para aventurar?</h2>
        <p className="cta__desc">
          Crie sua conta, monte sua mesa e chame seus amigos.
          <br />
          Arton espera.
        </p>
        {!user && (
          <Link to="/cadastro" className="btn btn-primary btn-lg">
            Começar agora <FiArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
        <div className="cta__runes rune-row" aria-hidden="true">
          ᚱ ᚨ ᛁ ᛞ
        </div>
      </section>

    </div>
  )
}

/* ── Sub-componente: card de feature ── */
function FeatureCard({ icon, title, desc, delay }) {
  return (
    <div className={`feature-card anim-fade-up delay-${delay}`}>
      <div className="feature-card__icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{desc}</p>
      <div className="feature-card__corner feature-card__corner--tl" aria-hidden="true" />
      <div className="feature-card__corner feature-card__corner--br" aria-hidden="true" />
    </div>
  )
}