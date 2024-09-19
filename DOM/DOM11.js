// Modificando Elementos parte 2

/*
    InsertAdjacent ...
    
    · insertAdjacentElementPosition(posicition, elemento)
    · insertAdjacentHTML(position, html)
    · insertAdjacentText(position, text)

    Posiciones:
    
    · beforebegin(hermano anterior)
    · afterbegin(primer hijo)
    · beforeend(ultimo hijo)
    · afterend(hermano siguiente)

*/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = `<img src= 'https://placeimg.com/200/200/any' alt = 'Any'>
<figcaption> Any </figcaption>`;

$newcard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "alt");

$card.insertAdjacentElement("beorebegin", $newCard); //insertamos la tarjeta newCard antes del elemento card
$card.insertAdjacentElement("afterbegin", $newCard);
$card.insertAdjacentElement("beforeend", $newCard);
$card.insertAdjacentElement("afterend", $newCard);

$card.prepend($newCard); //lo añade como primer hijo
$card.append($newCard); //lo añade como ultimo hijo
$card.before($newCard); // lo añade antes del nodo de referencia
$card.after($newCard); // lo añade como despues del nodo de referencia
