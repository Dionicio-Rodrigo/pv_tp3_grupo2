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
  Box,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

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
    <Stack spacing={1} direction={{ sm: "column", md: "row" }}>
      <Box sx={{ flexGrow: "2" }}>
        <Accordion
          sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h3" sx={{ textShadow: "1px 1px  #292f36" }}>
              Agregar Nuevo Proyecto
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ bgcolor: "background.default", color: "secondary.main" }}
          >
            <Stack
              spacing={3}
              component="form"
              action={() => {}}
              id="datosEntrada"
            >
              <TextField
                label="Título"
                onChange={(e) => {
                  setnuevoProyecto({
                    ...nuevoProyecto,
                    titulo: e.target.value,
                  });
                }}
              />

              <Stack
                spacing={{ sm: 2, md: 3 }}
                direction={{ sm: "column", md: "row" }}
              >
                <FormControl sx={{ flexGrow: "1" }}>
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
                    <MenuItem value="Recaudacion">Recaudación</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ flexGrow: "1", alignSelf: "center" }}>
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
                </Box>
              </Stack>
              <Button
                variant="contained"
                onClick={handlefuncion}
                disabled={invalido}
                sx={{ alignSelf: "center" }}
              >
                Agregar Proyecto
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ flexGrow: "3" }}>
        <Accordion
          sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h3" sx={{ textShadow: "1px 1px  #292f36" }}>
              Agregar Detalles al Nuevo Proyecto
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ bgcolor: "background.default", color: "secondary.main" }}
          >
            <Box component={Stack}>
              <AgregarDetalles actualizar={handleActualizar} />

              <Box
                sx={{ alignSelf: "center", textShadow: "1px 1px  #292f36" }}
                component={Stack}
                spacing={3}
                direction="row"
              >
                <Chip
                  label={`Recursos Añadidos:${
                    nuevoProyecto.detalles.recursos.length > 0
                      ? ` ${nuevoProyecto.detalles.recursos.length}`
                      : ` 0 `
                  }`}
                  color="success"
                />

                <Chip
                  label={`Integrantes Añadidos:${
                    nuevoProyecto.detalles.equipo.length > 0
                      ? ` ${nuevoProyecto.detalles.equipo.length}`
                      : ` 0 `
                  }`}
                  color="warning"
                />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
};
