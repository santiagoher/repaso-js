'use strict'

// arrays y arreglos, matrices

var name = 'santiago';
var names = ["santiago", "pedro", "juan", 200, true];  // coleccion de tipos de  datos agrupados

// cada uno de los elementos tiene un indice (empiezan desde 0)
var lenguajes =  new Array("JS", "GO", "JAVA", "PHP");
/* console.log(names[0]); // accedemos por los indices
console.log(names.length); // nos da la longitud del array (elementos)
console.log(lenguajes); */
/* 
var elemento = parseInt(prompt('Que elemento del array quieres?', 0));
if (elemento >= names.length) {
    document.write('Introduce un numero menor o igual 4');
} else {
    document.write("El usuario seleccionado es:"+names[elemento]);
} */

document.write("<h1>Lenguajes de programación del 2018 </h1>");
document.write("<ul>")
for (let i = 0; i < lenguajes.lenguajes; i++) {
    document.write("</ul>")
}