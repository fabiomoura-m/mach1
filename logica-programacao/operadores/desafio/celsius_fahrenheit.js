/**
 * Criar um programa para ler a temperatura em Celcius e tranformar em fahrenheit
 * o calculo é: Celcius * 1, 8 + 32
 */
const prompt = require('prompt-sync')();

console.log('Digite o valor em Celcius: ');
let tempCelcius = Number(prompt());

let tempFahrenheit = tempCelcius * 1.8 + 32;

console.log(tempFahrenheit);
