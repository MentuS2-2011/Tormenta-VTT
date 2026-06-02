<<<<<<< HEAD
// Livro.jsx - Versão com PDFs no Netlify
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
=======
// Livro.jsx - Versão completa com todos os livros e revistas
import { useState } from 'react'
>>>>>>> 13a6d02 (commit de segurança)
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

<<<<<<< HEAD
// ═══════════════════════════════════════════════
// URLs dos PDFs no Netlify
// ═══════════════════════════════════════════════

// Base URL do seu site no Netlify
const NETLIFY_BASE_URL = 'https://livrostormenta20.netlify.app'

// Mapeamento dos PDFs com URLs completas
const PDF_URLS = {
=======
// URLs diretas dos PDFs no Netlify
const PDF_URLS = {
  // Livros
>>>>>>> 13a6d02 (commit de segurança)
  'Livro-Basico.pdf': 'https://livrostormenta20.netlify.app/Livros/Livro-B%C3%A1sico.pdf',
  'Ameacas-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Amea%C3%A7as-de-Arton.pdf',
  'Herois-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Her%C3%B3is-de-Arton.pdf',
  'Atlas-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Atlas-de-Arton.pdf',
  'Deuses-de-Arton.pdf': 'https://livrostormenta20.netlify.app/Livros/Deuses-de-Arton.pdf',
  'Guia-de-Deuses-Menores.pdf': 'https://livrostormenta20.netlify.app/Livros/Guia-de-Deuses-Menores.pdf',
<<<<<<< HEAD
=======
  'Guia-de-NPCs.pdf': 'https://livrostormenta20.netlify.app/Livros/Guia-de-NPCs.pdf',
>>>>>>> 13a6d02 (commit de segurança)
  'distincoes-para-chelias.pdf': 'https://livrostormenta20.netlify.app/Livros/distincoes-para-chelias.pdf',
  
  // Dragão Brasil
  'DB-180.pdf': 'https://livrostormenta20.netlify.app/DB/DB-180.pdf',
  'DB-182.pdf': 'https://livrostormenta20.netlify.app/DB/DB-182.pdf',
  'DB-183.pdf': 'https://livrostormenta20.netlify.app/DB/DB-183.pdf',
  'DB-199.pdf': 'https://livrostormenta20.netlify.app/DB/DB-199.pdf',
<<<<<<< HEAD
=======
  'DB-207.pdf': 'https://livrostormenta20.netlify.app/DB/DB-207.pdf',
  'DB-208.pdf': 'https://livrostormenta20.netlify.app/DB/DB-208.pdf',
  'DB-209.pdf': 'https://livrostormenta20.netlify.app/DB/DB-209.pdf',
>>>>>>> 13a6d02 (commit de segurança)
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
  
<<<<<<< HEAD
  // RT Duelo de Dragões
=======
  // RT Duelo de Dragões (edições 7 a 20)
  'RT20-7.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-7.pdf',
  'RT20-8.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-8.pdf',
  'RT20-9.pdf': 'https://livrostormenta20.netlify.app/RT/DuelodeDragoes(completo)/RT20-9.pdf',
>>>>>>> 13a6d02 (commit de segurança)
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
  
<<<<<<< HEAD
  // RT Fulgor dos Deuses
=======
  // RT Fulgor dos Deuses (edições 21 a 27)
>>>>>>> 13a6d02 (commit de segurança)
  'RT20-21.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-21.pdf',
  'RT20-22.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-22.pdf',
  'RT20-23.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-23.pdf',
  'RT20-24.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-24.pdf',
  'RT20-25.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-25.pdf',
  'RT20-26.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-26.pdf',
  'RT20-27.pdf': 'https://livrostormenta20.netlify.app/RT/FullgordosDeuses/RT20-27.pdf',
}
<<<<<<< HEAD
// Dados dos livros oficiais
=======

// Dados dos livros (incluindo o Guia de NPCs)
>>>>>>> 13a6d02 (commit de segurança)
const booksData = [
  {
    id: 'basico',
    title: 'Livro Básico',
    subtitle: 'Tormenta 20',
<<<<<<< HEAD
    description: 'O livro fundamental do sistema Tormenta 20. Contém todas as regras essenciais, classes, raças, magias e equipamentos para suas aventuras em Arton.',
=======
    description: 'O livro fundamental do sistema Tormenta 20. Contém todas as regras essenciais, classes, raças, magias e equipamentos.',
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
    description: 'Mais de 300 ameaças para desafiar os heróis! De monstros clássicos a criaturas lendárias, este livro expande o bestiário de Tormenta 20 com perigos inesquecíveis.',
=======
    description: 'Mais de 300 ameaças para desafiar os heróis! De monstros clássicos a criaturas lendárias.',
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
    description: 'Expanda as possibilidades dos seus personagens! Novos poderes, origens, distinções e um sistema de reputação para heróis que buscam a glória.',
=======
    description: 'Expanda as possibilidades dos seus personagens! Novos poderes, origens, distinções e sistema de reputação.',
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
    description: 'Explore o continente de Arton em detalhes! Descubra as nações, reinos, pontos de interesse e a rica história que faz deste mundo um cenário único.',
=======
    description: 'Explore o continente de Arton em detalhes! Nações, reinos, pontos de interesse e história.',
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
    description: 'Conheça os vinte deuses maiores e menores de Arton! Seus domínios, poderes concedidos, devotos e a influência divina no mundo.',
=======
    description: 'Conheça os vinte deuses maiores e menores de Arton! Domínios, poderes concedidos e mitologia.',
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
    description: 'Explore os deuses menores de Arton, entidades de poder limitado mas grande influência. Novos poderes, domínios e caminhos divinos para seus personagens.',
=======
    description: 'Explore os deuses menores de Arton, entidades de poder limitado mas grande influência.',
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
    description: 'Explore as distinções únicas do reino de Chélias! Ordens de cavalaria, títulos nobiliárquicos e caminhos de prestígio.',
=======
    description: 'Explore as distinções! Ordens de cavalaria, títulos e caminhos de prestígio.',
>>>>>>> 13a6d02 (commit de segurança)
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

// Coleções de revistas (com todas as edições)
const magazineCollections = [
  {
    id: 'dragao_brasil',
    title: 'Dragão Brasil',
    subtitle: 'Coleção Especial',
<<<<<<< HEAD
    description: 'A icônica revista de RPG brasileira. Cada edição traz aventuras, matérias especiais, novas regras e conteúdo exclusivo para diversos sistemas.',
=======
    description: 'A icônica revista de RPG brasileira. Cada edição traz aventuras, matérias especiais, novas regras e conteúdo exclusivo.',
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
=======
      { number: 207, pdfKey: 'DB-207.pdf', title: 'Dragão Brasil #207' },
      { number: 208, pdfKey: 'DB-208.pdf', title: 'Dragão Brasil #208' },
      { number: 209, pdfKey: 'DB-209.pdf', title: 'Dragão Brasil #209' },
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
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
=======
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
=======
      { number: 7, pdfKey: 'RT20-7.pdf', title: 'RT20 #7 - O Presságio' },
      { number: 8, pdfKey: 'RT20-8.pdf', title: 'RT20 #8 - A Cinza' },
      { number: 9, pdfKey: 'RT20-9.pdf', title: 'RT20 #9 - O Voo da Fênix' },
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
    ],
    extras: [
      { name: 'Mapas do Arco', pdfKey: null, placeholder: true },
      { name: 'Fichas dos Dragões', pdfKey: null, placeholder: true },
      { name: 'Arte Conceitual', pdfKey: null, placeholder: true }
=======
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
    ],
    extras: [
      { name: 'Mapas Celestiais', pdfKey: null, placeholder: true },
      { name: 'Fichas de Divindades', pdfKey: null, placeholder: true },
      { name: 'Guias de Campanha', pdfKey: null, placeholder: true }
=======
>>>>>>> 13a6d02 (commit de segurança)
    ]
  }
]

export default function Livro() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedMagazines, setExpandedMagazines] = useState({})

<<<<<<< HEAD
  // Combinar livros e coleções
=======
>>>>>>> 13a6d02 (commit de segurança)
  const allItems = [...booksData, ...magazineCollections]

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...new Set(allItems.map(item => item.category))]

