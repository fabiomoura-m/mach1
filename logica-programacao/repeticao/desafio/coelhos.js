/**
 * Suponha que o numero de coelhos de um criador quadriplica a cada ano após o primeiro ano
 * Elaborar um programa que leia o numero inicial de coelhos e a quantidade de anos
 * O programa ira exibir ano a ano o numero medio previsto de coelhos.
 * Verificar inicialmente se os campos são numeros validos e o numero inicial tem que ser maior ou igual a 2
 * Exemplo de saida.
 * Usuario entrou com numero de coelhos: 10 e numero de anos 4
 *
 * Ano 1: 10
 * Ano 2: 40
 * Ano 3: 160
 * Ano 4: 640
 */
const prompt = require('prompt-sync')();

let numeroCoelhos = Number(prompt('Digite o número inicial de coelhos:'));
if (isNaN(numeroCoelhos) || numeroCoelhos < 2) {
    return console.log('Insira um número maior ou igual a 2.');
}

let quantidadeAnos = Number(prompt('Digite a quantidade de anos:'));
if (isNaN(quantidadeAnos)) {
    return console.log('Insira a quantidade de anos corretamente.');
}

const MULTIPLICADOR_COELHOS = 4;

for (let inicioAno = 1; inicioAno <= quantidadeAnos; inicioAno++) {
    console.log(`Ano ${inicioAno}: ${numeroCoelhos}`);
    numeroCoelhos *= MULTIPLICADOR_COELHOS;
}
