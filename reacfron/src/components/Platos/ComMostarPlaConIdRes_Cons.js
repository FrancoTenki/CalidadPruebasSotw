import React, { useEffect, useState } from 'react'
import './PlatoDetalle.css'
import axios from'axios'

const URICarrito='http://localhost:8000/Carrito/'
const URI='http://localhost:8000/platos/'

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}

export const ComMostarPlaConIdRes_Cons = ({Id_Restaurante}) => {
    const [platos,setplatos]=useState([]);

    useEffect(()=>{
        getPlatos()       
    },[])
    const getPlatos=async ()=>{
        try {
            const res=await axios.get(`${URI}${Id_Restaurante.id}/platos`)
            setplatos(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const AgregarAlCarrito=async(platoenvi)=>{
        try {
            const res=await axios.post(`${URICarrito}platos-cartadd`,{Id_User:parseJwt(localStorage.getItem('token')).id,
                id:platoenvi.id,ImgPlato:platoenvi.ImgPlato,
                Nombre:platoenvi.Nombre,Descrp:platoenvi.Descrp,Precio:platoenvi.Precio,
                Id_Restaurante:platoenvi.Id_Restaurante,EstadoPago:1,EstadoPlato:1
            });
            getPlatos()
            console.log(res.data)
        } catch (error) {
            console.log(error)            
        }
    }

  return (
    <div>
        {platos.map(plato=>{
                return(
                <div className="PlatoCard"  key={plato.id} id='Card_Plato'>
                    <div className='DetallePlato'>
                        <div className='PNombrePlato'>
                            <h4 id='H4_Nombre_plato' className='HNombrePlato'>{plato.Nombre}</h4>
                        </div>
                                    
                        <p id='P_Descp_plato' className='HDesPlato'>{plato.Descrp}</p>
                        
                        <div className='PPrecPlato'>
                            <span id='Span_Precio_plato' className='PPresPlato'>S/ {plato.Precio}</span>
                        </div>  
                    </div>
                    <div className='DivImgPlato'> 
                        <img className='ImgPlato'
                            src={plato.ImgPlato}
                            alt=''
                        ></img>
                    </div>
                    {localStorage.getItem('token')===null?(<p>Inicie secion para agregar al carrito</p>):
                    plato.InCart ===0 ?(<button onClick={()=>AgregarAlCarrito(plato)}>Agregar Al Carrito</button>)
                    :(<p>En el carrito</p>)}
                </div>)
        })}
    </div>
  )
}
