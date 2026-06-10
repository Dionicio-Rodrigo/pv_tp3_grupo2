import styled from "@emotion/styled";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import PersonIcon from "@mui/icons-material/Person";
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
    <List
      component={Stack}
      sx={{ p: "0", flexGrow: "1" }}
      direction={{ xs: "row", md: "column" }}
    >
      <NavElemento component={NavLink} to="/">
        <ListItemIcon>
          <HomeIcon sx={{ color: "background.default" }} />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </NavElemento>
      <NavElemento component={NavLink} to="/Proyectos">
        <ListItemIcon>
          <FolderIcon sx={{ color: "background.default" }} />
        </ListItemIcon>
        <ListItemText primary="Proyectos" />
      </NavElemento>
      <NavElemento component={NavLink} to="/Perfil">
        <ListItemIcon>
          <PersonIcon sx={{ color: "background.default" }} />
        </ListItemIcon>
        <ListItemText primary="Mi Perfil" />
      </NavElemento>
    </List>
  );
};
