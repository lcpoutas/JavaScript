const $card = document.querySelector("card");

console.log($card);
console.log($card.className);
console.log($card.classList); // lista de metodos
console.log($card.classList("rotate-45")); // mira si existe esa propiedad y devuelve true o false, en este caso false

//añadir una clase a otra clase

$card.classList.add("rotate-45"); // la propiedad rotate 45 está definida en nuestro html
console.log($card.classList("rotate-45")); // true

// el metodo toggle nos permite eliminar o añadir un elemento en funcion de si este ya existe o no
// actuaria a modo de interruptor, un ejemplo claro es el boton de modo oscuro/ modo claro

$card.classList.toggle("rotate-45");
console.log($card.classList("rotate-45")); // False
$card.classList.toggle("rotate-45");
console.log($card.classList("rotate-45")); // true

// puedes añadir cuantas quieras, siempre separadas por comas

$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
