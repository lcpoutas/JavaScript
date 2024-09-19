// Flujo de eventos - Burbuja y captura

const $divsEventos = document.querySelectorAll(".Eventos-flujo div"); //todos los div dentro del elemento con la clase eventosFlujo

console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    `Hola, te saluda ${this.className}, el click lo originó ${e.target.className} `
  );
}

/*
$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos, false);
});
*/

// aqui si estamos en el navegador y clicamos en 1 el evento solo se ejecutara 1 vez, si estamos en 2 2 veces y en tres 3 veces; esto es porque el evento al clicar
// en 2 o en 3 se propaga desde donde iniciamos el evento mismo hasta 1

// Si usamos true el flujo será en sentido contrario, desde 1 hasta donde se inicio el evento

//en este tercer parametro tambien se puede pasar un objeto

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true, //solo ejecuta el evento 1 vez evitando en este caso la propagacion de flujo
  });
});
