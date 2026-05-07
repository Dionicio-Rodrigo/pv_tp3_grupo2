import { useEffect, useRef, useState } from "react";
import { Bandeja } from "./Bandeja.jsx";

export const Agregar = ({ funcion, objeto }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [enProceso, setenProceso] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  const reiniciar = () => {
    setTitulo("");
    setCategoria("");
    setenProceso(false);
    setFinalizado(false);
  };

  const handleFuncion = () => {
    if (titulo == "") {
      alert(`Ingrese un titulo`);
      return;
    }
    if (categoria == "") {
      alert(`Ingrese una categoria`);
      return;
    }
    if (finalizado == false && finalizado == enProceso) {
      alert(`Tiene que ingresar un estado`);
      return;
    }

    let objeto = {
      id: -1,
      titulo: titulo,
      categoria: categoria,
      finalizado: finalizado,
    };
    funcion(objeto);
    reiniciar();
  };

  return (
    <div className="cartaAgregar">
      <form>
        <Bandeja funcion={setTitulo} state={titulo}>
          Titulo:
        </Bandeja>
        <Bandeja funcion={setCategoria} state={categoria}>
          Categoria:
        </Bandeja>
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
