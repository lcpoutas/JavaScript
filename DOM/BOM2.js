//BOM Objetos URL, Historial y Navegador

// URL

console.log("******** Objeto URL (location)********");

// location.reload() te permite recargar la pagina
// location.asign() te permite cambiar la url

console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);

// Historial

console.log("******** Objeto Historial (history)********");

console.log(history);
console.log(history.length);

//history.back(length) me regresa a la pagina en la que estaba hace x nº de paginas atras
//history.forward(length) me regresa a la pagina que estaba hace x paginas hacia adelante

//Esto es subjetivo del historial que manejemos

// Navegador

console.log("******** Objeto Navegador (navigator)********");

console.log(navigator);
console.log(navigator.language);
console.log(navigator.geolocation);
console.log(navigator.userAgent);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.serviceWorker);
console.log(navigator.onLine);
console.log(navigator.mediaDevices);
console.log(navigator.connection);
