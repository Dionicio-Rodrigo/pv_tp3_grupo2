import { useEffect } from "react";
import proyectoService from "../services/proyectoServices";
export const DetalleProyecto = ({ idProyecto, onCambiarPagina }) => {
  const proyecto = proyectoService.obtenerDetalles(idProyecto);
  return (
    <section>
      <button
        onClick={() => {
          onCambiarPagina(true);
        }}
      >
        Volver
      </button>

      <article className="encabezado_pr">
        <h2>{proyecto.titulo}</h2>
        <span
          className={`estado-${proyecto.finalizado ? "finalizado" : "enProceso"}`}
        >
          {proyecto.finalizado ? `Finalizado` : `En Proceso`}
        </span>
      </article>

      <article className="descripcion">
        <h2>Descripción</h2>
        <p>{proyecto.detalles.descripcion}</p>
      </article>

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
