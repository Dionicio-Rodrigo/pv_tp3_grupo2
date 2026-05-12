import { useState } from "react";
import { Borrado } from "./Borrado.jsx";
import "../css/ListaProyectos.css";

export const ListaProyectos = ({ lista, funcion }) => {
  const handlefuncion = (id) => {
    funcion(id);
  };

  return (
    <div className="contenedor">
      {lista.map((proyecto) => (
        <div key={proyecto.id} id={`carta${proyecto.id}`} className="card">
          <h2>{proyecto.titulo}</h2>
          <div className="categoria-estado">
            <h3>{proyecto.categoria}</h3>
            <span
              className={`estado-${proyecto.finalizado == true ? "finalizado" : "enProceso"}`}
            >
              {proyecto.finalizado == true ? "Finalizado" : "En Proceso"}
            </span>
          </div>
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
