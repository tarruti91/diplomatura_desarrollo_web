import { Link } from "react-router-dom";
import '../estilos/home.css'
const Home = (props) => {
    return (
        <main>
            <div className="container">
                <div className="tarjetas">
                    <div className="secciones">
                        <h3>Alojamientos</h3>
                        <p>Ponte en contacto con alguno de los muchos anfitriones que se ofrecen en nuestra página</p>
                        <Link to="alquileres"><button>Quiero!</button></Link>
                    </div>
                    <div className="secciones">
                        <h3>Experiencias</h3>
                        <p>Descubre la gran variedad de actividades que se ofrecen cerca de tu destino</p>
                        <Link to="experiencias"><button>Quiero!</button></Link>
                    </div>
                    <div className="secciones">
                        <h3>Novedades</h3>
                        <p>Encuentra los eventos unicos que buscas cerca de tus alojamientos preferidos siempre </p>
                        <Link to="novedades"><button>Quiero!</button></Link>
                    </div>
                </div>
            </div>
            <div className="cualidades">
                <h2>MENDOZA</h2>
                <p>La provincia de Mendoza es Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam est dolores,
                    non culpa tempora voluptate molestiae aperiam quia enim atque obcaecati impedit nobis repellat a, voluptatem
                    esse cum distinctio eaque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo excepturi magni
                    quaerat provident nulla non iure tenetur, eos veniam aut minus laudantium? Quo consequuntur porro quam
                    delectus ut reiciendis necessitatibus.</p>
            </div>
        </main>
    )
}
export default Home
