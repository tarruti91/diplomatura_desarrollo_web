import { Link } from "react-router-dom";

const Experiencias = (props) => {
    return (
        <div class="container">
            <h2 class="tituloexperiencias">Experiencias</h2>
            <div class="container">
                <div class="experiencias">
                    <div class="experiencia">
                        <h3>Escalada</h3>
                        <div class="descripcionexperiencia">
                            <img src="imagenes/experiencias/escalada/escalada.JPG" alt="ups" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus maxime
                                accusantium, excepturi inventore quam quisquam magni sapiente asperiores veniam amet non ea
                                necessitatibus, saepe eius ut! Natus, est hic?</p>
                        </div>
                        <button> <Link to="/fail"> Quiero!</Link></button>
                    </div>
                    <div class="experiencia">
                        <h3>Arqueria</h3>
                        <div class="descripcionexperiencia">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus maxime
                                accusantium, excepturi inventore quam quisquam magni sapiente asperiores veniam amet non ea
                                necessitatibus, saepe eius ut! Natus, est hic?</p>
                            <img src="imagenes/experiencias/arqueria/arqueria.jpg" alt="ups" />
                        </div>
                        <button> <Link to="/fail"> Quiero!</Link></button>
                    </div>
                    <div class="experiencia">
                        <h3>Trekking</h3>
                        <div class="descripcionexperiencia">
                            <img src="imagenes/experiencias/trekking/trekking.JPG" alt="ups" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus maxime
                                accusantium, excepturi inventore quam quisquam magni sapiente asperiores veniam amet non ea
                                necessitatibus, saepe eius ut! Natus, est hic?</p>
                        </div>
                        <button> <Link to="/fail"> Quiero!</Link></button>
                    </div>
                    <div class="experiencia">
                        <h3>Antiguo tren</h3>
                        <div class="descripcionexperiencia">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus maxime
                                accusantium, excepturi inventore quam quisquam magni sapiente asperiores veniam amet non ea
                                necessitatibus, saepe eius ut! Natus, est hic?</p>
                            <img src="imagenes/experiencias/estacion/antiguaestaciondetren.JPG" alt="ups" />
                        </div>
                        <button> <Link to="/fail"> Quiero!</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiencias