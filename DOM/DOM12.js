// Manejadores de eventos

const holaMundo = () => {
  alert("hola mundo");
  console.log(event); //event está en desuso, nos da información del evento ejecutado
};

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo; //es importante no poner los parentesis

// Los manejadores semanticos tienen el inconveniente de que a cada evento solo podemos asignarle 1 funcion

$eventoSemantico.onclick = function () {
  alert("Hola mundo, manejador de eventos semanticos");
  console.log(event);
};

// Manejador eventos multiples

$eventoMultiple.addEventListener("click", holaMundo); // definimos el tipo de evento a ejecutar y lo que se ejecutara en ese evento, en este caso una funcion
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo, manejador de eventos semanticos");
  console.log(e); // e actua igual que la palabra reservada event
  console.log(e.target);
  console.log(e.type);
});
