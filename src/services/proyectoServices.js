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

  const agregar = (nuevoProyecto) => {
    const nuevo = { id: Date.now(), ...nuevoProyecto };
    proyectos = [...proyectos, nuevo];
    return [...proyectos];
  };

  const filtrar = (texto) => {
    let filtrado = proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
    return filtrado;
  };

  const eliminar = (id) => {
    proyectos = proyectos.filter((p) => p.id !== id);
    return [...proyectos];
  }

  return { obtenerProyectos, filtrar, eliminar, agregar };
})();

export default proyectoService;
