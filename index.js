console.log("Hola mundo"); 

let coches = [
 {
  marca: "Toyota",
  modelo: "Corolla", 
  anio: 2015
 }, 
  {
  marca: "Nissan",
  modelo: "Versa", 
  anio: 2022
 }, {
  marca: "Chevrolet",
  modelo: "Aveo", 
  anio: 2027
 }
]

localStorage.setItem("lista", JSON.stringify(coches))

let recibirCoches = localStorage.getItem("lista")
console.log(recibirCoches)
console.log(typeof(recibirCoches))
console.log("----------")
let objeto = JSON.parse(recibirCoches)
console.log(objeto)


function guardarCoches(){

 let marca = document.getElementById("marca").value;
 let modelo = document.getElementById("modelo").value;
  let anio  = document.getElementById("anio").value;

    let inputValues = ({
    "marca": marca, 
    "modelo": modelo, 
    "anio": anio 
  })


  console.log("Entrada a guardar datos")

  let datos = JSON.parse(localStorage.getItem("lista")) ? JSON.parse(localStorage.getItem("lista")) : []

  console.log(datos)

  localStorage.setItem("lista", JSON.stringify(datos))

  datos.push(inputValues)


  // let miscoches = localStorage.setItem("lista", JSON.stringify(coches))
  // let cochesObj = JSON.parse(miscoches)


  recuperarDatos()
  
}

function recuperarDatos(){
  console.log("Entrada a recuperar datos")
  if((localStorage.marca != undefined) && (localStorage.modelo != undefined) && (localStorage.anio !=undefined)){
    let lista = document.getElementById("lista")
    let datos = JSON.parse(localStorage.getItem("lista")) ? JSON.parse(localStorage.getItem("lista")) : []
    lista.innerHTML = ''
    datos.forEach(element => {
       console.log(element)
       lista.innerHTML += `
       <p> ${element.marca}</p>
       <p> ${element.modelo}</p>
       <p> ${element.anio}</p>
       `
    });

  } else {
    document.getElementById("lista").innerHTML = "No se han agregado coches"
  }
}