import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { ListaProyectos } from "./components/ListaProyectos.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <ListaProyectos />
      </main>
      <Footer />
    </>
  );
}
export default App;
