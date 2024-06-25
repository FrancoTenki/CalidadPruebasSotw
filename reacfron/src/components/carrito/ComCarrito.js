import React, { useEffect, useState } from 'react'
import axios from'axios'

const URICarrito='http://localhost:8000/Carrito/'

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}

export const ComCarrito = () => {
    const [itemOfCarrito,setitemOfCarrito]=useState([])

    useEffect(()=>{
        getItemOfCarrito()    
    },[])

    const getItemOfCarrito=async ()=>{
        if((localStorage.getItem('token')!==null)){
            // console.log(parseJwt(localStorage.getItem('token')).id)
            const res=await axios.post(`${URICarrito}platos-cart`,{idUser:parseJwt(localStorage.getItem('token')).id})
            setitemOfCarrito(res.data)
        }
    }
    const AddCarrito=async (itemCar)=>{
        try {
            const res =await axios.put(`${URICarrito}platos-cart/${itemCar.PlatoId}?query=add`,{Amount:itemCar.Amount})
            console.log(res.data)
            getItemOfCarrito()
        } catch (error) {
            console.log(error)
        }
    }
    const DelCarrito=async (itemCar)=>{
        try {
            if(itemCar.Amount===1){
                const res=await axios.delete(`${URICarrito}platos-cart/${itemCar.PlatoId}`)
                console.log(res.data)
                getItemOfCarrito()
            }else{
                const res =await axios.put(`${URICarrito}platos-cart/${itemCar.PlatoId}?query=del`,{Amount:itemCar.Amount})
                console.log(res.data)
                getItemOfCarrito()
            }

        } catch (error) {
            console.log(error)
        }
    }
    const DeleteCarrito=async (itemCar)=>{
        try {
            const res=await axios.delete(`${URICarrito}platos-cart/${itemCar.PlatoId}`)
            console.log(res.data)
            getItemOfCarrito()
        } catch (error) {
            console.log(error)
        }
    }
    const calcularTotal =() => {
        return itemOfCarrito.reduce((total, item) => total + parseFloat(item.Precio) * item.Amount, 0.00);
    };
    const Cancelar = async() => {
        if((localStorage.getItem('token')!==null)){
            const res=await axios.post(`${URICarrito}CancelarPedido`,{idUser:parseJwt(localStorage.getItem('token')).id})
            console.log(res.data)
            getItemOfCarrito()
        }
    };
  return (
    <div>
        {itemOfCarrito.map((itemCarrito)=>(
            <div className="PlatoCard"  key={itemCarrito.id} id='Card_Plato'>
                    <div className='DetallePlato'>
                        <div className='PNombrePlato'>
                            <h4 id='H4_Nombre_plato' className='HNombrePlato'>{itemCarrito.Nombre}</h4>
                        </div>
                                    
                        <p id='P_Descp_plato' className='HDesPlato'>{itemCarrito.Descrp}</p>
                        <p id='P_Descp_plato' className='HDesPlato'>Cantidad: {itemCarrito.Amount}</p>
                        
                        <div className='PPrecPlato'>
                            <span id='Span_Precio_plato' className='PPresPlato'>S/ {itemCarrito.Precio}</span>
                        </div>  
                    </div>
                    <div className='DivImgPlato'> 
                        <img className='ImgPlato'
                            src={itemCarrito.ImgPlato}
                            alt=''
                        ></img>
                    </div>

                    <button onClick={()=>AddCarrito(itemCarrito)}>Mas 1</button>
                    <button onClick={()=>DelCarrito(itemCarrito)}>Menos 1</button>
                    <button onClick={()=>DeleteCarrito(itemCarrito)}>Borrar del carrito</button>
                </div>
        ))}
        <h3>Total:${calcularTotal()}</h3>
        {itemOfCarrito.length>0?(<button onClick={()=>Cancelar()}> Cancelar pedido</button>):(<p>Agrege un pedido a tu carrito</p>)}
        
    </div>
  )
}
