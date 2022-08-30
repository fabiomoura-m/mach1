/**
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplo:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
*/

function maiorOuIgual(numero1, numero2) {
    if (typeof numero1 !== typeof numero2) {
        return false;
    }
    return numero1 >= numero2;
}

console.log(maiorOuIgual(0, 0)); // retornará true
console.log(maiorOuIgual(0, '0')); // retornará false
console.log(maiorOuIgual(5, 1)); // retornará true
