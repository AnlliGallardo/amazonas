import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {BsGeoAlt} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import { startLogout } from '../actions/actionLogin';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from '@firebase/auth';



export const Navbar2 = () => {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

        });
    }, [setIsLoggedIn])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid nav">
                    <Link className="navbar-brand" to="/"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown" to="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Todo
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/">Electrodomesticos</Link></li>
                            <li><Link className="dropdown-item" to="/">Ropa</Link></li>
                            <li><Link className="dropdown-item" to="/">Hogar</Link></li>
                        </ul>
                        </li>
                        {
                            isLoggedIn
                                ?
                                <Link
                                    onClick={() => { dispatch(startLogout()) }}
                                    to="/"
                                    spy={true}
                                    smooth={true}
                                >Cerrar sesión</Link>
                                :
                                <Link
                                    to="/login"
                                    spy={true}
                                    smooth={true}
                                >Iniciar sesión</Link>
                                

                        }
                    </ul>
                    </div>
                </div>
        </nav>
        </>
    )
}
