import { use, useEffect, useRef, useState } from "react";
import { ListaProyectos } from "../components/ListaProyectos.jsx";
import { AgregarProyecto } from "../components/Agregar.jsx";
import proyectoService from "../services/proyectoServices.js";
import { Busqueda } from "../components/Busqueda.jsx";
import { DetalleProyecto } from "../components/DetalleProyecto.jsx";
import { RegistroActividad } from "../components/RegistroActividad.jsx";
import { Grid } from "@mui/material";

function Proyectos() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [idDetalles, setIdDetalles] = useState(1);
  const [tiempo, setTiempo] = useState(null);
  const nuevoMensaje = useRef("");
  const [activarMensaje, setActivarMensaje] = useState(false);

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
    <Grid container id="proyectos">
      <Grid component="aside" size={2}>
        <Busqueda funcion={buscar}> Buscador</Busqueda>
      </Grid>
      <Grid component="section" size={10}>
        <h1>Nuestros Proyectos</h1>

        <ListaProyectos lista={proyectos} eliminar={eliminar} />
        {nuevoMensaje.current != "" && !activarMensaje ? (
          <RegistroActividad fecha={tiempo} mensaje={nuevoMensaje.current} />
        ) : (
          <></>
        )}
        <AgregarProyecto funcion={agregar} />
      </Grid>
    </Grid>
  );
}
export default Proyectos;
