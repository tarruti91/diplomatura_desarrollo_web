import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fail">Servicios </Link> </li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>)
}

export default Nav;