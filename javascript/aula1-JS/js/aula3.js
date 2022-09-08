// APRENDENDO MAIS SOBRE STRINGS(TEXTOS) Concatenando ou juntando
let primeiroTexto = 'Estamos aprendendo a concatenar textos em uma variável';
let segundoTexto = 'ou em outros lugares';
let tipoBoleano = true;
let valorConcatenado = '';

primeiroTexto = primeiroTexto + ' ou em outros lugares'; // maneira 1
console.log(primeiroTexto);

primeiroTexto += ' ou em outros lugares'; // maneira 2
console.log(primeiroTexto);

// Maneira 3
valorConcatenado = `${primeiroTexto} ${segundoTexto}.
Esse aqui é um tipo boleano:${tipoBoleano}`;
console.log(valorConcatenado);

//DESCOBRINDO O TAMANHO DE UMA STRING
let minhaEscola = 'Mach1 Escola';
console.log(minhaEscola.length);

//PEGANDO UM PEDACINHO DA MINHA STRING
console.log(minhaEscola.slice(0, 3));

//DEIXAR TUDO MAIUSCULO
console.log(minhaEscola.toUpperCase());

//DEIXAR TUDO MINUSCULO
console.log(minhaEscola.toLowerCase());

//REPLACE
console.log(minhaEscola.replace('Escola', 'Curso'));

let primeiroNumero = 0;
let segundoNumero = 0;
let recebeResultado = 0;

{
    //Calculadora versão 1.1
    const mensagemCliente = 'A operação dos números é: ';

    primeiroNumero = prompt('Digite o primeiro número');
    segundoNumero = prompt('Digite o segundo número');
    // Soma simples
    recebeResultado = `${mensagemCliente.replace('operação', 'soma')} ${
        parseInt(primeiroNumero) + parseInt(segundoNumero)
    }`;
    alert(recebeResultado);
    console.log(recebeResultado);
    // Subtracao simples
    recebeResultado = `${mensagemCliente.replace('operação', 'subtração')} ${
        primeiroNumero - segundoNumero
    }`;
    alert(recebeResultado);
    console.log(recebeResultado);
    // Multiplicacao simples
    recebeResultado = `${mensagemCliente.replace(
        'operação',
        'multiplicação'
    )} ${primeiroNumero * segundoNumero}`;
    alert(recebeResultado);
    console.log(recebeResultado);
    // Divisao simples
    recebeResultado = `${mensagemCliente.replace('operação', 'divisão')} ${
        primeiroNumero / segundoNumero
    }`;
    alert(recebeResultado);
    console.log(recebeResultado);
    // Resto
    recebeResultado = `${mensagemCliente.replace('A operação', 'O resto')} ${
        primeiroNumero % segundoNumero
    }`;
    alert(recebeResultado);
    console.log(recebeResultado);
}
