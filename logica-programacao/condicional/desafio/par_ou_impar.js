/**
 * verificar se um numero informado pelo usuario é par ou impar!
 */
const prompt = require('prompt-sync')();

console.log('Digite um número:');
let numero = Number(prompt());

let verificacao = numero % 2 === 0 ? 'par' : 'impar';

console.log(`O número ${numero} é ${verificacao}.`);
