import { FiBookOpen } from 'react-icons/fi'
import './Regras.css'

export default function Regras() {
  return (
    <div className="regras-container">
      <div className="regras-header">
        <h3><FiBookOpen /> Regras da Mesa</h3>
      </div>
      <div className="regras-content">
        <p className="regras-placeholder">
          As regras opcionais configuradas para esta mesa serão exibidas aqui.
        </p>
      </div>
    </div>
  )
}