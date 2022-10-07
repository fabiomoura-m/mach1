let shoppingCart = [
    {
        produto: 'Leite - Barnabé',
        medida: 'Litro',
        quantidade: 5,
        valor: 7.8
    },
    {
        produto: 'Alcatra - Friboi',
        medida: 'kg',
        quantidade: 1.896,
        valor: 40
    },
    {
        produto: 'Refrigerante - Toca Polar',
        medida: 'Pet - 2 litros',
        quantidade: 3,
        valor: 8.99
    },
    {
        produto: 'Arroz - Tio Chicão',
        medida: 'Pacote - 1kg',
        quantidade: 4,
        valor: 5.99
    },
    {
        produto: 'Peito de frango - Hot Chicken',
        medida: 'kg',
        quantidade: 5,
        valor: 16.99
    }
];

function listarProdutos() {
    let trTds = '';
    let resultado = document.getElementById('resultado');
    let valorTotalCompra = shoppingCart.reduce((total, atual) => {
        return total + atual.quantidade * atual.valor;
    }, 0);

    shoppingCart.forEach(item => {
        trTds += `
        <tr>
            <td>${item.produto}</td>
            <td>${item.medida}</td>
            <td>${item.quantidade}</td>
            <td>R$ ${item.valor}</td>
        </tr>
        `;
    });

    trTds += `
        <tr>
            <td colspan='4' class='text-center'><strong>O total da compra é: R$ ${valorTotalCompra}</strong></td>
        </tr>
    `;

    resultado.innerHTML = trTds;
}

window.addEventListener('load', listarProdutos);
