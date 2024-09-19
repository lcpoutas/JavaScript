// BOM (Browser Objet Model) - Propiedades y Eventos

/*

permite acceder y modificar las propiedades de las ventanas del propio navegador.

Mediante BOM, es posible redimensionar y mover la ventana del navegador, modificar el texto que se muestra en la barra de estado y realizar muchas otras manipulaciones 
no relacionadas con el contenido de la página HTML.

El mayor inconveniente de BOM es que, al contrario de lo que sucede con DOM, ninguna entidad se encarga de estandarizarlo o definir unos mínimos de interoperabilidad 
entre navegadores.

Algunos de los elementos que forman el BOM son los siguientes:

    · Crear, mover, redimensionar y cerrar ventanas de navegador.
    · Obtener información sobre el propio navegador.
    · Propiedades de la página actual y de la pantalla del usuario.
    · Gestión de cookies.
    · Objetos ActiveX en Internet Explorer.

*/

window.addEventListener("resize", (e) => {
  console.clear();
  console.log("*********** Evento Resize ************");
  console.log(innerWidth);
  console.log(innerHeight);
  console.log(outerHeight);
  console.log(outerWidth);
  console.log(window.scrollX);
  console.log(window.screenY);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("*********** Evento Scroll ************");
  console.log(window.scrollX);
  console.log(window.screenY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.clear();
  console.log("*********** Evento Load ************");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("*********** Evento DOMContentLoaded ************");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

// Podemos ver que el evento V es hasta 8 veces mas rapido que el evento load; esto es porque el primero se carda desde el objeto document y el segundo desde window,
// por lo que en terminos de optimizacion el primero es mejor opccion

// DOMContentLoaded no espera a la carga de todo el arbol de la pagina para ejecutarse caso contrario es load

// Para peticiones asincronas es mejor usar el evento DOMContentLoaded
