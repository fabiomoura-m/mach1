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

console.log(somarNumeros([10, 10, 10]));
