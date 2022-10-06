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

const pesquisa = document.getElementById('pesquisa');
const btnPesquisar = document.getElementById('btnPesquisar');
const btnLimpar = document.getElementById('btnLimpar');

function listarUsuariosNaTabela(filtrados = undefined) {
    let trTds = '';
    let lista = [];
    let resultado = document.getElementById('resultado');

    lista = filtrados === undefined ? listaUsuarios : filtrados;
    console.log(lista);
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
    resultado.innerHTML = trTds;

    if (lista.length === 0) {
        resultado.innerHTML = `
        <tr>
            <td colspan="5">Nenhum usuário encontrado</td>
        </tr>
        `;
    }
}

function filtrarDadosPorNome() {
    let filtrados = [];
    let valorCampoPesquisa = pesquisa.value.toLowerCase();

    if (valorCampoPesquisa !== '') {
        filtrados = listaUsuarios.filter(usuario => {
            return (
                usuario.nome.toLowerCase().indexOf(valorCampoPesquisa) !== -1 ||
                usuario.id.toString().indexOf(valorCampoPesquisa) !== -1 ||
                usuario.sexo.toLowerCase().indexOf(valorCampoPesquisa) !== -1 ||
                usuario.idade.toString().indexOf(valorCampoPesquisa) !== -1 ||
                usuario.email.toLowerCase().indexOf(valorCampoPesquisa) !== -1
            );
        });
    } else {
        filtrados = listaUsuarios;
    }

    listarUsuariosNaTabela(filtrados);
}

function limparDadosDaTelaForm() {
    pesquisa.value = '';
    listarUsuariosNaTabela(listaUsuarios);
}

addEventListener('load', () => listarUsuariosNaTabela());
btnPesquisar.addEventListener('click', filtrarDadosPorNome);
btnLimpar.addEventListener('click', limparDadosDaTelaForm);
