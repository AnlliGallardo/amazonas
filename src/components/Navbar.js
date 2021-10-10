import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import {BsGeoAlt} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";




export const Navbar = () => {
    const [posicion, setPosicion] = useState({
        center: {
          lat:0,
          lng: 0
        },
        zoom: 0
      });
      
    navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosicion({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            zoom: 15
          });
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        },
        {
          enableHighAccuracy: true,
         }
         );

    return (
        <div>
            <nav className="navbar">
            <div className="container" >
                <Link className="navbar-brand" to="/ListContainer">
                <img src="https://res.cloudinary.com/djlvgbuji/image/upload/v1632694503/Imagen1_zrnvlo.png" alt="" className="amazonas"/>
                </Link>
            </div>
            <div className="address">
                <h6 className="hello">Hola {""}</h6>
                    <Link to={{
                        pathname:"/auth/mapa",
                        posicion1: posicion
                        }} className="icon"><BsGeoAlt/> {""} Elige tu dirección</Link>
    <button className="btn dropdown-toggle" data-bs-toggle="dropdown">
        Todos los departamentos
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><Link className="dropdown-item" to="/">Electrodomestico</Link></li>
        <li><Link className="dropdown-item" to="/">Hogar</Link></li>
        <li><Link className="dropdown-item" to="/">Ropa</Link></li>
    </ul>         
    <div className="container-fluid">
        <form className="d-flex search">
        <input className="form-control me-2" placeholder="Search"/>
        <button className="btn iconsearch" type="submit"><BiSearchAlt/></button>
        </form>
    </div>   
    <h6 className="helloiden">Hola, identificate {""}</h6>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
           <a className="nav-link dropdown" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Listas y Cuentas
           </a>
           <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <h6 to="/" className="devoluciones">Devoluciones</h6>
     <img src="https://res.cloudinary.com/djlvgbuji/image/upload/v1632701155/Imagen2_fv5ljm.png" alt="" className="carrito"/>
     <h6 className="car">Carrito</h6>
    </div>       
</nav>
</div>
    )
}
