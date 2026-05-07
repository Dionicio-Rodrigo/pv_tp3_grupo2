import { useState } from "react";

export const ListaProyectos = ({ lista, funcion }) => {
  const handleFuncion = (id) => {
    funcion(id);
  };

  return (
    <div className="contenedor">
      {lista.map((proyecto) => (
        <div id={`carta${proyecto.id}`} className="card">
          <h1>{proyecto.titulo}</h1>
          <h3>{proyecto.categoria}</h3>
          <p>{proyecto.finalizado == true ? "Finalizado" : "En Proceso"}</p>
          <button
            onClick={() => {
              handleFuncion(proyecto.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};
