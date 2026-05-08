import { useState } from "react";

export const AgregarProyecto = ({ funcion }) => {
    const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    finalizado: false,
  });   
  
  const handleAgregar = () => {
    if (nuevoProyecto.titulo) {
      funcion(nuevoProyecto);
      setNuevoProyecto({ titulo: "", categoria: "", finalizado: false });
    }
};

return (
    <div className="AgregarNuevo">
      <input type="text" placeholder="Título" value={nuevoProyecto.titulo} onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })} />
      
      <select value={nuevoProyecto.categoria} onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })}>
      <option value="">Categoría</option>
      <option value="Taller">Taller</option>
      <option value="Comedor">Comedor</option>
      <option value="Curso">Curso</option>
      <option value="Recaudacion">Recaudación</option>
      </select>
          <label>
            Finalizado
            <input type="checkbox" checked={nuevoProyecto.finalizado} onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, finalizado: e.target.checked })} />
            </label>
        <button onClick={handleAgregar}>Agregar Proyecto</button>
    </div>
);
};  