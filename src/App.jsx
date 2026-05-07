import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Nav } from "./components/Nav.jsx";
import { ListaProyectos } from "./components/ListaProyectos.jsx";

function App() {
  return (
    <>
      <Header />
      <Nav activo="2" />
      <main>
        <ListaProyectos />
      </main>
      <Footer />
    </>
  );
}
export default App;
