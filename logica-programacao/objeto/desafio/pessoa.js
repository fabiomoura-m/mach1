/**
 * Criar um programa onde possa cadastrar muitas pessoas com caracteristicas diferentes (adicionar objetos a um array)
 * A pessoa deve ser um objeto que deve aceitar nome, cpf, cep
 * Assim que as caracteristicas da pessoa forem preenchidas mostrar a msg: Deseja inserir outra pessoa ? S / N
 * Se o usuario digitar S ele volta ao inicio do fluxo
 * Se o usuario digitar N ele o programa encerra
 * No final do mostrar a seguinte saida:
 * 1 | Fernanda Ferreira | 12345678910 | 72001500
 * 2 | Gabriel Fernandes | 12345678911 | 72001500
 * 3 | Maicon Figueira | 12345678912 | 72001503
 */

const prompt = require('prompt-sync')();

let arrayPessoas = [];
let inserirPessoas = 'S';

while (inserirPessoas === 'S') {
    let nome = prompt('Digite seu nome: ');
    let cadastroCpf = Number(prompt('Digite seu cpf: '));
    let cadastroCep = Number(prompt('Digite seu cep: '));

    let pessoa = {
        nome,
        cpf: cadastroCpf,
        cep: cadastroCep
    };

    arrayPessoas.push(pessoa);

    console.log("Deseja cadastrar outra pessoa? 'S' para sim");
    inserirPessoas = prompt();
}
let pessoas = '';
arrayPessoas.forEach((item, index) => {
    pessoas += `${++index} | ${item.nome} | ${item.cpf} | ${item.cep} \n`;
});
console.log(pessoas);
console.table(arrayPessoas[1]);
