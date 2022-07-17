/**
 * * Montar um programa onde o usuario informa o número de linhas e colunas e exibir a matriz conforme
 * o exemplo abaixo:
 * [1, 1] [1, 2]
 * [2, 1] [2, 2]
 * [3, 1] [3, 2]
 * [4, 1] [4, 2]
 *
 */

const prompt = require('prompt-sync')();

console.log('Insira o número de linhas:');
let numeroLinhas = Number(prompt());

console.log('Insira o número de colunas:');
let numeroColunas = Number(prompt());

if (Number.isInteger(numeroLinhas) && Number.isInteger(numeroColunas)) {
    for (let linha = 1; linha <= numeroLinhas; linha++) {
        let matriz = '';
        for (let coluna = 1; coluna <= numeroColunas; coluna++) {
            matriz += `[${linha}, ${coluna}] `;
        }
        console.log(matriz);
    }
} else {
    console.log('Digite números inteiros');
}
