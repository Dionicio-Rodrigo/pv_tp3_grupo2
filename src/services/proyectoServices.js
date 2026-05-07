const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Comedor1", categoria: "Taller", finalizado: true },
    { id: 2, titulo: "Proyecto2", categoria: "Comedor", finalizado: false },
    { id: 3, titulo: "Proyecto3", categoria: "Curso", finalizado: true },
    { id: 4, titulo: "Comedor2", categoria: "Taller", finalizado: false },
  ];

  const obtenerProyectos = () => {
    return [...proyectos];
  };

  const agregarProyecto = (nuevo) => {
    //Creamos un id para el nuevo proyecto
    nuevo.id = proyectos.length + 1;
    proyectos = [...proyectos, nuevo];
    console.log(nuevo);
  };

  const borrarProyecto = (id) => {
    //El filtrado almacenara todos los elementos que no tengan el id ingresado
    proyectos = proyectos.filter((p) => p.id != id);
  };

  const buscarProyecto = (texto, act_proyectos) => {
    // El filtrado solo guardara los elementos que tengan
    // al texto como un cadena de string contenida
    let filtrado = act_proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
    return [...filtrado];
  };

  return { obtenerProyectos, buscarProyecto, borrarProyecto, agregarProyecto };
})();

export default proyectoService;
