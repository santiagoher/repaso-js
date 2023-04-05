
/*
Programa que pida 2 numeros y nos diga cual es el mayor y el menor y si son iguales
PLUS: si los numeros son menores o iguales a 0, vuelva a pedir los datos
*/ 

let numero1 = parseInt(prompt('Inserte numero', 0));
let numero2 = parseInt(prompt('Inserte numero', 0));


while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Inserte numero', 0));
    numero2 = parseInt(prompt('Inserte numero', 0));
}

if (numero1 >= numero2) {
    console.log('El numero 1 es mayor');
    if (numero1 == numero2) {
        console.log('Los numeros son iguales');
    }
} else {
    console.log('El numero 2 es menor');
}