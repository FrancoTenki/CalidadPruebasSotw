import React, { useState ,useEffect} from 'react'
import ComRestaurante from '../restaurantes/ComRestaurante'
import { useNavigate } from 'react-router-dom';
import HistorialConsumidor from '../Consumidor/HistorialConsumidor'

import axios from 'axios';

function parseJwt (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
const URIActCarritoPlt='http://localhost:8000/Carrito/ActuCarrPlt'
const URIHistorial='http://localhost:8000/Carrito/Historial'

export const PageMainProveedor = () => {
  const navigete =useNavigate()
  const[historial,setHistorial]=useState([])
  useEffect(()=>{
    GetHistorial()    
  },[])
  const LogOut=async ()=>{
    if((localStorage.getItem('token'))!==null){
      const res=await axios.post(`${URIActCarritoPlt}`,{idUser:parseJwt(localStorage.getItem('token')).id})
      localStorage.removeItem('token');
      console.log(res.data)
      navigete('/restaurante')
    }
  }
  const GetHistorial=async ()=>{
    if((localStorage.getItem('token'))!==null){
      const res=await axios.post(`${URIHistorial}`,{idUser:parseJwt(localStorage.getItem('token')).id})
      console.log(res.data)
      setHistorial(res.data)
    }
  }

  return (
    <div>
      <h3>Bienvenido {parseJwt(localStorage.getItem('token')).Username}</h3>

    <button onClick={()=>LogOut()}>Logout</button>
    {parseJwt(localStorage.getItem('token')).Role===1?(
      
      <ComRestaurante></ComRestaurante>
    ):(<div>
      <p>Eres consumidor Historial datos</p>

      {historial.length>0?(<HistorialConsumidor Historial={historial}/>):(<p>No hay historial</p>)}
    </div>)}
    
    </div>
  )
}
