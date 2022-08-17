// Import stylesheets
import './style.css';
// Agarramos los imput
let form = document.querySelector('#form_juego');
let resultado = document.querySelector('#resultado');
let spanWinner = document.querySelector('#nro_ganandor');
let div = document.querySelector('#estadisticas');

// Creamos las funciones
form.addEventListener('submit', sortear);
document.querySelector('#btn_reset').addEventListener('click', jugarOtraVez);
document
  .querySelector('#btn_estadisticas')
  .addEventListener('click', verEstadisticas);

// Definimos variables
let sorteo = [];
let num_Random = 1;
let contarGanadas = 0;
let contarPerdidas = 0;

// Funcion sortear
function sortear(e) {
  // Form Data
  e.preventDefault();
  let formData = new FormData(form);
  let rango = Number(formData.get('rango'));
  let num_apuesta = Number(formData.get('nro_apuesta'));

  // condicion
  if (
    rango <= 25 &&
    num_apuesta <= rango &&
    num_apuesta >= 0 &&
    contarGanadas + contarPerdidas < 20
  ) {
    num_Random = Number(getRandomInt(rango));

    // obtener valores por los input
    let juegoAzar = {
      Rango: rango,
      Numero: num_apuesta,
    };
    sorteo.push(juegoAzar);
    console.log(sorteo);

    // si llega a sacar la loteria
    if (num_Random == num_apuesta) {
      ganador(num_apuesta, true);
      contarGanadas++;
    }

    // Sino que diga a que num aposto
    else {
      ganador(num_apuesta, false);
      contarPerdidas++;
    }

    // en caso de que se pase del RAngo
  } else {
    // debugger;
    if (num_apuesta < 0 || rango < 0)
      alert(
        'El numero de Rango o Num de Apuesta es un numero negativo (' +
          num_apuesta +
          '), por favor ingrese un numero positivo.'
      );
    else
      alert(
        'El numero de apuesta supera el valor de rango (' +
          rango +
          ') y numero (' +
          num_apuesta +
          ')'
      );
  }
  mostrarNum_Ganador();
}

mostrarNum_Ganador();

// Muestra en numero que salio victorioso
function mostrarNum_Ganador() {
  spanWinner = document.querySelector('#nro_ganandor');
  spanWinner.innerHTML = '';
  spanWinner.innerHTML = num_Random;
}

// Me da el un numero Random en base al rango insertado
function getRandomInt(rango) {
  return Math.round(rango * Math.random());
}

// ganador();
//condiciiones para el ganador o siga participando
function ganador(apuesta, esGanador) {
  resultado.innerHTML = '';
  resultado.innerHTML += `<span>${apuesta} ${
    esGanador ? 'Felicidades' : 'Siga participando'
  } </span>`;

  if (esGanador) {
    resultado.classList.add('green');
    resultado.classList.remove('red');
  } else {
    resultado.classList.remove('green');
    resultado.classList.add('red');
  }
}

// Singanador();
// function Singanador(apuesta) {
//   resultado.innerHTML = ' ';
//   resultado.innerHTML += ` <span> ${apuesta} Siga participando</span> `;
//   resultado.classList.remove('green');
//   resultado.classList.add('red');
// }

function jugarOtraVez() {
  debugger;
  console.log('entre');
  resultado.textContent = '';
  spanWinner.textContent = '';
  div.textContent = '';
  contarGanadas = 0;
  contarPerdidas = 0;
  sorteo = [];
  console.log(sorteo);
  console.log(contarGanadas + ' contador debe estar vacio');
}

function verEstadisticas() {
  div.innerHTML = ' ';
  // if(contarGanadas+ contarPerdidas <= 20){
  div.innerHTML = `<h2>Veces ganadas: ${contarGanadas} 
  y Veces  perdidas: ${contarPerdidas}</h2> `;
  // }
  // else{
  //   alert("Supero las 20 veces que puede jugar")
  // }
}

// function mostrarEstadistica(){
//   resultado.innerHTML= "";
//   resultado.innerHTML=
// }
