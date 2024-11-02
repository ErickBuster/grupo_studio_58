
const numeros = [] // create

console.log(numeros); // read

numeros.push(6) // update
console.log(numeros);

numeros.pop() // delete
console.log(numeros);

const numeros2 = [0, 1] // create
const nuevo_valor = 50

const update_numeros = [...numeros2, nuevo_valor] // update
console.log(update_numeros, numeros2);