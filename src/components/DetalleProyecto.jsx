export const DetalleProyecto = ({ proyecto }) => {

  if (!proyecto) {
    return <h2>No hay proyecto</h2>;
  }

  return (
    <div className="card">

      <h1>{proyecto.titulo}</h1>

      <h3>{proyecto.categoria}</h3>

      <p>
        Estado:
        {proyecto.finalizado ? " Finalizado" : " En Proceso"}
      </p>

    </div>
  );
};