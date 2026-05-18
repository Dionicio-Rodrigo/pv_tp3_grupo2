import { DetalleProyecto } from "./DetalleProyecto";

export const ProyectoCard = ({ proyecto, eliminar, detalles }) => {
  const { titulo, categoria, finalizado, id } = proyecto;

  return (
    <div className="card">
      <h2>{titulo}</h2>

      <div className="categoria-estado">
        <h3>{categoria}</h3>

        <span className={`estado-${finalizado ? "finalizado" : "enProceso"}`}>
          {finalizado ? "Finalizado" : "En Proceso"}
        </span>
      </div>

      <button className="btn-borrar" onClick={() => eliminar(id)}>
        Eliminar Proyecto
      </button>
      <button className="btn-detalles" onClick={() => detalles(id)}>
        Ver Detalles
      </button>
    </div>
  );
};
