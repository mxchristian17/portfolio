import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
                <Link to="../" className="navbar-brand px-1 mx-1" >
                    <img src="../logo192.png" alt="" height="24" />
                </Link>
                <Link to="../" className="navbar-brand">Orengia Christian portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <NavLink to="../" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar