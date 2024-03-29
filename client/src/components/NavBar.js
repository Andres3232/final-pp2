import React, { useContext } from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { AuthContext } from './auth/authContext';
import { types } from './types/types';


export const NavBar = () => {

    const { user,dispatch } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleLogout = () => {

        dispatch({ type: types.logout })

        navigate('/login',{
            replace: true
        })

    };
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    PP2
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link"}
                            
                            to="/ordenes-de-trabajo"
                        >
                            Ordenes de trabajo
                        </NavLink>

                        <NavLink
                            
                            className="nav-item nav-link"
                            
                            to="/lista-empleados"
                        >
                            Lista Empleados
                        </NavLink>

                        <NavLink
                            
                            className="nav-item nav-link"
                            
                            to="/equipos-rotativos"
                        >
                            Equipos Rotativos
                        </NavLink>

                        <NavLink
                            
                            className="nav-item nav-link"
                            
                            to="/herramientas"
                        >
                            Herramientas
                        </NavLink>
                        <NavLink
                            
                            className="nav-item nav-link"
                            
                            to="/repuestos"
                        >
                            Respuestos
                        </NavLink>
                        <NavLink
                            
                            className="nav-item nav-link"
                            
                            to="/servicios"
                        >
                            Servicios
                        </NavLink>
                        <NavLink
                            
                            className="nav-item nav-link"
                            
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <span className='nav-item nav-link text-info'>
                            {user.name}

                        </span>

                        <button
                            className="nav-item nav-link btn"
                         onClick={ handleLogout }

                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </nav>

        </>
    )
}
