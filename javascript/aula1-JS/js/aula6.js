{
    // EXEMPLO SIMPLES DE REPETIÇÃO
    let contador = 1;
    let segundoNumero = 0;

    while (contador < 3) {
        console.log(contador, segundoNumero);
        contador++; //Incremento
        segundoNumero += contador;
        // segundoNumero = segundoNumero + contador
    }
}

{
    let recebeNumero = Number(prompt('Digite um número:'));
    let contador = 0;
    let quantidadeDeImpares = 0;

    while (contador <= recebeNumero) {
        if (contador % 2 !== 0) {
            quantidadeDeImpares++;
            console.log('Sequencia ímpar: ', contador);
        }
        contador++;
    }
    console.log('Quantidade de ímpares', quantidadeDeImpares);
}

{
    let result = '';
    let i = 0;

    do {
        i += 1;
        result += `${i} `;
    } while (i > 0 && i < 5);
    console.log(result);
}
