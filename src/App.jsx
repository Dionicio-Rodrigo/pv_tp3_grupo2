import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Nav } from "./components/Nav.jsx";
import { ListaProyectos } from "./components/ListaProyectos.jsx";
import { AgregarProyecto } from "./components/Agregar.jsx";
import proyectoService from "./services/proyectoServices.js";
import { Busqueda } from "./components/Busqueda.jsx";
import "./css/App.css";

function App() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const buscar = (texto) => {
    setProyectos(proyectoService.filtrar(texto));
  };
  const agregar = (nuevoProyecto) => {
    proyectoService.agregar(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };
  const eliminar = (id) => {
    proyectoService.eliminar(id);
    setProyectos(proyectoService.obtenerProyectos());
  };
  return (
    <>
      <Header />
      <Nav activo="2" />
      <aside>
        {/*Busqueda puede recibir una funcion cualquiera*/
        /*Busqueda llamara a esa funcion cuando cambie */}
        <Busqueda funcion={buscar}>
          Buscar: <br />
        </Busqueda>
      </aside>
      <main>
        <h1>Nuestros Proyectos</h1>
        <AgregarProyecto funcion={agregar} />
        <ListaProyectos lista={proyectos} funcion={eliminar} />
      </main>
      <Footer />
    </>
  );
}
export default App;
