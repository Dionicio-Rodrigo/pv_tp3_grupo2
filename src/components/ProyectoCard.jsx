
import { NavLink } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

export const ProyectoCard = ({ proyecto, eliminar }) => {
  const { titulo, categoria, finalizado, id } = proyecto;

  return (
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
};
