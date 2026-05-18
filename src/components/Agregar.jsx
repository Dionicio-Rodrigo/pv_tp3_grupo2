import { useEffect, useRef, useState } from "react";
import "../css/Agregar.css";

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
        <div id="agregarDetalles">
          <label>
            Descripción
            <br />
            <textarea
              placeholder="Descripción del proyecto"
              onChange={(e) => {
                setnuevoProyecto({
                  ...nuevoProyecto,

                  detalles: {
                    ...nuevoProyecto.detalles,
                    descripcion: e.target.value,
                  },
                });
              }}
            />
          </label>

          <label>
            Recursos
            <br />
            <input
              type="text"
              placeholder="PDF, Drive, GitHub"
              onChange={(e) => {
                setnuevoProyecto({
                  ...nuevoProyecto,

                  detalles: {
                    ...nuevoProyecto.detalles,

                    recursos: e.target.value.split(","),
                  },
                });
              }}
            />
          </label>

          <label>
            Integrante
            <br />
            <input
              type="text"
              placeholder="Nombre"
              onChange={(e) => {
                setnuevoProyecto({
                  ...nuevoProyecto,

                  detalles: {
                    ...nuevoProyecto.detalles,

                    equipo: [e.target.value],
                  },
                });
              }}
            />
          </label>

          <label>
            Rol
            <br />
            <input
              type="text"
              placeholder="Rol"
              onChange={(e) => {
                setnuevoProyecto({
                  ...nuevoProyecto,

                  detalles: {
                    ...nuevoProyecto.detalles,

                    roles: [e.target.value],
                  },
                });
              }}
            />
          </label>
        </div>
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
