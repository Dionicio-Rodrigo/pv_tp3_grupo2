import { colors, createTheme } from "@mui/material";
//Aca van los colores y estilos básicos de toda la pagina
const NARANJA = "#dc9e82";
const NEGRO = "#292f36";
const CELESTE = "#5ea4eb";
const BLANCO = "#f7fff7";
const GRIS = "#d6dbe0";
const ROSA = "#eb5ea5";

const Theme = createTheme({
  palette: {
    primary: { main: CELESTE, contrastText: BLANCO },
    secondary: { main: NEGRO, contrastText: BLANCO },
  },
  typography: { fontFamily: `"Arial", "Helvetica", "sans-serif` },
});

export default Theme;
