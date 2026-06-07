<<<<<<< HEAD

=======
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  useTheme,
} from "@mui/material";
>>>>>>> ee960c973a1c609d2b44c6dfdff86e0c363bed24
import { NavLink } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Carta = styled(Card)(({ theme }) => ({
  flexGrow: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  maxWidth: "50vw",
  padding: "1em",
}));
export const ProyectoCard = ({ proyecto, eliminar }) => {
  const { titulo, categoria, finalizado, id } = proyecto;
  const theme = useTheme();

  return (
<<<<<<< HEAD
  <Card sx={{ margin: 2 }}>
    <CardContent>
      <Typography variant="h5">
        {titulo}
      </Typography>

      <Typography variant="body1">
        {categoria}
      </Typography>

      <Typography variant="body2">
        {finalizado ? "Finalizado" : "En Proceso"}
      </Typography>

      <Button
        variant="contained"
        onClick={() => eliminar(id)}
        sx={{ mr: 1 }}
      >
        Eliminar Proyecto
      </Button>

      <Button
        variant="outlined"
        component={NavLink}
        to={`/Proyectos/${id}`}
      >
        Ver detalles
      </Button>
    </CardContent>
  </Card>
);
=======
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
        ></CardHeader>

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
>>>>>>> ee960c973a1c609d2b44c6dfdff86e0c363bed24
};
