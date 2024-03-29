/**
Numa aplicação Web da qual você faz parte da equipe de desenvolvimento, pretende - se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
Exemplo:
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
*/

function calcularMedia(array) {
    let somaNotasAlunos = array.reduce((acumulado, atual) => {
        return acumulado + atual;
    }, 0);

    let mediaAlunos = somaNotasAlunos / array.length;

    return mediaAlunos;
}

console.log(calcularMedia([0, 10])); // retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5])); // retornará 3
