const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Sistema de Riego Automatizados",
      categoria: "Taller",
      finalizado: true,
    },
    { id: 2, titulo: "Taller de SQL", categoria: "Taller", finalizado: false },
    {
      id: 3,
      titulo: "Nutrición con Energía",
      categoria: "Comedor",
      finalizado: false,
    },
    {
      id: 4,
      titulo: "Probabilidad en Acción",
      categoria: "Recaudación",
      finalizado: true,
    },
    {
      id: 5,
      titulo: "Impresion 3D y Prototipado Rápido",
      categoria: "Curso",
      finalizado: false,
    },
  ];

  const obtenerProyectos = () => {
    return [...proyectos];
  };

  const agregar = (nuevoProyecto) => {
    const nuevo = { id: proyectos.at(-1).id + 1, ...nuevoProyecto };
    proyectos = [...proyectos, nuevo];
  };

  const filtrar = (texto) => {
    let filtrado = proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
    return filtrado;
  };

  const eliminar = (id) => {
    proyectos = proyectos.filter((p) => p.id !== id);
  };

  return { obtenerProyectos, filtrar, eliminar, agregar };
})();

export default proyectoService;
