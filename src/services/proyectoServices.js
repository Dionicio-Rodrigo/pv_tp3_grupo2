const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Proyecto1", categoria: "Taller", finalizado: true },
    { id: 2, titulo: "Proyecto2", categoria: "Comedor", finalizado: false },
    { id: 3, titulo: "Proyecto3", categoria: "Curso", finalizado: true },
    { id: 4, titulo: "Proyecto4", categoria: "Taller", finalizado: false },
  ];

  const obtenerProyectos = () => {
    return [...proyectos];
  };

  const borrar = (id) => {
    //El filtrado almacenara todos los elementos que no tengan el id ingresado
    let filtrado = proyectos.filter((p) => p.id != id);
    return [...filtrado];
  };

  const buscarProyecto = (texto) => {
    // El filtrado solo guardara los elementos que tengan
    // al texto como un cadena de string contenida
    let filtrado = proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
    return [...filtrado];
  };

  return { obtenerProyectos, buscarProyecto, borrar };
})();

export default proyectoService;
