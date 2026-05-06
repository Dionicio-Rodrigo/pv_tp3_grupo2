import { useState } from "react";

export const Busqueda = ({ children, funcion }) => {
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
