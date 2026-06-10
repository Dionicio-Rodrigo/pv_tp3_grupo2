import { useEffect } from "react";
import proyectoService from "../services/proyectoServices";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  Button,
  Box,
  Paper,
  Stack,
  Chip,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Fab,
} from "@mui/material";
import { ArrowBack, InsertDriveFile } from "@mui/icons-material";

export const DetalleProyecto = ({}) => {
  const ruta = useParams();
  const proyecto = proyectoService.obtenerDetalles(ruta.id);
  return (
    <Box>
      <Stack spacing={1}>
        <Paper
          component={Stack}
          sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            textShadow: "1px 1px  #292f36",
            p: "1em",
          }}
        >
          <Typography variant="h2">{proyecto.titulo}</Typography>
          <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
            <Chip label={proyecto.categoria} color="secondary" />
            <Chip
              label={proyecto.finalizado ? `Finalizado` : `En Proceso`}
              color="secondary"
            />
          </Stack>
        </Paper>

        <Paper sx={{ p: "1em" }}>
          <Typography variant="h3">Descripción</Typography>
          <Divider sx={{ mt: "1em", mb: "1em" }} />
          <Typography variant="p">{proyecto.detalles.descripcion}</Typography>
        </Paper>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 1, md: 1 }}
        >
          <Paper
            sx={{
              backgroundColor: "colores.rosa",
              flexGrow: "1",
            }}
          >
            <Typography
              sx={{
                color: "colores.blanco",
                m: "0.25em",
                mt: "0.5em",
                textShadow: "1px 1px  #292f36",
              }}
              variant="h3"
            >
              Equipo
            </Typography>
            <Divider />
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: "colores.rosa" }}>
                  <TableRow>
                    <TableCell sx={{ color: "colores.blanco" }} align="center">
                      <Typography variant="h4">Nombre</Typography>
                    </TableCell>
                    <TableCell sx={{ color: "colores.blanco" }} align="center">
                      <Typography variant="h4">Rol</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ bgcolor: "background.default" }}>
                  {proyecto.detalles.equipo.map((nombre, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{nombre}</TableCell>
                      <TableCell align="center">
                        {proyecto.detalles.roles[index]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          <Paper>
            <Typography sx={{ m: "0.25em", mt: "0.7em" }} variant="h3">
              Recursos
            </Typography>
            <List>
              {proyecto.detalles.recursos.map((recurso, index) => (
                <ListItemButton key={index} component="a" href="#">
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={recurso} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Stack>
      </Stack>
      <Fab
        component={Link}
        to="/Proyectos"
        variant="extended"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 35,
          left: 16,
        }}
      >
        <ArrowBack />
        Volver
      </Fab>
    </Box>
  );
};
