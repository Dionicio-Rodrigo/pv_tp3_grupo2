import { useEffect, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Nav } from "./components/Nav.jsx";
import { ListaProyectos } from "./components/ListaProyectos.jsx";
import proyectoService from "./services/proyectoServices.js";
import { Busqueda } from "./components/Busqueda.jsx";

function App() {
  // Creamos una copia para poder mostrar los proyectos sin afectar a los proyectos guardados
  const Proyectos = proyectoService.obtenerProyectos();
  const [copiaProyectos, setcopiaProyectos] = useState(Proyectos);

  const buscar = (texto) => {
    setcopiaProyectos(proyectoService.buscarProyecto(texto, Proyectos));
  };
  const eliminar = (id) => {
    proyectoService.borrar(id);
    setcopiaProyectos(proyectoService.obtenerProyectos());
  };

  return (
    <>
      <Header />
      <Nav activo="2" />
      <aside>
        <Busqueda funcion={buscar}>Buscar:</Busqueda>
      </aside>
      <main>
        <ListaProyectos lista={copiaProyectos} funcion={eliminar} />
      </main>
      <Footer />
    </>
  );
}
export default App;
