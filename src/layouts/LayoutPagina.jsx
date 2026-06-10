import { Header } from "../components/Header.jsx";
import { Nav } from "../components/Nav.jsx";
import { Footer } from "../components/Footer.jsx";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
export const LayoutPagina = () => {
  return (
    <Stack>
      <Box
        component="header"
        sx={{
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          textShadow: "1px 1px  #292f36",
        }}
      >
        <Stack direction={{ sm: "column", md: "row" }}>
          <Header />
          <Nav />
        </Stack>
      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: "backround.default",
          p: "1em",
        }}
      >
        <Outlet />
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "secondary.main",
          color: "primary.contrastText",
          textShadow: "1px 1px  #292f36",
          padding: "0.25em",
        }}
      >
        <Footer />
      </Box>
    </Stack>
  );
};
