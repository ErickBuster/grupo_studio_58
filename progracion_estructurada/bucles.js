const cosas = [15, "diana", true, [1, 2, 3, 4]] // 4 valores
// [ 0 , 1, 2 , 3]
console.log(cosas[0]);
console.log(cosas[1]);
console.log(cosas[2]);
console.log(cosas[3]);
console.log(cosas[3][1]);


console.log(cosas.length + " elementos"); // 4
/* 
    Ciclo for
    tiene 3 parametros separados por ;
    1. creacion de la variable que va a iterar (se ejecuta solo la primera vez)
    2. condicion
    3. accion
*/

// i = 0, 1, 2, 3, 4 
// condicion: true, true, true, true, false
for (let i = 0; i < cosas.length; i++) {
    if (Array.isArray(cosas[i])) {
        console.log(cosas[i][1]); // 2
        break
    } else {
        // continue
        console.log(cosas[i]) // 15, "diana", true, [1, 2, 3, 4]
    }
    // ...
}
/* 
ciclo While

// Primero valido y despues ejecuto
while (condition) { // mientras sea verdadero
    // ejecuto lo de aqui adentro
}
*/

// posicion: 0, 1, 2
let posicion = 0
while (posicion < cosas.length) {

    if (posicion === 2) {
        break
    }
    console.log(cosas[posicion]) // 15, diana, true
    posicion++
}

/* 
 ciclo Do While // primero se ejecuta la logica y despues hago la validacion
do {
    
} while (condition){
    
}

*/

posicion = 0
// posicion: 0, 1, 2
do {
    if (posicion === 2) { // false, false, true
        break
    }
    console.log(cosas[posicion]) // 15, diana
    posicion++
} while (posicion < cosas.length)


const numeros = [1, 2, 3, 4]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}
// posicion
for (const numero in numeros) {
    console.log(numeros[numero])
}

//  Otras formas de imprimir utilizando funciones
/* function imprimir_numeros(numero){
    console.log(numero)
}
imprimir_numeros(100) */
/* const imprimir_numeros = (numero) => {
    console.log(numero)
}
imprimir_numeros(100) */

numeros.forEach(numero => console.log(numero))


/* switch 
    switch (key) { // valor o Condicion
    case value: // Va a venir a buscar la condicion que cumpla o condicion
    // Ejecutara el codigo dentro
    break;

    default:
        break;
    }

*/
const edad = 15

if (edad < 18) {
    console.log("eres menor de edad");
} else {
    console.log("eres mayor de edad");
}

switch (edad) {
    case edad < 18:
        console.log("switch: eres menor de edad");
        // break;
    case edad >= 18:
        console.log("eres mayor de edad");
        break;
    default:
        console.log("switch: eres mayor de edad");
        break;
}