/*
FUNÇÃO É BLOCO DE CÓDIGO QUE DEFINE INSTRUÇÕES ÚNICAS E BEM DEFINIDAS A SEREM EXECUTADAS, QUE PODEM OU NÃO TER UM RETORNO.
*/

let pessoa = {
    nome: 'Cleyton',
    idade: '31 anos',
    profissao: 'professor'
};

// EXEMPLO DE FUNÇÃO VOID OU SEM RETORNO
function exibeMensagemNoConsole() {
    console.log('Mensagem da função');
}
exibeMensagemNoConsole();

{
    // EXEMPLO DE FUNÇÃO COM RETORNO - SEM PARÂMETROS
    function somaDoisNumeros() {
        let somaDoisNumeros = 2 + 2;
        return somaDoisNumeros;
    }
    let recebeResultado = somaDoisNumeros();
    console.log(recebeResultado, somaDoisNumeros());
}
{
    // EXEMPLO DE FUNÇÃO COM RETORNO - COM PARÂMETROS
    function somaDoisNumeros(recebePrimeiroNumero, recebeSegundoNumero) {
        let somaDoisNumeros = 0;
        if (!isNaN(recebePrimeiroNumero) && !isNaN(recebeSegundoNumero)) {
            somaDoisNumeros = recebePrimeiroNumero + recebeSegundoNumero;
        }
        return somaDoisNumeros;
    } // a função deve retornar sempre o mesmo tipo (boa prática)

    let soma = somaDoisNumeros('dois', 'dois');
    console.log('Primeira Soma', soma);
    console.log('Segunda Soma', somaDoisNumeros(10, 10) + 2);
}
{
    // Função precisa ter uma responsabilidade única e bem definida
    function maioridadePenal(idade) {
        let maiorDeIdade = false;
        let maioridade = 18;
        if (!isNaN(idade) && idade >= maioridade) {
            maiorDeIdade = true;
        }
        return maiorDeIdade;
    }

    function validaNumero(numero) {
        let numeroValido = false;
        if (!isNaN(numero)) {
            numeroValido = true;
        }
        return numeroValido;
    }

    let idade = 18;

    // let validaaNumero = validaNumero(idade) ? idade : '';

    if (validaNumero(idade)) {
        console.log(maioridadePenal(idade));
    } else {
        console.log('Idade inválida!');
    }

    function parOuImpar(numero) {
        let parOuImpar = 'Não foi digitado um número!';
        if (!isNaN(numero)) {
            if (numero % 2 !== 0) {
                parOuImpar = 'É impar';
            } else {
                parOuImpar = 'É par';
            }
        }
        return parOuImpar;
    }

    console.log('Kayk é maior?', maioridadePenal(19));
    console.log('Paulo é maior?', maioridadePenal(17));
    console.log('Cleyton é maior?', maioridadePenal('teste'));
    console.log(parOuImpar('texto'));
}
