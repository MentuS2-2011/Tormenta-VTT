// Livro.jsx - Versão atualizada
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

// Importação direta dos PDFs
import AmeacasDeArton from '../assets/books/Ameaças-de-Arton.pdf'
import AtlasDeArton from '../assets/books/Atlas-de-Arton.pdf'
import HeroisDeArton from '../assets/books/Heróis-de-Arton.pdf'
import LivroBasico from '../assets/books/Livro-Básico.pdf'
import DeusesDeArton from '../assets/books/Deuses-de-Arton.pdf'
import DistincoesChelias from '../assets/books/distincoes-para-chelias.pdf'
import GuiaDeusesMenores from '../assets/books/Guia-de-Deuses-Menores.pdf'

// Importação das revistas
// Dragão Brasil (assumindo que são PDFs individuais)
import DB180 from '../assets/books/DragaoBrasil/DB-180.pdf'
import DB182 from '../assets/books/DragaoBrasil/DB-182.pdf'
import DB183 from '../assets/books/DragaoBrasil/DB-183.pdf'
import DB199 from '../assets/books/DragaoBrasil/DB-199.pdf'
import DB210 from '../assets/books/DragaoBrasil/DB-210.pdf'
import DB210Extra from '../assets/books/DragaoBrasil/DB-210-Extra.pdf'
import DB211 from '../assets/books/DragaoBrasil/DB-211.pdf'
import DB211Extra from '../assets/books/DragaoBrasil/DB-211-Extra.pdf'
import DB212 from '../assets/books/DragaoBrasil/DB-212.pdf'
import DB212Extra from '../assets/books/DragaoBrasil/DB-212-Extra.pdf'
import DB213 from '../assets/books/DragaoBrasil/DB-213.pdf'
import DB213Extra from '../assets/books/DragaoBrasil/DB-213-Extra.pdf'
import DB214 from '../assets/books/DragaoBrasil/DB-214.pdf'
import DB214Extra from '../assets/books/DragaoBrasil/DB-214-Extra.pdf'
import DB215 from '../assets/books/DragaoBrasil/DB-215.pdf'
import DB215Extra from '../assets/books/DragaoBrasil/DB-215-Extra.pdf'
import DB216 from '../assets/books/DragaoBrasil/DB-216.pdf'
import DB216Extra from '../assets/books/DragaoBrasil/DB-216-Extra.pdf'
import DB217 from '../assets/books/DragaoBrasil/DB-217.pdf'
import DB217Extra from '../assets/books/DragaoBrasil/DB-217-Extra.pdf'
import DB218 from '../assets/books/DragaoBrasil/DB-218.pdf'
import DB218Extra from '../assets/books/DragaoBrasil/DB-218-Extra.pdf'
import DB219 from '../assets/books/DragaoBrasil/DB-219.pdf'
import DB219Extra from '../assets/books/DragaoBrasil/DB-219-Extra.pdf'
import DB220 from '../assets/books/DragaoBrasil/DB-220.pdf'
import DB220Extra from '../assets/books/DragaoBrasil/DB-220-Extra.pdf'
import DB221 from '../assets/books/DragaoBrasil/DB-221.pdf'
import DB221Extra from '../assets/books/DragaoBrasil/DB-221-Extra.pdf'
import DB222 from '../assets/books/DragaoBrasil/DB-222.pdf'
import DB222Extra from '../assets/books/DragaoBrasil/DB-222-Extra.pdf'
import DB223 from '../assets/books/DragaoBrasil/DB-223.pdf'
import DB224 from '../assets/books/DragaoBrasil/DB-224.pdf'
import DB225 from '../assets/books/DragaoBrasil/DB-225.pdf'
import DB226 from '../assets/books/DragaoBrasil/DB-226.pdf'
import DB227 from '../assets/books/DragaoBrasil/DB-227.pdf'
// ... adicione todas as edições disponíveis

