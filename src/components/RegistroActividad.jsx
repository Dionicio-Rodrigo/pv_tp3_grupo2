import { Alert } from "@mui/material";

export const RegistroActividad = ({ tiempo, mensaje }) => {
  return (
    <Alert
      severity={mensaje == "Agregado" ? "success" : "warning"}
      variant="filled"
      sx={{ color: "colores.blanco", textShadow: "1px 1px  #292f36" }}
    >
      Ultima actualización de la Lista a las: {``}
      {new Intl.DateTimeFormat("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(tiempo)}
      {` `} del {` `}
      {new Intl.DateTimeFormat("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(tiempo)}
    </Alert>
  );
};
