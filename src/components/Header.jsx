import { Box, Typography } from "@mui/material";
import { useUser } from "../context/UsuarioContext";

export const Header = () => {
  const { nombre, rol } = useUser().usuario;
  return (
    <Box
      sx={{
        textAlign: "center",
        alignSelf: "center",
        flexGrow: "2",
        pt: "1em",
        pb: "1em",
      }}
    >
      <Typography variant="h1">Sinergia Educativa</Typography>
      <Typography variant="subtitle1">{`Bienvenido ${rol == "Estudiante" ? "Alumno/a" : "Profesor/a"} ${nombre}`}</Typography>
    </Box>
  );
};
