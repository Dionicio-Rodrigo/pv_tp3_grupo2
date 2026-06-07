import { useEffect } from "react";
import proyectoService from "../services/proyectoServices";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export const DetalleProyecto = ({}) => {
  const ruta = useParams();
  const proyecto = proyectoService.obtenerDetalles(ruta.id);
  return (
    <section className="main-detalles">
      <Button component={NavLink} to="/Proyectos" variant="contained">
        Volver
      </Button>
      <section className="encabezado_pr">
        <h1>{proyecto.titulo}</h1>
        <span
          className={`estado-${proyecto.finalizado ? "finalizado" : "enProceso"}`}
        >
          {proyecto.finalizado ? `Finalizado` : `En Proceso`}
        </span>
      </section>

      <section className="descripcion">
        <h2>Descripción</h2>
        <p>{proyecto.detalles.descripcion}</p>
      </section>

      <section className="recursos">
        <h2>Recursos</h2>
        <ul>
          {proyecto.detalles.recursos.map((recurso, index) => (
            <li key={index}>
              <a href="#">{recurso}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="equipo">
        <h2>Equipo</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {proyecto.detalles.equipo.map((nombre, index) => (
              <tr key={index}>
                <td>{nombre}</td>
                <td>{proyecto.detalles.roles[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};
