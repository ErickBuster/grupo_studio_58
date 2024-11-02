/* Operador spread (...) */
const numeros = [1, 2, 3, 4, 5]
console.log("numeros: ", numeros);
const numeros2 = numeros // ! 0xAF3F se esta almacenando la ruta de memoria y no los valores - esto es una mala practica
console.log("numeros2: ", numeros2);

numeros.pop() // tambien se ve afectado numeros2

console.log("numeros: ", numeros);
console.log("numeros2: ", numeros2);

/* Ahora utilizando el operado spread */
const numeros_original = [1, 2, 3, 4, 5]
const numeros3 = [...numeros_original] // [...1, 2 ,3 , 4 ,5]
console.log("numeros_original: ", numeros_original);
console.log("numeros3: ", numeros3);

numeros_original.pop()

console.log("numeros_original: ", numeros_original);
console.log("numeros3: ", numeros3);

const numeros4 = [0, ...numeros3, 6] // [0, [1, 2, 3, 4, 5], 6]
// [0, 1, 2, 3, 4, 5, 6]
console.log("numeros4: ", numeros4);

/* Sin utilizar spread */
let numeros5 = [0]
for (let index = 0; index < numeros3.length; index++) {
	numeros5.push(numeros3[index])
}
numeros5.push(6)
console.log("numeros5: ", numeros5);


let numeros6 = [0]
for (const index in numeros3) { // index imprime la posicion
	console.log("index: ", index);
	numeros6.push(numeros3[index])
}
numeros6.push(6)
console.log("numeros6: ", numeros6);





