//modo estricto
/*
    uso para la buena practica, se adecua mas a los ultimos estandares de js 
*/ 

'use strict'
// variables
/*
    es un contenedor de informacio, al crear una variable tiene que ser muy descriptiva al momento de definir una variable 
*/

var pais = 'Colombia XD';
var antiguedad = 2012;
var pais_y_continente = pais + antiguedad
console.log(pais_y_continente);

pais = 'Mexico';
antiguedad = 2000;
console.log(pais, antiguedad);

// let y var 
/*
    LET

    permite definir variables limitanto su alcanze al bloque de aclaracion o exprecion donde se esta usando  

    VAR

    define una variable global local en una funcion sin importar el ambito del bloque 
*/ 

// prueba con var 

var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(50)
}
console.log(numero);

// prueba con let 

let texto = 'curso js';
console.log(texto);

if (true) {
    let texto = 'curso html';
    console.log(texto)
}

console.log(texto); 

// const (contantes)

/*
    al igual que var es un contenedor, la diferencia es que no se va a poder cambiar, variar 
*/


// var web = 'url';
// const ip = 'ip.numeros';

// web = 'url cambiada';
// ip = 'ip.diferente';

// console.log(web);
// console.log(ip);

// operadores 

var numero1 = 5;
var numero2 = 10;

var operacion1 = numero1 + numero2;
var operacion2 = numero1 - numero2;
var operacion3 = numero1 * numero2;
var operacion4 = numero1 / numero2;
var operacion5 = numero1 % numero2;

console.log(operacion1);
console.log(operacion2);
console.log(operacion3);
console.log(operacion4);
console.log(operacion5);


// tipos de datos 
var numero_entero = 44;
var cadena_texto = 'esto es una cadena de texto pa';
var cadena_texto_pro = "esto es una cadena de texto pa";
var verdadero_0_falso = true; // puede ser un 0 o un 1
var verdadero_0_falso = false;

var numero_falso = '33.3';
Number(numero_falso);

console.log(String(numero_falso)+7);

// detectar un tipo de dato tipeOf

console.log(typeof numero_entero)       ;


// condicionales 
let edad = 14;
let nombre = 'santiago';

if(edad >= 18) {
    // es mayor de edad 
    console.log(nombre+" tiene "+ edad +" años, es mayor de edad");

    if (edad <= 33) {
        console.log('Todavia eres milenial');
    } else if (edad >= 70) {
        console.log("Eres un anciano"); 
    } else {
        console.log("Ya no eres milenial");
    }
} else {
    // es mejor de edad
    console.log(nombre + " tiene " + edad + " años, es MENOR de edad");
}

// operadores logicos
let year = 2001;

// negacion !=
if ( year != 2023 ) {
    console.log("El año es incorrecto el año es + " + year );
}

// and y &&

if ( year <= 2000 && year <= 2020 && year != 2000 ) {
    console.log('estamos en la era actual')
} else {
    console.log('estamos en la era post moderna')
}

// or //o ||

if ( year == 1999 || year == 2001 && year == 2021) {
    console.log('los años son iguales');
} else {
    console.log('los años son diferentes');
}

// condicional switch

let edad2 = 25;
let imprime = '';

switch (edad) {
    case 18: // Agrega un caso nuevo 
        imprime = 'Acabas de cumplir la mayoria de edad';
        break; // Finaliza el caso 

    case 25: 
        imprime = 'Ya eres un adulto';
        break; // Finaliza el caso 
    
    case 40: 
        imprime = 'Crisis de los 40';
        break; // Finaliza el caso 
    
    case 75: 
        imprime = 'ya eres un anciano';
        break; // Finaliza el caso    

    default: // Cuando no sucede nada de esto 
        imprime = 'edad random'
        break;
}
console.log(imprime);