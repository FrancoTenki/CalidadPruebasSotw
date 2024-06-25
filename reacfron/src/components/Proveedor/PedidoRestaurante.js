import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from'axios'

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}
const URI='http://localhost:8000/Carrito/'

const PedidoRestaurante = () => {
    const [pedidos,setpedidos]=useState([])
    useEffect(()=>{
        getpedidos()
    },[])
    const { id } = useParams();
    const getpedidos =async()=>{
        if((localStorage.getItem('token'))!==null){
            try {
                const res=await axios.post(`${URI}PedidosRest`,
                    {Id_Restaurante:id})
                setpedidos(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const actualizarCantidad =async (id, cantidad) => {
        try {
            axios.put(`${URI}ActualizarEstadoPedido`, { IdPlato:id,Valor:cantidad })
            getpedidos()
        } catch (error) {
            console.log(error)
        }      
    };
    const opcionesCantidad = [
        { valor: 1, nombre: 'Ordenado' },
        { valor: 2, nombre: 'Preparando' },
        { valor: 3, nombre: 'Enviado' },
        { valor: 4, nombre: 'Entregado' }
    ];
  return (
    <div>
        {pedidos.map((item)=>{
            return(<div className="PlatoCard"  key={item.id} id='Card_Plato'>
                <div className='DetallePlato'>
                    <div className='PNombrePlato'>
                        <h4 id='H4_Nombre_plato' className='HNombrePlato'>{item.Nombre}</h4>
                    </div>
                                
                    <p id='P_Descp_plato' className='HDesPlato'>{item.Descrp}</p>
                    <br/>
                    <p id='P_Descp_plato' className='HDesPlato'>Cantidad: {item.Amount}</p>
                    <br/>
                    {/* <p id='P_Descp_plato' className='HDesPlato'>EstadoPlato: {item.EstadoPlato}</p> */}
                    <select value={item.EstadoPlato} onChange={(e) => actualizarCantidad(item.id, e.target.value)}>
                        {opcionesCantidad.map(opcion => (
                            <option key={opcion.valor} value={opcion.valor} >{opcion.nombre}</option>
                        ))}
                    </select>
                    <br/>
                    <p className='HDesPlato'>Estado Plato actual: {opcionesCantidad.find(opcion => opcion.valor === item.EstadoPlato).nombre}</p>
                    
                    <div className='PPrecPlato'>
                        <span id='Span_Precio_plato' className='PPresPlato'>S/ {item.Precio}</span>
                    </div>  
                </div>
                <div className='DivImgPlato'> 
                    <img className='ImgPlato'
                        src={item.ImgPlato}
                        alt=''
                    ></img>
                </div>
            </div>)
        })}
    </div>
  )
}

export default PedidoRestaurante