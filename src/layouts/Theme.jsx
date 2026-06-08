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
    success: { main: CELESTE, contrastText: BLANCO },
    warning: { main: ROSA, contrastText: BLANCO },
    background: { default: BLANCO, paper: GRIS },
    colores: {
      naranja: NARANJA,
      negro: NEGRO,
      celeste: CELESTE,
      blanco: BLANCO,
      gris: GRIS,
      rosa: ROSA,
    },
  },
  typography: {
    fontFamily: `"Arial", "Helvetica", "sans-serif"`,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      textAlign: "center",
    },
    h2: {
      fontSize: "2em",
      margin: "0.35em",
      fontWeight: 600,
      textAlign: "center",
    },
    h3: {
      fontSize: "1.75em",
      margin: "0.25em",
      fontWeight: 500,
      textAlign: "center",
    },
    h4: {
      fontSize: "1.25em",
      margin: "0.25em",
      fontWeight: 400,
      textAlign: "center",
    },
  },
});

export default Theme;
