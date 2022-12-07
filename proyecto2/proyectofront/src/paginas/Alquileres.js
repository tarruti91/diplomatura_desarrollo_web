import { Link } from "react-router-dom";

const Alquileres = (props) => {
    return (
        <>
            <div className="container">
                <h2 className="tituloalojamiento">Alojamientos</h2>
            </div>
            <div className="container">
                <div className="alojamientos">
                    <div className="alojamiento">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="imagenes/alojamientos/alojamiento1/frentealojamiento1.JPG" class="d-block w-100" alt="ups" />
                                </div>
                                <div className="carousel-item">
                                    <img src="imagenes/alojamientos/alojamiento1/parquealojamiento1.JPG" class="d-block w-100" alt="ups" />
                                </div>
                                <div className="carousel-item">
                                    <img src="imagenes/alojamientos/alojamiento1/vistaalojamiento1.JPG" class="d-block w-100" alt="ups" />
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                            explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                            veritatis accusamus? Quos, eligendi magni?</p>
                        <button> <Link to="/fail"> Quiero!</Link></button>
                    </div>
                    <div className="alojamiento">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                            explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                            veritatis accusamus? Quos, eligendi magni?</p>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="imagenes/alojamientos/alojamiento2/frente2alojamiento2.JPG" className="d-block w-100" alt="ups" />
                                </div>
                                <div className="carousel-item">
                                    <img src="imagenes/alojamientos/alojamiento2/frentealojamiento2.JPG" className="d-block w-100" alt="ups" />
                                </div>
                                <div className="carousel-item">
                                    <img src="imagenes/alojamientos/alojamiento2/otrofrentealojamiento2.JPG" className="d-block w-100" alt="ups" />
                                </div>
                            </div>
                        </div>
                        <button> <Link to="/fail"> Quiero!</Link></button>
                    </div>
                    <div className="alojamiento">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="imagenes/alojamientos/alojamiento3/amacaalojamiento3.JPG" className="d-block w-100" alt="ups" />
                                </div>
                                <div className="carousel-item">
                                    <img src="imagenes/alojamientos/alojamiento3/parquealojamiento3.JPG" className="d-block w-100" alt="ups" />
                                </div>
                                <div className="carousel-item">
                                    <img src="imagenes/alojamientos/alojamiento3/parrillaalojamiento3.JPG" className="d-block w-100" alt="ups" />
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                            explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                            veritatis accusamus? Quos, eligendi magni?</p>
                        <button> <Link to="/fail"> Quiero!</Link></button>
                    </div>
                    <div className="alojamiento">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi accusantium laborum
                            explicabo, quis eaque tenetur sunt repudiandae consequatur sapiente non dolor magni praesentium sint
                            veritatis accusamus? Quos, eligendi magni?</p>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="imagenes/alojamientos/alojamiento4/cocheraalojamiento4.JPG" className="d-block w-100" alt="ups" />
                                </div>
                                <div className="carousel-item">
                                    <img src="imagenes/alojamientos/alojamiento4/parquealojamiento4.JPG" className="d-block w-100" alt="ups" />
                                </div>
                                <div className="carousel-item">
                                    <img src="imagenes/alojamientos/alojamiento4/vistaalojamiento4.JPG" className="d-block w-100" alt="ups" />
                                </div>
                            </div>
                        </div>
                        <button> <Link to="/fail"> Quiero!</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alquileres;