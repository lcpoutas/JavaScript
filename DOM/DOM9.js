// Templates HTML

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img); // encontramos la etiqueta img dentro de template y en el atributo source añadimos la info de img
  $template.querySelector("img").setAttribute("alt", el.title); // encontramos la etiqueta img dentro de template y en el atributo alt añadimos la info del titulo
  $template.querySelector("figcaption").textContent = el.title; //  encontramos la etiqueta figcaption dentro de template y como valor le añadimos el title del elemento

  // clonamos el nodo para no pisar informacion

  let $clone = document.importNode($template, true); //la primera variable define que vamos a clonar, la segunda es para indicar si copiamos toda la estructura (true) o solo la apertura y cierre (false)
  $fragment.appendChild($clone); //añadimos la variable clone como elemento hijo de fragment
});

$cards.appendChild($fragment); //añadimos la variable fragment como elemento hijo de cards
