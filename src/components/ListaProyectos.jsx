import { useState } from "react";
import { Borrado } from "./Borrado.jsx";

export const ListaProyectos = ({ lista, funcion }) => {
  const handlefuncion = (id) => {
    funcion(id);
  };

  return (
    <div className="contenedor">
      {lista.map((proyecto) => (
        <div key={proyecto.id} id={`carta${proyecto.id}`} className="card">
          <h1>{proyecto.titulo}</h1>
          <h3>{proyecto.categoria}</h3>
          <p>{proyecto.finalizado == true ? "Finalizado" : "En Proceso"}</p>
          <button
            className="btn-borrar"
            onClick={() => handlefuncion(proyecto.id)}
          >
            Eliminar Proyecto
          </button>
        </div>
      ))}
    </div>
  );
};
