import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <List sx={{ p: "0" }}>
      <ListItemButton
        component={NavLink}
        to="/"
        end
        sx={{ pt: "0.25em", pb: "0.25em" }}
      >
        <ListItemText primary="Inicio" />
      </ListItemButton>
      <ListItemButton
        component={NavLink}
        to="/Proyectos"
        sx={{ pt: "0.25em", pb: "0.25em" }}
      >
        <ListItemText primary="Proyectos" />
      </ListItemButton>
      <ListItemButton
        component={NavLink}
        to="/Perfil"
        sx={{ pt: "0.25em", pb: "0.25em" }}
      >
        <ListItemText primary="Mi Perfil" />
      </ListItemButton>
    </List>
  );
};
