import { useEffect, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Nav } from "./components/Nav.jsx";
import { ListaProyectos } from "./components/ListaProyectos.jsx";
import proyectoService from "./services/proyectoServices.js";
import { Bandeja } from "./components/Bandeja.jsx";
import { Agregar } from "./components/Agregar.jsx";

function App() {
  // Creamos una copia para poder mostrar los proyectos sin afectar a los proyectos almacenados
  const Proyectos = proyectoService.obtenerProyectos();
  const [copiaProyectos, setcopiaProyectos] = useState(Proyectos);

  const buscar = (texto) => {
    setcopiaProyectos(proyectoService.buscarProyecto(texto, Proyectos));
  };
  const eliminar = (id) => {
    proyectoService.borrar(id);
    setcopiaProyectos(proyectoService.obtenerProyectos());
  };

  const agregar = (nuevo) => {
    proyectoService.agregarProyecto(nuevo);
    setcopiaProyectos(proyectoService.obtenerProyectos());
  };

  return (
    <>
      <Header />
      <Nav activo="2" />
      <aside>
        <Bandeja funcion={buscar}>Buscar:</Bandeja>
      </aside>
      <main>
        <ListaProyectos lista={copiaProyectos} funcion={eliminar} />
        <Agregar funcion={agregar} />
      </main>
      <Footer />
    </>
  );
}
export default App;
