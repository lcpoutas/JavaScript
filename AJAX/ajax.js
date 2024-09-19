//Vamos a encapsular funciones anonimas autoejecutables para evitar el uso de modulos y poder ejecutar diferentes funciones en un mismo marchivo

// Httprequest

(() => {
  // 1- instanciar el objeto httprequest

  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment(); //usamos este método para no sobrecargar el servidor con actualizaciones de contenido

  // console.log(xhr);

  //2 - signacion de eventos

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return; //validamos que el readystate solo sea 4, en caso contrario no se devuelve nada y no se ejecutanada mas

    //cuando el estado de la peticion sea de 200 a 299 ejecuta el codigo

    if (xhr.status <= 200 && xhr.status < 300) {
      // console.log("exito");
      // console.log(xhr.responseText);

      // convertimos la respuesta json
      let json = JSON.parse(xhr.responseText);

      json.forEach((el) => {
        const $li = document.createElement("li"); //creamos el elemento li en el documento html
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //añadimos al contenido del las propiedades name, email y phone de cada uno de los objetos de json
        $fragment.appendChild($li); //añadimos al framento creado cada uno de los li creados
      });

      $xhr.appendChild($fragment); //añadimos en el elemento ol del DOM el fragmento creado
    } else {
      // mensaje que aparecera si ocurre un error
      // console.log("error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  // 3 - abrir la peticion estableciendo el metodo usoado (get, post, etc)

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // la ruta tambien puede ser local por ejemplo assets/users.json

  // 4 - Enviar la peticion

  xhr.send();
})();

// API Fetch

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment(); //usamos este método para no sobrecargar el servidor con actualizaciones de contenido

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((answer) => {
      return answer.ok ? answer.json() : Promise.reject(answer); // comprovamos el estado de la propiedad ok del evento answer, si este es verdadero convierte el
      // elemento a json, si es falso les devuelve un objeto promesa que se rechaza por un motivo dado
      // .json() convierte el texto a formato json
    })
    .then((json) => {
      json.forEach((el) => {
        const $li = document.createElement("li"); //creamos el elemento li en el documento html
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //añadimos al contenido del las propiedades name, email y phone de cada uno de los objetos de json
        $fragment.appendChild($li); //añadimos al framento creado cada uno de los li creados
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      let message = fetch.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${fetch.status}: ${message}`;
    })
    .finally("esto se ejecutará independientemente de si hay o no un error");
})();

// API Fetch Async Await

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment(); //usamos este método para no sobrecargar el servidor con actualizaciones de contenido

  async function getData() {
    try {
      let answer = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await answer.json();

      // console.log(answer, json);

      // La instrucción throw lanza una excepción definida por el usuario. La ejecución de la función actual se detendrá (las declaraciones posteriores a throw no se
      // ejecutarán) y el control pasará al primer bloque catch en la pila de llamadas. Si no existe ningún bloque catch entre las funciones de llamada, el programa
      // terminará.

      if (!answer.ok)
        throw { status: answer.status, statusText: answer.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li"); //creamos el elemento li en el documento html
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //añadimos al contenido del las propiedades name, email y phone de cada uno de los objetos de json
        $fragment.appendChild($li); //añadimos al framento creado cada uno de los li creados
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutará independientemente del try...catch");
    }
  }

  getData();
})();

// Libreria Axios - https://github.com/axios/axios

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((answer) => {
      console.log(answer);

      // no necesitamos hacer la transformacion de la informacion a formato json, ya que axios lo hace internamente
      // no necesitamos tratar el error con la instruccion de throw o  el operador ternario ya que axios trata el error internamente

      let json = answer.data;

      json.forEach((el) => {
        const $li = document.createElement("li"); //creamos el elemento li en el documento html
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //añadimos al contenido del las propiedades name, email y phone de cada uno de los objetos de json
        $fragment.appendChild($li); //añadimos al framento creado cada uno de los li creados
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      console.log("Esto se ejecutará independientemente del try...catch");
    });
})();

// Axios + Async Await

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  axios.get("https://jsonplaceholder.typicode.com/users");

  async function getData() {
    try {
      let answer = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await answer.data;

      json.forEach((el) => {
        const $li = document.createElement("li"); //creamos el elemento li en el documento html
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //añadimos al contenido del las propiedades name, email y phone de cada uno de los objetos de json
        $fragment.appendChild($li); //añadimos al framento creado cada uno de los li creados
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutará independientemente del try...catch");
    }
  }
})();
