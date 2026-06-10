import { Stack, Typography } from "@mui/material";
import { useUser } from "../context/UsuarioContext";

export const Header = () => {
  const { nombre, rol } = useUser().usuario;
  return (
    <Stack sx={{ textAlign: "center" }}>
      <Typography variant="h1">Sinergia Educativa</Typography>
      <Typography variant="subtitle1">{`Bienvenido ${rol == "Estudiante" ? "Alumno/a" : "Profesor/a"} ${nombre}`}</Typography>
    </Stack>
  );
};
