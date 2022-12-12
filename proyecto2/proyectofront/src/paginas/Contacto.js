import '../estilos/contacto.css'

const Contacto = (props) => {
    return (
        <>
            <div className="instructivo">
                <h2>Para contactarnos</h2>
                <p>A fin de agilizar el contacto con nuestro equipo y poder brindarte la ayuda que necesitas por favor
                    completa los siguientes campos. No olvides incluir dentro del cuadro de texto lo más detallado posible
                    las características del alojamiento o de la experiencia que quieres incluir en nuestro portal. En el
                    menor tiempo posible nos estaremos contactando.</p>
            </div>
            <form className="formulario">
                <div className='formdata'>
                    <input type="text" id="Nombre" placeholder="Nombre y Apellido" required />
                    <input type="number" id="telefono" placeholder="Telefono de contacto" />
                    <input type="email" id="mail" placeholder="Mail de contacto" required />
                </div>
                <textarea name="consulta" id="consulta" placeholder="Contanos sobre tu propuesta" cols="80" rows="8"
                    required></textarea>
                <label for="documento">Compartinos algunas fotos</label>
                <input type="file" className="button" />
                <input type="submit" className="button" />
            </form>
        </>
    )
}

export default Contacto