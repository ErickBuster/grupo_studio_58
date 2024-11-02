/* 
	Realizar una calculadora que realice operaciones aritmeticas
	+ - * / **
*/

/* Valores del usuario inicial */
// const opcion = "**" // la opcion que teclea el usuario
// const numero = 2 // valor 1 que ingreso el usuario
// const numero_dos = 2 // valor 2 que ingreso el usuario
// 
// let resultado = undefined // resultado que le muestras al usuario de la operacion

/* 
opcion 0

if(opcion === "+"){
	resultado = numero + numero_dos
}else if(opcion === "+"){
	resultado = numero + numero_dos
}else if(opcion === "-"){
	resultado = numero - numero_dos
}
*/

/* 
opcion 1

switch (opcion) {
	case "+":
		resultado = numero + numero_dos
		break;
	case "-":
		resultado = numero - numero_dos
		break;
	default:
		console.error("la opcion no existe")
		return
} 
*/

/* function sumar(a, b) {
	return a + b
}

const sumar2 = (a, b) => a + b */

/* opcion 2 */
function esUnNumero(numero) {
	return !isNaN(numero) && typeof numero === 'number'; // true = si es un numero
}

function validarNumeros(a, b) {
	if (!esUnNumero(a) || !esUnNumero(b)) {
		console.log("Coloca un numero porfavor")
		return true
	}
	return false
}

function sumar(a, b) {
	if (validarNumeros(a, b)) return 0
	return a + b
}

function restar(a, b) {
	if (validarNumeros(a, b)) return 0
	return a - b
}
function multiplicar(a, b) {
	if (validarNumeros(a, b)) return 0
	return a * b
}
function dividir(a, b) {
	if (validarNumeros(a, b)) return 0
	return a / b
}
function potencia(a, b) { // 5, 10
	if (validarNumeros(a, b)) return 0
	return a ** b
}

const operacion = {
	"+": sumar,
	"-": restar,
	"*": multiplicar,
	"/": dividir,
	"**": potencia,
}

/* Utilizando node */
// const existeOpcion = Object.keys(operacion).includes(opcion)
// if (!existeOpcion) {
// 	throw new Error("Opcion invalida")
// 	// console.error("Opcion invalida")
// 	// return 0
// }

// resultado = operacion[opcion](numero, numero_dos)
// // resultado = potencia(5, 10)
// console.log(resultado)

/* Utilizando html */
function devolverNuevosValores() {
	const numero_uno = parseInt(document.getElementById("numero_uno").value)
	const numero_dos = parseInt(document.getElementById("numero_dos").value)
	return [numero_uno, numero_dos]
}

function imprimir_resultado(resultado) {
	document.getElementById("resultado").innerText = resultado
}

const btnSuma = document.querySelector("#suma")
const btnResta = document.querySelector("#resta")
const btnMultiplicacion = document.querySelector("#multiplicacion")




btnSuma.addEventListener("click", () => {
	const [numero_uno, numero_dos] = devolverNuevosValores()
	const resultado = operacion["+"](numero_uno, numero_dos)
	imprimir_resultado(resultado)
})
btnResta.addEventListener("click", () => {
	const [numero_uno, numero_dos] = devolverNuevosValores()
	const resultado = operacion["-"](numero_uno, numero_dos)
	imprimir_resultado(resultado)
})
btnMultiplicacion.addEventListener("click", () => {
	const [numero_uno, numero_dos] = devolverNuevosValores()
	const resultado = operacion["*"](numero_uno, numero_dos)
	imprimir_resultado(resultado)
})