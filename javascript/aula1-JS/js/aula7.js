//Exemplo de for
{
    for (let i = 0; i < 9; i++) {
        //console.log(i)
    }
}

//Números ímpares
// 1 - Gostaria de receber um numero do usuario e determinar quantos números impares nós temos no intervalo de 0 até o numero recebido
// 2 - Gostaria de exibir a sequencia de numeros ímpares no intervalo analisado

// {
//     let recebeNumero = Number(prompt('Digite um número:'));
//     let quantidadeDeImpares = 0;
//     for (let contador = 0; contador < recebeNumero; contador++) {
//         if (contador % 2 !== 0) {
//             quantidadeDeImpares++;
//             console.log(contador);
//         }
//     }
//     console.log('Quantidade de ímpares', quantidadeDeImpares);
// }

// ARRAY - VETOR
{
    let frutasTropicais = prompt('Digite uma lista de frutas separadas por ,');
    frutasTropicais = frutasTropicais.split(',');
    console.log(frutasTropicais);

    // for (let element of frutasTropicais) {
    //     console.log(element);
    // }

    // //Exemplo usando while
    // let contador = 0;
    // while (contador < frutasTropicais.length) {
    //     console.log(frutasTropicais[contador]);
    //     contador++;
    // }
}
