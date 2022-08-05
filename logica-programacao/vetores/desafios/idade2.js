/**
 * Montar um programa onde deve verificar o array de idades informado,
 * criar uma condicional verificando se existe idade maior do que 18 anos
 * e quais são os no array da idade maior que 18.
 * a saida do programa serão os indices do array
 */

const idades = [12, 20, 15, 17, 19];

console.log('Verificando se existe idade maior do que 18 anos.');

let resultado = [];

idades.forEach(function (idade, index) {
    if (idade > 18) {
        resultado.push(index);
    }
});

console.log(resultado);
