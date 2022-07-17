/**
 * Ler um número e apresentar os numeros decrescentes entre esse número até o número 1
 * Regra 1 = O numero informado dever ser inteiro e estar entre 1 e 1000 //Number.isInteger(numero)
 * caso a regra 1 não seja obedecida, informar "Insira um número inteiro entre 1 e 1000"
 * A saída do codigo deve apresentar o exemplo abaixo:
 * Entre os números 1 e 10: 1,2,3,4,5,6,7,8,9,10
 *
 */
const MSG_ERRO = 'Digite números inteiros entre 1 e 1000';
const QUESTAO = 'Insira um número inteiro entre 1 e 1000: ';

const prompt = require('prompt-sync')();

console.log(QUESTAO);
let valorUsuario = Number(prompt());
let mensagemSaida = `Entre os números 1 e ${valorUsuario}: `;

if (
    Number.isInteger(valorUsuario) &&
    valorUsuario >= 1 &&
    valorUsuario <= 1000
) {
    for (let n = 1; n <= valorUsuario; n++) {
        mensagemSaida += `${n},`;
    }
    return console.log(mensagemSaida);
} else {
    return console.log(MSG_ERRO);
}
