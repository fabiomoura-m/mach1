/**
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplo:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somarNumeros(array) {
    let somaNumerosArray = array.reduce((acumulado, atual) => {
        return acumulado + atual;
    }, 0);

    return somaNumerosArray;
}

function somarNumerosForEach(array) {
    let soma = 0;
    array.forEach(numero => {
        soma += numero;
    });
    return soma;
}

function somarNumerosFor(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log(somarNumeros([10, 10, 10])); //30
console.log(somarNumerosForEach([15, 15, 15, 15])); //60
console.log(somarNumerosFor([15, 15, 15, 15])); //60
