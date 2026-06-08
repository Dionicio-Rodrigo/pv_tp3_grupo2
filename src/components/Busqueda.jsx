import { Search } from "@mui/icons-material";
import { Box, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const Busqueda = ({ children, funcion }) => {
  const handleFuncion = (entrada) => {
    funcion(entrada.target.value);
  };
  return (
    <Stack
      component={Paper}
      direction="row"
      sx={{
        alignItems: "center",
        pl: "0.9em",
        pb: "1px",
        pr: "1px",
        bgcolor: "colores.naranja",
      }}
      spacing={1}
    >
      <Search color="secondary" />
      <Paper sx={{ bgcolor: "background.default" }}>
        <TextField
          color="error"
          onChange={handleFuncion}
          label="Buscador"
          sx={{
            "& .MuiOutlinedInput-root": {
              boxShadow: "none",
              "& fieldset": { boxShadow: "none" },
            },
          }}
        />
      </Paper>
    </Stack>
  );
};
