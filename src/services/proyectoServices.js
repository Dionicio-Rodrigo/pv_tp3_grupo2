const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Sistema de Riego Automatizados",
      categoria: "Taller",
      finalizado: true,
      detalles: {
        descripcion: `Este proyecto consiste en el desarrollo de un prototipo funcional de
          sistema de riego automatizado para huertas comunitarias, utilizando
          sensores de humedad del suelo y microcontroladores de código abierto
          como Arduino. El objetivo principal es optimizar el uso del agua en
          zonas de escasos recursos, permitiendo que el sistema tome decisiones
          de riego de forma autónoma según las condiciones reales del terreno.`,
        recursos: [
          `Esquema de conexión del prototipo (PDF)`,
          `Código fuente en GitHub`,
          `Informe final del proyecto (Drive)`,
          `Registro fotográfico de pruebas de campo (Drive)`,
        ],
        equipo: [
          `Valentina Alejandra Flores`,
          `Emilio Quispe`,
          `Brenda Tolaba`,
        ],
        roles: [
          `Coordinadora del proyecto`,
          `Desarrollo de hardware`,
          `Programación del microcontrolador`,
        ],
      },
    },
    {
      id: 2,
      titulo: "Taller de SQL",
      categoria: "Taller",
      finalizado: false,
      detalles: {
        descripcion: `El Taller de SQL es un proyecto educativo orientado a estudiantes de
          la Facultad de Ingeniería que deseen fortalecer sus habilidades en el
          manejo de bases de datos relacionales. Un espacio práctico donde
          aprenderás a diseñar, crear y consultar bases de datos desde cero,
          con enfoque en cómo estructurar la información de manera lógica y
          cómo extraer datos valiosos usando comandos como SELECT, JOIN y
          GROUP BY para tomar decisiones basadas en datos reales.`,
        recursos: [
          `Guía de ejercicios SQL - Nivel Inicial (PDF)`,
          `Repositorio del proyecto en GitHub`,
          `Material de apoyo en Google Drive`,
          `Grabaciones de las clases (Drive)`,
        ],
        equipo: [
          `Lucas Lautaro Mamani`,
          `Lucas Dario Joaquin Mamani`,
          `Rodrigo Ezequiel Dionicio`,
          `Rita Melina Cruz Benavidez`,
          `Leonel Maximiliano Aramayo Estrada`,
        ],
        roles: [
          `Desarrollo Técnico`,
          `Alumno`,
          `Administración de Repositorios`,
          `Tutoría Académica`,
          `Gestión de Contenidos`,
        ],
      },
    },
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

  const agregarProyecto = (nuevoProyecto) => {
    let nuevo_id = 1;
    if (proyectos.length > 0) nuevo_id = proyectos.at(-1).id + 1;
    nuevoProyecto = { id: nuevo_id, ...nuevoProyecto };
    proyectos = [...proyectos, nuevoProyecto];
  };

  const buscarProyecto = (texto) => {
    let filtrado = proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
    return filtrado;
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((p) => p.id !== id);
  };

  const obtenerDetalles = (id) => {
    return proyectos.find((p) => p.id == id);
  };

  return {
    obtenerProyectos,
    buscarProyecto,
    eliminarProyecto,
    agregarProyecto,
    obtenerDetalles,
  };
})();

export default proyectoService;
