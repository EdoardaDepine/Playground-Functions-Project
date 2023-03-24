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
