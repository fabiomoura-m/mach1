/**
 * Crie uma função que recebe um número(de 1 a 12 e retorne o mês 
 * correspondente como uma string.Por exemplo, se a entrada
 * for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

 */

function mes(num) {
    let meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    return meses[num - 1] === undefined
        ? 'Informe um numero válido'
        : meses[num - 1];
}
console.log(mes(1));
