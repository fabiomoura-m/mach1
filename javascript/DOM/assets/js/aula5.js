//let atributo = elementoCodigo.getAttribute('class'); // Recuperando o valor do atributo
//console.log(atributo);
// elementoCodigo.setAttribute('class', atributo + ' error'); // Setando um atributo

let elementoCodigo = document.getElementById('codigo-produto');
let elementoNome = document.getElementById('nome-produto');
let elementoDescricao = document.getElementById('descricao-produto');
let elementoPreco = document.getElementById('preco-produto');

let elementoBotaoSalvar = document.getElementById('botao-salvar');
let elementoBotaoConcluir = document.getElementById('botao-concluir');

let elementoFormulario = document.getElementById('form');
let feedback = document.getElementById('feedback-usuario');
let elementoLista = document.getElementById('lista-produtos');

let listaDeProdutos = [];

elementoBotaoSalvar.addEventListener('click', salvarProduto);
elementoBotaoConcluir.addEventListener('click', listarProdutos);

function salvarProduto() {
    let codigo = elementoCodigo.value;
    let nome = elementoNome.value;
    let descricao = elementoDescricao.value;
    let preco = elementoPreco.value;

    for (let produto of listaDeProdutos) {
        if (produto.codigo === codigo) {
            alert('Produto já cadastrado');
            return;
        }
    }

    let objetoProduto = {
        codigo,
        nome,
        descricao,
        preco
    };

    listaDeProdutos.push(objetoProduto);

    console.log(listaDeProdutos);
}
function listarProdutos() {
    elementoFormulario.setAttribute('hidden', 'true');
    feedback.removeAttribute('hidden');
    for (let produtos of listaDeProdutos) {
        elementoLista.innerHTML += `
        <li>${produtos.nome}</li>
        <ul>
            <li>${produtos.descricao}</li>
            <li>${produtos.preco}</li>
        </ul>
        `;
    }
}
