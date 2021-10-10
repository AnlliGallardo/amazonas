import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/actionLogin'

const Navbar1 = () => {
    const auth = getAuth()
    const dispatch = useDispatch()
    const {name} = useSelector(state=> state.login)
    
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                
                <a className="navbar-brand h3" href="#">
                    Usuario: {name}
                    </a>
                <button className="navbar-brand btn btn-outline-danger" 
                onClick={() =>dispatch(startLogout())}>
                 Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar1
