export const Bandeja = ({ children, funcion, state }) => {
  // La funcion que recibe busqueda se llamara
  // cuando el input cambie, mandando el valor de este
  const handleFuncion = (entrada) => {
    funcion(entrada.target.value);
  };
  return (
    <label className="Bandeja">
      {children}
      <input type="text" value={state} onChange={handleFuncion} />
    </label>
  );
};
