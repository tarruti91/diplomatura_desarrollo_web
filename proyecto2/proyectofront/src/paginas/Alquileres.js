import '../estilos/alquileres.css'
import { Link } from "react-router-dom";

const Alquileres = (props) => {
    return (
        <>
            <h2 className="tituloalojamiento">Alojamientos</h2>
            <div className="alojamientoscontainer">
                <div className="alojamientos">
                    <div className="alojamiento">
                        <div className="alojamientoimg">
                            <img src="imagenes/alojamientos/alojamiento1/frentealojamiento1.JPG" class="alojpic" alt="ups" />
                            <img src="imagenes/alojamientos/alojamiento1/parquealojamiento1.JPG" class="alojpic" alt="ups" />
                            <img src="imagenes/alojamientos/alojamiento1/vistaalojamiento1.JPG" class="alojpic" alt="ups" />
                        </div>
                        <div className="alojamientodata">
                            <h3>Descripcion del dueño</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                                explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                                veritatis accusamus? Quos, eligendi magni?</p>
                            <h3>Ubicacion</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                                explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                                veritatis accusamus? Quos, eligendi magni?</p>
                            <h3>Cantidad de camas</h3>
                            <p>3</p>

                        </div>
                        <Link to="/fail"><button> Contactar</button></Link>
                    </div>
                    <div className="alojamiento">
                        <div className="alojamientoimg">
                            <img src="imagenes/alojamientos/alojamiento2/frente2alojamiento2.JPG" className="alojpic" alt="ups" />
                            <img src="imagenes/alojamientos/alojamiento2/frentealojamiento2.JPG" className="alojpic" alt="ups" />
                            <img src="imagenes/alojamientos/alojamiento2/otrofrentealojamiento2.JPG" className="alojpic" alt="ups" />
                        </div>
                        <div className="alojamientodata">
                            <h3>Descripcion del dueño</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                                explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                                veritatis accusamus? Quos, eligendi magni?</p>
                            <h3>Ubicacion</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                                explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                                veritatis accusamus? Quos, eligendi magni?</p>
                            <h3>Cantidad de camas</h3>
                            <p>6</p>
                        </div>
                        <Link to="/fail"><button>Contactar</button></Link>
                    </div>
                    <div className="alojamiento">
                        <div className="alojamientoimg">
                            <img src="imagenes/alojamientos/alojamiento3/amacaalojamiento3.JPG" className="alojpic" alt="ups" />
                            <img src="imagenes/alojamientos/alojamiento3/parquealojamiento3.JPG" className="alojpic" alt="ups" />
                            <img src="imagenes/alojamientos/alojamiento3/parrillaalojamiento3.JPG" className="alojpic" alt="ups" />
                        </div>
                        <div className="alojamientodata">
                            <h3>Descripcion del dueño</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                                explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                                veritatis accusamus? Quos, eligendi magni?</p>
                            <h3>Ubicacion</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                                explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                                veritatis accusamus? Quos, eligendi magni?</p>
                            <h3>Cantidad de camas</h3>
                            <p>2</p>
                        </div>
                        <Link to="/fail"><button> Contactar</button></Link>
                    </div>
                    <div className="alojamiento">
                        <div className="alojamientoimg">
                            <img src="imagenes/alojamientos/alojamiento4/cocheraalojamiento4.JPG" className="alojpic" alt="ups" />
                            <img src="imagenes/alojamientos/alojamiento4/parquealojamiento4.JPG" className="alojpic" alt="ups" />
                            <img src="imagenes/alojamientos/alojamiento4/vistaalojamiento4.JPG" className="alojpic" alt="ups" />
                        </div>
                        <div className="alojamientodata">
                            <h3>Descripcion del dueño</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                                explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                                veritatis accusamus? Quos, eligendi magni?</p>
                            <h3>Ubicacion</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                                explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                                veritatis accusamus? Quos, eligendi magni?</p>
                            <h3>Cantidad de camas</h3>
                            <p>2</p>
                        </div>
                        <Link to="/fail"><button>Contactar</button></Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Alquileres;