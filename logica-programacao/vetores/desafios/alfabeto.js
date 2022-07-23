//!Não tem entrada de dados do usuario!

/**
Qual o tamanho do array ?
Crie um algoritmo que mostra o tamanho do array
Dentro do algoritmo se uma instrução if - condicional
que verifica se o número de itens dentro do array é menor que 4
Ex de saida:
    tamanho 8
Ex de saida invalida:
    numero de itens menor que 4 itens.
 */

const prompt = require('prompt-sync')();

let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let respostaSaida = 'S';

while (respostaSaida === 'S') {
    let novoItem = prompt('Digite o novo item a ser adicionado no array: ');
    alfabeto.push(novoItem);

    respostaSaida = prompt(
        'Deseja adicionar novo item? Digite "S" para sim ou digite qualquer tecla para sair: '
    );
}

console.log(alfabeto);
// if (alfabeto.length < 4) {
//     console.log('número de itens menor que 4');
// } else {
//     console.log(`Tamanho ${alfabeto.length}`);
// }
