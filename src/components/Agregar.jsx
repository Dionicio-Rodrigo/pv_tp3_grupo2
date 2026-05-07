import { use, useEffect, useRef, useState } from "react";
import { Bandeja } from "./Bandeja.jsx";

export const Agregar = ({ funcion, objeto }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [finalizado, setFinalizado] = useState(undefined);
  const [invalido, setinvalido] = useState(false);

  useEffect(() => {
    if (titulo == "") {
      setinvalido(true);
      return;
    }
    if (categoria == "") {
      setinvalido(true);
      return;
    }
    if (finalizado == undefined) {
      setinvalido(true);
      return;
    }
    setinvalido(false);
  }, [titulo, categoria, finalizado]);

  const handleFuncion = () => {
    let objeto = {
      id: -1,
      titulo: titulo,
      categoria: categoria,
      finalizado: finalizado,
    };
    funcion(objeto);
  };

  return (
    <div className="cartaAgregar">
      <h2>Agregar</h2>
      <form>
        <Bandeja funcion={setTitulo} state={titulo}>
          Titulo:
        </Bandeja>
        <Bandeja funcion={setCategoria} state={categoria}>
          Categoria:
        </Bandeja>
        <div id="Estados">
          Estado:
          <label>
            En proceso
            <input
              type="radio"
              name="estado"
              id=""
              onClick={() => {
                setFinalizado(false);
              }}
            />
          </label>
          <label>
            Finalizado
            <input
              type="radio"
              name="estado"
              id=""
              onClick={() => {
                setFinalizado(true);
              }}
            />
          </label>
        </div>
        <button type="submit" onClick={handleFuncion} disabled={invalido}>
          Agregar Proyecto
        </button>
      </form>
    </div>
  );
};
