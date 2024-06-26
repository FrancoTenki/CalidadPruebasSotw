import axios from'axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

const URI='http://localhost:8000/restaurantes/'
function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}
const ComRestaurante = () => {
    const [restaurantes,setRestaurantes]=useState([])
    useEffect(()=>{
        getRestaurantes()
    },[])
    //proceso traer todos los restaurantes
    const getRestaurantes=async ()=>{
        const res=await axios.get(`${URI}proveedor/${parseJwt(localStorage.getItem('token')).id}`)
        // console.log(parseJwt(localStorage.getItem('token')).id)
        // const res=await axios.get(`${URI}`)
        setRestaurantes(res.data)
    }
    //proceso para elimanar un restaurante
    const deleteRestaurante =async (id)=>{
        await axios.delete(`${URI}${id}`)
        getRestaurantes()
    }
    const { restauranteId } = useParams();
  return (
    <div className='container'>
        <Link id='btn-crearRestaurante' to={'/restaurante/create'} className='btn btn-primary mt-2 mb-2'>Crea nuevo restaurante</Link>
        {restaurantes.map((restaurante)=>(
            <div className="card mb-3" style={{max_width: `540px`}} key={restaurante.id} id='Card_Restaurante_Admin'>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={restaurante.ImgPortada} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body" id='Card_Rest_Admin'>
                        <h5 id='NombreRest_Admin' className="card-title">{restaurante.Nombre}</h5>
                        <p id='DireccionRest_Admin' className="card-text">{restaurante.Direccion}</p>
                        <p id='RazonSocialRest_Admin' className="card-text">{restaurante.RazonSocial}</p>
                        <Link to={`/restaurante/edit/${restaurante.id}`} className='btn btn-primary' id='Link_Editar_Restaurante' >Editar</Link>
                        
                        <button onClick={()=>deleteRestaurante(restaurante.id)} className='btn btn-primary' id='Btn_Eliminar_Restaurante'>Elimnar</button>
                        <Link to={`/${restaurante.id}/platos`} className='btn btn-primary' id='Btn_VerPlatos_Restaurante' >Ver los platos</Link>
                        <Link to={`/${restaurante.id}/pedidos`} className='btn btn-primary' id='Btn_Pedidos_Restaurante' >Ver pedidos</Link>
                    </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ComRestaurante