import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <img id='Img_Portada_Empresa' src="https://www.shutterstock.com/image-vector/fast-delivery-by-scooter-on-600nw-1540323020.jpg" ></img>
        <h3 id='H3_Nombre_Proyecto'>Proyecto delivery 1.1</h3>
        <Link to={`/restaurante`} className='btn btn-primary' id='Btn_Restaurantes_User'>restaurantes</Link>

    </div>
  )
}

export default Home