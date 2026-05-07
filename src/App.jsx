import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Nav } from "./components/Nav.jsx";
import { ListaProyectos } from "./components/ListaProyectos.jsx";
import proyectoService from "./services/proyectoServices.js";
import { Busqueda } from "./components/Busqueda.jsx";

function App() {
  // App se encargara de pasarle el useState de la lista a
  // ListaProyectos para mostrarla
  // Busqueda para cambiarla

  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const buscar = (texto) => {
    setProyectos(proyectoService.buscarProyecto(texto));
  };
  const eliminar = (id) => {
    setProyectos(proyectoService.borrar(id));
  };

  return (
    <>
      <Header />
      <Nav activo="2" />
      <aside>
        <Busqueda funcion={buscar}>Buscar:</Busqueda>
      </aside>
      <main>
        <ListaProyectos lista={proyectos} funcion={eliminar} />
      </main>
      <Footer />
    </>
  );
}
export default App;
