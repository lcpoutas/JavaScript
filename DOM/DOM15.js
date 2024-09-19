// stopPrpagation & preventDefault

const $divsEventos = document.querySelectorAll(".eventos-flujo div"); //todos los div dentro del elemento con la clase eventosFlujo
$linkEventos = document.querySelector(".eventos-flujo a");

console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    `Hola, te saluda ${this.className}, el click lo originó ${e.target.className} `
  );
  e.stopPropagation(); //detenemos la propagación del flujo de eventos
}

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos); //si ponemos true el preventDefault no funciona en el enlace porque solo actuaria sobre 1
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola, soy tu amigo Carlos");
  e.preventDefault(); //evitamos que se ejecute la accion por defecto, en este caso abrir el enlace en una nueva pestaña
});
