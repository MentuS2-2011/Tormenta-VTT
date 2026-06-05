import { useState, useEffect } from 'react'
import { FiMap, FiImage, FiBookmark, FiChevronRight, FiPlus } from 'react-icons/fi'
import { supabase } from '../../../lib/supabase'
import './Mapas.css'

export default function Mapas({ mesaId, papel }) {
  const [mapas, setMapas] = useState([])

  useEffect(() => {
    carregarMapas()
  }, [mesaId])

  async function carregarMapas() {
    const { data } = await supabase
      .from('mapas')
      .select('*')
      .eq('mesa_id', mesaId)
      .order('favorito', { ascending: false })
    if (data) setMapas(data)
  }

  return (
    <div className="mapas-container">
      <div className="mapas-header">
        <h3><FiMap size={16} /> Mapas</h3>
        {papel === 'gm' && (
          <button className="mapas-add">
            <FiPlus size={14} /> Adicionar
          </button>
        )}
      </div>
      <div className="mapas-list">
        {mapas.length > 0 ? (
          mapas.map(mapa => (
            <div key={mapa.id} className="mapa-item">
              <div className="mapa-preview"><FiImage size={24} /></div>
              <div className="mapa-info">
                <p className="mapa-nome">{mapa.nome}</p>
                {mapa.favorito && <FiBookmark size={12} className="mapa-fav" />}
              </div>
              <FiChevronRight size={14} className="mapa-arrow" />
            </div>
          ))
        ) : (
          <div className="mapas-empty">
            <FiMap size={32} />
            <p>Nenhum mapa</p>
            {papel === 'gm' && <span>Adicione mapas para seus jogadores</span>}
          </div>
        )}
      </div>
    </div>
  )
}