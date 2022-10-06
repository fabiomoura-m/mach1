const listaUsuarios = [
    {
        id: 1,
        nome: 'Thiago Pereira',
        sexo: 'Masculino',
        idade: 20,
        email: 'fulanodetal@termail.com'
    },
    {
        id: 2,
        nome: 'Thaís Lins',
        sexo: 'Feminino',
        idade: 19,
        email: 'thaisdetal@gtemail.com'
    },
    {
        id: 3,
        nome: 'Mariana Ferreira',
        sexo: 'Feminino',
        idade: 25,
        email: 'marianaferreira@tailme.com'
    },
    {
        id: 4,
        nome: 'Manuela Trait',
        sexo: 'Feminino',
        idade: 28,
        email: 'manuelatrait@gtepmail.com'
    }
];

const pesquisa = document.getElementById('pesquisa'); // PEGANDO ELEMENTO INPUT HTML REFERENCIADO PELO ID
const btnPesquisar = document.getElementById('btnPesquisar'); // PEGANDO ELEMENTO INPUT TIPO BUTTON REFERENCIADO PELO ID
const btnLimpar = document.getElementById('btnLimpar'); // PEGANDO ELEMENTO INPUT TIPO BUTTON REFERENCIADO PELO ID

// FUNCAO QUE LISTA OS USUARIOS NA TABELA
// CASO NAO SEJA PASSADO NENHUM PARAMETRO PARA A FUNÇÃO ELE VAI RECEBER FILTRADOS COMO UNDEFINED
function listarUsuariosNaTabela(filtrados = undefined) {
    let trTds = ''; // DECLARANDO UMA VARIAVEL QUE RECEBE UMA STRING VAZIA
    let lista = []; // DECLARANDO UMA VARIAVEL QUE RECEBE ARRAY VAZIO
    let resultado = document.getElementById('resultado'); // PEGANDO O ELEMENTO TBODY REFERENCIADO PELO ID

    lista = filtrados === undefined ? listaUsuarios : filtrados; // VERIFICA SE FILTRADOS === UNDEFINED, CASO FOR LISTA RECEBE ARRAY LISTA USUARIOS, SENÃO LISTA RECEBE ARRAY FILTRADOS

    // PERCORRE O ARRAY LISTA E POR CADA USUARIO PERCORRIDO ADICIONA A STRING O HTML ABAIXO
    lista.forEach(usuario => {
        trTds += `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.sexo}</td>
            <td>${usuario.idade}</td>
            <td>${usuario.email}</td>
        </tr>
        `;
    });
    resultado.innerHTML = trTds; // ADICIONANDO AO ELEMENTO TBODY O CONTEUDO DA STRING TRTDS QUE NO CASO AS LINHAS(TAGS) DA TABELA

    // VERIFICA SE O ARRAY ESTA VAZIO, SE ESTIVER VAZIO ADICIONA A STRING ABAIXO AO TBODY
    if (lista.length === 0) {
        resultado.innerHTML = `
        <tr>
            <td colspan="5">Nenhum usuário encontrado</td>
        </tr>
        `;
    }
}

// FUNÇÃO QUE FILTRA USUARIO DE ACORDO COM O DIGITADO NO CAMPO INPUT
function filtrarDadosPorNome() {
    let filtrados = []; // CRIANDO UM ARRAY VAZIO
    let valorCampoPesquisa = pesquisa.value.toLowerCase(); // PEGANDO O QUE FOI DIGITADO NO INPUT E PASSANDO PARA LETRA MINUSCULA COM O TOLOWERCASE

    if (valorCampoPesquisa !== '') {
        // FILTRANDO ARRAY LISTA USUARIOS E VERIFICANDO SE O QUE FOI DIGITADO CONTEM EM USUARIO
        filtrados = listaUsuarios.filter(usuario => {
            return (
                usuario.nome.toLowerCase().indexOf(valorCampoPesquisa) !== -1 ||
                usuario.id.toString().indexOf(valorCampoPesquisa) !== -1 ||
                usuario.sexo.toLowerCase().indexOf(valorCampoPesquisa) !== -1 ||
                usuario.idade.toString().indexOf(valorCampoPesquisa) !== -1 ||
                usuario.email.toLowerCase().indexOf(valorCampoPesquisa) !== -1
            ); // INDEXOF E USADO PARA ENCONTRAR UM VALOR DENTRO DE UMA STRING OU ARRAY, CASO NAO SEJA ENCONTRADO ELE RETORNA -1
        });
    } else {
        // CASO VALOR DIGITADO SEJA VAZIO O ARRAY FILTRADOS RECEBE O ARRAY LISTA USUARIOS
        filtrados = listaUsuarios;
    }

    listarUsuariosNaTabela(filtrados); // CHAMANDO A FUNÇÃO listarUsuariosNaTabela PASSANDO ARRAY FILTRADOS COMO ARGUMENTO
}

function limparDadosDaTelaForm() {
    pesquisa.value = ''; // PEGANDO VALOR DO INPUT E SETANDO COMO VAZIO
    listarUsuariosNaTabela(listaUsuarios); // CHAMANDO FUNÇÃO PASSANDO COMO ARGUMENTO O ARRAY LISTA-USUARIOS
}

addEventListener('load', () => listarUsuariosNaTabela()); // AO CARREGAR A PAGINA CHAMA A FUNÇÃO listarUsuariosNaTabela
btnPesquisar.addEventListener('click', filtrarDadosPorNome); // ADICIONA UMA ESCUTA NO BOTAO PESQUISAR QUANDO ELE FOR CLICADO EXECUTA A FUNÇÃO filtrarDadosUsuario
btnLimpar.addEventListener('click', limparDadosDaTelaForm); // ADICIONA UMA ESCUTA NO BOTAO LIMPAR QUANDO ELE FOR CLICADO EXECUTA A FUNÇÃO limparDadosDaTelaForm
