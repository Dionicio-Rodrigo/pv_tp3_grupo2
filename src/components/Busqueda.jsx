import { useState } from "react";
import "../css/Busqueda.css";

export const Busqueda = ({ children, funcion }) => {
  const handleFuncion = (entrada) => {
    funcion(entrada.target.value);
  };
  return (
    <div id="Buscador">
      <h2>{children}</h2>
      <input type="text" onChange={handleFuncion} />
    </div>
  );
};
