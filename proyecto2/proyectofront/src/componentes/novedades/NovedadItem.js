import React from "react";
import '../../estilos/novedades.css';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    return (
        <div className="novedad">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <img src={imagen} />
        </div>


    );
}

export default NovedadItem;