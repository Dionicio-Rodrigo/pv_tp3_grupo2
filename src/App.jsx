import { BrowserRouter, Routes, Route, Router } from "react-router";
import { LayoutPagina } from "./layouts/LayoutPagina.jsx";
import Proyectos from "./views/Proyectos.jsx";
import DashBoard from "./views/Dashboard.jsx";
import Perfil from "./views/Perfil.jsx";
import { DetalleProyecto } from "./views/DetalleProyecto.jsx";
import Theme from "./layouts/Theme.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPagina />}>
          <Route index element={<DashBoard />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="proyectos/:id" element={<DetalleProyecto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
