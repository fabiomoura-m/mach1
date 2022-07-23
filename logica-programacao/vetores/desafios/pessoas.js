/**
 1 - Itere todos os itens do array e exiba posição e valor de todas no console.log
 2 - Escreva um comando para remover o "Danilo"
 do array.
 3 - Escreva um comando para remover o "James"
 do array.
 4 - Escreva um comando para adicionar o "Mateus"
 na primeira posição do array.
 5 - Escreva um comando para adicionar o seu nome no final do array.
 6 - Itere todos os itens do array e exiba posição e valor no console.log mas quando chegar na "Maria" saia da iteração.
 7 - Escreva o comando para fazer uma cópia do array usando slice.A cópia NÃO deve incluir a "Maria".
 8 - Escreva o comando que mostra o indexOf que a "Maria"
 está localizada.
 9 - Escreva o comando que mostra o indexOf que o "Tony"
 está localizado(deve retornar - 1).
 10 - Crie uma nova variável chamada olaBob e defina ela igual o array de pessoas concatenada com "Bob".
 */

let pessoas = ['Danilo', 'Maria', 'Denis', 'James'];

// 1 -
for (let indice = 0; indice < pessoas.length; indice++) {
    console.log(`Posição ${indice}: ${pessoas[indice]}`);
}

// 2 -
pessoas.shift();
console.log(pessoas);

// 3 -
pessoas.pop();
console.log(pessoas);

// 4 -
pessoas.unshift('Mateus');
console.log(pessoas);

// 5 -
pessoas.push('Fabio');
console.log(pessoas);

// 6 -
for (let indice = 0; indice < pessoas.length; indice++) {
    console.log(`Posição ${indice}: ${pessoas[indice]}`);
    if (pessoas[indice] === 'Maria') {
        break;
    }
}

// 7 -
console.log(pessoas.slice(0, 1).concat(pessoas.slice(2)));

// 8 -
console.log(pessoas.indexOf('Maria'));

// 9 -
console.log(pessoas.indexOf('Tony'));

// 10-
let olaBob = pessoas.concat('Bob');
console.log(olaBob);
