import { Header } from "../components/Header.jsx";
import { Nav } from "../components/Nav.jsx";
import { Footer } from "../components/Footer.jsx";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
export const LayoutPagina = () => {
  return (
    <Grid
      container
      sx={{
        display: "grid",
        minHeight: "100vh",
        gridTemplateColumns: "1fr 1fr 300px",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateAreas: `
          "header header nav"
          "main   main   main"
          "footer footer footer"
        `,
      }}
    >
      <Grid
        component="header"
        sx={{ gridArea: "header", textAlign: "center", alignContent: "center" }}
      >
        <Header />
      </Grid>
      <Grid component="nav" sx={{ gridArea: "nav" }}>
        <Nav />
      </Grid>
      <Grid component="main" sx={{ gridArea: "main" }}>
        <Outlet />
      </Grid>
      <Grid component="footer" sx={{ gridArea: "footer" }}>
        <Footer />
      </Grid>
    </Grid>
  );
};
