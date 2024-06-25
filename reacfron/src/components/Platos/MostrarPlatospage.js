import React from 'react'
import { useParams } from 'react-router-dom';
import ComMostrarplatos from './ComMostrarplatos';
const MostrarPlatospage = () => {
    const { restauranteId } = useParams();
  return (
    <div>
    <div>platos de restaurante {restauranteId}</div>
    <ComMostrarplatos restauranteId={restauranteId}  />
    </div>
  )
}

export default MostrarPlatospage