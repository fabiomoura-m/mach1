/**
 * Montar um programa que vai e exbir os numeros pares entre 1 e o numero que o usuário digitar
 * Regra 1 = O numero informado dever ser inteiro e estar entre 2 e 1000 //Number.isInteger(numero)
 * caso a regra 1 não seja obedecida, informar "Insira um número inteiro entre 2 e 1000"
 * repita a regra até o usuário acertar (do while)
 * A saida do codigo deve ser:
 * Número digitado pelo usuario: 12
 * Números pares entre 1 e 12: 2,4,6,8,10,12
 */

const prompt = require('prompt-sync')();
let numeroInformado;
let numerosPares = [];
do {
    console.log('Digite um número:');
    numeroInformado = Number(prompt());
    if (
        !Number.isInteger(numeroInformado) ||
        numeroInformado < 2 ||
        numeroInformado > 1000
    ) {
        console.log('Insira um número inteiro entre 2 e 1000');
    } else {
        for (let num = 1; num <= numeroInformado; num++) {
            if (num % 2 === 0) {
                numerosPares.push(num);
            }
        }
        console.log(`Número digitado pelo usuario: ${numeroInformado}`);
        console.log(
            `Números pares entre 1 e ${numeroInformado}: ${numerosPares.join()}`
        );
    }
} while (
    !Number.isInteger(numeroInformado) ||
    numeroInformado < 2 ||
    numeroInformado > 1000
);
