import React from "react";
import { Stack } from "@mui/material";
import { ProyectoCard } from "./ProyectoCard.jsx";

export const ListaProyectos = ({ lista, eliminar, detalles }) => {
  return (
    <Stack
      direction="row"
      useFlexGap
      spacing={{ xs: 1, sm: 2 }}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {lista.map((proyecto) => (
        <ProyectoCard
          key={proyecto.id}
          eliminar={eliminar}
          proyecto={proyecto}
        />
      ))}
    </Stack>
  );
};
