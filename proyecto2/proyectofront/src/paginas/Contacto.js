import React from "react"

const Contacto = (props) => {
    return (
        <>
            <div class="instructivo">
                <h2>Para contactarnos</h2>
                <p>A fin de agilizar el contacto con nuestro equipo y poder brindarte la ayuda que necesitas por favor
                    completa los siguientes campos. No olvides incluir dentro del cuadro de texto lo más detallado posible
                    las características del alojamiento o de la experiencia que quieres incluir en nuestro portal. En el
                    menor tiempo posible nos estaremos contactando.</p>
            </div>
            <form class="formulario">
                <input type="text" id="Nombre" placeholder="Nombre y Apellido" required />
                <input type="number" id="telefono" placeholder="Telefono de contacto" />
                <input type="email" id="mail" placeholder="Mail de contacto" required />
                <textarea name="consulta" id="consulta" placeholder="Contanos sobre tu propuesta" cols="80" rows="8"
                    required></textarea>
                <label for="documento">Compartinos algunas fotos</label>
                <input type="file" class="button" />
                <input type="submit" class="button" />
            </form>
        </>
    )
}

export default Contacto