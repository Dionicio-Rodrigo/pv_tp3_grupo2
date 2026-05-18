import { use, useState } from "react";
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
  const [home, setHome] = useState(true);

  const [idDetalles, setIdDetalles] = useState(1);

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

  const cambiarPagina = (id) => {
    if (id != undefined) {
      setIdDetalles(id);
    }
    setHome(!home);
  };

  return (
    <div id="Pagina">
      <Header />
      <Nav activo="2" />

      {home == true ? (
        <aside>
          <Busqueda funcion={buscar}>
            Buscar: <br />
          </Busqueda>
        </aside>
      ) : (
        <></>
      )}
      {home == true ? (
        <main>
          <h1>Nuestros Proyectos</h1>

          <ListaProyectos
            lista={proyectos}
            eliminar={eliminar}
            detalles={cambiarPagina}
          />

          <AgregarProyecto funcion={agregar} />
        </main>
      ) : (
        <main>
          <DetalleProyecto idProyecto={idDetalles} onCambiarPagina={setHome} />
        </main>
      )}

      <Footer />
    </div>
  );
}
export default App;
