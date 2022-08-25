// ENTENDENDO ATRIBUIÇÃO, COMPARAÇÃO DE VALOR E COMPARAÇÃO DE VALOR E TIPO
{
    let minhaMochila1 = 'Caderno';
    let minhaMochila2 = 'Livro';
    let comparaMochila;

    // COMPARANDO VALORES
    comparaMochila = minhaMochila1 == minhaMochila2;
    console.log(
        `Mochila1= ${minhaMochila1} Mochila2= ${minhaMochila2} ${comparaMochila} `
    );

    // COMPARANDO VALORES E TIPOS
    minhaMochila2 = 'Caderno';
    comparaMochila = minhaMochila1 === minhaMochila2;
    console.log(
        `Mochila1= ${minhaMochila1} Mochila2= ${minhaMochila2} ${comparaMochila} `
    );

    // VERIFICANDO SE OS VALORES SÃO DIFERENTES
    minhaMochila2 = 'Caderno';
    comparaMochila = minhaMochila1 != minhaMochila2;
    console.log(
        `Mochila1= ${minhaMochila1} Mochila2= ${minhaMochila2} ${comparaMochila} `
    );

    // VERIFICANDO SE OS VALORES SÃO DIFERENTES
    minhaMochila2 = 'Celular';
    comparaMochila = minhaMochila1 !== minhaMochila2;
    console.log('Quarto resultado', comparaMochila);
}

//COMPARANDO NÚMEROS
{
    let idadeCleyton = 31;
    let idadeKayk = 19;
    let idadeFabioMoura = 30;
    let maisVelho;

    //CLEYTON É MAIS VELHO QUE O KAYK?
    maisVelho = idadeCleyton > idadeKayk;
    console.log('Cleyton é mais velho?', maisVelho);

    //CLEYTON É MAIS VELHO QUE O KAYK E O FABIO?
    maisVelho = idadeCleyton > idadeKayk && idadeCleyton > idadeFabioMoura;
    console.log('Cleyton é mais velho que Kayk e Fabio?', maisVelho);

    //CLEYTON É MAIS VELHO QUE O KAYK OU FABIO?
    maisVelho = idadeCleyton > idadeKayk || idadeCleyton > idadeFabioMoura;
    console.log('Cleyton é mais velho que Kayk OU Fabio?', maisVelho);
}

// TOMANDO DECISÕES NO NOSSO CÓDIGO
{
    // MAIORIDADE PENAL
    let idadePessoa = 18;
    let maioridadePenal = 18;
    let mensagem = '';

    if (idadePessoa >= maioridadePenal) {
        mensagem = 'Pode ser preso!';
        console.log(mensagem);
        alert(mensagem);
    } else {
        mensagem = 'Pode ir pra fundação casa!';
        console.log(mensagem);
        alert(mensagem);
    }
}

{
    //REVELA SE O NÚMERO É PAR OU IMPAR
    let recebeNumero = 11;
    // Usando ternário
    //let verificaSePar = recebeNumero % 2 === 0 ? 'É par' : 'É ímpar';
    //console.log(recebeNumero, verificaSePar);

    let verificaSePar = recebeNumero % 2 === 0;

    if (!verificaSePar) {
        // verifica se não é par
        console.log(recebeNumero, 'É ímpar!');
    } else {
        console.log(recebeNumero, 'É par!');
    }
}
