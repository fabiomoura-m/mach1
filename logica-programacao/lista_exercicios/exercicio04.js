/**
 * Criar uma função que receba um array de números e retorne o menor número desse array.
 */
function menorNumero(array) {
    // return array.sort((a, b) => a - b)[0];

    let menor = array[0]; // primeiro elemento

    for (i in array) {
        //indices
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    return menor;
}

function menorNumeroMath(arrNumeros) {
    return Math.min(...arrNumeros);
}

console.log(menorNumero([45, 4, 40, 200, 14, 3]));
