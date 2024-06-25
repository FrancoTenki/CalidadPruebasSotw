import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id='Navbar'>
    <div className="container-fluid">
        <Link to={'/'}>
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Ubicacion</a>
            </li>
            <li className="nav-item">
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </li>
        </ul>
        <span  class="navbar-text"><Link id='bnt-Login' to={'/Login'}><FontAwesomeIcon icon={faUser} />Login</Link></span>
        <span  class="navbar-text"><Link id='bnt-Login' to={'/CrearUsuario'}>
        {/* <i className="fa-solid fa-user"></i>  */}<FontAwesomeIcon icon={faUser} />
        Register</Link></span>
        
        <span class="navbar-text"><Link to={'/carrito'}><i class="fa-solid fa-cart-shopping"></i><FontAwesomeIcon icon={faCartShopping} /></Link></span>
        </div>
    </div>
    </nav>
  )
}

export default Navbar