// elementoNome.setAttribute('value','Matheus'); // Setando um atributo nome
//let atributo = elementoCodigo.getAttribute('class'); // Recuperando o valor do atributo de classe
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

// Essa função limpando o formulário para inserir mais um produto
function limparFormulario() {
    elementoCodigo.value = '';
    elementoNome.value = '';
    elementoDescricao.value = '';
    elementoPreco.value = '';
}

function salvarProduto() {
    // Recebeu em variaveis os valores do input no momento do click
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

    // Modelo de objeto que representa o produto
    let objetoProduto = {
        codigo,
        nome,
        descricao,
        preco
    };

    // Salvando no meu array um objeto
    listaDeProdutos.push(objetoProduto);
    //Zerando o formulário
    limparFormulario();
}
// Chamada pelo forEach
function exibirProdutos(produto) {
    elementoLista.innerHTML += `
        <li>${produto.nome}</li>
        <ul>
            <li>${produto.descricao}</li>
            <li>${produto.preco}</li>
        </ul>
        `;
}

function concluirCadastro() {
    let elementoSecaoCadastramento = document.getElementById(
        'cadastramento-produtos'
    );
    let elementoSecaoListagem = document.getElementById('listagem-produtos');
    // Controlando a exbição das seções
    elementoSecaoCadastramento.setAttribute('class', 'inativo'); // Colocou um atributo de classe no html (inativo)
    elementoSecaoListagem.setAttribute('class', 'ativo'); // Colocou um atributo de classe no html (ativo)
    arrayProdutos.forEach(exibirProdutos); // FOREACH
    // for(elemento of arrayProdutos){
    //   console.log(elemento);
    // }
}

elementoBotaoSalvar.addEventListener('click', salvarProduto);
elementoBotaoConcluir.addEventListener('click', concluirCadastro);
