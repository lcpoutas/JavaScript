// Interactuar con el texto del html y sus elementos

const $whatisDom = document.getElementById("que-es");

const text = ` 
<p> El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p> `;

$whatisDom.innerText = text; // añade el texto tal cual está definido en la variable text, con sus espacios y demás, es decir conserva el formato
$whatisDom.textContent = text; // añade el texto de forma plana, sin respetar el formato definido
$whatisDom.innerHTML = text; // añade el texto conservando el formato y aplicando las etiquetas especificadas en html, pero te genera un solo elemento p que
//contiene todo el contenido de text
$whatisDom.outerHTML = text; //añade el texto conservando el formato y aplicando las etiquetas especificadas en html y te separa los parrafos segun se ha indicado
