import { useEffect, useRef, useState } from "react";
import "../css/Agregar.css";
import { AgregarDetalles } from "./AgregarDetalles";

export const AgregarProyecto = ({ funcion }) => {
  const [nuevoProyecto, setnuevoProyecto] = useState({
    titulo: "",
    categoria: "Taller",
    finalizado: undefined,
    detalles: {
      descripcion: "",
      recursos: [],
      equipo: [],
      roles: [],
    },
  });

  const [invalido, setInvalido] = useState(true);

  const handleActualizar = (detalles) => {
    setnuevoProyecto({ ...nuevoProyecto, detalles: { ...detalles } });
  };

  useEffect(() => {
    if (nuevoProyecto.titulo === "") {
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
    console.log(nuevoProyecto);
    setnuevoProyecto({
      titulo: "",
      categoria: "Taller",
      finalizado: undefined,

      detalles: {
        descripcion: "",
        recursos: [],
        equipo: [],
        roles: [],
      },
    });
  };

  return (
    <div className="AgregarNuevo">
      <h2>Agregar Nuevo Proyecto</h2>
      <form action={() => {}} id="datosEntrada">
        <label>
          Titulo
          <br />
          <input
            type="text"
            placeholder="Título"
            onChange={(e) => {
              setnuevoProyecto({
                ...nuevoProyecto,
                titulo: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Categoria
          <br />
          <select
            onChange={(e) => {
              setnuevoProyecto({
                ...nuevoProyecto,
                categoria: e.target.value,
              });
            }}
          >
            <option value="Taller">Taller</option>
            <option value="Comedor">Comedor</option>
            <option value="Curso">Curso</option>
            <option value="Recaudacion">Recaudación</option>
          </select>
        </label>
        <div>
          Estado
          <br />
          <input
            type="radio"
            name="estado"
            id="finalizado"
            onClick={() => {
              setnuevoProyecto({
                ...nuevoProyecto,
                finalizado: true,
              });
            }}
          />
          <label htmlFor="finalizado">Finalizado</label>
          <input
            type="radio"
            name="estado"
            id="enProceso"
            onClick={() => {
              setnuevoProyecto({
                ...nuevoProyecto,
                finalizado: false,
              });
            }}
          />
          <label htmlFor="enProceso">En Proceso</label>
        </div>
        <AgregarDetalles actualizar={handleActualizar} />
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
