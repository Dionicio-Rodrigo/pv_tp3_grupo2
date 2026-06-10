import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const datosPorDefecto = {
    nombre: "Javier",
    dni: "45382441",
    rol: "Estudiante",
    institucion: "Facultad de Ingenieria",
  };

  const [usuario, setUsuario] = useState(datosPorDefecto);
  const actualizarDatos = (nuevosDatos) => {
    setUsuario({ ...nuevosDatos });
  };
  return (
    <UserContext.Provider value={{ usuario, actualizarDatos }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
