/* 

OPERADORES LOGICOS Y DE COMPARACION


= asignacion
== compara el valor
=== comparar el valor y el tipo de dato
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que
!= valida si es diferente el valor
!== valida si es diferente el valor y el tipo de dato
! contrario de true -> !true // falso
^ xor
&& and 
||  or 

*/

const numero_uno = 45 // number
const numero_dos = 90 // number
const numero_tres = "90" // string
const numero_cuatro = numero_uno // number
const numero_cinco = 90 // number

/* console.log(numero_dos === numero_tres); // 90 == 90 && number == string
console.log((numero_dos == numero_tres) && (typeof numero_dos == typeof numero_tres)); // 90 == 90 && number == string


console.log(numero_dos > numero_uno);
console.log(numero_dos < numero_uno);

console.log(numero_dos >= numero_cinco);
console.log(numero_dos <= numero_uno);

console.log(numero_dos != numero_uno);
console.log(numero_dos != numero_cinco);

console.log(numero_dos !== numero_tres); */

const verdadero = true
console.log(!verdadero);


const edad1 = 18
const edad2 = 25

if (0) {
    console.log("verdadero")
} else {
    console.log("falso")
}



/* 
Tablas de verdad (!) NOT
p | q
-----
0 | 1
1 | 0

true = 1
false = 0
*/

if (!(edad1 >= 18 && edad1 < 20)) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

/* 

Tabla de verdad (&&) AND
p q | r
-------
0 0 | 0
0 1 | 0
1 0 | 0
1 1 | 1

Tabla de verdad (||) OR
p q | r
-------
0 0 | 0
0 1 | 1
1 0 | 1
1 1 | 1

*/
// 1 && 0 = 0 

// if (edad1 < 18) {
//     console.log("Edad1 es menor");
//     return
// }
// if (edad2 < 30) {
//     console.log("Edad2 es menor");
//     return
// }

// console.log("son mayores edad");

/* 
vivir_en_cdmx = True
boletos_disponibles = True
tener_tiempo_libre = True
invite_palomitas = True
tener_billullo = True

if vivir_en_cdmx:
    print("Si podremos ir...")
    if boletos_disponibles:
        print("Compramos boletos")
        if tener_tiempo_libre and tener_billullo:
            print("Puedo programar mi ida al cine")
            if invite_palomitas:
                print("Voy a poder yo comprar las crepas")
            else:
                print("meto hamburguesas de contrabando")
        else:
            print("Busca otro dia para ir al cine")
    else:
        print("Esperar a que haya boletos")
else:
    print("No podremos ir...") */


const vivir_en_cdmx = true
const boletos_disponibles = true
const tener_tiempo_libre = true
const invite_palomitas = false
const tener_billullo = true

if (!vivir_en_cdmx) {
    console.log("No podremos ir...")
    return
}
if (!boletos_disponibles) {
    console.log("Esperar a que haya boletos");
    return
}

// false  || false = false
// 0 || 0 = 0
if(!tener_tiempo_libre || !tener_billullo){
    console.log("Busca otro dia para ir al cine");
    return
}

console.log("Puedo programar mi ida al cine");

/* 
if(!invite_palomitas){
    console.log("meto hamburguesas de contrabando");
}else{
    console.log("Voy a poder yo comprar las crepas");
}
*/
if(!invite_palomitas){
    console.log("meto hamburguesas de contrabando");
    return
}
console.log("Voy a poder yo comprar las crepas");

/* operador ternario */
// const comida = invite_palomitas ? "Voy a poder yo comprar las crepas" : "meto hamburguesas de contrabando"
console.log(invite_palomitas ? "Voy a poder yo comprar las crepas" : "meto hamburguesas de contrabando");

/* if( edad1 >= 18 && edad2 > 30 ){
    console.log("son mayores edad");
}else{
    if(!(edad1 >= 18)){ // false
        console.log("Edad1 es menor");
    }
    if(!(edad2 > 30)){ // true
        console.log("Edad2 es menor");
    }
    console.log("Alguno es menor de edad ");
}

 */
// 1 || 0 = 1
/* if( edad1 >= 18 || edad2 > 30 ){
    console.log("Almenos uno es mayor edad");
}else{
    console.log("Alguno es menor de edad ");
}
 */


