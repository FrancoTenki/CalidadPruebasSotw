import React, { useState } from 'react'

const HistorialConsumidor = (Historial) => {
  return (
    <div>
        {Historial.Historial.map((item)=>{
            return(<div className="PlatoCard"  key={item.id} id='Card_Plato'>
                <div className='DetallePlato'>
                    <div className='PNombrePlato'>
                        <h4 id='H4_Nombre_plato' className='HNombrePlato'>{item.Nombre}</h4>
                    </div>
                                
                    <p id='P_Descp_plato' className='HDesPlato'>{item.Descrp}</p>
                    <p id='P_Descp_plato' className='HDesPlato'>Cantidad: {item.Amount}</p>
                    <p id='P_Descp_plato' className='HDesPlato'>EstadoPlato: {item.EstadoPlato}</p>
                    <p id='P_Descp_plato' className='HDesPlato'>Ultima actualizado: {item.updatedAt}</p>
                    
                    <div className='PPrecPlato'>
                        <span id='Span_Precio_plato' className='PPresPlato'>S/ {item.Precio}</span>
                    </div>  
                </div>
                <div className='DivImgPlato'> 
                    <img className='ImgPlato'
                        src={item.ImgPlato}
                        alt=''
                    ></img>
                </div>
            </div>)
        })}
    </div>
  )
}

export default HistorialConsumidor