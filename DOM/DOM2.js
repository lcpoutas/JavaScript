/* 

Nodos html 

DOM transforma todos los documentos XHTML en un conjunto de elementos llamados nodos, que están interconectados y que representan los contenidos de las páginas
web y las relaciones entre ellos. Por su aspecto, la unión de todos los nodos se llama "árbol de nodos".

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Página sencilla</title>
</head>

<body>
<p>Esta página es <strong>muy sencilla</strong></p>
</body>
</html>

La raíz del árbol de nodos de cualquier página XHTML siempre es la misma: un nodo de tipo especial denominado "Documento".

A partir de ese nodo raíz, cada etiqueta XHTML se transforma en un nodo de tipo "Elemento". La conversión de etiquetas en nodos se realiza de forma jerárquica. 
De esta forma, del nodo raíz solamente pueden derivar los nodos HEAD y BODY. A partir de esta derivación inicial, cada etiqueta XHTML se transforma en un nodo 
que deriva del nodo correspondiente a su "etiqueta padre".

La transformación de las etiquetas XHTML habituales genera dos nodos: el primero es el nodo de tipo "Elemento" (correspondiente a la propia etiqueta XHTML) y 
el segundo es un nodo de tipo "Texto" que contiene el texto encerrado por esa etiqueta XHTML.

*/

console.log(document.getElementsByTagName("li")); // selecciona por el nombre del elemento del html (li, p, h1, etc)
console.log(document.getElementsByClassName("card")); //selecciona por nombre de la clase
console.log(document.getElementsByName("nombre")); // importante para formularios
console.log(document.getElementsById("menu")); // selecciona elementos por el id

// Estos elementos has sido remplazados por estos 2

// queryselector - Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
// es muy importante utilizar los elementos que diferencian los selectores, asaber '.' para clases, '#' para id, etc

console.log(document.querySelector("menu"));

// queryselector a nivel rendimiento es menos optimo que getElementById
// para seleccionar todos los elementos tenemos que usar el metodo querySelectorAll()
// querySelector y querySelectorAll devuelven una lista de nodos

// getElementBy devuelven una coleccion de html, un arreglo
