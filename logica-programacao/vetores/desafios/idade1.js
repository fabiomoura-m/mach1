/**
 * Montar um programa onde deve verificar o array de idades informado,
 * criar uma condicional verificando se existe idade maior do que 18 anos.
 * a saida do programa sera verdadeiro se existir e falso senão existir.
 */

const idades = [12, 18, 13, 17, 14];

console.log('Verificando se existe idade maior do que 18 anos.');

//find
let resultado = idades.find(function (idade) {
    return idade > 18;
});
console.log(resultado); // se encontrar, retorna o primeiro valor encontrado, senao encontrar retorna undefined

//includes
let resultadoIncludes = idades.includes(18); //valor fixo
//includes (true ou false)
console.log(resultadoIncludes);

//some
let resultadoSome = idades.some(function (value) {
    return value > 18;
});
console.log(resultadoSome); // se encontrar, retorna true, senao encontrar retorna false
