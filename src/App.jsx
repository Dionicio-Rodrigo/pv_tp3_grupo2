import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Nav } from "./components/Nav.jsx";
import { ListaProyectos } from "./components/ListaProyectos.jsx";
import { AgregarProyecto } from "./components/Agregar.jsx";
import proyectoService from "./services/proyectoServices.js";
import { Busqueda } from "./components/Busqueda.jsx";
import "./css/App.css";
import { DetalleProyecto } from "./components/DetalleProyecto.jsx";

function App() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const buscar = (texto) => {
    setProyectos(proyectoService.buscarProyecto(texto));
  };
  const agregar = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };
  const eliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };
  return (
  <>
    <Header />
    <Nav activo="2" />

    <aside>
      <Busqueda funcion={buscar}>
        Buscar: <br />
      </Busqueda>
    </aside>

    <main>
      <h1>Nuestros Proyectos</h1>

      <ListaProyectos lista={proyectos} funcion={eliminar} />

      <DetalleProyecto proyecto={proyectos[0]} /> 

      <AgregarProyecto funcion={agregar} />
    </main>

    <Footer />
  </>
);
}
export default App;
