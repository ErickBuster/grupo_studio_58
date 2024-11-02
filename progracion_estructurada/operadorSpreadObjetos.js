/* Operador spread en objetos(...) */
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

const armas_fuego = ["pistola", "sniper"]
const armas_cuerpo = ["cuchillo", "machete"]

// const nuevo_personaje = personaje // ! mala practica
const nuevo_personaje = {
	...personaje,
	
	alias: "BlackWidow",
	nombre: "Natasha",
	edad: 35,
	apellido: "Romanof",
	trajes: ["nieve", "dark"],
	frase: null,
	armas: [...armas_cuerpo, ...armas_fuego],
}
/* nuevo_personaje.alias = "BlackWidow"
nuevo_personaje.nombre = "Natasha"
nuevo_personaje.edad = 35
nuevo_personaje.apellido = "Romanof"
nuevo_personaje.trajes = ["nieve", "dark"]
nuevo_personaje.frase = null */




console.log("personaje: ", personaje);
console.log("nuevo_personaje: ", nuevo_personaje);


/* delete personaje.apoyo


console.log("personaje: ", personaje);
console.log("nuevo_personaje: ", nuevo_personaje); */