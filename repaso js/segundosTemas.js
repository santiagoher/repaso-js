'use strict'
// Funciones
/*
    Son un grupo de ordenes agrupadas en un nombre completo
    - conjunto de reglas, funciones que se van a ejecutar
    - conjunto de acciones que se van ejecutando cuando son invocadas
    - se pueden reutilizar funciones cuantas veces quiera
*/

// defino la funcion
// function calculadora() {
//     // conjunto de instrucciones a ajecutar 
//     console.log('Hola soy la calculadora');
//     console.log('Si soy yo');

//     return "Hola soy la calculadora";
// }    

// // invocamos o llamamos la funcion
// var resultado = calculadora();
// console.log(resultado);

// // Parametros y parametros opcionales
// /**
//     - una funcion aparte de ejecutar funciones tambien 
//     - puede recibir parametros que son variables que van a alterar la logica o el resultado que nos va a devolver la funcion de esta manera abstraigo mucha de la logica y hago mucho mas reutilizable una funcion
//  */

// function calculadora2(numero1, numero2, mostrar = false) {

//     if (mostrar == false) {
//         console.log("Suma: " +(numero1 + numero2)+"<br>");
//         console.log("Resta: " +(numero1 - numero2)+"<br>");
//         console.log("Multiplicacion: " +(numero1 * numero2)+"<br>");
//         console.log("Division: " +(numero1 / numero2)+"<br>");
//         console.log("*********************************************");

//     } else {
//         document.write("Suma: " +(numero1 + numero2)+"<br>");
//         document.write("Resta: " +(numero1 - numero2)+"<br>");
//         document.write("Multiplicacion: " +(numero1 * numero2)+"<br>");
//         document.write("Division: " +(numero1 / numero2)+"<br>");
//         console.log("*********************************************");

//     }
    
// }

// calculadora2(2, 2, true);

// funciones dentro de otras
// function porConsola(numero1, numero2) {
//     console.log("Suma: " +(numero1 + numero2)+"<br>");
//     console.log("Resta: " +(numero1 - numero2)+"<br>");
//     console.log("Multiplicacion: " +(numero1 * numero2)+"<br>");
//     console.log("Division: " +(numero1 / numero2)+"<br>");
//     console.log("*********************************************");
// }

// function porPantalla(numero1, numero2) {
//     document.write("Suma: " +(numero1 + numero2)+"<br>");
//     document.write("Resta: " +(numero1 - numero2)+"<br>");
//     document.write("Multiplicacion: " +(numero1 * numero2)+"<br>");
//     document.write("Division: " +(numero1 / numero2)+"<br>");
//     console.log("*********************************************");

// }

// function calculadora2(numero1, numero2, mostrar = false) {
//     if (mostrar == false) {
//         porConsola(numero1, numero2);
//     } else {
//         porPantalla(numero1, numero2);
//     }

//     return true;
// }
// calculadora2(10, 2, true);

// parametros rest y spread

// function listaFrutas(fruta1, fruta2, ...resto_de_frutas) { // se guarda en un array 
//     console.log("Fruta 1: ", fruta1);
//     console.log("Fruta 2: ", fruta2);
//     console.log(resto_de_frutas);
// }
// var frutas = ["Naranja", "Manzana"]; // puedo tener una coleccion de elementos y se lo puedo pasar como parametro tipo spread
// listaFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco"); 


// funciones anonimas y callbakcs

/*
    - una funcion anonimas no es mas que una funcion que no tiene nombre, y la puedo almacenar en una variable 
    - funcion que no tiene nombre
    - un callback es una funcion que se ejecuta dentro de otra
*/

// let pelicula = function(nombreP) {
//     return "La pelicula es: " + nombreP;
// }

function sumame(numero1, numero2, sumaYmuestra, sumaPordos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPordos(sumar);
    return sumar;
}

sumame(2, 5, dato => {console.log("La suma es: ", dato);},
dato => {console.log("La suma por dos es: ", dato);});