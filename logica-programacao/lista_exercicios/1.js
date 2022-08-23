/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repetir(num, repet) {
    let array = [];
    for (let i = 0; i < repet; i++) {
        array.push(num);
    }
    return array;
}
console.log(repetir('código', 2));
