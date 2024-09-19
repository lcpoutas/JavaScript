// Eventos con parametros y remover eventos

function saludar(nombre = "desconocid@") {
  alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple");
$eventoRemover = document.getElementById("evento-remover");
// las funciones manejadoras de eventos solo pueden recibir como parametro el propio evento

$eventoMultiple.addEventListener("click", saludar); // Hola [objet MouseEvent]

// La solucion para esto es usar una arrowfuction y dentro de ella poner la funcion a ejecutar

$eventoMultiple.addEventListener("click", () => {
  saludar(); // Hola desconocido
  saludar("Carlos"); // Hola Carlos
});

//removiendo eventos

// Es necesario declarar la funcion donde se elimina el evento y luego añadir esta dentro del addEventListener

const remover = () => {
  alert(`Eliminanado el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dbclick");
  $eventoRemover.disabled = true; // desabilitamos el boton
};

$eventoRemover.addEventListener("dbclick", remover);

// despues de ejecutar el boton una vez veremos que ya no se ejecutará ningun evento posterior clicando en él
