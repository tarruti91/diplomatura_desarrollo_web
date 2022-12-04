import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="container">
            <div className="tarjetas">
                <div className="secciones">
                    <h3>Alojamientos</h3>
                    <p>Ponte en contacto con alguno de los muchos anfitriones que se ofrecen en nuestra página</p>
                    <button><Link to="alquileres">Quiero!</Link></button>
                </div>
                <div className="secciones">
                    <h3>Experiencias</h3>
                    <p>Descubre la gran variedad de actividades que se ofrecen cerca de tu destino</p>
                    <button><Link to="experiencias">Quiero!</Link></button>
                </div>
                <div className="secciones">
                    <h3>Novedades</h3>
                    <p>Encuentra eventos especiales cerca de tus alojamientos preferidos </p>
                    <button><Link to="fail"> Quiero!</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Home
