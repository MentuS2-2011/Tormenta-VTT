import { FiFileText } from 'react-icons/fi'
import './Resumo.css'

export default function Resumo() {
  return (
    <div className="resumo-container">
      <div className="resumo-header">
        <h3><FiFileText /> Resumo da Campanha</h3>
      </div>
      <div className="resumo-content">
        <p className="resumo-placeholder">
          Anotações e resumos das sessões aparecerão aqui.
        </p>
      </div>
    </div>
  )
}