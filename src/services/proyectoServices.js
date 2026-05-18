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
      detalles: {
        descripcion: `El proyecto Nutrición con Energía es una iniciativa de economía circular 
        gestionada íntegramente por estudiantes, diseñada para combatir la inseguridad alimentaria mediante 
        la provisión de almuerzos balanceados a precios accesibles. Su pilar fundamental es un sistema de reservaciones digital, 
        desarrollado por los propios alumnos, que permite predecir la demanda exacta de cada jornada, eliminando 
        la incertidumbre en las compras y reduciendo el desperdicio de alimentos a prácticamente cero.`,
        recursos: [
          `Sistema de reservaciones - Manual de uso (PDF)`,
          `Repositorio del sistema en GitHub`,
          `Planillas de seguimiento nutricional (Drive)`,
          `Acta de acuerdo con el comedor universitario (Drive)`,
        ],
        equipo: [`Andrea Yapura`, `Facundo Chauque`, `Miriam Gallardo`],
        roles: [
          `Coordinadora general e inclusión`,
          `Logística de insumos`,
          `Diseño del sistema rotativo`,
        ],
      },
    },
    {
      id: 4,
      titulo: "Probabilidad en Acción",
      categoria: "Recaudación",
      finalizado: true,
      detalles: {
        descripcion: `La Lotería Universitaria "Probabilidad en Acción" 
        es una iniciativa organizada por los estudiantes con el objetivo de recaudar fondos para mejorar el equipamiento 
        y los materiales de los laboratorios. Lo que hace especial a este proyecto es que los propios alumnos desarrollan 
        el software encargado del sorteo, utilizando algoritmos que aseguran que la selección de los ganadores sea totalmente 
        aleatoria, justa y transparente para todos los participantes.`,
        recursos: [
          `Código fuente del software de sorteo (GitHub)`,
          `Informe de estudio de probabilidades (PDF)`,
          `Reglamento de la lotería (Drive)`,
          `Rendición de cuentas y destino de fondos (Drive)`,
        ],
        equipo: [
          `Nicolás Herrera`,
          `Jimena Cabrera`,
          `Tomás Arroyo`,
          `Dante Vilca`,
        ],
        roles: [
          `Coordinador y administración de fondos`,
          `Diseño y venta de boletos`,
          `Selección y gestión de premios`,
          `Estudio de probabilidades y estadística`,
        ],
      },
    },
    {
      id: 5,
      titulo: "Impresion 3D y Prototipado Rápido",
      categoria: "Curso",
      finalizado: false,
      detalles: {
        descripcion: `Este espacio de capacitación práctica tiene como objetivo que los
          estudiantes de ingeniería aprendan a calibrar impresoras FDM y a
          utilizar software de laminado para convertir sus diseños CAD en
          modelos físicos reales. El taller cubre desde los conceptos básicos
          de la tecnología de deposición de material fundido hasta la
          optimización de parámetros de impresión como temperatura, velocidad,
          relleno y soportes.`,
        recursos: [
          `Guía de calibración de impresoras FDM (PDF)`,
          `Modelos de ejemplo en repositorio (GitHub)`,
          `Tutoriales de software de laminado (Drive)`,
          `Galería de prototipos realizados (Drive)`,
        ],
        equipo: [`Lucía Mamani`, `Rodrigo Condorí`, `Martin Fernandez`],
        roles: [
          `Coordinadora del taller`,
          `Técnico de equipos e impresoras`,
          `Instructor de software CAD y laminado`,
        ],
      },
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
