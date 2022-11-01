export function criar(produto) {
    console.log('Produto Criado');
}

export function buscar(nomeProduto) {
    return {
        produto: nomeProduto
    };
}

export function atualizar(produto) {
    console.log('Produto alterado');
}

export function deletar(codigoProduto) {
    console.log('Produto deletado');
}

function buscarPorNome(nomeProduto) {
    return { produto: nomeProduto };
}

export default { criar, buscar, atualizar, deletar, buscarPorNome };
