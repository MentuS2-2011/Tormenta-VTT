import { 
  FiMessageSquare, FiUsers, FiMap, FiFileText, FiBookOpen, 
  FiFolder, FiMusic, FiBook
} from 'react-icons/fi'
import Chat from './painel/Chat'
import Jogadores from './painel/Jogadores'
import Mapas from './painel/Mapas'
import Resumo from './painel/Resumo'
import Regras from './painel/Regras'
import Pastas from './painel/Pastas'
import Musica from './painel/Musica'
import Compendio from './painel/Compendio'
import './PainelLateral.css'

export default function PainelLateral({ 
  aberto, 
  abaAtiva, 
  setAbaAtiva,
  setPainelAberto,
  mesaId,
  papel,
  profile 
}) {
  if (!aberto) return null

  // Mapeamento de abas para componentes
  const componentes = {
    chat: Chat,
    jogadores: Jogadores,
    mapas: Mapas,
    resumo: Resumo,
    regras: Regras,
    pastas: Pastas,
    musica: Musica,
    compendio: Compendio,
  }

  const ComponenteAtivo = componentes[abaAtiva] || (() => (
    <div className="painel-empty">
      <FiBookOpen size={32} />
      <p>Conteúdo em desenvolvimento</p>
    </div>
  ))

  return (
    <aside className="painel-lateral">
      {/* Abas dentro do painel */}
      <div className="painel-lateral__tabs">
        <button 
          className={`painel-tab ${abaAtiva === 'chat' ? 'active' : ''}`} 
          onClick={() => setAbaAtiva('chat')}
          title="Chat"
        >
          <FiMessageSquare size={18} />
          <span></span>
        </button>
        <button 
          className={`painel-tab ${abaAtiva === 'jogadores' ? 'active' : ''}`} 
          onClick={() => setAbaAtiva('jogadores')}
          title="Jogadores"
        >
          <FiUsers size={18} />
          <span></span>
        </button>
        <button 
          className={`painel-tab ${abaAtiva === 'mapas' ? 'active' : ''}`} 
          onClick={() => setAbaAtiva('mapas')}
          title="Mapas"
        >
          <FiMap size={18} />
          <span></span>
        </button>
        <button 
          className={`painel-tab ${abaAtiva === 'resumo' ? 'active' : ''}`} 
          onClick={() => setAbaAtiva('resumo')}
          title="Resumo"
        >
          <FiFileText size={18} />
          <span></span>
        </button>
        <button 
          className={`painel-tab ${abaAtiva === 'regras' ? 'active' : ''}`} 
          onClick={() => setAbaAtiva('regras')}
          title="Regras"
        >
          <FiBookOpen size={18} />
          <span></span>
        </button>
        <button 
          className={`painel-tab ${abaAtiva === 'pastas' ? 'active' : ''}`} 
          onClick={() => setAbaAtiva('pastas')}
          title="Pastas"
        >
          <FiFolder size={18} />
          <span></span>
        </button>
        <button 
          className={`painel-tab ${abaAtiva === 'musica' ? 'active' : ''}`} 
          onClick={() => setAbaAtiva('musica')}
          title="Música"
        >
          <FiMusic size={18} />
          <span></span>
        </button>
        <button 
          className={`painel-tab ${abaAtiva === 'compendio' ? 'active' : ''}`} 
          onClick={() => setAbaAtiva('compendio')}
          title="Compêndio"
        >
          <FiBook size={18} />
          <span></span>
        </button>
      </div>

      {/* Conteúdo da aba ativa */}
      <div className="painel-lateral__content">
        <ComponenteAtivo 
          mesaId={mesaId}
          papel={papel}
          profile={profile}
        />
      </div>
    </aside>
  )
}