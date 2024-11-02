/* Desestructuracion de Arreglos */
const numeros = [1, 2, 3, 4, 5]

// Obtener los valores de manera tradicional
/* const numero_uno = numeros[0]
const numeros_dos = numeros[1]
const numeros_tres = numeros[2] */

/* aplicando desestructuracion */
const [numero_uno, numeros_dos, numeros_tres, _, numero_cinco] = numeros

console.log(numero_uno, numeros_dos, numeros_tres, _, numero_cinco);


/* Desestructuracion en objetos */
const personaje = {
	alias: "Iron man",
	nombre: "Tony",
	edad: 45,
	apellido: "Stark",
	trajes: ["mark I", "Mark L", "Mark X"],
	frase: "Soy ironman",
	apoyo: [
		{
			nombre: "Capitan america",
			poder: "Super fuerza"
		},
		{
			nombre: "Hulk",
			poder: "Super fuerza"
		}
	],
	vivo: true
}

console.log(personaje.alias);
console.log(personaje["alias"]);
console.log(personaje.apoyo[0].nombre)

// Obtener los valores de manera tradicional
/* const nombre = personaje.nombre
console.log(nombre);
const trajes = personaje.trajes
console.log(trajes); */

/* aplicando desestructuracion */
const { nombre, trajes } = personaje
console.log(nombre, trajes);


/* const { apoyo } = personaje
console.log(apoyo);
const [personaje_apoyo_uno] = apoyo
console.log(personaje_apoyo_uno);
const { nombre: nombreApoyoUno } = personaje_apoyo_uno
console.log(nombreApoyoUno); */

const { nombre: nombreApoyoUno } = personaje.apoyo[0]
console.log(nombreApoyoUno);