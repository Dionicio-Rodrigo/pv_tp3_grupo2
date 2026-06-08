import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Carta = styled(Card)(({ theme }) => ({
  flexGrow: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  padding: "1em",
}));

export const ProyectoCard = ({ proyecto, eliminar }) => {
  const { titulo, categoria, finalizado, id } = proyecto;
  const theme = useTheme();

  return (
    <Carta>
      <CardContent sx={{ paddingTop: "0" }}>
        <CardHeader
          title={titulo}
          sx={{
            pb: 0,
            padding: "12px",
            fontSize: "1.5em",
            textAlign: "center",
          }}
        />

        <Stack
          direction="row"
          sx={{ justifyContent: "space-evenly", alignItems: "center" }}
          spacing={2}
        >
          <h3>{categoria}</h3>

          <Box
            sx={{
              backgroundColor: `${finalizado ? "colores.rosa" : "colores.celeste"}`,
              padding: "0.5em",
              color: "colores.blanco",
              textShadow: `1px 1px ${theme.palette.colores.negro}`,
              borderRadius: "6px",
            }}
          >
            {finalizado ? "Finalizado" : "En Proceso"}
          </Box>
        </Stack>
      </CardContent>

      <Stack direction="row" spacing={4} sx={{ alignSelf: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => eliminar(id)}
        >
          Eliminar Proyecto
        </Button>

        <Button component={NavLink} variant="outlined" to={`/Proyectos/${id}`}>
          Ver Detalles
        </Button>
      </Stack>
    </Carta>
  );
};
