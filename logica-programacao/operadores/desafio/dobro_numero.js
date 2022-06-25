/**
Fazer um programa que leia um numero usando o prompt, calcule e infome o dobro desse número.
*/

const prompt = require('prompt-sync')();

console.log('Digite um número:');

let numero = Number(prompt());

let dobro = numero * 2;

console.log('O dobro de ' + numero + ' é ' + dobro);
