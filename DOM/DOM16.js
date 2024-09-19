// Delegación de Eventos

// La delegación de eventos ya evita de por si la proagación de eventos

const $divsEventos = document.querySelectorAll(".eventos-flujo div"); //todos los div dentro del elemento con la clase eventosFlujo
$linkEventos = document.querySelector(".eventos-flujo a");

console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    `Hola, te saluda ${this}, el click lo originó ${e.target.className} `
  );
}

document.addEventListener("click", (e) => {
  console.log("clicn en", e.target);

  //.matches busca si existe el elemento mencionado, si existe devuelve true

  if (e.target.matches("eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola, soy tu amigo Carlos");
    e.preventDefault();
  }
});

/* 

El segundo if dentro de la funcio (e) => {} sustituye al listener de abajo

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
});

El segundo if dentro de la funcio (e) => {} sustituye al listener de abajo

$linkEventos.addEventListener("click", (e) => {
  alert("Hola, soy tu amigo Carlos");
  e.preventDefault();
});
*/
