export const RegistroActividad = ({ tiempo }) => {
  return (
    <div>
      <p>
        Ultima actualización de la lista:{` `}
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
