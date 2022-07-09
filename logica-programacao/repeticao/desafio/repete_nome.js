/**
 * Criar um programa que leia um nome e um número.
 * Verificar se é um número valido!
 * O programa dever repetir esse nome de acordo com o número informado
 * Utilize o | para separar o nome
 * Exemplo:
 * Usuario entrou com o nome José Feliz e colocou o numero 5
 * José Feliz | José Feliz | José Feliz | José Feliz | José Feliz |
 */

const prompt = require('prompt-sync')();

console.log('Digite um nome');
let nome = prompt();

console.log('Digite um numero');
let numero = Number(prompt());

if (isNaN(numero)) {
  console.log('Digite um número válido!');
} else {
  let mensagemSaida = [];
  for (let i = 0; i < numero; i++) {
    mensagemSaida.push(nome);
  }
  console.log(mensagemSaida.join());
}
