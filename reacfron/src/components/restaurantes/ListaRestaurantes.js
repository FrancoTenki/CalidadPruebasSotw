import React, {useState,useEffect} from 'react'
import axios from'axios'
import { Link } from 'react-router-dom';
import Restaurante from './Restaurante'
import './Restaurantes.css'

const URI='http://localhost:8000/restaurantes/'

const Restaurantes = () => {
    const [restaurantes,setRestaurantes]=useState([])
    useEffect(()=>{
        getRestaurantes()
    },[])
    //proceso traer todos los restaurantes
    const getRestaurantes=async ()=>{
        const res=await axios.get(URI)
        setRestaurantes(res.data)
    }
  return (  
    <>
    {Array.isArray(restaurantes) && restaurantes.length > 0?(
        <div className="ListCard">
            {restaurantes.map(restaurante =>{
            return(
                <div id='Card_Restaurante'>
                    <Link id='Card_Restaurante_Link' to={`/Restaurante/platos/${restaurante.id}`} className='LinkRest' key={restaurante.id} >
                        <Restaurante restaurante={restaurante}></Restaurante>
                    </Link>
                </div>
            )
        })}
        </div>
    ):(
        <p id='P_No_Hay_Restaurantes'>No hay Restaurantes disponibles.</p>
    )}    
    </>
  );
};

export default Restaurantes;