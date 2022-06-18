/**
 * Criar um programa para ler a temperatura em Fahrenheit e tranformar em Celcius
 * o calculo é: (Fahrenheit - 32) / 9 * 5
 */
const prompt = require('prompt-sync')();

console.log('Digite o valor em Fahrenheit: ');
let tempFahrenheit = Number(prompt());

let tempCelcius = ((tempFahrenheit - 32) / 9) * 5;

console.log(tempCelcius.toFixed(2));
