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

// Desafio 8
const numbers = [2, 15, 7, 9, 45];

function fizzBuzz(arrayNum) {
  let juntaFrase = [];

  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] % 3 == 0 && arrayNum[i] % 5 == 0) {
      juntaFrase.push("fizzBuzz");
    } else if (arrayNum[i] % 3 == 0) {
      juntaFrase.push("fizz");
    } else if (arrayNum[i] % 5 == 0) {
      juntaFrase.push("buzz");
    } else {
      juntaFrase.push("bug!");
    }
  }
  return juntaFrase;
}

// Desafio 9
function encode(frase) {
  for (let i = 0; i < frase.length; i += 1) {
    frase = frase.replace("a", "1");
    frase = frase.replace("e", "2");
    frase = frase.replace("i", "3");
    frase = frase.replace("o", "4");
    frase = frase.replace("u", "5");
  }
  return frase;
}
function decode(frase) {
  for (let i = 0; i < frase.length; i += 1) {
    frase = frase.replace("1", "a");
    frase = frase.replace("2", "e");
    frase = frase.replace("3", "i");
    frase = frase.replace("4", "o");
    frase = frase.replace("5", "u");
  }
  return frase;
}
