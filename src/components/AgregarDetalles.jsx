import { useEffect, useRef, useState } from "react";
import "../css/AgregarDetalles.css";
import { TextField, Button } from "@mui/material";

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

  return (
    <fieldset id="agregarDetalles">
      <div id="seccionDescripcion">
        <label htmlFor="bandejaDescripcion">Descripción</label>
        <TextField
          label="Descripción"
          multiline
          rows={4}
          fullWidth
          value={detalles.descripcion}
          onChange={(e) => {
            setDetalles({
              ...detalles,
              descripcion: e.target.value,
            });
          }}
        />
      </div>
      <div id="seccionRecursos">
        <label htmlFor="bandejaRecurso">
          Recursos
          <br />
        </label>
        <TextField
          label="Recurso"
          fullWidth
          value={entradas.recurso}
          onChange={(e) => {
            setEntradas({
              ...entradas,
              recurso: e.target.value,
            });
          }}
        />
        <Button
          variant="contained"
          type="button"
          disabled={!btnRecurso}
          onClick={() => {
            setDetalles({
              ...detalles,
              recursos: [...detalles.recursos, entradas.recurso],
            });

            setEntradas({
              ...entradas,
              recurso: "",
            });
            }}
        >
          Agregar Recurso
        </Button>
      </div>
      <div>
        <label htmlFor="seccionEquipo">Equipo</label>
        <div id="seccionEquipo">
          <div>
            <label htmlFor="bandejaNombre">Nombre: </label>
            <TextField
              label="Nombre"
              value={entradas.nombre}
              onChange={(e) => {
                setEntradas({
                  ...entradas,
                  nombre: e.target.value,
                });
              }}
            />
            <br />
          </div>
          <div>
            <label htmlFor="bandejaRol">Rol: </label>
            <TextField
              label="Rol"
              value={entradas.rol}
              onChange={(e) => {
                setEntradas({
                  ...entradas,
                  rol: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <Button
          variant="contained"
          type="button"
          disabled={!btnIntegrante}
          onClick={() => {
            setDetalles({
              ...detalles,
              equipo: [...detalles.equipo, entradas.nombre],
              roles: [...detalles.roles, entradas.rol],
            });

            setEntradas({
              ...entradas,
              nombre: "",
              rol: "",
            });
          }}
        >
          Agregar Integrante
        </Button>
      </div>
    </fieldset>
  );
};
