import { FiBook } from 'react-icons/fi'
import './Compendio.css'

export default function Compendio() {
  return (
    <div className="compendio-container">
      <div className="compendio-header">
        <h3><FiBook /> Compêndio</h3>
      </div>
      <div className="compendio-content">
        <p className="compendio-placeholder">
          Raças, Classes, Magias, Equipamentos e muito mais...
        </p>
      </div>
    </div>
  )
}