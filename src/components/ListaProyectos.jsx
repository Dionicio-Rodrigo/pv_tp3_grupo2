export const ListaProyectos = ({ lista, funcion }) => {
  const handleFuncion = (id) => {
    funcion(id);
  };

  return (
    <section className="contenedor-cartas">
      {lista.map((proyecto) => (
        <div key={proyecto.id} id={`carta-${proyecto.id}`} className="carta">
          <h2>{proyecto.titulo}</h2>
          <article>
            <h3> Categoria: {proyecto.categoria}</h3>
            <p>
              Estado:{" "}
              {proyecto.finalizado == true ? "Finalizado" : "En Proceso"}
            </p>
          </article>
          <button
            id="btnEliminar"
            onClick={() => {
              handleFuncion(proyecto.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </section>
  );
};
