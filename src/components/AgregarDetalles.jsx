import { useEffect, useRef, useState } from "react";

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
      <div>
        <label>
          Descripción
          <br />
          <textarea
            placeholder="Descripción del proyecto"
            name="descripcion"
            value={detalles.descripcion}
            onInput={(e) => {
              setDetalles({ ...detalles, descripcion: e.target.value });
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Recursos
          {detalles.recursos.length > 0 ? `: ${detalles.recursos.length}` : ``}
          <br />
          <input
            type="text"
            placeholder="PDF, Drive, GitHub"
            name="recurso"
            value={entradas.recurso}
            onChange={(e) => {
              setEntradas({ ...entradas, recurso: e.target.value });
            }}
          />
        </label>
        <button
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
          Prueba
        </button>
      </div>
      <div>
        <label>
          Integrante
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={entradas.nombre}
            onChange={(e) => {
              setEntradas({ ...entradas, nombre: e.target.value });
            }}
          />
        </label>
        <label>
          Rol
          <input
            type="text"
            placeholder="Rol"
            name="rol"
            value={entradas.rol}
            onChange={(e) => {
              setEntradas({ ...entradas, rol: e.target.value });
            }}
          />
        </label>
        <button
          type="button"
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
          Prueba
        </button>
      </div>
    </fieldset>
  );
};
