export const RegistroActividad = ({ tiempo, mensaje }) => {
  return (
    <div>
      <p>
        {mensaje == "Agregado"
          ? `Se agrego un nuevo proyecto a las `
          : `Se elimino un proyecto a las `}
        {new Intl.DateTimeFormat("es-AR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(tiempo)}
        {` `}a las {` `}
        {new Intl.DateTimeFormat("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(tiempo)}
      </p>
    </div>
  );
};