// Revista Tormenta 20 - Duelo de Dragões
import RT20_10 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-10.pdf'
import RT20_11 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-11.pdf'
import RT20_12 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-12.pdf'
import RT20_13 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-13.pdf'
import RT20_14 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-14.pdf'
import RT20_15 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-15.pdf'
import RT20_16 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-16.pdf'
import RT20_17 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-17.pdf'
import RT20_18 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-18.pdf'
import RT20_19 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-19.pdf'
import RT20_20 from '../assets/books/RevistaTormenta20/Duelo_de_dragoes-(completo)/RT20-20.pdf'

// Revista Tormenta 20 - Fulgor dos Deuses
import RT20_21 from '../assets/books/RevistaTormenta20/Fulgor_dos_Deuses-(EmAndamento)/RT20-21.pdf'
import RT20_22 from '../assets/books/RevistaTormenta20/Fulgor_dos_Deuses-(EmAndamento)/RT20-22.pdf'
import RT20_23 from '../assets/books/RevistaTormenta20/Fulgor_dos_Deuses-(EmAndamento)/RT20-23.pdf'
import RT20_24 from '../assets/books/RevistaTormenta20/Fulgor_dos_Deuses-(EmAndamento)/RT20-24.pdf'
import RT20_25 from '../assets/books/RevistaTormenta20/Fulgor_dos_Deuses-(EmAndamento)/RT20-25.pdf'
import RT20_26 from '../assets/books/RevistaTormenta20/Fulgor_dos_Deuses-(EmAndamento)/RT20-26.pdf'
import RT20_27 from '../assets/books/RevistaTormenta20/Fulgor_dos_Deuses-(EmAndamento)/RT20-27.pdf'

/* ─────────────────────────────────────────────
   Livro.jsx - Página de livros e revistas
   ───────────────────────────────────────────── */

// Interface para pacotes de revistas
class MagazineBundle {
  constructor(name, editions, icon, color, accentColor, extras = null) {
    this.name = name
    this.editions = editions
    this.icon = icon
    this.color = color
    this.accentColor = accentColor
    this.extras = extras // Arquivos extras que vêm junto
  }
}

