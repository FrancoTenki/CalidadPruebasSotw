import React, {useState,useEffect} from 'react'
import axios from'axios'
import { Link } from 'react-router-dom';
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
    <div>
        {restaurantes.map(restaurante =>{
                return(
                    <Link to="/Detalle">
                        <div class="card mb-3" style={{max_width: `540px`}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={restaurante.ImgPortada} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </Link>
                )
            })}
        
    </div>
    
  );
};

export default Restaurantes;