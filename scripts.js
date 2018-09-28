// //Ejemplo nombre y apellido
// var nombre = "Lariza"; //string
// var apellido = "Peña";
// var nombre_completo = nombre + " " + apellido; //Concatenar variables
//
// var edad = 37; // Number
// var casado = true; // Boolean
// //Console.log Es para guardar
// console.log(nombre);
// console.log(nombre_completo);
// console.log(edad);
// console.log(casado);
// console.log("Mi nombre es " + nombre_completo);
//
//
// //Horas de sueño
// //let dormir = 9;
// //let despertar = 8;
//
// //Ejemplo dormir
// let dormir = Number(prompt("A que hora te dormiste"));
// let despertar = Number(prompt("A que hora te dormiste"));
//
//
// let horas_dormidas = 24 - (24-despertar) - dormir;
//
// console.log("En total dormi " + horas_dormidas + " horas");
//
// //Validar
// //Ejemplo contraseña
// var nombre = "Lariza";
// console.log(nombre);
// //Saber si sino
// if(nombre == "Lariza"){
//   console.log("Eres Lariza");
// }else if (nombre == "Edgar"){
//     console.log("No eres tu");}
//
// //Regaño
// for(let contador = 0; contador <= 5; contador++){
//   console.log(contador);}


//Control shift 7 (es para descomentar y comentar todo)




//EJERCICIO OPERACIONES:

//PRESUPUESTO:
function EjercicioOperacion(){
  let ingreso1 = Number(prompt("Ingresa el ingreso1"));
  let ingreso2 = Number(prompt("Ingresa el ingreso2"));
  let gasto1 = Number(prompt("Ingresa el gasto1"));
  let gasto2 = Number(prompt("Ingresa el gasto2"));
  let gasto3 = Number(prompt("Ingresa el gasto3"));

  let total = ingreso1 + ingreso2 - gasto1 - gasto2 - gasto3;
    console.log("En total tienes " + total + " de presupuesto mensual");
}

//FIN :D




//EJERCICIO VALIDACIONES:

//HORARIO DE LA SEMANA:
function EjercicioValidacion(){
  var dia = (prompt("¿Que dia es hoy?"));

  if (dia == "lunes"){
    console.log("Hoy toca historia");
  }

  if (dia == "martes"){
    console.log("Hoy toca natacion");
  }

  if (dia == "miercoles"){
    console.log("Hoy toca historia");
  }

  if (dia == "jueves"){
      console.log("Hoy toca esgrima");
  }

  if (dia =="viernes"){
      console.log("Hoy tienes dia libre");
  }

  if (dia == "sabado"){
      console.log("disfruta tu dia, estas libre");
  }

  if (dia == "domingo"){
      console.log("Disfruta el dia libre");
  }
}
//FIN :)




//EJERCICIO CICLOS:

//PESO:
function EjercicioCiclo(){
  var peso = 100;
  var peso_ideal = Number(prompt("¿Cuál sería tu peso ideal?"));
  var kilos_menos = Number(prompt("¿Cuántos kilos bajas por semana?"));

  for(semana = 0; peso_ideal < peso; semana++){
    peso = peso - kilos_menos;}
  console.log("Necesitas " + semana + " semanas para bajar de peso");
}


//EJEMPLO 2:
function EjercicioCiclo2(){
  var peso = 100;
  var peso_ideal = Number(prompt("¿Cuál sería tu peso ideal?"));
  var kilos_menos = Number(prompt("¿Cuántos kilos bajas por semana?"));
  var semana = 0;
  var tem;

for(tem = peso; peso_ideal < tem; tem -= kilos_menos){
  semana++;}
  console.log("Necesitas " + semana + " semanas para llegar al peso ideal");
}




//EJERCICIO PIEDRA PAPEL O TIJERAS:
function JUEGOPPoT(){

  let modo = prompt("¿Quieres jugar contra la maquina?");

  if (modo == "si") {
// Si modo es "si" usuario juega contra maquina y si no es "else" y juegan 2P"
    let jugador1 = prompt("¿Piedra, papel o tijera?");

    let Aleatoreo = Math.round(Math.random()*2);
    let Maquina;

    if (Aleatoreo == 0) {
      Maquina = "piedra";
    }
    if (Aleatoreo == 1) {
      Maquina = "papel";
    }
    if (Aleatoreo == 2) {
      Maquina = "tijera";
    }

    console.log(Aleatoreo);
    console.log(Maquina);

    if (jugador1 == Maquina) {
      alert("EMPATARON!!");
    }
    if (jugador1 == "papel" && Maquina == "tijera"){
      alert("JUGADOR 2 GANA!!");
    }
    if (jugador1 == "papel" && Maquina == "piedra"){
      alert("JUGADOR 1 GANA!!");
    }
    if (jugador1 == "tijera" && Maquina == "papel"){
      alert("JUGADOR 1 GANA!!");
    }
    if (jugador1 == "tijera" && Maquina == "piedra"){
      alert("JUGADOR 2 GANA!!");
    }
    if (jugador1 == "piedra" && Maquina == "papel"){
      alert("JUGADOR 2 GANA!!");
    }
    if (jugador1 == "piedra" && Maquina == "tijera"){
      alert("JUGADOR 1 GANA!!");
    }


}else {

let jugador1 = prompt("¿Piedra papel o tijera?");
let jugador2 = prompt("¿Piedra papel o tijera?");

  if (jugador1 == jugador2) {
    alert("EMPATARON!!");
  }
  if (jugador1 == "papel" && jugador2 == "tijera"){
    alert("JUGADOR 2 GANA!!");
  }
  if (jugador1 == "papel" && jugador2 == "piedra"){
    alert("JUGADOR 1 GANA!!");
  }
  if (jugador1 == "tijera" && jugador2 == "papel"){
    alert("JUGADOR 1 GANA!!");
  }
  if (jugador1 == "tijera" && jugador2 == "piedra"){
    alert("JUGADOR 2 GANA!!");
  }
  if (jugador1 == "piedra" && jugador2 == "papel"){
    alert("JUGADOR 2 GANA!!");
  }
  if (jugador1 == "piedra" && jugador2 == "tijera"){
    alert("JUGADOR 1 GANA!!");
  }
}
}
