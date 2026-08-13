console.log("Hola mundo"); 

function pesos(){
  let pesos = document.getElementById("pesos").value
  let dolar = 17
  let res = document.getElementById("resultado")

  res.innerHTML = "Dolares: " + (pesos / dolar)
}


document.addEventListener('DOMContentLoaded', function(){
  let nombre = document.getElementById("nombre")
  let mensaje = document.getElementById("mensaje")

  nombre.onchange = function(){
    mensaje.textContent = "Mensaje: Tu nombre es " + nombre.value;
  }
} )

let y = Math.floor(Math.random() * 10 + 1);
let adivinar = 1; 

function adivina(){
  let x = document.getElementById("adivina").value;
  if(x == y){
    console.log("acertaste"+ x + "=" + y)
    document.getElementById("result").innerHTML = "¡Acertaste!"
  } else if (x > y){
    adivinar++;
    console.log("Intenta con un número más pequeño"+ x + "=" + y);
    document.getElementById("result").innerHTML = "Intenta un número más pequeño"
  } else {
    adivinar++;
    console.log("Intenta un número más grande"+ x + "=" + y)
    document.getElementById("result").innerHTML = "Intenta un número más grande"
  }
}