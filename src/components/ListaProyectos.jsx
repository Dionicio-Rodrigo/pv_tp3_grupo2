import { useState } from "react";
import proyectoService from "../services/proyectoServices.js";
import { AgregarProyecto } from "./Agregar.jsx";
import { Busqueda } from "./Busqueda.jsx";
import { Borrado} from "./Eliminar.jsx";

export const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );

  const agregar = (proyecto) => {
    setProyectos(proyectoService.agregar(proyecto));
  };

  const mandar = (texto) => {
    setProyectos(proyectoService.filtrar(texto));
  };

  const eliminar = (id) => {
    setProyectos(proyectoService.eliminar(id));
  };

  return (
    <div className="contenedor">
      <AgregarProyecto funcion={agregar} /> 
      {/*Busqueda puede recibir una funcion cualquiera*/
      /*Busqueda llamara a esa funcion cuando cambie */}
      <Busqueda funcion={mandar}> Buscar:</Busqueda>
      {proyectos.map((proyecto) => (
        <div id={`carta${proyecto.id}`} className="card">
          <h1>{proyecto.titulo}</h1>
          <h3>{proyecto.categoria}</h3>
          <p>{proyecto.finalizado == true ? "Finalizado" : "En Proceso"}</p>
          <Borrado funcion={eliminar} id={proyecto.id}/>
        </div>
      ))}
    </div>
  );
};
