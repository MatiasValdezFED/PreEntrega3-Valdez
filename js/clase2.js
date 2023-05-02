//Condicionales

// if (condicion){
// //respuesta
// }else
// {
// //Otra respeusta
// };

//Operadores Lógicos

// == igualdad
// > mayor que
// < menor que
// != distinto
// >= mayor o igual
// <= menor o igual
// === estrictamente igual
// !== estructamente diferente
// && AND
// || OR

const puntaje = 1000

if (puntaje > 500) {
    console.log ("Ganaste")
} else {
    console.log ("Perdiste")
};

const efectivo = 300
const credito = 400
const totalPagar = 600
const disponible = efectivo + credito

console.log (disponible)

//Si alguno de los OR se cumple, arroja el primer ELSE
if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log ("Podemos comprar")
} else {
    console.log ("Saldos insuficientes")
};

const texto = prompt ("Ingrese la palabra 'Coderhouse'")

if (texto === 'Coderhouse' ) {
    console.log("La respuesta es correcta")
} else {
    console.log("La respuesta es incorrecta")
};

const precio = prompt ("Ingrese el precio del producto")

if (precio > 100 ) {
    alert("Es caro")
} else {
    alert("Es barato")
};