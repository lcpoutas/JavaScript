// Trabajar con los atributos de html y crear nuestros atributos (data atributes)

// acceder al atributo lang de html

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute(lang));

// acceder a la clase de una etiqueta html

console.log(document.querySelector(".link-dom").href); // imprime la dirección ip
console.log(document.querySelector(".link-dom").getAttribute("href")); // imprime el nombre del enlace

// cambiamos el valor de latributo lang

document.documentElement.lang = "en";

console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX"); //el primer parametro establece el atributo objetivo y la segunda el nuevo valor asignado

console.log(document.documentElement.lang);

//variables para guardar elementos del DOM anteponemos su nombre con el simbolo $

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank"); // cambia el valor de target a blank la etiqueta a asociada a la clase link-dom

$linkDOM.hasAttribute("rel"); // comprueba si el atributo rel de la etiqueta a asociada a la clase link-dom existe

$linkDOM.removeAttribute("rel"); // elimina  el atributo rel de la etiqueta a asociada a la clase link-dom

// Trabajar con data-attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); // dataset guarda todos los data-attributes en un mapa (nueva estructura de datos EMASCRIPT6)
console.log($linkDOM.dataset.description); // imprime Document Objet Model
$linkDOM.setAttribute("data-description", "Modelo de objeto del documento"); //cambiamos el valor del atributo data-description
$linkDOM.dataset.description = "suscribite y comparte"; //cambiamos el valor del atributo data-description
console.log($linkDOM.dataset.description);
