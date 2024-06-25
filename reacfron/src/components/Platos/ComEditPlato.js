import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import React from 'react';
const URI='http://localhost:8000/platos/'

const ComEditPlato = () => {
    const [ImgPlato,setImgPlato]=useState('')
    const [Nombre,setNombre]=useState('')
    const [Descrp,setDescrp]=useState('')
    const [Precio,setPrecio]=useState('')
    

    const navigete =useNavigate()

    const param=useParams()
    //proceso para actualizar
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}+${param.id}`,{
            ImgPlato:ImgPlato,Nombre:Nombre,Descrp:Descrp,Precio:Precio
        })
        navigete(`/${param.idres}/platos`)
    }

    useEffect(()=>{
        getPlatoId()
    },[])

    const getPlatoId=async()=>{
        const res=await axios.get(`${URI}+${param.id}`)
        setImgPlato(res.data.ImgPlato)
        setNombre(res.data.Nombre)
        setDescrp(res.data.Descrp)
        setPrecio(res.data.Precio)
    }

  return (
    <div>
        <h3>Editar un plato</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Url de la img plato</label>
                <textarea id="InputImgPlato" value={ImgPlato} onChange={(e)=>setImgPlato(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre de plato</label>
                <input id="InputNombre" value={Nombre} onChange={(e)=>setNombre(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Descrpcion del plato</label>
                <input id="InputDescp" value={Descrp} onChange={(e)=>setDescrp(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Precio de plato</label>
                <input id="InputPrecio" value={Precio} onChange={(e)=>setPrecio(e.target.value)} type="text" className="form-control"/>
            </div>
            
            <button id="Btn-edit" type="submit" className="btn btn-primary">Edit</button>
        </form>
    </div>
  )
}

export default ComEditPlato