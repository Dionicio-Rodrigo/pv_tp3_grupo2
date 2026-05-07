import { useState } from "react";

export const Bandeja = ({ children, funcion }) => {
  // La funcion que recibe busqueda se llamara
  // cuando el input cambie, mandando el valor de este
  const handleFuncion = (entrada) => {
    funcion(entrada.target.value);
  };
  return (
    <label className="Buscador">
      {children}
      <input type="text" onChange={handleFuncion} />
    </label>
  );
};
