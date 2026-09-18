// console.log("Hola mundo"); 

if (!localStorage.getItem("lista")){

let coches = [
 {
  marca: "Toyota",
  modelo: "Corolla", 
  anio: 2015,
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

}


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

//render o renderizado
function recuperarDatos(){
  console.log("Entrada a recuperar datos")

   
    let lista = document.getElementById("lista")
   
    let datos =  JSON.parse(localStorage.getItem("lista")) || [];
    console.log("datos localStorage en Recuperar Datos", datos)
    lista.innerHTML = ''


  let tabla = `
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
    `

    datos.forEach((element,index) => {

    tabla += `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${element.marca}</td>
      <td>${element.modelo}</td>
       <td>${element.anio}</td>
       <td>
       <button onclick="borrar(${index})" class="btn btn-danger" >Eliminar</button>
       <button onclick="editar(${index})" class="btn btn-warning">Editar</button>
       </td>
    </tr>
       `
    });

    tabla+= `
      </tbody>
     </table>
    `
 lista.innerHTML = tabla
}

function borrar(index){
  let datos =  JSON.parse(localStorage.getItem("lista")) || [];
  datos.splice(index,1)
  localStorage.setItem("lista",JSON.stringify(datos))
  recuperarDatos()
}

function editar(index){
    let datos =  JSON.parse(localStorage.getItem("lista")) || [];
    if( index >= 0 && index < datos.length){
      let coche = datos[index]; 

      document.getElementById("marca").value = coche.marca;
      document.getElementById("modelo").value = coche.modelo;
      document.getElementById("anio").value = coche.anio;

      window.indiceEdition = index; 

      let subEditBtn = document.querySelector('button[type="submit"]')
      if(subEditBtn){
        subEditBtn.textContent = 'submit'
        subEditBtn.onclick = function(e){
          e.preventDefault();
          guardarCoches()
        }
      } else {
        console.error("No se encontró el botón submit")
      }
    } else {
       console.error("No se encontró el coche a editar")
    }
   borrar(index) 
}

function busqueda(){
  console.log("Aqui busqueda")
  let lista = document.getElementById("lista")
  let datos =  JSON.parse(localStorage.getItem("lista")) || [];

  let buscador = document.getElementById("buscador")
  let filtro = buscador ? buscador.value.toLowerCase().trim() : ""; 

  let filtradoDatos = datos.map((coche, index) => ({coche, index}))
  .filter(({coche}) =>{
    if (!filtro) return true;
    return(
      coche.marca.toLowerCase().includes(filtro) ||
      coche.modelo.toLowerCase().includes(filtro) ||
      String(coche.anio).includes(filtro)
    )
  })

    let tabla = `
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
    `

    if(filtradoDatos.length === 0 ){
      tabla += `<tr><td> No se encontraron resultados </td></tr>`
    } else {
      filtradoDatos.forEach(({coche,index}) => {
        tabla += `
     <tr>
      <th scope="row">${index + 1}</th>
      <td>${coche.marca}</td>
      <td>${coche.modelo}</td>
       <td>${coche.anio}</td>
       <td>
       <button onclick="borrar(${index})" class="btn btn-danger" >Eliminar</button>
       <button onclick="editar(${index})" class="btn btn-warning">Editar</button>
       </td>
     </tr>
       `
    });
    
    }

    tabla+= `
      </tbody>
     </table>
     `
  lista.innerHTML = tabla
}