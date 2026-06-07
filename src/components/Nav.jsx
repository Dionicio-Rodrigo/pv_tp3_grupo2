import styled from "@emotion/styled";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const NavElemento = styled(ListItemButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  paddingBottom: "0.25em",
  paddingTop: "0.25em",
  "&:hover": { backgroundColor: theme.palette.primary.main },
  "&.active": { backgroundColor: theme.palette.primary.main },
  "& .MuiListItemText-primary": {
    color: theme.palette.primary.contrastText,
    textShadow: `1px 1px ${theme.palette.secondary.main}`,
  },
}));

export const Nav = () => {
  return (
    <List sx={{ p: "0" }}>
      <NavElemento component={NavLink} to="/">
        <ListItemText primary="Inicio" />
      </NavElemento>
      <NavElemento component={NavLink} to="/Proyectos">
        <ListItemText primary="Proyectos" />
      </NavElemento>
      <NavElemento component={NavLink} to="/Perfil">
        <ListItemText primary="Mi Perfil" />
      </NavElemento>
    </List>
  );
};
