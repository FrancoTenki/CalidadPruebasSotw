import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
const URI='http://localhost:8000/restaurantes/'
function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}
const ComCrearRestaurante = () => {

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

    const store=async(e)=>{
        e.preventDefault()
        const res =await axios.post(URI,{ImgPortada:ImgPortada,ImgLogo:ImgLogo
            ,Nombre:Nombre,Direccion:Direccion,TimEnvio:TimEnvio
            ,PrecEnvio:PrecEnvio,Calificacion:Calificacion,HorApertura:HorApertura
            ,HorCerrar:HorCerrar,Ruc:Ruc,RazonSocial:RazonSocial,Id_User:parseJwt(localStorage.getItem('token')).id})
        console.log(res.data)
        navigete('/Login')
        
    }
  return (
    <div>
        <h3>Crear un nuevo restaurante</h3>
        <form onSubmit={store}>
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
                <input required id="InputNombre" value={Nombre}  onChange={(e)=>setNombre(e.target.value)}  type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Direccion de restaurante</label>
                <input required id="InputDireccion" value={Direccion}  onChange={(e)=>setDireccion(e.target.value)}  type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Tiempo de envio del restaurante</label>
                <input id="InputTimevio" value={TimEnvio} onChange={(e)=>setTimEnvio(e.target.value)} type="text" className="form-control"/>

            </div>
            <div className="mb-3">
                <label className="form-label">Precio de envio del restaurante</label>
                <input id="InputPrecEnvio" value={PrecEnvio} onChange={(e)=>setPrecEnvio(e.target.value)} type="number" className="form-control" aria-placeholder="00.00" step="0.1"/>
            </div>
            {/* Nota cambiar la calificacion para pedir decimal a una manera mas facil */}
            <div className="mb-3">
                <label className="form-label">Calificacion de restaurante</label>
                <input id="InputCalificacion" value={Calificacion} onChange={(e)=>setCalificacion(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Hora de apertura</label>
                <input id="InputHorApertura" value={HorApertura} onChange={(e)=>setHorApertura(e.target.value)} type="time" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Hora de cerrar</label>
                <input id="InputHorCerrar" value={HorCerrar} onChange={(e)=>setHorCerrar(e.target.value)} type="time"  className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Ruc</label>
                <input required id="InputRuc" value={Ruc} onChange={(e)=>setRuc(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Razon Social </label>
                <input required id="InputRazonSocial" value={RazonSocial} onChange={(e)=>setRazonSocial(e.target.value)} type="text" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary" id="btn-store">Crear</button>
        </form>
    </div>
  )
}

export default ComCrearRestaurante