import { useState, useEffect, useRef } from 'react'
import { 
  FiX, FiUser, FiShield, FiZap, 
  FiPlus, FiTrash2, FiUpload, FiImage, FiFolder
} from 'react-icons/fi'
import { GiScrollUnfurled } from 'react-icons/gi'
import { supabase } from '../../../lib/supabase'
import './PersonagemEditor.css'

// ============================================
// CONSTANTES COMPLETAS
// ============================================

const RACES = {
  "Aberrante": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Anão": { mods: { FOR: 0, DES: -1, CON: 2, INT: 0, SAB: 1, CAR: 0 } },
  "Aggelus": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 2, CAR: 1 } },
  "Bugbear": { mods: { FOR: 2, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: -1 } },
  "Centauro": { mods: { FOR: 1, DES: 0, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Ceratops": { mods: { FOR: 1, DES: -1, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Dahllan": { mods: { FOR: 0, DES: 1, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Duende": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Eiradaan": { mods: { FOR: -1, DES: 0, CON: 0, INT: 0, SAB: 2, CAR: 1 } },
  "Elfo": { mods: { FOR: 0, DES: 1, CON: -1, INT: 2, SAB: 0, CAR: 0 } },
  "Elfo-do-Mar": { mods: { FOR: 0, DES: 2, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Elfo-Negro": { mods: { FOR: 0, DES: 2, CON: -1, INT: 0, SAB: 0, CAR: 1 } },
  "Finntroll": { mods: { FOR: -1, DES: 0, CON: 1, INT: 2, SAB: 0, CAR: 0 } },
  "Galokk": { mods: { FOR: 1, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: -1 } },
  "Gnoll": { mods: { FOR: 0, DES: 0, CON: 2, INT: -1, SAB: 1, CAR: 0 } },
  "Goblin": { mods: { FOR: 0, DES: 2, CON: 0, INT: 1, SAB: 0, CAR: -1 } },
  "Golem": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Harpia": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 0, CAR: 1 } },
  "Hobgoblin": { mods: { FOR: 0, DES: 1, CON: 2, INT: 0, SAB: 0, CAR: -1 } },
  "Humano": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Hynne": { mods: { FOR: -1, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 1 } },
  "Kaijin": { mods: { FOR: 2, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: -2 } },
  "Kallyanach": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Kappa": { mods: { FOR: 0, DES: 2, CON: 1, INT: 0, SAB: 0, CAR: -1 } },
  "Kliren": { mods: { FOR: -1, DES: 0, CON: 0, INT: 2, SAB: 0, CAR: 1 } },
  "Kobold": { mods: { FOR: -1, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Lefou": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Mashin": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Medusa": { mods: { FOR: 0, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 2 } },
  "Meio-Elfo": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Meio-Orc": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Minauro": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Minotauro": { mods: { FOR: 2, DES: 0, CON: 1, INT: 0, SAB: -1, CAR: 0 } },
  "Moreau": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Nagah": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Nezumi": { mods: { FOR: 0, DES: 1, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Nimbus": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Ogro": { mods: { FOR: 3, DES: 0, CON: 2, INT: -1, SAB: 0, CAR: -1 } },
  "Orc": { mods: { FOR: 2, DES: 0, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Osteon": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Qareen": { mods: { FOR: 0, DES: 0, CON: 0, INT: 1, SAB: -1, CAR: 2 } },
  "Sátiro": { mods: { FOR: 0, DES: 1, CON: 0, INT: 0, SAB: -1, CAR: 2 } },
  "Sereia / Tritão": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Sílfide": { mods: { FOR: -2, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: 2 } },
  "Tengu": { mods: { FOR: 0, DES: 2, CON: 0, INT: 1, SAB: 0, CAR: 0 } },
  "Thri-Kreen": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 1, CAR: -1 } },
  "Trabachi": { mods: { FOR: 1, DES: 0, CON: 2, INT: 0, SAB: 0, CAR: -1 } },
  "Trog": { mods: { FOR: 1, DES: 0, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Vampiro": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Vardak": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 0, CAR: 1 } },
  "Velocis": { mods: { FOR: 0, DES: 1, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Voracis": { mods: { FOR: 0, DES: 2, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Yidishan": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
}

const MOREAU_OPTS = [
  { key: 'coruja', label: 'Coruja', mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 1, CAR: 0 } },
  { key: 'hiena', label: 'Hiena', mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 1, CAR: 0 } },
  { key: 'raposa', label: 'Raposa', mods: { FOR: 0, DES: 0, CON: 0, INT: 1, SAB: 0, CAR: 0 } },
  { key: 'serpente', label: 'Serpente', mods: { FOR: 0, DES: 0, CON: 0, INT: 1, SAB: 0, CAR: 0 } },
  { key: 'bufalo', label: 'Búfalo', mods: { FOR: 1, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'coelho', label: 'Coelho', mods: { FOR: 0, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'crocodilo', label: 'Crocodilo', mods: { FOR: 0, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'gato', label: 'Gato', mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 1 } },
  { key: 'leao', label: 'Leão', mods: { FOR: 1, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'lobo', label: 'Lobo', mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 1 } },
  { key: 'morcego', label: 'Morcego', mods: { FOR: 0, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'urso', label: 'Urso', mods: { FOR: 0, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: 0 } },
]

const NAGAH_OPTS = {
  macho: { FOR: 1, DES: 1, CON: 1, INT: 0, SAB: 0, CAR: 0 },
  femea: { FOR: 0, DES: 0, CON: 0, INT: 1, SAB: 1, CAR: 1 },
}

const GOLEM_CHASSI = [
  { key: 'barro', label: 'Barro', mods: { FOR: 0, DES: 0, CON: 2, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'bronze', label: 'Bronze', mods: { FOR: 1, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'carne', label: 'Carne', mods: { FOR: 1, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: -1 } },
  { key: 'espelhos', label: 'Espelhos', mods: { FOR: 0, DES: 0, CON: -1, INT: 0, SAB: 1, CAR: 2 } },
  { key: 'ferro', label: 'Ferro', mods: { FOR: 1, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'gelo', label: 'Gelo Eterno', mods: { FOR: 0, DES: 0, CON: 2, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'pedra', label: 'Pedra', mods: { FOR: 0, DES: 0, CON: 2, INT: 0, SAB: 0, CAR: 0 } },
  { key: 'sucata', label: 'Sucata', mods: { FOR: 1, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: 0 } },
]

const SKILLS_LIST = [
  { key: 'acrobacia', name: 'Acrobacia', attr: 'DES' },
  { key: 'adestramento', name: 'Adestramento', attr: 'CAR' },
  { key: 'atletismo', name: 'Atletismo', attr: 'FOR' },
  { key: 'atuacao', name: 'Atuação', attr: 'CAR' },
  { key: 'cavalgar', name: 'Cavalgar', attr: 'DES' },
  { key: 'conhecimento', name: 'Conhecimento', attr: 'INT' },
  { key: 'cura', name: 'Cura', attr: 'SAB' },
  { key: 'diplomacia', name: 'Diplomacia', attr: 'CAR' },
  { key: 'enganacao', name: 'Enganação', attr: 'CAR' },
  { key: 'fortitude', name: 'Fortitude', attr: 'CON' },
  { key: 'furtividade', name: 'Furtividade', attr: 'DES' },
  { key: 'guerra', name: 'Guerra', attr: 'INT' },
  { key: 'iniciativa', name: 'Iniciativa', attr: 'DES' },
  { key: 'intimidacao', name: 'Intimidação', attr: 'CAR' },
  { key: 'intuicao', name: 'Intuição', attr: 'SAB' },
  { key: 'investigacao', name: 'Investigação', attr: 'INT' },
  { key: 'jogatina', name: 'Jogatina', attr: 'CAR' },
  { key: 'ladinagem', name: 'Ladinagem', attr: 'DES' },
  { key: 'luta', name: 'Luta', attr: 'FOR' },
  { key: 'misticismo', name: 'Misticismo', attr: 'INT' },
  { key: 'nobreza', name: 'Nobreza', attr: 'INT' },
  { key: 'oficio', name: 'Ofício', attr: 'INT' },
  { key: 'percepcao', name: 'Percepção', attr: 'SAB' },
  { key: 'pilotagem', name: 'Pilotagem', attr: 'DES' },
  { key: 'pontaria', name: 'Pontaria', attr: 'DES' },
  { key: 'reflexos', name: 'Reflexos', attr: 'DES' },
  { key: 'religiao', name: 'Religião', attr: 'SAB' },
  { key: 'sobrevivencia', name: 'Sobrevivência', attr: 'SAB' },
  { key: 'vontade', name: 'Vontade', attr: 'SAB' },
]

const CLASSES = {
  'Arcanista': { pv: 8, pvNivel: 2, pmNivel: 6 },
  'Bárbaro': { pv: 24, pvNivel: 6, pmNivel: 3 },
  'Bardo': { pv: 12, pvNivel: 3, pmNivel: 4 },
  'Bucaneiro': { pv: 16, pvNivel: 4, pmNivel: 3 },
  'Caçador': { pv: 16, pvNivel: 4, pmNivel: 4 },
  'Cavaleiro': { pv: 20, pvNivel: 5, pmNivel: 3 },
  'Clérigo': { pv: 16, pvNivel: 4, pmNivel: 5 },
  'Druida': { pv: 16, pvNivel: 4, pmNivel: 4 },
  'Guerreiro': { pv: 20, pvNivel: 5, pmNivel: 3 },
  'Inventor': { pv: 12, pvNivel: 3, pmNivel: 4 },
  'Ladino': { pv: 12, pvNivel: 3, pmNivel: 4 },
  'Lutador': { pv: 20, pvNivel: 5, pmNivel: 3 },
  'Nobre': { pv: 16, pvNivel: 4, pmNivel: 4 },
  'Paladino': { pv: 20, pvNivel: 5, pmNivel: 3 },
  'Treinador': { pv: 12, pvNivel: 3, pmNivel: 4 },
  'Miragem': { pv: 16, pvNivel: 4, pmNivel: 3 },
  'Místico': { pv: 16, pvNivel: 4, pmNivel: 4 },
  'Samurai': { pv: 20, pvNivel: 5, pmNivel: 3 },
}

const ORIGENS = [
  'Acólito', 'Amigo dos Animais', 'Amnésico', 'Aristocrata', 'Artesão',
  'Artista', 'Assistente de Laboratório', 'Batedor', 'Capanga', 'Charlatão',
  'Circense', 'Criminoso', 'Curandeiro', 'Eremita', 'Escravo', 'Estudioso',
  'Fazendeiro', 'Forasteiro', 'Gladiador', 'Guarda', 'Herdeiro',
  'Herói Camponês', 'Marujo', 'Mateiro', 'Membro de Guilda', 'Mercador',
  'Minerador', 'Nômade', 'Seguidor', 'Soldado', 'Taverneiro', 'Trabalhador',
  'Bacharel', 'Boticário', 'Caçador de Ratos', 'Cão de Briga', 'Carcereiro',
  'Carpinteiro de Guilda', 'Chef Hynne', 'Cirurgião-Barbeiro', 'Cocheiro',
  'Construtor', 'Escriba', 'Espião', 'Ladrão de Túmulos', 'Padeiro',
  'Pedinte', 'Servo', 'Outra'
]

export default function PersonagemEditor({ personagem, mesaId, profile, onClose, onSave }) {
  const [activeTab, setActiveTab] = useState('basico')
  const [formData, setFormData] = useState({
    id: null,
    nome: '',
    jogador_id: profile.id,
    imagem_url: '',
    token_url: '',
    raca: '',
    racaVariante: '',
    origem: '',
    divindade: '',
    distincao: '',
    classes: [{ nome: '', nivel: 1 }],
    atributos: { for: 10, des: 10, con: 10, int: 10, sab: 10, car: 10 },
    pv_atual: 0,
    pv_temp: 0,
    pm_atual: 0,
    pm_temp: 0,
    tamanho: 'medio',
    deslocamento: 9,
    proficiencias: { armaduras: [], escudos: false, armas: [] },
    pericias: [],
    oficio: { treinado: false, especialidade: '' },
    defesa: { base: 10, destreza: true, armadura: 0, escudo: 0, epica: false, outros: 0 },
    habilidades: '',
    magias: '',
    ataques: '',
    inventario: '',
    historia: '',
  })

  const [jogadores, setJogadores] = useState([])
  const [salvando, setSalvando] = useState(false)
  const fileInputRef = useRef(null)
  const tokenInputRef = useRef(null)

  // CARREGAR DADOS DO PERSONAGEM QUANDO ABRIR O EDITOR
  useEffect(() => {
    console.log('Personagem recebido no editor:', personagem)
    
    if (personagem) {
      // Os dados podem estar diretamente no objeto ou dentro de 'conteudo'
      const dadosPersonagem = personagem.conteudo || personagem
      
      setFormData({
        id: dadosPersonagem.id || personagem.id,
        nome: dadosPersonagem.nome || '',
        jogador_id: dadosPersonagem.jogador_id || profile.id,
        imagem_url: dadosPersonagem.imagem_url || '',
        token_url: dadosPersonagem.token_url || '',
        raca: dadosPersonagem.raca || '',
        racaVariante: dadosPersonagem.raca_variante || '',
        origem: dadosPersonagem.origem || '',
        divindade: dadosPersonagem.divindade || '',
        distincao: dadosPersonagem.distincao || '',
        classes: dadosPersonagem.classes || [{ nome: '', nivel: 1 }],
        atributos: dadosPersonagem.atributos || { for: 10, des: 10, con: 10, int: 10, sab: 10, car: 10 },
        pv_atual: dadosPersonagem.pv_atual || 0,
        pv_temp: dadosPersonagem.pv_temp || 0,
        pm_atual: dadosPersonagem.pm_atual || 0,
        pm_temp: dadosPersonagem.pm_temp || 0,
        tamanho: dadosPersonagem.tamanho || 'medio',
        deslocamento: dadosPersonagem.deslocamento || 9,
        proficiencias: dadosPersonagem.proficiencias || { armaduras: [], escudos: false, armas: [] },
        pericias: dadosPersonagem.pericias || [],
        oficio: dadosPersonagem.oficio || { treinado: false, especialidade: '' },
        defesa: dadosPersonagem.defesa || { base: 10, destreza: true, armadura: 0, escudo: 0, epica: false, outros: 0 },
        habilidades: dadosPersonagem.habilidades || '',
        magias: dadosPersonagem.magias || '',
        ataques: dadosPersonagem.ataques || '',
        inventario: dadosPersonagem.inventario || '',
        historia: dadosPersonagem.historia || '',
      })
    }
    
    carregarJogadores()
  }, [personagem])

  async function carregarJogadores() {
    const { data } = await supabase
      .from('mesa_membros')
      .select('profile_id, profiles(id, username)')
      .eq('mesa_id', mesaId)
    if (data) {
      setJogadores(data.map(m => ({ id: m.profile_id, ...m.profiles })))
    }
  }

  async function fazerUpload(file, tipo) {
    if (!file) return null
    
    const ext = file.name.split('.').pop()
    const path = `personagens/${mesaId}/${Date.now()}_${tipo}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('mesa-arquivos')
      .upload(path, file, { upsert: true })

    if (uploadError) {
      alert('Erro ao enviar imagem.')
      return null
    }

    const { data: urlData } = supabase.storage
      .from('mesa-arquivos')
      .getPublicUrl(path)

    return urlData.publicUrl
  }

  async function handleImageUpload(e, tipo) {
    const file = e.target.files[0]
    if (!file) return
    
    const url = await fazerUpload(file, tipo)
    if (url) {
      setFormData(prev => ({ ...prev, [tipo === 'imagem' ? 'imagem_url' : 'token_url']: url }))
    }
    e.target.value = ''
  }

  function calcularModificador(atributo) {
    return Math.floor((atributo - 10) / 2)
  }

  function calcularAtributoComRaca(atributo) {
    let valor = formData.atributos[atributo] || 10
    const racaData = RACES[formData.raca]
    
    if (racaData && formData.raca !== 'Outra') {
      if (formData.raca === 'Moreau' && formData.racaVariante) {
        const moreau = MOREAU_OPTS.find(m => m.key === formData.racaVariante)
        if (moreau) valor += (moreau.mods[atributo.toUpperCase()] || 0) * 2
      } else if (formData.raca === 'Nagah' && formData.racaVariante) {
        if (formData.racaVariante === 'macho') valor += NAGAH_OPTS.macho[atributo.toUpperCase()] * 2
        else if (formData.racaVariante === 'femea') valor += NAGAH_OPTS.femea[atributo.toUpperCase()] * 2
      } else if (formData.raca === 'Golem' && formData.racaVariante) {
        const golem = GOLEM_CHASSI.find(g => g.key === formData.racaVariante)
        if (golem) valor += (golem.mods[atributo.toUpperCase()] || 0) * 2
      } else if (racaData.mods) {
        valor += (racaData.mods[atributo.toUpperCase()] || 0) * 2
      }
    }
    return valor
  }

  function calcularPV() {
    let total = 0
    formData.classes.forEach(cls => {
      const classeData = CLASSES[cls.nome]
      if (classeData && cls.nome) {
        const conMod = calcularModificador(calcularAtributoComRaca('con'))
        total += classeData.pv + conMod + (classeData.pvNivel + conMod) * (cls.nivel - 1)
      }
    })
    return total > 0 ? total : 20
  }

  function calcularPM() {
    let total = 0
    formData.classes.forEach(cls => {
      const classeData = CLASSES[cls.nome]
      if (classeData && cls.nome) {
        total += classeData.pmNivel * cls.nivel
      }
    })
    
    const nivelTotal = formData.classes.reduce((sum, cls) => sum + (cls.nivel || 0), 0)
    if (formData.raca === 'Elfo') total += nivelTotal
    if (formData.raca === 'Meio-Elfo') total += Math.floor(nivelTotal / 2)
    
    return total > 0 ? total : 10
  }

  function calcularDefesaTotal() {
    const destrezaMod = formData.defesa.destreza ? calcularModificador(calcularAtributoComRaca('des')) : 0
    const epicaBonus = formData.defesa.epica ? Math.floor(formData.classes.reduce((sum, cls) => sum + cls.nivel, 0) / 2) : 0
    return 10 + destrezaMod + formData.defesa.armadura + formData.defesa.escudo + formData.defesa.outros + epicaBonus
  }

  function adicionarClasse() {
    setFormData(prev => ({
      ...prev,
      classes: [...prev.classes, { nome: '', nivel: 1 }]
    }))
  }

  function removerClasse(index) {
    setFormData(prev => ({
      ...prev,
      classes: prev.classes.filter((_, i) => i !== index)
    }))
  }

  function atualizarClasse(index, field, value) {
    const novasClasses = [...formData.classes]
    novasClasses[index][field] = value
    setFormData(prev => ({ ...prev, classes: novasClasses }))
  }

  function atualizarAtributo(attr, value) {
    const novoValor = Math.max(1, Math.min(99, Number(value) || 10))
    setFormData(prev => ({ ...prev, atributos: { ...prev.atributos, [attr]: novoValor } }))
  }

  function togglePericia(skillKey) {
    let novasPericias = [...formData.pericias]
    if (novasPericias.includes(skillKey)) {
      novasPericias = novasPericias.filter(s => s !== skillKey)
    } else {
      novasPericias.push(skillKey)
    }
    setFormData(prev => ({ ...prev, pericias: novasPericias }))
  }

  async function handleSalvar() {
    setSalvando(true)
    
    const nivelTotal = formData.classes.reduce((sum, cls) => sum + (cls.nivel || 0), 0)
    
    const personagemData = {
      mesa_id: mesaId,
      criado_por: profile.id,
      nome: formData.nome,
      jogador_id: formData.jogador_id,
      imagem_url: formData.imagem_url,
      token_url: formData.token_url,
      raca: formData.raca,
      raca_variante: formData.racaVariante,
      origem: formData.origem,
      divindade: formData.divindade,
      distincao: formData.distincao,
      classes: formData.classes,
      nivel: nivelTotal,
      atributos: formData.atributos,
      pv_max: calcularPV(),
      pv_atual: formData.pv_atual || calcularPV(),
      pv_temp: formData.pv_temp || 0,
      pm_max: calcularPM(),
      pm_atual: formData.pm_atual || calcularPM(),
      pm_temp: formData.pm_temp || 0,
      tamanho: formData.tamanho,
      deslocamento: formData.deslocamento,
      proficiencias: formData.proficiencias,
      pericias: formData.pericias,
      oficio: formData.oficio,
      defesa: formData.defesa,
      habilidades: formData.habilidades,
      magias: formData.magias,
      ataques: formData.ataques,
      inventario: formData.inventario,
      historia: formData.historia,
    }
    
    let result
    if (formData.id) {
      // Update
      result = await supabase
        .from('personagens')
        .update(personagemData)
        .eq('id', formData.id)
      
      if (!result.error) {
        // Atualizar na mesa_arquivos
        await supabase
          .from('mesa_arquivos')
          .update({ 
            nome: personagemData.nome, 
            conteudo: { ...personagemData, id: formData.id }
          })
          .eq('id', formData.id)
      }
    } else {
      // Insert
      result = await supabase
        .from('personagens')
        .insert(personagemData)
        .select()
        .single()
      
      if (!result.error && result.data) {
        // Criar na mesa_arquivos
        await supabase.from('mesa_arquivos').insert({
          mesa_id: mesaId,
          parent_id: null,
          nome: personagemData.nome,
          tipo: 'personagem',
          conteudo: result.data,
          criado_por: profile.id,
          visivel: true
        })
      }
    }
    
    if (result.error) {
      console.error('Erro ao salvar:', result.error)
      alert('Erro ao salvar: ' + result.error.message)
    } else {
      onSave?.(result.data || personagemData)
      onClose()
    }
    
    setSalvando(false)
  }

  return (
    <div className="personagem-editor-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="personagem-editor">
        <div className="personagem-editor__header">
          <h2>{formData.id ? '✏️ Editar Personagem' : '✨ Criar Novo Personagem'}</h2>
          <button onClick={onClose}><FiX /></button>
        </div>

        <div className="personagem-editor__tabs">
          <button className={`tab-btn ${activeTab === 'basico' ? 'active' : ''}`} onClick={() => setActiveTab('basico')}><FiUser /> Básico</button>
          <button className={`tab-btn ${activeTab === 'atributos' ? 'active' : ''}`} onClick={() => setActiveTab('atributos')}><FiShield /> Atributos</button>
          <button className={`tab-btn ${activeTab === 'pericias' ? 'active' : ''}`} onClick={() => setActiveTab('pericias')}><FiZap /> Perícias</button>
          <button className={`tab-btn ${activeTab === 'poderes' ? 'active' : ''}`} onClick={() => setActiveTab('poderes')}><GiScrollUnfurled /> Poderes</button>
          <button className={`tab-btn ${activeTab === 'inventario' ? 'active' : ''}`} onClick={() => setActiveTab('inventario')}><FiFolder /> Inventário</button>
        </div>

        <div className="personagem-editor__body">
          {/* BÁSICO */}
          {activeTab === 'basico' && (
            <>
              <div className="editor-section">
                <h3>📸 Imagens</h3>
                <div className="image-row">
                  <div className="image-card">
                    <div className="image-preview">
                      {formData.imagem_url ? <img src={formData.imagem_url} alt="Personagem" /> : <div className="image-placeholder"><FiImage size={32} /></div>}
                    </div>
                    <input type="file" accept="image/*" onChange={e => handleImageUpload(e, 'imagem')} style={{ display: 'none' }} ref={fileInputRef} />
                    <button onClick={() => fileInputRef.current?.click()}><FiUpload /> Personagem</button>
                  </div>
                  <div className="image-card">
                    <div className="image-preview">
                      {formData.token_url ? <img src={formData.token_url} alt="Token" /> : <div className="image-placeholder"><FiImage size={32} /></div>}
                    </div>
                    <input type="file" accept="image/*" onChange={e => handleImageUpload(e, 'token')} style={{ display: 'none' }} ref={tokenInputRef} />
                    <button onClick={() => tokenInputRef.current?.click()}><FiUpload /> Token</button>
                  </div>
                </div>
              </div>

              <div className="editor-section">
                <h3>📝 Informações</h3>
                <div className="form-group">
                  <label>Nome do Personagem *</label>
                  <input type="text" value={formData.nome} onChange={e => setFormData(prev => ({ ...prev, nome: e.target.value }))} placeholder="Digite o nome" />
                </div>
                <div className="form-group">
                  <label>Jogador</label>
                  <select value={formData.jogador_id} onChange={e => setFormData(prev => ({ ...prev, jogador_id: e.target.value }))}>
                    <option value={profile.id}>{profile.username} (Eu)</option>
                    {jogadores.filter(j => j.id !== profile.id).map(j => (
                      <option key={j.id} value={j.id}>{j.username}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="editor-section">
                <h3>🏷️ Raça</h3>
                <div className="form-group">
                  <label>Raça</label>
                  <select value={formData.raca} onChange={e => setFormData(prev => ({ ...prev, raca: e.target.value, racaVariante: '' }))}>
                    <option value="">Selecione</option>
                    {Object.keys(RACES).sort().map(r => <option key={r} value={r}>{r}</option>)}
                    <option value="Outra">Outra</option>
                  </select>
                </div>
                {(formData.raca === 'Moreau' || formData.raca === 'Nagah' || formData.raca === 'Golem') && (
                  <div className="form-group">
                    <label>Variante</label>
                    <select value={formData.racaVariante} onChange={e => setFormData(prev => ({ ...prev, racaVariante: e.target.value }))}>
                      <option value="">Selecione</option>
                      {formData.raca === 'Moreau' && MOREAU_OPTS.map(m => <option key={m.key} value={m.key}>{m.label}</option>)}
                      {formData.raca === 'Nagah' && <><option value="macho">Macho</option><option value="femea">Fêmea</option></>}
                      {formData.raca === 'Golem' && GOLEM_CHASSI.map(g => <option key={g.key} value={g.key}>{g.label}</option>)}
                    </select>
                  </div>
                )}
                {formData.raca === 'Outra' && (
                  <div className="form-group">
                    <label>Nome da Raça</label>
                    <input type="text" value={formData.racaVariante} onChange={e => setFormData(prev => ({ ...prev, racaVariante: e.target.value }))} />
                  </div>
                )}
              </div>

              <div className="editor-section">
                <h3>⚔️ Classes e Níveis</h3>
                {formData.classes.map((cls, idx) => (
                  <div key={idx} className="class-row">
                    <select value={cls.nome} onChange={e => atualizarClasse(idx, 'nome', e.target.value)}>
                      <option value="">Selecione</option>
                      {Object.keys(CLASSES).sort().map(c => <option key={c} value={c}>{c}</option>)}
                      <option value="Outra">Outra</option>
                    </select>
                    <input type="number" min="1" max="20" value={cls.nivel} onChange={e => atualizarClasse(idx, 'nivel', parseInt(e.target.value) || 1)} />
                    {formData.classes.length > 1 && <button onClick={() => removerClasse(idx)}><FiTrash2 /></button>}
                  </div>
                ))}
                <button className="add-btn" onClick={adicionarClasse}><FiPlus /> Adicionar Classe</button>
              </div>

              <div className="editor-section">
                <h3>📜 Origem e Antecedentes</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Origem</label>
                    <select value={formData.origem} onChange={e => setFormData(prev => ({ ...prev, origem: e.target.value }))}>
                      <option value="">Selecione</option>
                      {ORIGENS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Divindade</label>
                    <input type="text" value={formData.divindade} onChange={e => setFormData(prev => ({ ...prev, divindade: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Distinção</label>
                    <input type="text" value={formData.distincao} onChange={e => setFormData(prev => ({ ...prev, distincao: e.target.value }))} />
                  </div>
                </div>
              </div>

              <div className="editor-section">
                <h3>❤️ Pontos de Vida e Mana</h3>
                <div className="stats-row">
                  <div className="stat-card">
                    <div className="stat-icon">❤️</div>
                    <div><label>PV Máx</label><input type="number" value={calcularPV()} disabled /></div>
                    <div><label>PV Atual</label><input type="number" value={formData.pv_atual} onChange={e => setFormData(prev => ({ ...prev, pv_atual: parseInt(e.target.value) || 0 }))} /></div>
                    <div><label>PV Temp</label><input type="number" value={formData.pv_temp} onChange={e => setFormData(prev => ({ ...prev, pv_temp: parseInt(e.target.value) || 0 }))} /></div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">💙</div>
                    <div><label>PM Máx</label><input type="number" value={calcularPM()} disabled /></div>
                    <div><label>PM Atual</label><input type="number" value={formData.pm_atual} onChange={e => setFormData(prev => ({ ...prev, pm_atual: parseInt(e.target.value) || 0 }))} /></div>
                    <div><label>PM Temp</label><input type="number" value={formData.pm_temp} onChange={e => setFormData(prev => ({ ...prev, pm_temp: parseInt(e.target.value) || 0 }))} /></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ATRIBUTOS */}
          {activeTab === 'atributos' && (
            <>
              <div className="editor-section">
                <h3>📊 Atributos</h3>
                <div className="atributos-grid">
                  {['for', 'des', 'con', 'int', 'sab', 'car'].map(attr => {
                    const valorFinal = calcularAtributoComRaca(attr)
                    const mod = calcularModificador(valorFinal)
                    return (
                      <div key={attr} className="atributo-card">
                        <label>{attr.toUpperCase()}</label>
                        <input type="number" value={formData.atributos[attr]} onChange={e => atualizarAtributo(attr, e.target.value)} />
                        <span className="mod">+{mod}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="editor-section">
                <h3>🛡️ Defesa</h3>
                <div className="defesa-grid">
                  <div><label>Base</label><span>10</span></div>
                  <div><label>Destreza</label><input type="checkbox" checked={formData.defesa.destreza} onChange={e => setFormData(prev => ({ ...prev, defesa: { ...prev.defesa, destreza: e.target.checked } }))} /></div>
                  <div><label>Armadura</label><input type="number" value={formData.defesa.armadura} onChange={e => setFormData(prev => ({ ...prev, defesa: { ...prev.defesa, armadura: parseInt(e.target.value) || 0 } }))} /></div>
                  <div><label>Escudo</label><input type="number" value={formData.defesa.escudo} onChange={e => setFormData(prev => ({ ...prev, defesa: { ...prev.defesa, escudo: parseInt(e.target.value) || 0 } }))} /></div>
                  <div><label>Outros</label><input type="number" value={formData.defesa.outros} onChange={e => setFormData(prev => ({ ...prev, defesa: { ...prev.defesa, outros: parseInt(e.target.value) || 0 } }))} /></div>
                  <div><label>Defesa Épica</label><input type="checkbox" checked={formData.defesa.epica} onChange={e => setFormData(prev => ({ ...prev, defesa: { ...prev.defesa, epica: e.target.checked } }))} /></div>
                </div>
                <div className="defesa-total">Defesa Total: {calcularDefesaTotal()}</div>
              </div>

              <div className="editor-section">
                <h3>📏 Características</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Tamanho</label>
                    <select value={formData.tamanho} onChange={e => setFormData(prev => ({ ...prev, tamanho: e.target.value }))}>
                      <option value="minusculo">Minúsculo</option>
                      <option value="pequeno">Pequeno</option>
                      <option value="medio">Médio</option>
                      <option value="grande">Grande</option>
                      <option value="enorme">Enorme</option>
                      <option value="colossal">Colossal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Deslocamento (m)</label>
                    <input type="number" value={formData.deslocamento} onChange={e => setFormData(prev => ({ ...prev, deslocamento: parseInt(e.target.value) || 0 }))} />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* PERÍCIAS */}
          {activeTab === 'pericias' && (
            <div className="editor-section">
              <h3>🎯 Perícias</h3>
              <div className="skills-grid">
                {SKILLS_LIST.map(skill => {
                  const attrMod = calcularModificador(calcularAtributoComRaca(skill.attr.toLowerCase()))
                  const treinada = formData.pericias.includes(skill.key)
                  const total = (treinada ? 5 : 0) + attrMod
                  return (
                    <div key={skill.key} className={`skill-item ${treinada ? 'treinada' : ''}`}>
                      <span>{skill.name} ({skill.attr})</span>
                      <div>
                        <button onClick={() => togglePericia(skill.key)}>{treinada ? '✓' : '+'}</button>
                        <span>+{total}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* PODERES */}
          {activeTab === 'poderes' && (
            <>
              <div className="editor-section">
                <h3>✨ Habilidades e Poderes</h3>
                <textarea rows={6} value={formData.habilidades} onChange={e => setFormData(prev => ({ ...prev, habilidades: e.target.value }))} placeholder="Liste suas habilidades, poderes de classe, poderes gerais..." />
              </div>
              <div className="editor-section">
                <h3>🔮 Magias</h3>
                <textarea rows={6} value={formData.magias} onChange={e => setFormData(prev => ({ ...prev, magias: e.target.value }))} placeholder="Liste suas magias, círculo, CD..." />
              </div>
              <div className="editor-section">
                <h3>⚔️ Ataques</h3>
                <textarea rows={4} value={formData.ataques} onChange={e => setFormData(prev => ({ ...prev, ataques: e.target.value }))} placeholder="Nome do ataque | Bônus de ataque | Dano | Crítico" />
              </div>
            </>
          )}

          {/* INVENTÁRIO */}
          {activeTab === 'inventario' && (
            <>
              <div className="editor-section">
                <h3>🎒 Inventário</h3>
                <textarea rows={10} value={formData.inventario} onChange={e => setFormData(prev => ({ ...prev, inventario: e.target.value }))} placeholder="Liste seus itens, equipamentos, poções, tesouro..." />
              </div>
              <div className="editor-section">
                <h3>📖 História</h3>
                <textarea rows={6} value={formData.historia} onChange={e => setFormData(prev => ({ ...prev, historia: e.target.value }))} placeholder="História do personagem, antecedentes, motivações..." />
              </div>
            </>
          )}
        </div>

        <div className="personagem-editor__footer">
          <button className="cancel-btn" onClick={onClose}>Cancelar</button>
          <button className="save-btn" onClick={handleSalvar} disabled={salvando}>
            {salvando ? '💾 Salvando...' : '💾 Salvar Personagem'}
          </button>
        </div>
      </div>
    </div>
  )
}