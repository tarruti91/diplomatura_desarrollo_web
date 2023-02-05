import '../estilos/contacto.css'
import { useState } from 'react';
import axios from 'axios';


const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    return (
        <>
            <div className="instructivo">
                <h2>Para contactarnos</h2>
                <p>A fin de agilizar el contacto con nuestro equipo y poder brindarte la ayuda que necesitas por favor
                    completa los siguientes campos. No olvides incluir dentro del cuadro de texto lo más detallado posible
                    las características del alojamiento o de la experiencia que quieres incluir en nuestro portal. En el
                    menor tiempo posible nos estaremos contactando.</p>
            </div>
            <form action="/contacto" method='post' onSubmit={handleSubmit} className="formulario">
                <div className='formdata'>
                    <input type="text" id="Nombre" placeholder="Nombre y Apellido" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    <input type="number" id="telefono" placeholder="Telefono de contacto" name="telefono" value={formData.telefono} onChange={handleChange} />
                    <input type="text" id="mail" placeholder="Mail de contacto" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <textarea id="consulta" placeholder="Contanos sobre tu propuesta" cols="80" rows="8" name="mensaje" value={formData.mensaje} onChange={handleChange}
                    required></textarea>
                <input type="submit" className="button" value="Enviar" />
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

            </form>
        </>
    )
}

export default Contacto