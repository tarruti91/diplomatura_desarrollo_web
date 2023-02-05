
import '../estilos/servicios.css'

const Servicios = (props) => {
    return (
        <>
            <h2 className="tituloservicios">Servicios</h2>
            <div className="servicioscontainer">
                <div className="servicios">
                    <div className="servicio">
                        <div className="serviciotitulo">
                            <h2>Servicio Legal</h2>
                        </div>
                        <div className="serviciodescripcion">
                            <img src="imagenes/servicios/legal.png" alt="ups" />
                            <p>Se ofrece un asesoramiento legal respecto tanto a las condiciones de uso del sitio como en la orientación con la relación de los futuros clientes de nuestros anfitriones.</p>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="serviciotitulo">
                            <h2>Serivicio de Publicación</h2>
                        </div>
                        <div className="serviciodescripcion">
                            <p>Se mostrará dentro del portal tanto los alojamientos de los anfitriones que formen parte de Portal Mendoza como de las experiencias.</p>
                            <img src="imagenes/servicios/publicado.png" alt="ups" />

                        </div>
                    </div>
                    <div className="servicio">
                        <div className="serviciotitulo">
                            <h2>Servicio de Fotografía</h2>
                        </div>
                        <div className="serviciodescripcion">
                            <img src="imagenes/servicios/fotografia.png" alt="ups" />
                            <p>Se llevará a cabo un servicio de fotografía profesional a cargo de Portal Mendoza para le exhibición tanto de los alojamientos como de las experiencias. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servicios
