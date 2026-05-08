import { useState } from "react";

export const Borrado = ({funcion,id}) => {
    return (
        <button className="btn-borrar" onClick={() => funcion(id)}>Eliminar Proyecto</button>
    );
};
