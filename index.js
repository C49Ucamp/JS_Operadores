class Rectangulo {
  constructor(alto,ancho){
    this.alto = alto;
    this.ancho = ancho; 
  }

  get rectangulo(){
     return this.calculoArea();
  }

  calculoArea(){
    return this.alto * this.ancho; 
  }
}

const rec = new Rectangulo(20,10); 

console.log(rec.rectangulo); 


class Animal {
  constructor(nombre){
    this.nombre = nombre;
  }

  get Nombre(){
    return this.llamar(); 
  }

  llamar(){
    console.log("Estoy llamando a:" + this.nombre);
  }
}

class Perro extends Animal {
constructor(nombre, raza){
super(nombre)
this.raza = raza; 
}

ladra(){
 super.llamar();
 console.log(`${this.raza} es muy bonito`)
}
}

const miPerro = new Perro("Rex", "Pastor Alemán");
miPerro.ladra(); 



// const miPerro = new Animal("Firulais")
// console.log(miPerro.Firulais); 

