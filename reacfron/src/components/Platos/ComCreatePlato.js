import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from 'react';
const URI='http://localhost:8000/platos/'

const ComCrearRestaurante = () => {

    const [ImgPlato,setImgPlato]=useState('')
    const [Nombre,setNombre]=useState('')
    const [Descrp,setDescrp]=useState('')
    const [Precio,setPrecio]=useState('')
    
    const navigete =useNavigate()
    const Id_Restaurante=useParams(); 

    const store=async(e)=>{
        e.preventDefault()
        const res=await axios.post(`${URI}${Id_Restaurante.id}/newplato`,{ImgPlato:ImgPlato,
            Nombre:Nombre,Descrp:Descrp,Precio:Precio,Id_Restaurante:Id_Restaurante.id})
        console.log(res.data)
        navigete(`/${Id_Restaurante.id}/platos`)
        
    }
  return (
    <div>
        <h3>Crear un nuevo restaurante</h3>
        <form onSubmit={store}>
            <div className="mb-3">
                <label className="form-label">Url de la img plato</label>
                <textarea value={ImgPlato} onChange={(e)=>setImgPlato(e.target.value)} type="text" className="form-control" id="Input_Crear_Plato_ImgPlato"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre del plato</label>
                <input required value={Nombre} onChange={(e)=>setNombre(e.target.value)}  type="text" className="form-control"id="Input_Crear_Plato_Nombre"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Descripcion de plato</label>
                <textarea required value={Descrp} onChange={(e)=>setDescrp(e.target.value)} type="text" className="form-control" id="Input_Crear_Plato_Descrip"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Precio de plato</label>
                <input required value={Precio}onChange={(e)=>setPrecio(e.target.value)} type="text" className="form-control" id="Input_Crear_Plato_Precio"/>
            </div>
            
            <button type="submit" className="btn btn-primary" id="Btn_Crear_Plato">Crear</button>
        </form>
    </div>
  )
}

export default ComCrearRestaurante