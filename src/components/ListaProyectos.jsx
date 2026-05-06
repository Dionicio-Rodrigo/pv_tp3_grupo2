import { useState } from "react";
import proyectoService from "../services/proyectoServices.js";

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );

  const mandar = (e) => {
    setProyectos(proyectoService.filtrar(e.target.value));
  };
  return (
    <div className="contenedor">
      {proyectos.map((proyecto) => (
        <div id={`carta${proyecto.id}`} className="card">
          <h1>{proyecto.titulo}</h1>
          <h3>{proyecto.categoria}</h3>
          <p>{proyecto.finalizado == true ? "Finalizado" : "En Proceso"}</p>
        </div>
      ))}
      <label>
        Busqueda:
        <input type="text" onChange={mandar} />
      </label>
    </div>
  );
}
export default ListaProyectos;
