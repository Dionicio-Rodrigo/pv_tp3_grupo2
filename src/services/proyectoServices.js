const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Proyecto1", categoria: "Taller", finalizado: true },
    { id: 2, titulo: "Proyecto2", categoria: "Comedor", finalizado: false },
    { id: 3, titulo: "Proyecto3", categoria: "Curso", finalizado: true },
    { id: 1, titulo: "Proyecto4", categoria: "Taller", finalizado: false },
  ];

  const obtenerProyectos = () => {
    return [...proyectos];
  };

  const filtrar = (texto) => {
    let filtrado = proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
    return filtrado;
  };

  return { obtenerProyectos, filtrar };
})();

export default proyectoService;
