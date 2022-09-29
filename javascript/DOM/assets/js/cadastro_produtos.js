let elementoCodigo = document.getElementById('codigo-produto');
let elementoNome = document.getElementById('nome-produto');
let elementoDescricao = document.getElementById('descricao-produto');
let elementoPreco = document.getElementById('preco-produto');

let elementoBotaoSalvar = document.getElementById('botao-salvar');
let elementoBotaoConcluir = document.getElementById('botao-concluir');

let elementoFormulario = document.getElementById('form');

let listaDeProdutos = [];

// Essa função limpando o formulário para inserir mais um produto
function limparFormulario() {
    elementoCodigo.value = '';
    elementoNome.value = '';
    elementoDescricao.value = '';
    elementoPreco.value = '';
}

// Verifica se os campos obrigatórios no formulário estão preenchidos
function camposObrigatoriosPreenchidos(codigo, nome, preco) {
    if (codigo === '' || nome === '' || preco === '') {
        return false;
    }
    return true;
}
// Exibe uma mensagem para o usuário na tela
function exibirMensagem(mensagem, classe) {
    let elementoDivFeedback = document.getElementById('feedback-usuario');
    elementoDivFeedback.innerHTML = mensagem;

    elementoDivFeedback.setAttribute('class', classe);

    elementoDivFeedback.removeAttribute('hidden');
}

function salvarProduto() {
    // Recebeu em variaveis os valores do input no momento do click
    let codigo = elementoCodigo.value;
    let nome = elementoNome.value;
    let descricao = elementoDescricao.value;
    let preco = elementoPreco.value;

    // Validando preenchimento dos campos
    let camposPreenchidos = camposObrigatoriosPreenchidos(codigo, nome, preco);

    if (camposPreenchidos) {
        for (let produto of listaDeProdutos) {
            if (produto.codigo === codigo) {
                exibirMensagem(
                    'Código de produto já cadastrado!',
                    'alert alert-danger'
                );
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

        exibirMensagem(
            'Produto cadastrado com sucesso!',
            'alert alert-success'
        );

        console.log(listaDeProdutos);
    } else {
        exibirMensagem(
            'Campos obrigatórios não estão preenchidos!',
            'alert alert-danger'
        );
    }
}

// Chamada pelo forEach
function exibirProdutos(produto) {
    let tbodyElemento = document.getElementById('lista-produtos');
    let linha = `
    <tr>
        <th scope="row">${produto.codigo}</th>
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>${produto.preco}</td>
    </tr>
    `;

    tbodyElemento.innerHTML += linha;
}

function concluirCadastro() {
    let elementoSecaoCadastramento = document.getElementById(
        'cadastramento-produtos'
    );
    let elementoSecaoListagem = document.getElementById('listagem-produtos');
    // Controlando a exbição das seções
    elementoSecaoCadastramento.setAttribute('class', 'inativo'); // Colocou um atributo de classe no html (inativo)
    elementoSecaoListagem.setAttribute('class', 'ativo'); // Colocou um atributo de classe no html (ativo)
    listaDeProdutos.forEach(exibirProdutos); // FOREACH
}

elementoBotaoSalvar.addEventListener('click', salvarProduto);
elementoBotaoConcluir.addEventListener('click', concluirCadastro);
