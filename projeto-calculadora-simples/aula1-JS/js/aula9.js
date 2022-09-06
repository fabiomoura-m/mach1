// Precisamos criar um array de times
// Criar um array com os resultados
// Colocar valores nos resultados
// Somar o valor dos pontos com base nos resultados
// Organizar a classificação por pontos, do maior para o menor
// Imprimir o resultado

{
    const tabela = [
        ['Time 1', 'V', 'V', 'E', 'D', 'D'],
        ['Time 2', 'V', 'V', 'E', 'E', 'V'],
        ['Time 3', 'V', 'V', 'V', 'E', 'V'],
        ['Time 4', 'V', 'V', 'E', 'D', 'V'],
        ['Time 5', 'D', 'D', 'D', 'E', 'V'],
        ['Time 6', 'V', 'D', 'E', 'V', 'V']
    ];
    for (let linha of tabela) {
        let pontuacao = 0;
        for (let coluna of linha) {
            if (coluna === 'V') {
                pontuacao += 3;
            } else if (coluna === 'E') {
                pontuacao += 1;
            }
        }
        linha.push(pontuacao);
    }

    // let ultimoItem = tabela[0].length - 1;
    // tabela.sort((b, a) => a[ultimoItem] - b[ultimoItem]);

    for (let linha of tabela) {
        tabela.sort(function (a, b) {
            return a[linha.length - 1] < b[linha.length - 1] ? 1 : -1;
        });
    }

    let posicao = 1;
    for (let linha of tabela) {
        console.log(`${posicao} | ${linha[0]} | ${linha[linha.length - 1]}`);
        posicao++;
    }

    // let arrayPontuacao = [];
    // for (let linha of tabela) {
    //     let aux = linha.at(-1);
    //     arrayPontuacao.push(aux);
    // }
    // for (let i = 0; i < arrayPontuacao.length; i++) {
    //     let aux = arrayPontuacao[i];
    //     if (arrayPontuacao[i] < arrayPontuacao[i + 1]) {
    //         arrayPontuacao[i] = arrayPontuacao[i + 1];
    //         arrayPontuacao[i + 1] = aux;
    //     }
    // }
    // let arrayOrdenado = [];
    // let pesquisaPontuacao;
    // for (let pontuacao of arrayPontuacao) {
    //     pesquisaPontuacao = tabela.filter(function (item) {
    //         return item.includes(pontuacao);
    //     });
    //     arrayOrdenado.push(pesquisaPontuacao[0]);
    // }

    // let contador = 1;
    // for (let linha of arrayOrdenado) {
    //     console.log(`${contador} | ${linha[0]} | ${linha.at(-1)}`);
    //     contador++;
    // }
}
