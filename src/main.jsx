import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./layouts/Theme.jsx";
import { UsuarioProvider } from "./context/UsuarioContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </ThemeProvider>
  </StrictMode>,
);
