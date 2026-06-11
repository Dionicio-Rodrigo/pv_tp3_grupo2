import { createContext, useContext, useEffect, useState } from "react";

const StorageKey = "sesionusuario"

const UserContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const datosPorDefecto = {
    nombre: "Javier",
    dni: "45382441",
    rol: "Estudiante",
    institucion: "Facultad de Ingenieria",
  };

  const [usuario, setUsuario] = useState(() => {
    const datosGuardados = localStorage.getItem(StorageKey);
    return datosGuardados ? JSON.parse(datosGuardados) : datosPorDefecto;
  });

  useEffect(() => {
    localStorage.setItem (StorageKey, JSON.stringify(usuario)); 
    }, [usuario]);

  const actualizarDatos = (nuevosDatos) => {
    setUsuario((Guardado) => ({ ...Guardado, ...nuevosDatos }));
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
