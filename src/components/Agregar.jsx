import { useEffect, useRef, useState } from "react";

export const AgregarProyecto = ({ funcion }) => {
  const [nuevoProyecto, setnuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    finalizado: undefined,
  });

  const [invalido, setInvalido] = useState(true);

  useEffect(() => {
    if (nuevoProyecto.titulo == "") {
      setInvalido(true);
      return;
    }
    if (nuevoProyecto.categoria == "") {
      setInvalido(true);
      return;
    }
    if (nuevoProyecto.finalizado == undefined) {
      setInvalido(true);
      return;
    }
    setInvalido(false);
  }, [nuevoProyecto]);

  const handlefuncion = () => {
    funcion(nuevoProyecto);
  };

  return (
    <div className="AgregarNuevo">
      <h2>Agregar Nuevo Proyecto</h2>
      <form action={() => {}} id="datosEntrada">
        <input
          type="text"
          placeholder="Título"
          onChange={(e) => {
            setnuevoProyecto({ ...nuevoProyecto, titulo: e.target.value });
          }}
        />
        <label>
          Categoria:
          <select
            onChange={(e) => {
              setnuevoProyecto({ ...nuevoProyecto, categoria: e.target.value });
            }}
          >
            <option value="Taller">Taller</option>
            <option value="Comedor">Comedor</option>
            <option value="Curso">Curso</option>
            <option value="Recaudacion">Recaudación</option>
          </select>
        </label>
        <label>
          Estado:
          <label>
            Finalizado
            <input
              type="radio"
              name="estado"
              id="finalizado"
              onClick={(e) => {
                setnuevoProyecto({ ...nuevoProyecto, finalizado: true });
              }}
            />
          </label>
          <label>
            En Proceso
            <input
              type="radio"
              name="estado"
              id="enProceso"
              onClick={(e) => {
                setnuevoProyecto({ ...nuevoProyecto, finalizado: false });
              }}
            />
          </label>
        </label>
      </form>
      <button
        form="datosEntrada"
        type="submit"
        onClick={handlefuncion}
        disabled={invalido}
      >
        Agregar Proyecto
      </button>
    </div>
  );
};
