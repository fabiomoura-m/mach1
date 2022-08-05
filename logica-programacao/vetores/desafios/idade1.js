/**
 * Montar um programa onde deve verificar o array de idades informado,
 * criar uma condicional verificando se existe idade maior do que 18 anos.
 * a saida do programa sera verdadeiro se existir e falso senão existir.
 */

const idades = [12, 18, 13, 17, 14];

console.log('Verificando se existe idade maior do que 18 anos.');

let existeMaiorDe18 = idades.some(function (idade) {
    return idade > 18;
});

let pesquisa = idades.find(function (idade) {
    return idade > 18;
});

let resultado = !pesquisa ? 'falso' : 'verdadeiro';

console.log(existeMaiorDe18);
console.log(resultado);
