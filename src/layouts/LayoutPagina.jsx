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
        sx={{
          gridArea: "header",
          alignContent: "center",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          textShadow: "1px 1px  #292f36",
        }}
      >
        <Header />
      </Grid>
      <Grid
        component="nav"
        sx={{
          gridArea: "nav",
        }}
      >
        <Nav />
      </Grid>
      <Grid
        component="main"
        sx={{
          gridArea: "main",
          backgroundColor: "backround.default",
          p: "1em",
        }}
      >
        <Outlet />
      </Grid>
      <Grid
        component="footer"
        sx={{
          gridArea: "footer",
          backgroundColor: "secondary.main",
          color: "primary.contrastText",
          textShadow: "1px 1px  #292f36",
          padding: "0.25em",
        }}
      >
        <Footer />
      </Grid>
    </Grid>
  );
};
