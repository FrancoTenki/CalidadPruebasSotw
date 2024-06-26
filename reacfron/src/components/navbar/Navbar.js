import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './login.css'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="Navbar">
    <div class="container-fluid">
        <Link to={'/'} class="navbar-brand">Navbar</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link  class="nav-link active" to={'/'}>
                        Ubicacion
                    </Link>
                </li>
                <li class="nav-item">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </li>
            </ul>
            <div class="d-flex">
                <span class="navbar-text me-3">
                    <Link id="bnt-Login" to={'/Login'}>
                        <FontAwesomeIcon icon={faUser} /> Login
                    </Link>
                </span>
                <span class="navbar-text me-3">
                    <Link id="bnt-Register" to={'/CrearUsuario'}>
                        <FontAwesomeIcon icon={faUser} /> Register
                    </Link>
                </span>
                <span class="navbar-text">
                    <Link to={'/carrito'}>
                        <FontAwesomeIcon icon={faCartShopping} /> <i class="fa-solid fa-cart-shopping"></i>
                    </Link>
                </span>
            </div>
        </div>
    </div>
</nav>

    // <nav class="navbar navbar-expand-lg bg-body-tertiary" id='Navbar'>
    // <div class="container-fluid">
    //     <Link to={'/'}>
    //     <a class="navbar-brand" href="#">Navbar</a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //     </button>
    //     </Link>

    //     <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">Ubicacion</a>
    //           </li>
    //           <li class="nav-item">
    //           <form class="d-flex" role="search">
    //           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //           <button class="btn btn-outline-success" type="submit">Search</button>
    //           </form>
    //           </li>
    //       </ul>
    //       <span  class="navbar-text"><Link id='bnt-Login' to={'/Login'}><FontAwesomeIcon icon={faUser} />Login</Link></span>
    //       <span  class="navbar-text"><Link id='bnt-Login' to={'/CrearUsuario'}> 
    //       <FontAwesomeIcon icon={faUser} />
    //       Register</Link></span>
          
    //       <span class="navbar-text"><Link to={'/carrito'}><i class="fa-solid fa-cart-shopping"></i><FontAwesomeIcon icon={faCartShopping} /></Link></span>
    //     </div>
    // </div>
    // </nav>
  )
}

export default Navbar