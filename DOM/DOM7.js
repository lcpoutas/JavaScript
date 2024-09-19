// DOM Traversing: Recorriendo el DOM

const $cards = document.querySelector(".cards");

console.log($cards.children); //hijos de la clase cards

console.log($cards.children(2)); //seleccionamos el segundo hijo

console.log($cards.parentElement); //Selecciona el elemento padre
console.log($cards.parentnode); //Selecciona el elemento padre
console.log($cards.firstElementChild); //Selecciona el elementodel primer hijo del padre
console.log($cards.lastElementChild); //Selecciona el elemento del ultimo hijo del padre
console.log($cards.previousElementSibling); // imprime el elemento hermano anterior al elemento objetivo
console.log($cards.nextElementSibling); // imprime el elemento hermano posterior al elemento objetivo
console.log($cards.closest("div")); // busca el elemento objetivo (div) mas cercano al elemento del que partes
