/**
Você está trabalhando numa aplicação pessoal de controle de despesas.
Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço.
Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplo:
despesasTotais([{
        nome: "Jornal online",
        categoria: "Informação",
        preco: 89.99
    },
    {
        nome: "Cinema",
        categoria: "Entretenimento",
        preco: 150
    }
]) // retornará O total de despesas é: R$ 239.99
despesasTotais([{
        nome: "Galaxy S20",
        categoria: "Eletrônicos",
        preco: 3599.99
    },
    {
        nome: "Macbook Pro",
        categoria: "Eletrônicos",
        preco: 30999.90
    }
]) // retornará O total de despesas é: R$ 34599.89
*/
function despesasTotais(arrayProdutos) {
    let totalDespesas = 0;

    for (let i in arrayProdutos) {
        totalDespesas += arrayProdutos[i].preco;
    }

    return `O total de despesas é: R$ ${totalDespesas}`;
}

console.log(
    despesasTotais([
        {
            nome: 'Jornal online',
            categoria: 'Informação',
            preco: 89.99
        },
        {
            nome: 'Cinema',
            categoria: 'Entretenimento',
            preco: 150
        }
    ])
);

console.log(
    despesasTotais([
        {
            nome: 'Galaxy S20',
            categoria: 'Eletrônicos',
            preco: 3599.99
        },
        {
            nome: 'Macbook Pro',
            categoria: 'Eletrônicos',
            preco: 30999.9
        }
    ])
);
