// Crear elementos y fragmentos

// Primero creamos los elementos necesarios que queremos añadir

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("animals"),
  $cards = document.querySelector(".cards");

// añadimos atributos al nodo img

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");

// añadimos clase al nodo figure

$figure.classList.add("card");

// añadimos al html el nodo figure y creamos un nuevo elemento figure

$cards.appendChild($figure);

// agremamos nodos al nodo figura

$figure.appendChild($img);
$figure.appendChild($figcaption);

// agregamos el texto animals al nodo figcaption

$figcaption.appendChild($figcaptionText);

//Crear una lista de elementos diamicamente

const estaciones = ["primavera", "verano", "otoño", "invierno"];
$ul = document.createElement("ul");

document.write("<h3> Estaciones del año <h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  //recorremos el array estaciones
  const $li = document.createElement("li"); //por cada elemento el array creamos un nodo li
  $li.textContent = el; //en cada nodo li le añadimos en contenido del nombre de la estacion
  $ul.appendChild($li); //añadimos el nodo li como hijo del nodo ul
});

// Creacion de fragmentos dinamicos

//definimos las variables

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

// Construimos el fragmento

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3> Meses del año <h3>");

// Añadimos el fragmento al elemento ul

$ul3.appendChild($fragment);
document.body.appendChild($ul3);
