/*
Ler o valor da conta, calcular e infomar o valor da taxa de 13% do garçom e o valor total a ser pago no jantar.
*/

const prompt = require('prompt-sync')();

console.log('Digite o valor da conta');
let valorConta = Number(prompt());

let valorTaxa = valorConta * 0.13;
console.log(`Valor da taxa do garçom: R$${valorTaxa.toFixed(2)}`);

let valorTotalCompra = valorConta + valorTaxa;
console.log(`Valor total a ser pago: R$${valorTotalCompra.toFixed(2)}`);
