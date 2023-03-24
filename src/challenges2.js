// Desafio 11
const gerarNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

function generatePhoneNumber(array) {
  let contadorRepetidos = 0;

  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i] === array[i2]) {
        contadorRepetidos += 1;
      }
      if (contadorRepetidos > 2) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    contadorRepetidos = 0;
  }
  return `(${array.slice(0, 2).join("")}) ${array.slice(2, 7).join("")}-${array
    .slice(7)
    .join("")}`;
}

console.log(generatePhoneNumber(gerarNumero));
