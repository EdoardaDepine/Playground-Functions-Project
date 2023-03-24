// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  const resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
const goTrybe = "go tyrbe";
const vamoQueVamo = "vamo que vamo";
const foguete = "foguete";

function splitSentence(parametro) {
  return parametro.split(" ");
}

// Desafio 4
function concatName(array) {
  const resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  const resultado = wins * 3 + ties * 1;
  return resultado;
}

// Desafio 6
const repeticao1 = [9, 1, 2, 3, 9, 5, 7];
const repeticao2 = [0, 4, 4, 4, 9, 2, 1];
const repeticao3 = [0, 0, 0];

function highestCount(array) {
  let contador = 0;
  const maiornumero = Math.max(...array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiornumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanciaCat1 = Math.abs(mouse - cat1);
  const distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  } else if (distanciaCat2 < distanciaCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