// Dados dos livros oficiais
const booksData = [
  {
    id: 'basico',
    title: 'Livro Básico',
    subtitle: 'Tormenta 20',
    description: 'O livro fundamental do sistema Tormenta 20. Contém todas as regras essenciais, classes, raças, magias e equipamentos para suas aventuras em Arton.',
    pdfUrl: LivroBasico,
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
    pdfUrl: AmeacasDeArton,
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
    pdfUrl: HeroisDeArton,
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
    pdfUrl: AtlasDeArton,
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
    pdfUrl: DeusesDeArton,
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
    pdfUrl: GuiaDeusesMenores,
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
    pdfUrl: DistincoesChelias,
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
    { number: 180, url: DB180, title: 'Dragão Brasil #180' },
    { number: 182, url: DB182, title: 'Dragão Brasil #182' },
    { number: 183, url: DB183, title: 'Dragão Brasil #183' },
    { number: 199, url: DB199, title: 'Dragão Brasil #199' },
    { number: 210, url: DB210, title: 'Dragão Brasil #210', hasExtra: true },
    { number: 211, url: DB211, title: 'Dragão Brasil #211', hasExtra: true },
    { number: 212, url: DB212, title: 'Dragão Brasil #212', hasExtra: true },
    { number: 213, url: DB213, title: 'Dragão Brasil #213', hasExtra: true },
    { number: 214, url: DB214, title: 'Dragão Brasil #214', hasExtra: true },
    { number: 215, url: DB215, title: 'Dragão Brasil #215', hasExtra: true },
    { number: 216, url: DB216, title: 'Dragão Brasil #216', hasExtra: true },
    { number: 217, url: DB217, title: 'Dragão Brasil #217', hasExtra: true },
    { number: 218, url: DB218, title: 'Dragão Brasil #218', hasExtra: true },
    { number: 219, url: DB219, title: 'Dragão Brasil #219', hasExtra: true },
    { number: 220, url: DB220, title: 'Dragão Brasil #220', hasExtra: true },
    { number: 221, url: DB221, title: 'Dragão Brasil #221', hasExtra: true },
    { number: 222, url: DB222, title: 'Dragão Brasil #222', hasExtra: true },
    { number: 223, url: DB223, title: 'Dragão Brasil #223' },
    { number: 224, url: DB224, title: 'Dragão Brasil #224' },
    { number: 225, url: DB225, title: 'Dragão Brasil #225' },
    { number: 226, url: DB226, title: 'Dragão Brasil #226' },
    { number: 227, url: DB227, title: 'Dragão Brasil #227' }
  ],
  extras: [
    { number: 210, url: DB210Extra, name: 'DB #210 - Extra' },
    { number: 211, url: DB211Extra, name: 'DB #211 - Extra' },
    { number: 212, url: DB212Extra, name: 'DB #212 - Extra' },
    { number: 213, url: DB213Extra, name: 'DB #213 - Extra' },
    { number: 214, url: DB214Extra, name: 'DB #214 - Extra' },
    { number: 215, url: DB215Extra, name: 'DB #215 - Extra' },
    { number: 216, url: DB216Extra, name: 'DB #216 - Extra' },
    { number: 217, url: DB217Extra, name: 'DB #217 - Extra' },
    { number: 218, url: DB218Extra, name: 'DB #218 - Extra' },
    { number: 219, url: DB219Extra, name: 'DB #219 - Extra' },
    { number: 220, url: DB220Extra, name: 'DB #220 - Extra' },
    { number: 221, url: DB221Extra, name: 'DB #221 - Extra' },
    { number: 222, url: DB222Extra, name: 'DB #222 - Extra' }
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
      { number: 10, url: RT20_10, title: 'RT20 #10 - O Despertar' },
      { number: 11, url: RT20_11, title: 'RT20 #11 - As Cinzas' },
      { number: 12, url: RT20_12, title: 'RT20 #12 - O Voo' },
      { number: 13, url: RT20_13, title: 'RT20 #13 - A Caçada' },
      { number: 14, url: RT20_14, title: 'RT20 #14 - O Ninho' },
      { number: 15, url: RT20_15, title: 'RT20 #15 - A Aliança' },
      { number: 16, url: RT20_16, title: 'RT20 #16 - O Confronto' },
      { number: 17, url: RT20_17, title: 'RT20 #17 - A Queda' },
      { number: 18, url: RT20_18, title: 'RT20 #18 - O Legado' },
      { number: 19, url: RT20_19, title: 'RT20 #19 - A Ascensão' },
      { number: 20, url: RT20_20, title: 'RT20 #20 - O Desfecho' }
    ],
    extras: [
      { name: 'Mapas do Arco', url: null },
      { name: 'Fichas dos Dragões', url: null },
      { name: 'Arte Conceitual', url: null }
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
      { number: 21, url: RT20_21, title: 'RT20 #21 - O Presságio' },
      { number: 22, url: RT20_22, title: 'RT20 #22 - A Profecia' },
      { number: 23, url: RT20_23, title: 'RT20 #23 - O Escolhido' },
      { number: 24, url: RT20_24, title: 'RT20 #24 - A Revelação' },
      { number: 25, url: RT20_25, title: 'RT20 #25 - O Conflito' },
      { number: 26, url: RT20_26, title: 'RT20 #26 - A Trégua' },
      { number: 27, url: RT20_27, title: 'RT20 #27 - O Despertar Divino' }
    ],
    extras: [
      { name: 'Mapas Celestiais', url: null },
      { name: 'Fichas de Divindades', url: null },
      { name: 'Guias de Campanha', url: null }
    ]
  }
]

