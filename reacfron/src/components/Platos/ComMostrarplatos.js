import axios from'axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

const URI='http://localhost:8000/platos/'

//Mostrar los platos pero para editar o
const ComMostrarplatos = () => {
    const [platos,setplatos]=useState([])
    const [hayplatos,setsethayplatos]=useState(false)
    useEffect(()=>{
        getPlatos()
    },[])
    const Id_Restaurante=useParams();
    //proceso traer todos los platos segun la id del restaurante
    const getPlatos=async ()=>{
        const res=await axios.get(`${URI}${Id_Restaurante.id}/platos`)
        if(!res.data == []){
            setplatos(res.data)
            setsethayplatos(true)
        }else{
            setsethayplatos(false)
        }
    }
    //proceso para elimanar un restaurante
    const deleteplatos =async (id)=>{
        await axios.delete(`${URI}${id}`)
        getPlatos()
    }

  return (
    <div className='container'>
        <Link to={`/platos/create/${Id_Restaurante.id}/newplato`} className='btn btn-primary mt-2 mb-2' id='Btn_Crear_Plato'>Crea nuevo plato</Link>
        {platos.length>0? (
            <div>
                {platos.map((plato)=>(
                <div className="card mb-3" style={{max_width: `540px`}} key={plato.id} id='Card_Plato_Admin'>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={plato.ImgPlato} className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" id='H5_Plato_Admin_Nombre'>{plato.Nombre}</h5>
                            <p className="card-text"id='H5_Plato_Admin_Dexrip'>{plato.Descrp}</p>
                            <p className="card-text"id='H5_Plato_Admin_Precio'>{plato.Precio}</p>
                            {/* <p className='card-text'>{plato.Id_Restaurante}</p> */}
                            <Link to={`/platos/edit/${plato.id}/${Id_Restaurante.id}`} className='btn btn-primary' id='Btn_Editar_Plato'>Editar</Link>
                            <button onClick={()=>deleteplatos(plato.id)} className='btn btn-primary' id='Btn_Eliminar_Plato'>Elimnar</button>  
                        </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        ):(
            <p id='P_No_Hay_Platos'>No hay platos disponibles para este restaurante.</p>
        )}
        
    </div>
  )
}

export default ComMostrarplatos