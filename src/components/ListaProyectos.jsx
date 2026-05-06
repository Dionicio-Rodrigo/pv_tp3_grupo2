import { useState } from "react";
import proyectoService from "../services/proyectoServices.js";
import { Busqueda } from "./Busqueda.jsx";

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const mandar = (texto) => {
    setProyectos(proyectoService.filtrar(texto));
  };

  return (
    <div className="contenedor">
      //Busqueda puede recibir una funcion cualquiera //Busqueda llamara a esa
      funcion cuando cambie
      <Busqueda funcion={mandar}> Buscar:</Busqueda>
      {proyectos.map((proyecto) => (
        <div id={`carta${proyecto.id}`} className="card">
          <h1>{proyecto.titulo}</h1>
          <h3>{proyecto.categoria}</h3>
          <p>{proyecto.finalizado == true ? "Finalizado" : "En Proceso"}</p>
        </div>
      ))}
    </div>
  );
}
export default ListaProyectos;
