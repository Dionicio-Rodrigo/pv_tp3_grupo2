import { useState } from "react";
import { Borrado } from "./Borrado.jsx";
import "../css/ListaProyectos.css";
import { ProyectoCard } from "./ProyectoCard.jsx";

export const ListaProyectos = ({ lista, eliminar, detalles }) => {
  const handlefuncion = (id) => {
    funcion(id);
  };

  return (
    <div className="contenedor">
      {lista.map((proyecto) => (
        <ProyectoCard
          key={proyecto.id}
          proyecto={proyecto}
          eliminar={eliminar}
          detalles={detalles}
        />
      ))}
    </div>
  );
};
