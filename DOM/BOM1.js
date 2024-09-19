// Metodos para BOM

const $btnAbrir = document.getElementById("abrir-ventana");
$btnCerrar = document.getElementById("cerrar-ventana");
$btnCerrarVentanaAbierta = document.getElementById("cerrar-ventana-abierta");
$btnImprimir = document.getElementById("imprimir-ventana");

let ventana; //esta variable sirve para guardar la referencia del window.open al abrir una nueva ventana

$btnAbrir.addEventListener("click", (e) => {
  ventana = open("https://www.google.com/");
});

//Con este metodo cerramos la ventana actual

$btnCerrar.addEventListener("click", (e) => {
  close();
});

//Con este metodo cerramos la ventana abierta previamente con el metodo open

$btnCerrar.addEventListener("click", (e) => {
  close(ventana);
});

// Con este método imprimimos la ventana actual

$btnImprimir.addEventListener("click", (e) => {
  print();
});
