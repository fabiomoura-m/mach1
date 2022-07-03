const prompt = require('prompt-sync')();

console.log('Digite uma nota');
let nota = Number(prompt()); // converter para um numererico Not a Number (NaN)

if (isNaN(nota)) {
  console.log('Digite um valor numérico entre 0 e 10.');
  return false; // paro o código nesse ponto
}

nota >= 0 && nota <= 10
  ? console.log(nota)
  : console.log('Digite um valor numérico entre 0 e 10.');
