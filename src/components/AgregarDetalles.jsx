import { useEffect, useRef, useState } from "react";
import "../css/AgregarDetalles.css";

export const AgregarDetalles = ({ actualizar }) => {
  const [detalles, setDetalles] = useState({
    descripcion: "",
    recursos: [],
    equipo: [],
    roles: [],
  });

  const [entradas, setEntradas] = useState({
    recurso: "",
    nombre: "",
    rol: "",
  });
  const [btnRecurso, setBtnRecurso] = useState(false);
  const [btnIntegrante, setBtnIntegrante] = useState(false);

  useEffect(() => {
    actualizar(detalles);
  }, [detalles]);

  useEffect(() => {
    if (entradas.recurso != "") setBtnRecurso(true);
    else setBtnRecurso(false);

    if (entradas.nombre != "" && entradas.rol != "") setBtnIntegrante(true);
    else setBtnIntegrante(false);
  }, [entradas]);

  console.log(entradas);

  return (
    <fieldset id="agregarDetalles">
      <div id="seccionDescripcion">
        <label htmlFor="bandejaDescripcion">Descripción</label>
        <textarea
          placeholder="Descripción del proyecto"
          id="bandejaDescripcion"
          name="descripcion"
          value={detalles.descripcion}
          onInput={(e) => {
            setDetalles({ ...detalles, descripcion: e.target.value });
          }}
        />
      </div>
      <div id="seccionRecursos">
        <label htmlFor="bandejaRecurso">
          Recursos
          {detalles.recursos.length > 0 ? `: ${detalles.recursos.length}` : ``}
          <br />
        </label>
        <input
          type="text"
          id="bandejaRecurso"
          className="bandejaDetalles"
          placeholder="PDF, Drive, GitHub"
          name="recurso"
          value={entradas.recurso}
          onChange={(e) => {
            setEntradas({ ...entradas, recurso: e.target.value });
          }}
        />
        <button
          className="btnAgregarDetalles"
          type="button"
          disabled={!btnRecurso}
          onClick={() => {
            setDetalles({
              ...detalles,
              recursos: [...detalles.recursos, entradas.recurso],
            });
            setEntradas({ ...entradas, recurso: "" });
          }}
        >
          Agregar Recurso
        </button>
      </div>
      <div>
        <label htmlFor="seccionEquipo">
          {detalles.equipo.length > 0
            ? `Integrantes: ${detalles.equipo.length}`
            : `Equipo`}
        </label>
        <div id="seccionEquipo">
          <div>
            <label htmlFor="bandejaNombre">Nombre: </label>
            <input
              type="text"
              placeholder="Nombre"
              id="bandejaNombre"
              className="bandejaDetalles"
              name="nombre"
              value={entradas.nombre}
              onChange={(e) => {
                setEntradas({ ...entradas, nombre: e.target.value });
              }}
            />
            <br />
          </div>
          <div>
            <label htmlFor="bandejaRol">Rol: </label>
            <input
              type="text"
              id="bandejaRol"
              className="bandejaDetalles"
              placeholder="Rol"
              name="rol"
              value={entradas.rol}
              onChange={(e) => {
                setEntradas({ ...entradas, rol: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          type="button"
          className="btnAgregarDetalles"
          disabled={!btnIntegrante}
          onClick={() => {
            setDetalles({
              ...detalles,
              equipo: [...detalles.equipo, entradas.nombre],
              roles: [...detalles.roles, entradas.rol],
            });
            setEntradas({ ...entradas, nombre: "", rol: "" });
          }}
        >
          Agregar Integrante
        </button>
      </div>
    </fieldset>
  );
};
