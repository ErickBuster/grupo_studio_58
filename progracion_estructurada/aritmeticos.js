/* 
+ suma
- resta
* multiplicacion
/ division
% residuo
++
--

** exponente
// division -> regresa solo numeros enteros
*/

const numero_uno = 10
const numero_dos = 20

console.log(numero_uno + numero_dos);
console.log(numero_uno - numero_dos);
console.log(numero_uno * numero_dos);
console.log(numero_uno / numero_dos);
console.log(numero_uno % numero_dos);

const par = 10
const impar = 7
 // 0

const password = "abcdef"
console.log((par % 2 === 0) ? "numero par" : "numero impart");
console.log((impar % 2 === 0) ? "numero par" : "numero impart");

console.log((password.length % 2) === 0);

if(password.length >= 10 || (password.length % 2) === 0){
    console.log("Contraseña segura");
}

let numero_tres = 0
// numero_tres = numero_tres + 1
// numero_tres += 1
numero_tres++
numero_tres--

console.log(numero_tres);

const cosas = [15, "diana", true, [1, 2, 3, 4]] // 4 valores
// [ 0 , 1, 2 , 3]
console.log(cosas[0]);
console.log(cosas[1]);
console.log(cosas[2]);
console.log(cosas[3]);
console.log(cosas[3][1]);

