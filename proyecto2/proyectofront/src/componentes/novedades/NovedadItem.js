import React from "react";

const NovedadItem = (props) => {
    const { title, subtitel, imagen, body } = props;
    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitel}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;