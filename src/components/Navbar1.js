import React from 'react'
import { getAuth } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/actionLogin'
import { Link } from '@mui/material'

const Navbar1 = () => {
    const auth = getAuth()
    const dispatch = useDispatch()
    const {name} = useSelector(state=> state.login)
    
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                
                <Link className="navbar-brand h3" to="/">
                    Usuario: {name}
                    </Link>
                <button className="navbar-brand btn btn-outline-danger" 
                onClick={() =>dispatch(startLogout())}>
                 Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar1
