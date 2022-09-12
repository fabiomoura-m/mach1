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

    // for (let linha of tabela) {
    //     tabela.sort(function (a, b) {
    //         return a[linha.length - 1] < b[linha.length - 1] ? 1 : -1;
    //     });
    // }

    // let posicao = 1;
    // for (let linha of tabela) {
    //     console.log(`${posicao} | ${linha[0]} | ${linha[linha.length - 1]}`);
    //     posicao++;
    // }

    let arrayPontuacao = [];
    for (let linha of tabela) {
        let pontuacao = linha.at(-1);
        arrayPontuacao.push(pontuacao);
    }

    for (let i = 0; i < arrayPontuacao.length; i++) {
        for (let j = 0; j < arrayPontuacao.length; j++) {
            if (arrayPontuacao[i] > arrayPontuacao[j]) {
                let auxiliar = arrayPontuacao[i];
                arrayPontuacao[i] = arrayPontuacao[j];
                arrayPontuacao[j] = auxiliar;
            }
        }
    }

    let arrayPontuacaoFiltrado = arrayPontuacao.filter(function (
        pontuacao,
        index
    ) {
        return arrayPontuacao.indexOf(pontuacao) === index;
    });

    let arrayOrdenado = [];
    let verificaPontuacao = '';

    for (let pontuacao of arrayPontuacaoFiltrado) {
        for (let item of tabela) {
            verificaPontuacao = item.indexOf(pontuacao);
            if (verificaPontuacao !== -1) {
                arrayOrdenado.push(item);
            }
        }
    }

    let posicao = 1;
    for (let linha of arrayOrdenado) {
        console.log(`${posicao} | ${linha[0]} | ${linha.at(-1)}`);
        posicao++;
    }
}
