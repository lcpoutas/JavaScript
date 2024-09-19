//console.log("-------------- Elementos del Documento -----------------");

console.log(window);

// propiedades del objeto document

console.log(document.head); // la cabecera del documento html
console.log(document.body); // el cuerpo del HTML
console.log(document.documentElement); // Elementos HTML
console.log(document.doctype); // !DOCTYPE html
console.log(document.characterSet);
console.log(document.links);
console.log(document.title);
console.log(document.styleSheets);
console.log(document.forms);
console.log(document.images);
console.log(document.scripts);

// En este hacemos un timeout para que nos de tiempo a seleccionar elementos del documents, esta función cogera esos elementos seleccionados y los imprimira en
//consola en formato string, le damos 3 segundos para que tengamos tiempo de seleccionar

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);

document.write("hola mundo"); //escribe directamente en el documento
