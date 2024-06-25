import React from 'react';
import './Restaurantes.css'
const Restaurante = ({restaurante}) => {
  return (
    <div className='Card'>
        <div className='Portada'> 
            <img className='PortadaImg'
                src={restaurante.ImgPortada}
                alt=''
            ></img>
        </div>
                    
        <div className='Logo'>
            <img className='ImgLogo'
                src={restaurante.ImgLogo}
                alt=''
            ></img>
        </div>
                    
        <p id='Nombre_Restaurante_User' className='NombresLR'>
            <h4 className='NombreRest'>{restaurante.Nombre}</h4>
        </p>
                        
                        
        <div className='Calificacion'>
            <span className='ClsSpna'>
              <i className="fa-solid fa-star"></i>
                <span className='Card-Calificación'>{restaurante.Calificacion}</span>
            </span>
        </div>

    </div>
    // <div className="CardA">
    //     <img src={restaurante.ImgPortada} className="PortadaImg" />
    //     <div class="card-body">
    //         <h6 class="card-title">{restaurante.Nombre}</h6>
    //         <p class="card-text"><i className="fa-solid fa-clock"></i>{restaurante.TimEnvio} min -- <i class="fa-solid fa-dollar-sign"></i>{restaurante.PrecEnvio}</p>
    //         <p class="card-text">{restaurante.Calificacion}<i class="fa-solid fa-star"></i></p>
    //     </div>
    // </div>
  )
}

export default Restaurante;