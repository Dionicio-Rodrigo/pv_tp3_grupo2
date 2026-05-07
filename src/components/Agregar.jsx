import { useEffect, useRef, useState } from "react";
import { Bandeja } from "./Bandeja.jsx";

export const Agregar = ({ funcion, objeto }) => {
  const titulo = useRef("");
  const categoria = useRef("");
  const [enProceso, setenProceso] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  const handleFuncion = () => {
    if (titulo.current == "") {
      alert(`Ingrese un titulo`);
      return;
    }
    if (categoria.current == "") {
      alert(`Ingrese una categoria`);
      return;
    }
    if (finalizado == false && finalizado == enProceso) {
      alert(`Error en el estado`);
      return;
    }

    let objeto = {
      id: -1,
      titulo: titulo.current,
      categoria: categoria.current,
      finalizado: finalizado,
    };
    funcion(objeto);
  };

  return (
    <div className="cartaAgregar">
      <form>
        <label>
          Titulo:
          <input
            type="text"
            onChange={(e) => {
              titulo.current = e.target.value;
            }}
          />
        </label>
        <label>
          Categoria:
          <input
            type="text"
            onChange={(e) => {
              categoria.current = e.target.value;
            }}
          />
        </label>
      </form>
      <div>
        <label>
          En Proceso:
          <input
            type="checkbox"
            id="enProceso"
            checked={enProceso}
            // Se podria cambiar por algo mas simple?
            onChange={() => {
              if (finalizado == true) {
                setFinalizado(false);
                setenProceso(!enProceso);
              } else {
                setenProceso(!enProceso);
              }
            }}
          />
        </label>
        <label>
          Finalizado:
          <input
            type="checkbox"
            id="finalizado"
            checked={finalizado}
            // Se podria cambiar por algo mas simple?
            onChange={() => {
              if (enProceso == true) {
                setenProceso(false);
                setFinalizado(!finalizado);
              } else {
                setFinalizado(!finalizado);
              }
            }}
          />
        </label>
      </div>
      <button onClick={handleFuncion}>Agregar Proyecto</button>
    </div>
  );
};
