// Modificando elementos

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); // Clonar la seccion

$newCard.innerHTML = `<img src= 'https://placeimg.com/200/200/any' alt = 'Any'>
<figcaption> Any </figcaption>`;

$newcard.classList.add("card");

$cards.replaceChild($newCard, $cards.children(2)); // remplaza el tercer elemento hijo (indice 2) del elemento padre cards, por el elemento newCard

// Insertar un elemento antes de un elemento de referencia

$cards.insertBefore($newCard, $cards.firstElementChild);

// Eliminar un elemento

$cards.remove($cards.lastElementChild); // elimina el ultimo elemento del elemento padre cards

//añadir seccion clonada al body

document.body.appendChild($cloneCards);
