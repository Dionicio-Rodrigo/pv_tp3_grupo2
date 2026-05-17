export const ProyectoCard = ({ proyecto, funcion }) => {

  const { titulo, categoria, finalizado, id } = proyecto;

  return (
    <div className="card">

      <h2>{titulo}</h2>

      <div className="categoria-estado">

        <h3>{categoria}</h3>

        <span
          className={`estado-${finalizado ? "finalizado" : "enProceso"}`}
        >
          {finalizado ? "Finalizado" : "En Proceso"}
        </span>

      </div>

      <button
        className="btn-borrar"
        onClick={() => funcion(id)}
      >
        Eliminar Proyecto
      </button>

    </div>
  );
};