import { useEffect, useRef, useState } from "react";
import { TextField, Button, Stack, Box, Typography } from "@mui/material";

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
    <Stack spacing={2}>
      <Box>
        <TextField
          label="Descripción"
          multiline="true"
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
      </Box>

      <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
        <Box component={Stack} sx={{ flexGrow: "1" }}>
          <Box component={Typography} variant="h4">
            Nuevo Recurso
          </Box>
          <TextField
            label="Recurso"
            fullWidth
            multiline="true"
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
            sx={{ margin: "1em", alignSelf: "center" }}
          >
            Agregar Recurso
          </Button>
        </Box>

        <Box component={Stack}>
          <Box component={Typography} variant="h4">
            Nuevo Integrante
          </Box>
          <Box
            component={Stack}
            direction="row"
            sx={{ justifyContent: "center" }}
            spacing={2}
          >
            <Box>
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
            </Box>
            <Box>
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
            </Box>
          </Box>
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
            sx={{ margin: "1em", alignSelf: "center" }}
          >
            Agregar Integrante
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};
