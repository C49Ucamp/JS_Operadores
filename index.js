console.log("Hola mundo")

// 1, 2, 3
let canasta = ["banana","manzana","mango","fresa"]
//0, 1, 2, 3
console.log(canasta.length)

let escoger = canasta[2]
console.log("escogimos:", escoger)

canasta.forEach((elemento, indice, array) =>
  console.log(elemento,indice)
)

// canasta.forEach(function(elemento, indice, array){
//   console.log("Sin Arrow function:",elemento,indice)
// } 
// )

let valores = [1, 3, 34, 56, 2]
console.log("Antes del function: ",valores)

 function comparar(a, b){
  console.log("Aqui funcion")
  return a - b
 }

 valores.sort(comparar)
 console.log("Despues del function", valores) 


// console.log(comparar)
// console.log("a",a)

// Si devuelve -1 entonces "a" se va a situar en un indice menor que "b"
// Si devuelve 1, entonces "b" se va a situar en indice menor que "a"
// Si devuelve 0, entonces no hay cambios en los valores 

