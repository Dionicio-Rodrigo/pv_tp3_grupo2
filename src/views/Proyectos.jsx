import { use, useEffect, useRef, useState } from "react";
import { ListaProyectos } from "../components/ListaProyectos.jsx";
import { AgregarProyecto } from "../components/Agregar.jsx";
import proyectoService from "../services/proyectoServices.js";
import { Busqueda } from "../components/Busqueda.jsx";
import { RegistroActividad } from "../components/RegistroActividad.jsx";
import { Box, Drawer, Stack, Fab, Typography, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Proyectos() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [tiempo, setTiempo] = useState(null);
  const nuevoMensaje = useRef("");
  const [activarMensaje, setActivarMensaje] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const buscar = (texto) => {
    if (texto == "") setActivarMensaje(false);
    if (texto != "") setActivarMensaje(true);
    setProyectos(proyectoService.buscarProyecto(texto));
  };
  const agregar = (nuevoProyecto) => {
    nuevoMensaje.current = "Agregado";
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };
  const eliminar = (id) => {
    nuevoMensaje.current = "Eliminado";
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  useEffect(() => {
    setTiempo(new Date());
  }, [nuevoMensaje.current]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Drawer open={abierto} variant="persistent">
        <Busqueda funcion={buscar}> Buscador</Busqueda>
      </Drawer>

      <Stack spacing={2}>
        <Paper>
          <Typography variant="h2">Nuestros Proyectos</Typography>
        </Paper>
        <ListaProyectos lista={proyectos} eliminar={eliminar} />
        {nuevoMensaje.current != "" && !activarMensaje ? (
          <RegistroActividad fecha={tiempo} mensaje={nuevoMensaje.current} />
        ) : (
          <></>
        )}
        <AgregarProyecto funcion={agregar} />
      </Stack>
      <Fab
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        color="success"
        variant="extended"
        onClick={() => {
          setAbierto(true);
        }}
      >
        <SearchIcon />
        Buscar
      </Fab>
    </Box>
  );
}
export default Proyectos;
