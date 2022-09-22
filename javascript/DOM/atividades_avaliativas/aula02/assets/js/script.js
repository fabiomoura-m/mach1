let filhosDoBody = document.body.childElementCount;

console.log('Elementos filhos do body:', filhosDoBody);

function verificaFilhosBody(quantidade) {
    if (quantidade > 5) {
        return true;
    }

    return false;
}

console.log(
    'Possui mais que 5 elementos filhos?',
    verificaFilhosBody(filhosDoBody)
);

let paragrafos = document.querySelectorAll('p');
console.log(paragrafos);
