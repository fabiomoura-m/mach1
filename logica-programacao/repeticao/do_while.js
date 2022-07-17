const prompt = require('prompt-sync')();
let numero;
//verificando se o numero e valido
do {
    //faça
    console.log('Digite um numero válido');
    numero = Number(prompt());
    if (isNaN(numero)) {
        // verifico se ele nao é um numero!
        console.log('Digite um valor númerico!');
    }
} while (numero === 0 || isNaN(numero)); //enquanto

console.log('Número válido! !!!!');
