import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import React from 'react';
const URI='http://localhost:8000/restaurantes/'

const ComEditRestaurante = () => {
    const [ImgPortada,setImgPortada]=useState('')
    const [ImgLogo,setImgLogo]=useState('')
    const [Nombre,setNombre]=useState('')
    const [Direccion,setDireccion]=useState('')
    const [TimEnvio,setTimEnvio]=useState('')
    const [PrecEnvio,setPrecEnvio]=useState('')
    const [Calificacion,setCalificacion]=useState('')
    const [HorApertura,setHorApertura]=useState('')
    const [HorCerrar,setHorCerrar]=useState('')
    const [Ruc,setRuc]=useState('')
    const [RazonSocial,setRazonSocial]=useState('')

    const navigete =useNavigate()

    const {id}=useParams()
    //proceso para actualizar
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+id,{
            ImgPortada:ImgPortada,ImgLogo:ImgLogo,Nombre:Nombre,Direccion:Direccion,TimEnvio:TimEnvio,PrecEnvio:PrecEnvio,Calificacion:Calificacion,HorApertura:HorApertura,HorCerrar:HorCerrar,Ruc:Ruc,RazonSocial:RazonSocial
        })
        navigete('/Login')
    }

    useEffect(()=>{
        getRestauranteId()
    },[])

    const getRestauranteId=async()=>{
        const res=await axios.get(URI+id)
        setImgPortada(res.data.ImgPortada)
        setImgLogo(res.data.ImgLogo)
        setNombre(res.data.Nombre)
        setDireccion(res.data.Direccion)
        setTimEnvio(res.data.TimEnvio)
        setPrecEnvio(res.data.PrecEnvio)
        setCalificacion(res.data.Calificacion)
        setHorApertura(res.data.HorApertura)
        setHorCerrar(res.data.HorCerrar)
        setRuc(res.data.Ruc)
        setRazonSocial(res.data.RazonSocial)
    }

  return (
    <div>
        <h3>Editar un restaurante</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Url de la img portada</label>
                <textarea id="InputImgPortada" value={ImgPortada} onChange={(e)=>setImgPortada(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Url de la img logo</label>
                <textarea id="InputImgLogo" value={ImgLogo} onChange={(e)=>setImgLogo(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre de restaurante</label>
                <input id="InputNombre" value={Nombre} onChange={(e)=>setNombre(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Direccion de restaurante</label>
                <input id="InputDireccion" value={Direccion} onChange={(e)=>setDireccion(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Tiempo de envio del restaurante</label>
                <input id="InputTimRest" value={TimEnvio} onChange={(e)=>setTimEnvio(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Precio de envio del restaurante</label>
                <input id="InputPrecioRest" value={PrecEnvio} onChange={(e)=>setPrecEnvio(e.target.value)} type="number" className="form-control" aria-placeholder="00.00" step="0.1"/>
            </div>
            {/* Nota cambiar la calificacion para pedir decimal a una manera mas facil */}
            <div className="mb-3">
                <label className="form-label">Calificacion de restaurante</label>
                <input id="InputCalificacion" value={Calificacion} onChange={(e)=>setCalificacion(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Hora de apertura</label>
                <input id="InputHorrarioApr" value={HorApertura} onChange={(e)=>setHorApertura(e.target.value)} type="time" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Hora de cerrar</label>
                <input id="InputHorCerrar" value={HorCerrar} onChange={(e)=>setHorCerrar(e.target.value)} type="time" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Ruc</label>
                <input id="InputRuc" value={Ruc} onChange={(e)=>setRuc(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Razon Social </label>
                <input id="InputRazonSocial" value={RazonSocial} onChange={(e)=>setRazonSocial(e.target.value)} type="text" className="form-control"/>
            </div>
            <button id="Btn-edit" type="submit" className="btn btn-primary">Edit</button>
        </form>
    </div>
  )
}

export default ComEditRestaurante