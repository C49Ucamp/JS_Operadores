
console.log("Hola mundo")

let diaHoy = 22
let diaAyer = 21
let diaMañana = 23
let mesHoy = 7
let mesAnterior = 6
let comparacion

comparacion = diaHoy > diaAyer; 
document.write("Resultado:"+ comparacion + "</br>"); 


comparacion = mesHoy == mesAnterior; 
// comparacion = diaMañana > diaMañana 

 document.write("Resultado:"+ comparacion + "</br>")



// (valor1 , valor2, valor 3) Parametros
// Si el primer valor es true, devuelve true. Siempre y cuando ambos sean true. Y si no, devuelve false.
comparacion = (diaHoy > diaAyer) && (mesHoy == mesAnterior) 
// comparacion = true y false
document.write("Resultado" + comparacion + "</br>")

//S el primer valor es true, devuelve true. Si el primer valor es false, retorna false. 
comparacion = (diaHoy > diaAyer) || (mesHoy == mesanterior)
document.write("Resultado" + comparacion + "</br>")


let nota = 5;
console.log( "En mi examen saque: " + nota)

//Si nota es menor o igual a 5  ENTONCES reprobé
// if(nota <= 5) {
//     calificacion = "Reprobe";
// } else {
//     calificacion = "Aprobe"; 
// }

// console.log("Recibí una nota de: ", calificacion)

// Operador ternario: (condicion ? verdaro : falso)
let calificacion = nota < 5 ? "reprobe" : "aprobado"; 

console.log("Recibí una nota de: ", calificacion)



i = 0; // Inicialización de la variable contador
 
// Condición: Mientras la variable contador sea menor de 5
while (i < 6){
  console.log("Valor de i:", i);
  i = i + 1; // Incrementamos el valor de i
}

