import axios from'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PlatoDetalle.css'
import { ComMostarPlaConIdRes_Cons } from './ComMostarPlaConIdRes_Cons'

const URI2='http://localhost:8000/restaurantes/'
const MostrarALLplatos = () => {
    const [restaurante,setrestaurante]=useState([])
    useEffect(()=>{
        getrestaurante()
    },[])
    const Id_Restaurante=useParams()
    //proceso traer todos los restaurantes
    
    const getrestaurante=async()=>{
        try {
            const res=await axios.get(`${URI2}${Id_Restaurante.id}`)
            setrestaurante(res.data)
        } catch (error) {
            console.log("error",error)
        }
    }
    

  return (
    <div className='DetalleResta'>
        <div className='Local'>

            <img className='ImgLocal'
                src={restaurante.ImgPortada}
            />

            <img className='ImgLogoLocal'
                src={restaurante.ImgLogo}
            />

            <h2 id='H2_Nombre_Restaurante_Detalle' className='HNombreLocal'>{restaurante.Nombre}</h2>

            <h3 id='H3_Direccion_Restaurante_Detalle' className='SpanDireccionLocal'>{restaurante.Direccion}</h3>

            <div className='DetalleEnvio'>
                <div className='DetalleEnvioTiempo'>
                    <span className='DetalleEnvioTiempoNombre'>Delivery</span>
                    <span id='Tiempo_Envio_Restaurante_Detalle' className='DetalleEnvioTiempoNumero'>{restaurante.TimEnvio} min</span>
                </div>
                <div className='DetalleEnvioTiempo'>
                    <span className='DetalleEnvioTiempoNombre'>Envio</span>
                    <span id='Precio_Envio_Restaurante_Detalle' className='DetalleEnvioEnvioNumero'>S/ {restaurante.PrecEnvio}</span>
                </div>
                <div className='DetalleEnvioTiempo'>
                    <span className='DetalleEnvioTiempoNombre'>Calificacion</span>
                    <span id='Calififcacion_Restaurante_Detalle' className='DetalleEnvioTiempoNumero'>{restaurante.Calificacion}</span>
                </div>
                {/* <div className='DetalleEnvioTiempo'>
                    <span className='DetalleEnvioTiempoNombre'>Numero</span>
                    <span className='DetalleNumero'>923 312 213</span>
                </div> */}
                <div className='DetalleEnvioTiempo'>
                    <span className='DetalleEnvioTiempoNombre'>Horario</span>
                    <span id='Horario_Restaurante_Detalle' className='DetalleHorario'>{restaurante.HorApertura}-{restaurante.HorCerrar}</span>
                </div>
            </div>
        </div>
        <div className='ListaPlatos'>
            <ComMostarPlaConIdRes_Cons Id_Restaurante={Id_Restaurante}></ComMostarPlaConIdRes_Cons>
        </div>
    </div>
  )
}

export default MostrarALLplatos