import './App.css';
import ComRestaurante from './components/restaurantes/ComRestaurante';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComCrearRestaurante from './components/restaurantes/ComCrearRestaurante';
import ComEditRestaurante from './components/restaurantes/ComEditRestaurante';
import Home from './components/home/Home';
import ListaRestaurantes from './components/restaurantes/ListaRestaurantes';
import Navbar from './components/navbar/Navbar';
import ComMostrarplatos from './components/Platos/ComMostrarplatos';
import ComCreatePlato from './components/Platos/ComCreatePlato';
import MostrarALLplatos from './components/Platos/MostrarPlatos';
import ComEditPlato from './components/Platos/ComEditPlato';
import LoginPrueba from './components/navbar/LoginPrueba';
import ComCrearUsuario from './components/navbar/ComCrearUsuario';
import { ComCarrito } from './components/carrito/ComCarrito';
import { PageMainProveedor } from './components/Proveedor/PageMainProveedor';
import PedidoRestaurante from './components/Proveedor/PedidoRestaurante';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/restaurante' element={<ListaRestaurantes/>}></Route>
          <Route path='/restaurante/create' element={<ComCrearRestaurante/>}></Route>
          <Route path='/restaurante/edit/:id' element={<ComEditRestaurante/>}></Route>
          {/* Componenete de platos por restaurante */}
          <Route path='/:id/platos' element={<ComMostrarplatos />}></Route>
          <Route path='/platos/create/:id/newplato' element={<ComCreatePlato />}></Route>
          <Route path='/platos/edit/:id/:idres' element={<ComEditPlato />}></Route>

          <Route path='/Restaurante/platos/:id' element={<MostrarALLplatos/>}></Route>
          {/* Login */}
          <Route path='/Login' element={<LoginPrueba/>}></Route>
          {/* Creacion de un nuevo usuario */}
          <Route path='/CrearUsuario' element={<ComCrearUsuario/>}></Route>
          {/* Pagina de proveedor */}
          <Route path='/Proveedor' element={<PageMainProveedor/>}></Route>
          {/* Pagina de pedisod e un resaturante */}
          <Route path='/:id/pedidos' element={<PedidoRestaurante />}></Route>
          {/* Carrito */}
          <Route path='/carrito' element={<ComCarrito/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
