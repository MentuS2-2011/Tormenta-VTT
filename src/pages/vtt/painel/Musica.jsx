import { FiMusic } from 'react-icons/fi'
import './Musica.css'

export default function Musica() {
  return (
    <div className="musica-container">
      <div className="musica-empty">
        <FiMusic size={48} />
        <p>Música ambiente</p>
        <span>Em breve: playlist e efeitos sonoros</span>
      </div>
    </div>
  )
}