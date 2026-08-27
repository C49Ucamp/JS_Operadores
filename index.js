// console.log("Hola mundo"); 

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
// console.log(recibirCoches)
// console.log(typeof(recibirCoches))
// console.log("----------")
let objeto = JSON.parse(recibirCoches)
// console.log(objeto)


document.addEventListener('DOMContentLoaded', function(){
  console.log("Entrada - Mostrar la lista de coches")
  recuperarDatos()
})


function guardarCoches(){
  console.log("Entrada a guardar datos")
 let marca = document.getElementById("marca").value;
 let modelo = document.getElementById("modelo").value;
 let anio  = document.getElementById("anio").value;

  let inputValues = ({
    "marca": marca, 
    "modelo": modelo, 
    "anio": anio 
  })

  let datos =  JSON.parse(localStorage.getItem("lista")) || [];

  datos.push(inputValues)

  console.log("datos enviados desde el push", datos)

  localStorage.setItem("lista", JSON.stringify(datos))

  console.log("datos después del localStorage", datos)

 
  //Limpiar campos
  document.getElementById("marca").value = '';
   document.getElementById("modelo").value = '';
   document.getElementById("anio").value = ''; 

  recuperarDatos()
  
}

function recuperarDatos(){
  console.log("Entrada a recuperar datos")

   
    let lista = document.getElementById("lista")
   
    let datos =  JSON.parse(localStorage.getItem("lista")) || [];
    console.log("datos localStorage en Recuperar Datos", datos)
    lista.innerHTML = ''

    datos.forEach(element => {
  
       lista.innerHTML += `

       <table class="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Marca</th>
      <th scope="col">Modelo</th>
      <th scope="col">Año</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${element.marca}</td>
      <td>${element.modelo}</td>
       <td>${element.anio}</td>
    </tr>
  </tbody>
</table>
       `
    });


}