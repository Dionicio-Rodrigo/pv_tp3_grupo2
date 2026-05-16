# Grupo 3 - TP3 "React"

## Integrantes

### Nombre y Apellido / Cuenta de github

Dionicio Rodrigo Ezequiel / Dionicio-Rodrigo  
Lucas Dario Joaquin Mamaní / Lucas4414  
Cruz Benavidez Rita Melina / rmelinacruzb  
Mamani Lucas Lautaro / lucasmamani-lxl

## Descripción

La pagina de proyectos del TP 1 `proyectos.index` se va a transormar en una visualización en forma de tarjetas individuales, las cuales se van a renderizar en base a un arreglo que las va a guardar `ProyectoServices.js`.  
Estas tarjetas van a presentar un **Titulo**, **Categoria**, **EstadoFinalización**, un boton que nos permite borrar ese proyecto y otro boton que abrira los detalles adicionales que tiene ese proyecto (**Recursos**, **Equipo-Roles**, _Descripción_detallada_).  
En la parte de la izquierda `aside` se coloca una barra de búsqueda que le deja al usuario buscar un proyecto por su titulo de entre todas las tarjetas.  
La ultima sección es la de **Agregar Nuevo Proyecto** aca podemos ingresar un **Titulo**,**Categoria** y **EstadoFinalizacion** para poder agregar un nuevo proyecto a todo el arreglo dentro del `ProyectoServices.js`. Aca se realizan algunas verificaciones para que no haya datos inválidos antes de ingresar un nuevo proyecto.

## ProyectoServices (función autoejecutable)

Este archivo contiene a al función `proyectoService` que operara y guardara todos los proyectos dentro de un arreglo `proyectos`, como si fuese una pequeña base de datos, algunas de las operaciones que vamos a necesitar seran las de:

-**obtenerProyectos**: Nos dara una copia de todos los proytectos para poder realizar operaciones dentro la pagina sin interferir con sus datos.  
-**agregarProyecto**: Cuando llega un objeto que tenga los campos de un proyecto nuevo tenemos que agregar un id nuevo para que este, asi podra identificarse dentro del arreglo. Primero preguntamos si hay elementos en el arreglo si no los hay le asigamos `id:1` pero si no utilizamos el id del ultimo objeto del array + 1 para obtener un nuevo id `id:proyectos.at(-1) + 1`. Ahora solo nos queda agregar ese proyecto nuevo al arreglo `proyectos={...proyectos,nuevoProyecto}`.  
-**eliminarProyecto**: Esta función solo se activa cuando el boton de _Eliminar_ es clickeado por el usuario, esta recibe el id del proyecto a eliminar. Podemos realizar un `.filter()` en el arreglo del proyecto para crear un arreglo con todos los proyectos que cumplan con `proyecto.id != id_eliminar` y dejamos al proyecto con ese id fuera y eliminado. -**buscarProyecto**: Esta función recibe un texto que contiene el valor de la barra de búsqueda, con este texto podemos realizar un `.filter` un poco más complejo. Donde vamos a iterar en todos los objetos del arreglo y vamos a ver si el texto ingresado esta contenido dentro de **Titulo**, con esto la búsqueda es un poco más flexible y podemos buscar coincidencias entre dos proyectos diferentes pero que comparten un titulo similar.

## Comportamiento de la pagina App.jsx

El componente `App.jsx` es el que va a poseer todo nuestro componente y que va a actuar y organizar la búsqueda dentro de un `<aside>`, la lista de todos los proyectos y del formulario para agregar los proyectos dentro del `<main>`, el `<header>`, `<nav>` y `<footer>` son solo copias de los mismos elementos que existian en el TP1 pero ahora se convierten en componentes que se podrian reutilizar pero por ahora no es necesario.  
Vamos a describir los componentes más importantes, dejando de lado `Header.jsx`, `Nav.jsx` y `Footer.jsx` ya que no son importantes ahora mismo.  
Por ultimo `App.jsx` guardara el estado de los proytectos con un `usestate(proyectoService.ObtenerProyectos())` para poder mandarle al componente que los renderiza y que nos permitira buscar en tiempo real los proyectos.

### ListaPryectos.jsx

