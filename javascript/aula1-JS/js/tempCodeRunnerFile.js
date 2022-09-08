{
    const tabela = [
        ['Time 1', 'V', 'V', 'E', 'D', 'D'],
        ['Time 2', 'V', 'V', 'E', 'E', 'V'],
        ['Time 2', 'D', 'D', 'E', 'E', 'V']
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
    let arrayPontuacao = [];
    for (let linha of tabela) {
        let aux = linha.at(-1);
        arrayPontuacao.push(aux);
    }
    for (let i = 0; i < arrayPontuacao.length; i++) {
        let aux = arrayPontuacao[i];
        if (arrayPontuacao[i] < arrayPontuacao[i + 1]) {
            arrayPontuacao[i] = arrayPontuacao[i + 1];
            arrayPontuacao[i + 1] = aux;
        }
    }
    let arrayOrdenado = [];
    let resultadoPesquisa;
    for (let pontuacao of arrayPontuacao) {
        resultadoPesquisa = tabela.filter(function (item) {
            return item.includes(pontuacao);
        });
        arrayOrdenado.push(resultadoPesquisa[0]);
    }

    console.log(arrayOrdenado);
}