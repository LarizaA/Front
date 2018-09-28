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


//EJERCICIO FIBONACCI ARRAY:
function Fibonacci(){

  let numero = Number(prompt("Ingresa el nùmero final"));
  let f = []; //array
  for (var n = 0; n <= numero; n++) {

    if (n == 0) {
      f[n] = 0;
    }
    if (n == 1) {
      f[n] = 1;
    }
    if (n > 1) {
      f[n] = f[n-1] + f[n-2];
    }

console.log("El elemento " + (n+1) + " de la serie es " + f[n])
  }
}


//EJERCICIO FIBONACCI CON VARIABLES:
function Fibonacci2(){

  let numero = Number(prompt("Ingresa el número final"));
  let f0 = 0;
  let f1 = 1;
  let f;

  for (var n = 0; n <= numero; n++) {
    if (n == 0) {
      console.log("El elemento 1 de la serie es: 0");
    }
    if (n == 1) {
      console.log("El elemento 2 de la serie es: 1");
    }
    if (n > 1 ){
      f = f1 + f0;
      console.log("El elemento " + n + " de la serie es: " + f);
      f0 = f1;
      f1 = f;
    }


  }





}





//for es para contar de 0 hasta "x" número
// if es para pregunntar "si" "tal es mayor o menor o == que tal"
// {} son un "entonces"
// array contiene varios elementos
