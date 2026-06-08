import { useEffect, useState } from "react";
import { AgregarDetalles } from "./AgregarDetalles";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

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

    if (nuevoProyecto.finalizado === undefined) {
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
          <TextField
            label="Título"
            fullWidth
            onChange={(e) => {
              setnuevoProyecto({
                ...nuevoProyecto,
                titulo: e.target.value,
              });
            }}
          />
        </label>

        <FormControl fullWidth>
          <InputLabel>Categoría</InputLabel>

          <Select
            value={nuevoProyecto.categoria}
            label="Categoría"
            onChange={(e) => {
              setnuevoProyecto({
                ...nuevoProyecto,
                categoria: e.target.value,
              });
            }}
          >
           <MenuItem value="Taller">Taller</MenuItem>
           <MenuItem value="Comedor">Comedor</MenuItem>
           <MenuItem value="Curso">Curso</MenuItem>
           <MenuItem value="Recaudacion">
             Recaudación
           </MenuItem>
          </Select>
        </FormControl>
        <div>
          Estado
          <br />
          <RadioGroup
            onChange={(e) => {
              setnuevoProyecto({
                ...nuevoProyecto,
                finalizado: e.target.value === "true",
              });
            }}
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="Finalizado"
            />

            <FormControlLabel
              value="false"
              control={<Radio />}
              label="En Proceso"
            />
          </RadioGroup>
        </div>
      </form>
      <Button
        variant="contained"
        onClick={handlefuncion}
        disabled={invalido}
      >
        Agregar Proyecto
      </Button>
      <div id="detalles">
        <h3>Agregar Detalles</h3>
        <AgregarDetalles actualizar={handleActualizar} />
        <div id="cantidades">
          <span id="recursos">
            Recursos Añadidos:
            {nuevoProyecto.detalles.recursos.length > 0
              ? ` ${nuevoProyecto.detalles.recursos.length}`
              : ` 0 `}
          </span>
          <span id="equipo">
            Integrantes Añadido:
            {nuevoProyecto.detalles.equipo.length > 0
              ? ` ${nuevoProyecto.detalles.equipo.length}`
              : ` 0 `}
          </span>
        </div>
      </div>
    </div>
  );
};
