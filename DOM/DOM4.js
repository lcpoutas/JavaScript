// Manipular estilos y variables CSS

// En este caso es importante acceder a estas propiedades con el metodo de punto y no por el metodo de get o set attribute

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);

console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style.color); //accedo al valor de la propiedad color dentro del atributo style

console.log(window.getComputedStyle($linkDOM)); //accedamos a las propiedades asociadas al atributo style

// tambien se puede acceder a los estilos desde compute
console.log(window.getComputedStyle($linkDOM)); //accedemos a todas las propiedades del elemento

console.log(window.getComputedStyle($linkDOM).getPropertyValue("color")); //accedemos a la propiedad color dentro del elemento seleccionado

// modificar propiedades

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");

$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

// Variables CSS - Custom properties

const $html = document.documentElement, //declaramos las variables que guardan la informacion de html
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

// aplicamos las propiedades al body

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// cambiar valores a las variables

$html.style.setProperty("--dark-color", "pink"); //cambiamos el valor
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"); //actualizamos el valor de la variable en js
$body.style.setProperty("background-color", varDarkColor); // actualizamos su valor en la variable $body