Esta recibe la lista de los proyectos actuales, para poder renderizarlos. Dentro tenemos un `proyectos.map()` que hara una estructura básica para cada proyecto en una forma de tarjeta `<div id={"carta${proyecto.id}"} key={pryecto.id}>` dentro colocamos el **Titulo**, **Categoria**, **Estado** y colocamos un boton para poder eliminar este proyecto cuando queramos.  
Lo que hace este boton es llamara a la función `handlefuncion(proyecto.id)` que lo unico que hace es llamar al parametro del componente `funcion(id)`, esta función podria ser cualquiera pero en `App.jsx` este campo se le especifica que la función es `eliminar`, esta lo que hace es pasarle la id a la función `proyectoService.eliminarProyecto(id)`, se eliminara el arreglo y para rerenderizar el proyecto cambiamos el estado de los proyectos en `App.jsx` con `setProyectos(proyectoService.obtenerProyectos())`.

### Busqueda.jsx

Lo que queremos hacer con esta barra es modificar los proyectos que se renderizan en la `ListaProyectos.jsx` para que el usuario vea en tiempo real que proyectos hay.  
El input dentro de la `Busqueda.jsx` tiene que pasarle todo el rato (o cada que cambia) su valor a la función `Buscar` que es pasada por `App.jsx` hacia el componente `Busqueda.jsx` como un campo del componente.  
Cuando el valor del input cambie `onChange={handleFuncion}` se enviara el `e.target.value` hacia la función `buscar(e.target.value)`, que no es exactamente como esta ecrito pero es lo que pasa al final. Ahora en `App.jsx` se tiene que cambiar el estado de los proyectos `setProyectos(proyectoService.buscarProyectos())`, que nos dara un arreglo que contiene solo arreglos que coindcidan con la búsqueda.  
Ahora la `ListaProyectos.jsx` renderizara esos proyectos en pantalla y cuando la barra de búsqueda este vacia todos los proyectos guardados actualmente aparecen como si no hubiese pasado nada.

### Agregar.jsx

Primero tenemos que saber que este componente se divide en tres campos detro de un solo formulario. La barra de input para el **Titulo**, una lista de **Categorias** y dos botones radiales que nos deja colocar si un proyecto esta **Finalizado** o **En Proceso**. Estos campos actualizan el estado del objeto `nuevoProyecto` con su debido `setNuevoProyecto(value)`. en el **Titulo** solo debemos cambiar el objeto entero con `setNuevoProyecto` para evitar perder los otros datos de los campos.  
En la lista de **Categorias** es manejada por un `<Select>` que contiene algunas `<option value="...">` para poder elegir entre ellas. Y cuando se cambia el select por otro se llama a `setNuevoProyecto({...nuevoProyecto, Categoria:e.target.value})`.  
Para los botones radiales es más simple ya que si a cada uno le ponemos el mismo nombre estos se convierten en mutuamente exclusivos y dentro de cada boton podemos cambiar el valor del **Estado** de true (cuando esta finalizado) o false (cuando esta en proceso). Obviamente estos tienen `<label>` para poder saber que estamos clickando y con CSS pdemos hacer que todo el label actue como un boton para ser más intuitivo.  
Antes de enviar estos datos utilizamo una ultima medida de seguridad, esta esta dentro del boton de tipo submit que contiene el `<form>` y es el campo disabled este esta conectado con el hook `[invalido, setInvalido]usestate(true)`, que luego con un useEffect donde trackeamos al objeto total que contiene todos los datos que hemos ingresado, esto nos deja hacer verificaciones con condicionales `if(nuevoPryecto.titulo=="")setinvalido(true)` para poder mantener boton de submit deshabilitado hasta hacer todas las verificaciones que queramos.  
Por ultimo y cuando el boton se pulsa todo el objeto es enviado a la función `agregar(nuevoProyecto)` dentro de `App.jsx` para que se le agrege al arreglo del `proyectoService`, cambiamos el state de los proyectos para forzar una renderización y por ultimo el nuevo proyecto se mostrara mediante el componente `ListaProyectos.jsx`.  
Cuando el boton submit se pulse vamos a reiniciar al objeto con sus valores predeterminado para que el usuario entienda que sus datos se han mandado y pueda ingresar otros si quisiera.
