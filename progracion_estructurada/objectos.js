/* 
    Objetos se identificar por llaves `{}` y clave: valor
*/
/* 
const arreglo = []
const arreglo2 = new Array()

console.log(arreglo);
console.log(arreglo2); 
*/

function sumar(a, b) {
    return a + b
}

const usuario = {
    nombre: "diana",
    apellido: "fuentes",
    correo: "email@gmail.com",
    edad: 25,
    hobbies: ["leer", "dibujar", "escuchar musica"],
    domicilio: {
        ciudad: "CDMX",
        pais: "Mexico"
    },
    realizarSuma: sumar
}

const usuario2 = {
    nombre: "brenda",
    apellido: "torres",
    correo: "email2@gmail.com",
    edad: 25,
    hobbies: ["leer", "dibujar", "escuchar musica"],
    domicilio: {
        ciudad: "CDMX",
        pais: "Mexico"
    },
    realizarSuma: sumar
}
const numeros = [1, 2, 3, 4]
const misUsuarios = [
    {
        nombre: "diana",
        apellido: "fuentes",
        correo: "email@gmail.com",
        edad: 25,
        hobbies: ["leer", "dibujar", "escuchar musica"],
        domicilio: {
            ciudad: "CDMX",
            pais: "Mexico"
        },
        realizarSuma: sumar
    },
    {
        nombre: "brenda",
        apellido: "torres",
        correo: "email2@gmail.com",
        edad: 25,
        hobbies: ["leer", "dibujar", "escuchar musica"],
        domicilio: {
            ciudad: "CDMX",
            pais: "Mexico"
        },
        realizarSuma: sumar
    }
]

// const usuario2 = new Object()
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.hobbies);
console.log(usuario.hobbies[0]);
console.log(usuario.domicilio.pais);
console.log(usuario.realizarSuma(1, 2));
// console.log(usuario2);

console.log(misUsuarios[1].nombre);


function regresarPropiedad(key) { // key = edad
    const usuario = {
        nombre: "diana",
        apellido: "fuentes",
        correo: "email@gmail.com",
        edad: 25,
        hobbies: ["leer", "dibujar", "escuchar musica"],
        domicilio: {
            ciudad: "CDMX",
            pais: "Mexico"
        },
        realizarSuma: sumar
    }


    /* const existe2 = Object.keys(usuario).includes(key)
    return existe2 ? usuario[key] : "La key/propiedad no existe" */

    let existe = false // true
    const llavesUsario = Object.keys(usuario) // arreglo con las claves del objecto (usuario)
    console.log(llavesUsario)
    // index = 0, 1,2, 3
    for (let index = 0; index < llavesUsario.length; index++) {
        if (llavesUsario[index] === key) {
            existe = true
            break
        }
    }

    // condicion ? usuario[key] : "La key/propiedad no existe"
    // return existe ? usuario[key] : "La key/propiedad no existe"
    const edad = usuario.edad > 18 ? "Eres mayor de edad" : "eres menor de edad"
    console.log(edad);
    
    if (existe) {
        return usuario[key] // edad, nombre, /// undefined
    } else {
        return "La key/propiedad no existe"
    }
}

// index = 0... 5
for (let index = 0; index < 10; index++) {
    if (index === 5) { // false, true
        break
    }
    console.log(index) // 0 ... 
}

const edad = regresarPropiedad("edad") // 25, undefined
console.log(edad);
