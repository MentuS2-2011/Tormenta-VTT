// Livro.jsx - Versão com PDFs no Netlify
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  GiBookCover, 
  GiScrollUnfurled, 
  GiCrownedSkull, 
  GiWorld, 
  GiAchievement, 
  GiSpellBook,
  GiDragonHead,
  GiMagnifyingGlass,
  GiHolySymbol,
  GiCrown,
  GiNewspaper,
  GiArchiveResearch,
  GiDragonBreath
} from 'react-icons/gi'
import { FiDownload, FiBookOpen, FiExternalLink, FiFolder, FiFile, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import './Livro.css'

// ═══════════════════════════════════════════════
// URLs dos PDFs no Netlify
// ═══════════════════════════════════════════════

// Base URL do seu site no Netlify
const NETLIFY_BASE_URL = 'https://livrostormenta20.netlify.app'

// Mapeamento dos PDFs com URLs completas
const PDF_URLS = {
  'Livro-Basico.pdf': 'https://livrostormenta20.netlify.app/Livros/Livro-B%C3%A1sico.pdf',
  'Ameacas-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Amea%C3%A7as-de-Arton.pdf',
  'Herois-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Her%C3%B3is-de-Arton.pdf',
  'Atlas-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Atlas-de-Arton.pdf',
  'Deuses-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Deuses-de-Arton.pdf',
  'Guia-de-Deuses-Menores.pdf': 'https://livrostormenta20.netlify.app/Livros/Guia-de-Deuses-Menores.pdf',
  'distincoes-para-chelias.pdf': 'https://livrostormenta20.netlify.app/Livros/distincoes-para-chelias.pdf',
  
  // Dragão Brasil
  'DB-180.pdf': 'https://livrostormenta20.netlify.app/DB/DB-180.pdf',
  'DB-182.pdf': 'https://livrostormenta20.netlify.app/DB/DB-182.pdf',
  'DB-183.pdf': 'https://livrostormenta20.netlify.app/DB/DB-183.pdf',
  'DB-199.pdf': 'https://livrostormenta20.netlify.app/DB/DB-199.pdf',
  'DB-210.pdf': 'https://livrostormenta20.netlify.app/DB/DB-210.pdf',
  'DB-210-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_210-Extra.pdf',
  'DB-211.pdf': 'https://livrostormenta20.netlify.app/DB/DB-211.pdf',
  'DB-211-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_211-Extra.pdf',
  'DB-212.pdf': 'https://livrostormenta20.netlify.app/DB/DB-212.pdf',
  'DB-212-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_212-Extra.pdf',
  'DB-213.pdf': 'https://livrostormenta20.netlify.app/DB/DB-213.pdf',
  'DB-213-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_213-Extra.pdf',
  'DB-214.pdf': 'https://livrostormenta20.netlify.app/DB/DB-214.pdf',
  'DB-214-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_214-Extra.pdf',
  'DB-215.pdf': 'https://livrostormenta20.netlify.app/DB/DB-215.pdf',
  'DB-215-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_215-Extra.pdf',
  'DB-216.pdf': 'https://livrostormenta20.netlify.app/DB/DB-216.pdf',
  'DB-216-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_216-Extra.pdf',
  'DB-217.pdf': 'https://livrostormenta20.netlify.app/DB/DB-217.pdf',
  'DB-217-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_217-Extra.pdf',
  'DB-218.pdf': 'https://livrostormenta20.netlify.app/DB/DB-218.pdf',
  'DB-218-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_218-Extra.pdf',
  'DB-219.pdf': 'https://livrostormenta20.netlify.app/DB/DB-219.pdf',
  'DB-219-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_219-Extra.pdf',
  'DB-220.pdf': 'https://livrostormenta20.netlify.app/DB/DB-220.pdf',
  'DB-220-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_220-Extra.pdf',
  'DB-221.pdf': 'https://livrostormenta20.netlify.app/DB/DB-221.pdf',
  'DB-221-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_221-Extra.pdf',
  'DB-222.pdf': 'https://livrostormenta20.netlify.app/DB/DB-222.pdf',
  'DB-222-Extra.pdf': 'https://livrostormenta20.netlify.app/Extra_DB/DB_222-Extra.pdf',
  'DB-223.pdf': 'https://livrostormenta20.netlify.app/DB/DB-223.pdf',
  'DB-224.pdf': 'https://livrostormenta20.netlify.app/DB/DB-224.pdf',
  'DB-225.pdf': 'https://livrostormenta20.netlify.app/DB/DB-225.pdf',
  'DB-226.pdf': 'https://livrostormenta20.netlify.app/DB/DB-226.pdf',
  'DB-227.pdf': 'https://livrostormenta20.netlify.app/DB/DB-227.pdf',
  
  // RT Duelo de Dragões
  'RT20-10.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-10.pdf',
  'RT20-11.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-11.pdf',
  'RT20-12.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-12.pdf',
  'RT20-13.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-13.pdf',
  'RT20-14.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-14.pdf',
  'RT20-15.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-15.pdf',
  'RT20-16.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-16.pdf',
  'RT20-17.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-17.pdf',
  'RT20-18.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-18.pdf',
  'RT20-19.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-19.pdf',
  'RT20-20.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-20.pdf',
  
  // RT Fulgor dos Deuses
  'RT20-21.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-21.pdf',
  'RT20-22.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-22.pdf',
  'RT20-23.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-23.pdf',
  'RT20-24.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-24.pdf',
  'RT20-25.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-25.pdf',
  'RT20-26.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-26.pdf',
  'RT20-27.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-27.pdf',
}
// Dados dos livros oficiais
const booksData = [
  {
    id: 'basico',
    title: 'Livro Básico',
    subtitle: 'Tormenta 20',
    description: 'O livro fundamental do sistema Tormenta 20. Contém todas as regras essenciais, classes, raças, magias e equipamentos para suas aventuras em Arton.',
    pdfKey: 'Livro-Basico.pdf',
    icon: <GiSpellBook size={48} />,
    color: '#8B1A1A',
    accentColor: '#B22222',
    category: 'Básico',
    pages: 416,
    year: 2020,
    type: 'book'
  },
  {
    id: 'ameacas',
    title: 'Ameaças de Arton',
    subtitle: 'O Melhorário',
    description: 'Mais de 300 ameaças para desafiar os heróis! De monstros clássicos a criaturas lendárias, este livro expande o bestiário de Tormenta 20 com perigos inesquecíveis.',
    pdfKey: 'Ameacas-de-Arton.pdf',
    icon: <GiCrownedSkull size={48} />,
    color: '#2D4A3E',
    accentColor: '#3A6B58',
    category: 'Ameaças',
    pages: 368,
    year: 2022,
    type: 'book'
  },
  {
    id: 'herois',
    title: 'Heróis de Arton',
    subtitle: 'Guia do Aventureiro',
    description: 'Expanda as possibilidades dos seus personagens! Novos poderes, origens, distinções e um sistema de reputação para heróis que buscam a glória.',
    pdfKey: 'Herois-de-Arton.pdf',
    icon: <GiAchievement size={48} />,
    color: '#4A6B3A',
    accentColor: '#6B9A4A',
    category: 'Heróis',
    pages: 320,
    year: 2023,
    type: 'book'
  },
  {
    id: 'atlas',
    title: 'Atlas de Arton',
    subtitle: 'O Mundo dos Deuses',
    description: 'Explore o continente de Arton em detalhes! Descubra as nações, reinos, pontos de interesse e a rica história que faz deste mundo um cenário único.',
    pdfKey: 'Atlas-de-Arton.pdf',
    icon: <GiWorld size={48} />,
    color: '#3A4A6B',
    accentColor: '#5A6B8A',
    category: 'Atlas',
    pages: 256,
    year: 2021,
    type: 'book'
  },
  {
    id: 'deuses',
    title: 'Deuses de Arton',
    subtitle: 'O Panteão Divino',
    description: 'Conheça os vinte deuses maiores e menores de Arton! Seus domínios, poderes concedidos, devotos e a influência divina no mundo.',
    pdfKey: 'Deuses-de-Arton.pdf',
    icon: <GiHolySymbol size={48} />,
    color: '#6B3A4A',
    accentColor: '#8A4A5A',
    category: 'Divindades',
    pages: 224,
    year: 2021,
    type: 'book'
  },
  {
    id: 'deuses_menores',
    title: 'Guia de Deuses Menores',
    subtitle: 'Poderes Esquecidos',
    description: 'Explore os deuses menores de Arton, entidades de poder limitado mas grande influência. Novos poderes, domínios e caminhos divinos para seus personagens.',
    pdfKey: 'Guia-de-Deuses-Menores.pdf',
    icon: <GiHolySymbol size={48} />,
    color: '#7B5A3A',
    accentColor: '#9B7A5A',
    category: 'Divindades',
    pages: 128,
    year: 2023,
    type: 'book'
  },
  {
    id: 'distincoes',
    title: 'Distinções para Chélias',
    subtitle: 'Honra e Glória',
    description: 'Explore as distinções únicas do reino de Chélias! Ordens de cavalaria, títulos nobiliárquicos e caminhos de prestígio.',
    pdfKey: 'distincoes-para-chelias.pdf',
    icon: <GiCrown size={48} />,
    color: '#4A3A6B',
    accentColor: '#6A4A8A',
    category: 'Distinções',
    pages: 96,
    year: 2022,
    type: 'book'
  }
]

// Dados das coleções de revistas
const magazineCollections = [
  {
    id: 'dragao_brasil',
    title: 'Dragão Brasil',
    subtitle: 'Coleção Especial',
    description: 'A icônica revista de RPG brasileira. Cada edição traz aventuras, matérias especiais, novas regras e conteúdo exclusivo para diversos sistemas.',
    icon: <GiDragonBreath size={48} />,
    color: '#8B4513',
    accentColor: '#CD5C5C',
    category: 'Revistas',
    type: 'magazine_collection',
    editions: [
      { number: 180, pdfKey: 'DB-180.pdf', title: 'Dragão Brasil #180' },
      { number: 182, pdfKey: 'DB-182.pdf', title: 'Dragão Brasil #182' },
      { number: 183, pdfKey: 'DB-183.pdf', title: 'Dragão Brasil #183' },
      { number: 199, pdfKey: 'DB-199.pdf', title: 'Dragão Brasil #199' },
      { number: 210, pdfKey: 'DB-210.pdf', title: 'Dragão Brasil #210', hasExtra: true },
      { number: 211, pdfKey: 'DB-211.pdf', title: 'Dragão Brasil #211', hasExtra: true },
      { number: 212, pdfKey: 'DB-212.pdf', title: 'Dragão Brasil #212', hasExtra: true },
      { number: 213, pdfKey: 'DB-213.pdf', title: 'Dragão Brasil #213', hasExtra: true },
      { number: 214, pdfKey: 'DB-214.pdf', title: 'Dragão Brasil #214', hasExtra: true },
      { number: 215, pdfKey: 'DB-215.pdf', title: 'Dragão Brasil #215', hasExtra: true },
      { number: 216, pdfKey: 'DB-216.pdf', title: 'Dragão Brasil #216', hasExtra: true },
      { number: 217, pdfKey: 'DB-217.pdf', title: 'Dragão Brasil #217', hasExtra: true },
      { number: 218, pdfKey: 'DB-218.pdf', title: 'Dragão Brasil #218', hasExtra: true },
      { number: 219, pdfKey: 'DB-219.pdf', title: 'Dragão Brasil #219', hasExtra: true },
      { number: 220, pdfKey: 'DB-220.pdf', title: 'Dragão Brasil #220', hasExtra: true },
      { number: 221, pdfKey: 'DB-221.pdf', title: 'Dragão Brasil #221', hasExtra: true },
      { number: 222, pdfKey: 'DB-222.pdf', title: 'Dragão Brasil #222', hasExtra: true },
      { number: 223, pdfKey: 'DB-223.pdf', title: 'Dragão Brasil #223' },
      { number: 224, pdfKey: 'DB-224.pdf', title: 'Dragão Brasil #224' },
      { number: 225, pdfKey: 'DB-225.pdf', title: 'Dragão Brasil #225' },
      { number: 226, pdfKey: 'DB-226.pdf', title: 'Dragão Brasil #226' },
      { number: 227, pdfKey: 'DB-227.pdf', title: 'Dragão Brasil #227' }
    ],
    extras: [
      { number: 210, pdfKey: 'DB-210-Extra.pdf', name: 'DB #210 - Extra' },
      { number: 211, pdfKey: 'DB-211-Extra.pdf', name: 'DB #211 - Extra' },
      { number: 212, pdfKey: 'DB-212-Extra.pdf', name: 'DB #212 - Extra' },
      { number: 213, pdfKey: 'DB-213-Extra.pdf', name: 'DB #213 - Extra' },
      { number: 214, pdfKey: 'DB-214-Extra.pdf', name: 'DB #214 - Extra' },
      { number: 215, pdfKey: 'DB-215-Extra.pdf', name: 'DB #215 - Extra' },
      { number: 216, pdfKey: 'DB-216-Extra.pdf', name: 'DB #216 - Extra' },
      { number: 217, pdfKey: 'DB-217-Extra.pdf', name: 'DB #217 - Extra' },
      { number: 218, pdfKey: 'DB-218-Extra.pdf', name: 'DB #218 - Extra' },
      { number: 219, pdfKey: 'DB-219-Extra.pdf', name: 'DB #219 - Extra' },
      { number: 220, pdfKey: 'DB-220-Extra.pdf', name: 'DB #220 - Extra' },
      { number: 221, pdfKey: 'DB-221-Extra.pdf', name: 'DB #221 - Extra' },
      { number: 222, pdfKey: 'DB-222-Extra.pdf', name: 'DB #222 - Extra' }
    ]
  },
  {
    id: 'rt20_duelo',
    title: 'Revista Tormenta 20 - Duelo de Dragões',
    subtitle: 'Arco Completo',
    description: 'A saga Duelo de Dragões! Uma aventura épica que leva os heróis a enfrentarem as dragões-reis de Arton. Edições 10 a 20.',
    icon: <GiDragonHead size={48} />,
    color: '#2C1810',
    accentColor: '#8B0000',
    category: 'Revistas',
    type: 'magazine_collection',
    editions: [
      { number: 10, pdfKey: 'RT20-10.pdf', title: 'RT20 #10 - O Despertar' },
      { number: 11, pdfKey: 'RT20-11.pdf', title: 'RT20 #11 - As Cinzas' },
      { number: 12, pdfKey: 'RT20-12.pdf', title: 'RT20 #12 - O Voo' },
      { number: 13, pdfKey: 'RT20-13.pdf', title: 'RT20 #13 - A Caçada' },
      { number: 14, pdfKey: 'RT20-14.pdf', title: 'RT20 #14 - O Ninho' },
      { number: 15, pdfKey: 'RT20-15.pdf', title: 'RT20 #15 - A Aliança' },
      { number: 16, pdfKey: 'RT20-16.pdf', title: 'RT20 #16 - O Confronto' },
      { number: 17, pdfKey: 'RT20-17.pdf', title: 'RT20 #17 - A Queda' },
      { number: 18, pdfKey: 'RT20-18.pdf', title: 'RT20 #18 - O Legado' },
      { number: 19, pdfKey: 'RT20-19.pdf', title: 'RT20 #19 - A Ascensão' },
      { number: 20, pdfKey: 'RT20-20.pdf', title: 'RT20 #20 - O Desfecho' }
    ],
    extras: [
      { name: 'Mapas do Arco', pdfKey: null, placeholder: true },
      { name: 'Fichas dos Dragões', pdfKey: null, placeholder: true },
      { name: 'Arte Conceitual', pdfKey: null, placeholder: true }
    ]
  },
  {
    id: 'rt20_fulgor',
    title: 'Revista Tormenta 20 - Fulgor dos Deuses',
    subtitle: 'Em Andamento',
    description: 'O novo arco da Revista Tormenta 20! O conflito divino se intensifica e os heróis são chamados para uma guerra celestial. Edições 21 a 27.',
    icon: <GiHolySymbol size={48} />,
    color: '#FFF5E6',
    accentColor: '#FFD700',
    category: 'Revistas',
    type: 'magazine_collection',
    editions: [
      { number: 21, pdfKey: 'RT20-21.pdf', title: 'RT20 #21 - O Presságio' },
      { number: 22, pdfKey: 'RT20-22.pdf', title: 'RT20 #22 - A Profecia' },
      { number: 23, pdfKey: 'RT20-23.pdf', title: 'RT20 #23 - O Escolhido' },
      { number: 24, pdfKey: 'RT20-24.pdf', title: 'RT20 #24 - A Revelação' },
      { number: 25, pdfKey: 'RT20-25.pdf', title: 'RT20 #25 - O Conflito' },
      { number: 26, pdfKey: 'RT20-26.pdf', title: 'RT20 #26 - A Trégua' },
      { number: 27, pdfKey: 'RT20-27.pdf', title: 'RT20 #27 - O Despertar Divino' }
    ],
    extras: [
      { name: 'Mapas Celestiais', pdfKey: null, placeholder: true },
      { name: 'Fichas de Divindades', pdfKey: null, placeholder: true },
      { name: 'Guias de Campanha', pdfKey: null, placeholder: true }
    ]
  }
]

// Componente principal
export default function Livro() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedMagazines, setExpandedMagazines] = useState({})

  // Combinar livros e coleções
  const allItems = [...booksData, ...magazineCollections]

  // Filtro
  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...new Set(allItems.map(item => item.category))]

  // Função para obter URL do PDF
  const getPdfUrl = (pdfKey) => {
    return PDF_URLS[pdfKey] || null
  }

  // Abrir PDF em nova aba
  const handleOpenPdf = (item, pdfKey) => {
    const url = getPdfUrl(pdfKey)
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert('PDF não disponível no momento')
    }
  }

  // Download do PDF
  const handleDownload = async (pdfKey, fileName) => {
    const url = getPdfUrl(pdfKey)
    if (!url) {
      alert('PDF não disponível para download')
      return
    }

    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = fileName.replace(/\s/g, '_') + '.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error('Erro no download:', error)
      alert('Erro ao baixar o arquivo. Tente novamente mais tarde.')
    }
  }

  const toggleMagazineExpand = (id) => {
    setExpandedMagazines(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="livro">
      {/* Header Hero */}
      <section className="livro__hero">
        <div className="livro__hero-bg" />
        <div className="livro__hero-content">
          <div className="livro__hero-badge">
            <GiBookCover size={14} aria-hidden="true" />
            Biblioteca de Arton
            <GiBookCover size={14} aria-hidden="true" />
          </div>
          <h1 className="livro__hero-title">
            Acervo de <span className="livro__hero-accent">Tormenta</span>
          </h1>
          <div className="livro__hero-divider">
            <span className="livro__hero-diamond" />
            <span className="livro__hero-diamond" />
            <span className="livro__hero-diamond" />
          </div>
          <p className="livro__hero-desc">
            Livros oficiais e coleções completas de revistas
            <br />
            Consulte, estude e prepare suas aventuras
          </p>
        </div>
      </section>

      {/* Barra de Filtros */}
      <div className="livro__filters">
        <div className="container">
          <div className="livro__filters-inner">
            <div className="livro__search">
              <GiMagnifyingGlass className="livro__search-icon" />
              <input
                type="text"
                placeholder="Buscar livro ou revista..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="livro__search-input"
              />
            </div>

            <div className="livro__categories">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`livro__category-btn ${selectedCategory === cat ? 'livro__category-btn--active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'all' ? 'Todos' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contador */}
      <div className="livro__count">
        <div className="container">
          <p className="livro__count-text">
            <span className="livro__count-number">{filteredItems.length}</span> 
            {filteredItems.length === 1 ? ' item encontrado' : ' itens encontrados'}
          </p>
        </div>
      </div>

      {/* Grid de Itens */}
      <div className="livro__grid-section">
        <div className="container">
          <div className="livro__grid">
            {filteredItems.map((item) => (
              item.type === 'magazine_collection' ? (
                // Card para coleção de revista
                <div 
                  key={item.id} 
                  className={`livro-card magazine-collection ${expandedMagazines[item.id] ? 'expanded' : ''}`}
                  style={{ '--book-accent': item.accentColor, '--book-color': item.color }}
                >
                  <div className="livro-card__corner livro-card__corner--tl" />
                  <div className="livro-card__corner livro-card__corner--tr" />
                  <div className="livro-card__corner livro-card__corner--bl" />
                  <div className="livro-card__corner livro-card__corner--br" />

                  <div className="livro-card__icon" style={{ color: item.accentColor }}>
                    {item.icon}
                  </div>

                  <div className="livro-card__content">
                    <span className="livro-card__category" style={{ background: item.color }}>
                      {item.category}
                    </span>
                    <h3 className="livro-card__title">{item.title}</h3>
                    <p className="livro-card__subtitle">{item.subtitle}</p>
                    <p className="livro-card__desc">{item.description}</p>

                    <div className="livro-card__meta">
                      <span className="livro-card__meta-item">
                        <FiFile size={12} />
                        {item.editions.length} edições
                      </span>
                      <span className="livro-card__meta-item">
                        <FiFolder size={12} />
                        {item.extras.length} extras
                      </span>
                    </div>

                    {/* Botão expandir */}
                    <button 
                      className="livro-card__expand-btn"
                      onClick={() => toggleMagazineExpand(item.id)}
                    >
                      {expandedMagazines[item.id] ? (
                        <>Esconder Edições <FiChevronUp /></>
                      ) : (
                        <>Ver Edições <FiChevronDown /></>
                      )}
                    </button>

                    {/* Lista de edições */}
                    {expandedMagazines[item.id] && (
                      <div className="livro-card__editions-list">
                        <h4>Edições:</h4>
                        {item.editions.map(edition => (
                          <div key={edition.number} className="livro-card__edition-item">
                            <span>{edition.title}</span>
                            <button
                              className="livro-card__btn-small"
                              onClick={() => handleOpenPdf(edition, edition.pdfKey)}
                            >
                              <FiExternalLink size={12} />
                              Visualizar
                            </button>
                            <button
                              className="livro-card__btn-small"
                              onClick={() => handleDownload(edition.pdfKey, edition.title)}
                            >
                              <FiDownload size={12} />
                              Baixar
                            </button>
                          </div>
                        ))}
                        
                        {item.extras.length > 0 && (
                          <>
                            <h4 className="livro-card__extras-title">Conteúdo Extra:</h4>
                            {item.extras.map((extra, idx) => (
                              <div key={idx} className="livro-card__edition-item extra">
                                <GiArchiveResearch size={12} />
                                <span>{extra.name}</span>
                                {extra.pdfKey ? (
                                  <>
                                    <button
                                      className="livro-card__btn-small"
                                      onClick={() => handleOpenPdf(extra, extra.pdfKey)}
                                    >
                                      <FiExternalLink size={12} />
                                      Visualizar
                                    </button>
                                    <button
                                      className="livro-card__btn-small"
                                      onClick={() => handleDownload(extra.pdfKey, extra.name)}
                                    >
                                      <FiDownload size={12} />
                                      Baixar
                                    </button>
                                  </>
                                ) : (
                                  <span className="livro-card__extra-badge">Em breve</span>
                                )}
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // Card para livro individual
                <div 
                  key={item.id} 
                  className="livro-card"
                  style={{ '--book-accent': item.accentColor, '--book-color': item.color }}
                >
                  <div className="livro-card__corner livro-card__corner--tl" />
                  <div className="livro-card__corner livro-card__corner--tr" />
                  <div className="livro-card__corner livro-card__corner--bl" />
                  <div className="livro-card__corner livro-card__corner--br" />

                  <div className="livro-card__icon" style={{ color: item.accentColor }}>
                    {item.icon}
                  </div>

                  <div className="livro-card__content">
                    <span className="livro-card__category" style={{ background: item.color }}>
                      {item.category}
                    </span>
                    <h3 className="livro-card__title">{item.title}</h3>
                    <p className="livro-card__subtitle">{item.subtitle}</p>
                    <p className="livro-card__desc">{item.description}</p>

                    <div className="livro-card__meta">
                      <span className="livro-card__meta-item">
                        <FiBookOpen size={12} />
                        {item.pages} páginas
                      </span>
                      <span className="livro-card__meta-item">
                        <GiDragonHead size={12} />
                        {item.year}
                      </span>
                    </div>

                    <div className="livro-card__actions">
                      <button
                        className="livro-card__btn livro-card__btn--view"
                        onClick={() => handleOpenPdf(item, item.pdfKey)}
                      >
                        <FiExternalLink size={14} />
                        Visualizar
                      </button>
                      <button
                        className="livro-card__btn livro-card__btn--download"
                        onClick={() => handleDownload(item.pdfKey, item.title)}
                      >
                        <FiDownload size={14} />
                        Baixar
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="livro__empty">
              <GiScrollUnfurled size={48} />
              <p>Nenhum item encontrado com esses filtros.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="livro__footer">
        <div className="container">
          <div className="livro__footer-content">
            <div className="livro__footer-runes" aria-hidden="true">
              ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ
            </div>
            <p className="livro__footer-text">
              Material oficial de Tormenta 20. Todos os direitos reservados à Jambô Editora.
              <br />
              Este material é disponibilizado para consulta e estudo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}