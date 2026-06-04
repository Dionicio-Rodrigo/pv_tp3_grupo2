import React from "react";
import { Grid, Container} from "@mui/material";
import { ProyectoCard } from "./ProyectoCard.jsx";

export const ListaProyectos = ({ lista, eliminar, detalles }) => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {lista.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4}>
        <ProyectoCard
          key={proyecto.id}
          proyecto={proyecto}
          eliminar={eliminar}
        />
        </Grid>
      ))}
    </Grid>
   </Container>   
  );
};