// Componente principal
export default function Livro() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewerOpen, setViewerOpen] = useState(false)
  const [currentPdf, setCurrentPdf] = useState(null)
  const [currentBook, setCurrentBook] = useState(null)
  const [expandedMagazines, setExpandedMagazines] = useState({})

  // Combinar livros e coleções de revistas para exibição
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

  const handleOpenPdf = (book, pdfUrl) => {
    setCurrentBook(book)
    setCurrentPdf(pdfUrl)
    setViewerOpen(true)
  }

  const handleDownload = (pdfUrl, fileName) => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = fileName.replace(/\s/g, '_')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadCollection = async (collection) => {
    // Criar um arquivo ZIP com todas as edições e extras
    //const JSZip = (await import('jszip')).default
    //const zip = new JSZip()
    
    // Pasta para as edições
    const editionsFolder = zip.folder(`${collection.title}/Edições`)
    // Pasta para extras
    const extrasFolder = zip.folder(`${collection.title}/Extras`)
    
    // Baixar cada edição
    for (const edition of collection.editions) {
      const response = await fetch(edition.url)
      const blob = await response.blob()
      editionsFolder.file(`${edition.title}.pdf`, blob)
    }
    
    // Adicionar extras (se disponíveis)
    for (const extra of collection.extras) {
      if (extra.url) {
        const response = await fetch(extra.url)
        const blob = await response.blob()
        extrasFolder.file(extra.name, blob)
      } else {
        // Adicionar arquivo placeholder
        extrasFolder.file(`${extra.name}.txt`, "Conteúdo extra disponível em breve")
      }
    }
    
    // Gerar e baixar ZIP
    const content = await zip.generateAsync({ type: "blob" })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(content)
    link.download = `${collection.title.replace(/\s/g, '_')}.zip`
    link.click()
    URL.revokeObjectURL(link.href)
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
            {filteredItems.map((item, index) => (
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

                    {/* Botão para expandir/colapsar edições */}
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

                    {/* Lista de edições (expandível) */}
                    {expandedMagazines[item.id] && (
                      <div className="livro-card__editions-list">
                        <h4>Edições:</h4>
                        {item.editions.map(edition => (
                          <div key={edition.number} className="livro-card__edition-item">
                            <span>{edition.title}</span>
                            <button
                              className="livro-card__btn-small"
                              onClick={() => handleOpenPdf(edition, edition.url)}
                            >
                              <FiExternalLink size={12} />
                              Visualizar
                            </button>
                            <button
                              className="livro-card__btn-small"
                              onClick={() => handleDownload(edition.url, edition.title)}
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
                                <span className="livro-card__extra-badge">Incluído no pacote</span>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    )}

                    {/* Ações principais */}
                    <div className="livro-card__actions">
                      <button
                        className="livro-card__btn livro-card__btn--download"
                        onClick={() => handleDownloadCollection(item)}
                      >
                        <FiDownload size={14} />
                        Baixar Coleção Completa
                      </button>
                    </div>
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
                        onClick={() => handleOpenPdf(item, item.pdfUrl)}
                      >
                        <FiExternalLink size={14} />
                        Visualizar
                      </button>
                      <button
                        className="livro-card__btn livro-card__btn--download"
                        onClick={() => handleDownload(item.pdfUrl, item.title)}
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

      {/* Modal Viewer */}
      {viewerOpen && currentPdf && (
        <div className="livro__viewer-overlay" onClick={() => setViewerOpen(false)}>
          <div className="livro__viewer" onClick={(e) => e.stopPropagation()}>
            <div className="livro__viewer-header">
              <h3>{currentBook?.title || 'Documento'}</h3>
              <div className="livro__viewer-actions">
                <button
                  className="livro__viewer-download"
                  onClick={() => handleDownload(currentPdf, currentBook?.title || 'documento')}
                  title="Baixar PDF"
                >
                  <FiDownload size={18} />
                </button>
                <button
                  className="livro__viewer-close"
                  onClick={() => setViewerOpen(false)}
                  title="Fechar"
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src={`${currentPdf}#toolbar=0`}
              title={currentBook?.title || 'PDF Viewer'}
              className="livro__viewer-iframe"
            />
          </div>
        </div>
      )}
    </div>
  )
}