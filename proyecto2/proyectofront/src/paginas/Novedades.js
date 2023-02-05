import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../componentes/novedades/NovedadItem';
import '../estilos/novedades.css';

const Novedades = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className='holder'>
            <h2 className='titulo'>Novedades</h2>
            <div className="novedades">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )}
            </div>
        </section>
    );
}

export default Novedades;