<<<<<<< HEAD
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

=======
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

>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
      console.error('Erro no download:', error)
      alert('Erro ao baixar o arquivo. Tente novamente mais tarde.')
=======
      console.error('Erro:', error)
      alert('Erro ao baixar. Tente abrir o PDF em nova aba e salvar manualmente.')
      window.open(url, '_blank')
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD

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
=======
                    
>>>>>>> 13a6d02 (commit de segurança)
                    <button 
                      className="livro-card__expand-btn"
                      onClick={() => toggleMagazineExpand(item.id)}
                    >
                      {expandedMagazines[item.id] ? '▲ Esconder Edições' : '▼ Ver Edições'}
                    </button>

<<<<<<< HEAD
                    {/* Lista de edições */}
=======
>>>>>>> 13a6d02 (commit de segurança)
                    {expandedMagazines[item.id] && (
                      <div className="livro-card__editions-list">
                        {item.editions.map(edition => (
                          <div key={edition.number} className="livro-card__edition-item">
                            <span>{edition.title}</span>
<<<<<<< HEAD
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
=======
                            <button onClick={() => handleOpenPdf(edition.pdfKey)}>
                              Ver
                            </button>
                            <button onClick={() => handleDownload(edition.pdfKey, edition.title)}>
>>>>>>> 13a6d02 (commit de segurança)
                              Baixar
                            </button>
                          </div>
                        ))}
<<<<<<< HEAD
                        
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
=======
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD
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
=======
                      <button onClick={() => handleOpenPdf(item.pdfKey)}>
                        Visualizar
                      </button>
                      <button onClick={() => handleDownload(item.pdfKey, item.title)}>
>>>>>>> 13a6d02 (commit de segurança)
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
<<<<<<< HEAD

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
=======
>>>>>>> 13a6d02 (commit de segurança)
    </div>
  )
}