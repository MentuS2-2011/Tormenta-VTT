// Livro.jsx - Versão completa com todos os livros e revistas
import { useState } from 'react'
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
  GiDragonBreath,
  GiCharacter
} from 'react-icons/gi'
import { FiDownload, FiBookOpen, FiExternalLink, FiFolder, FiFile, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import './Livro.css'

// URLs diretas dos PDFs no Netlify (versão completa)
const PDF_URLS = {
  // Livros
  'Livro-Basico.pdf': 'https://livrostormenta20.netlify.app/Livros/Livro-B%C3%A1sico.pdf',
  'Ameacas-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Amea%C3%A7as-de-Arton.pdf',
  'Herois-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Her%C3%B3is-de-Arton.pdf',
  'Atlas-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Atlas-de-Arton.pdf',
  'Deuses-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Deuses-de-Arton.pdf',
  'Guia-de-Deuses-Menores.pdf': 'https://livrostormenta20.netlify.app/Livros/Guia-de-Deuses-Menores.pdf',
  'Guia-de-NPCs.pdf': 'https://livrostormenta20.netlify.app/Livros/Guia-de-NPCs.pdf',
  'distincoes-para-chelias.pdf': 'https://livrostormenta20.netlify.app/Livros/distincoes-para-chelias.pdf',
  
  // Dragão Brasil
  'DB-180.pdf': 'https://livrostormenta20.netlify.app/DB/DB-180.pdf',
  'DB-182.pdf': 'https://livrostormenta20.netlify.app/DB/DB-182.pdf',
  'DB-183.pdf': 'https://livrostormenta20.netlify.app/DB/DB-183.pdf',
  'DB-199.pdf': 'https://livrostormenta20.netlify.app/DB/DB-199.pdf',
  'DB-207.pdf': 'https://livrostormenta20.netlify.app/DB/DB-207.pdf',
  'DB-208.pdf': 'https://livrostormenta20.netlify.app/DB/DB-208.pdf',
  'DB-209.pdf': 'https://livrostormenta20.netlify.app/DB/DB-209.pdf',
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
  
  // RT Duelo de Dragões (edições 7 a 20)
  'RT20-7.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-7.pdf',
  'RT20-8.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-8.pdf',
  'RT20-9.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-9.pdf',
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
  
  // RT Fulgor dos Deuses (edições 21 a 27)
  'RT20-21.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-21.pdf',
  'RT20-22.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-22.pdf',
  'RT20-23.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-23.pdf',
  'RT20-24.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-24.pdf',
  'RT20-25.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-25.pdf',
  'RT20-26.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-26.pdf',
  'RT20-27.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-27.pdf',
}

// Dados dos livros
const booksData = [
  {
    id: 'basico',
    title: 'Livro Básico',
    subtitle: 'Tormenta 20',
    description: 'O livro fundamental do sistema Tormenta 20. Contém todas as regras essenciais, classes, raças, magias e equipamentos.',
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
    description: 'Mais de 300 ameaças para desafiar os heróis! De monstros clássicos a criaturas lendárias.',
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
    description: 'Expanda as possibilidades dos seus personagens! Novos poderes, origens, distinções e sistema de reputação.',
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
    description: 'Explore o continente de Arton em detalhes! Nações, reinos, pontos de interesse e história.',
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
    description: 'Conheça os vinte deuses maiores e menores de Arton! Domínios, poderes concedidos e mitologia.',
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
    description: 'Explore os deuses menores de Arton, entidades de poder limitado mas grande influência.',
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
    id: 'guia_npcs',
    title: 'Guia de NPCs',
    subtitle: 'Personagens e Aliados',
    description: 'Um guia completo para criação e interpretação de NPCs em Tormenta 20. Fichas prontas, arquétipos e dicas para mestres.',
    pdfKey: 'Guia-de-NPCs.pdf',
    icon: <GiCharacter size={48} />,
    color: '#3A5A6B',
    accentColor: '#5A7A8B',
    category: 'Apoio',
    pages: 96,
    year: 2023,
    type: 'book'
  },
  {
    id: 'distincoes',
    title: 'Distinções para Tormenta',
    subtitle: 'Honra e Glória',
    description: 'Explore as distinções! Ordens de cavalaria, títulos e caminhos de prestígio.',
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

// Coleções de revistas
const magazineCollections = [
  {
    id: 'dragao_brasil',
    title: 'Dragão Brasil',
    subtitle: 'Coleção Especial',
    description: 'A icônica revista de RPG brasileira. Cada edição traz aventuras, matérias especiais, novas regras e conteúdo exclusivo.',
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
      { number: 207, pdfKey: 'DB-207.pdf', title: 'Dragão Brasil #207' },
      { number: 208, pdfKey: 'DB-208.pdf', title: 'Dragão Brasil #208' },
      { number: 209, pdfKey: 'DB-209.pdf', title: 'Dragão Brasil #209' },
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
    ]
  },
  {
    id: 'rt20_duelo',
    title: 'Revista Tormenta 20 - Duelo de Dragões',
    subtitle: 'Arco Completo',
    description: 'A saga Duelo de Dragões! Uma aventura épica que leva os heróis a enfrentarem as dragões-reis de Arton. Edições 7 a 20.',
    icon: <GiDragonHead size={48} />,
    color: '#2C1810',
    accentColor: '#8B0000',
    category: 'Revistas',
    type: 'magazine_collection',
    editions: [
      { number: 7, pdfKey: 'RT20-7.pdf', title: 'RT20 #7 - O Presságio' },
      { number: 8, pdfKey: 'RT20-8.pdf', title: 'RT20 #8 - A Cinza' },
      { number: 9, pdfKey: 'RT20-9.pdf', title: 'RT20 #9 - O Voo da Fênix' },
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
    ]
  }
]

export default function Livro() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedMagazines, setExpandedMagazines] = useState({})

  const allItems = [...booksData, ...magazineCollections]

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...new Set(allItems.map(item => item.category))]

  const handleOpenPdf = (pdfKey) => {
    const url = PDF_URLS[pdfKey]
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert('PDF não encontrado: ' + pdfKey)
    }
  }

  const handleDownload = async (pdfKey, fileName) => {
    const url = PDF_URLS[pdfKey]
    if (!url) {
      alert('PDF não encontrado')
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
      console.error('Erro:', error)
      alert('Erro ao baixar. Tente abrir o PDF em nova aba e salvar manualmente.')
      window.open(url, '_blank')
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
      {/* Hero Section */}
      <section className="livro__hero">
        <div className="livro__hero-bg" />
        <div className="livro__hero-content">
          <div className="livro__hero-badge">
            <GiBookCover size={14} />
            Biblioteca de Arton
            <GiBookCover size={14} />
          </div>
          <h1 className="livro__hero-title">
            Acervo de <span className="livro__hero-accent">Tormenta</span>
          </h1>
          <p className="livro__hero-desc">
            Livros oficiais e coleções completas de revistas
          </p>
        </div>
      </section>

      {/* Filtros */}
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
                  className={`livro__category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'all' ? 'Todos' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="livro__grid-section">
        <div className="container">
          <div className="livro__grid">
            {filteredItems.map((item) => (
              item.type === 'magazine_collection' ? (
                <div key={item.id} className="livro-card magazine-collection">
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
                    
                    <button 
                      className="livro-card__expand-btn"
                      onClick={() => toggleMagazineExpand(item.id)}
                    >
                      {expandedMagazines[item.id] ? '▲ Esconder Edições' : '▼ Ver Edições'}
                    </button>

                    {expandedMagazines[item.id] && (
                      <div className="livro-card__editions-list">
                        {item.editions.map(edition => (
                          <div key={edition.number} className="livro-card__edition-item">
                            <span>{edition.title}</span>
                            <button onClick={() => handleOpenPdf(edition.pdfKey)}>
                              Ver
                            </button>
                            <button onClick={() => handleDownload(edition.pdfKey, edition.title)}>
                              Baixar
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div key={item.id} className="livro-card">
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
                    <div className="livro-card__actions">
                      <button onClick={() => handleOpenPdf(item.pdfKey)}>
                        Visualizar
                      </button>
                      <button onClick={() => handleDownload(item.pdfKey, item.title)}>
                        Baixar
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}