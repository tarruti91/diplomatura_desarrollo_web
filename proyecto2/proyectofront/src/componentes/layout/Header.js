import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="headernav">
            <div className="headercontainer">
                <logo>
                    <h1 className="logo">Portal Mendoza</h1>
                </logo>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/servicios">Servicios </Link> </li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;