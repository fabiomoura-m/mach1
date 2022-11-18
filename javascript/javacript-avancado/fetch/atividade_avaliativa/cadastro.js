const btnCadastrar = document.querySelector('#cadastrar');
const inputNome = document.querySelector('#nome');
const inputMatricula = document.querySelector('#matricula');

btnCadastrar.addEventListener('click', cadastrarAluno);

function cadastrarAluno() {
    const nomeAluno = inputNome.value;
    const numeroMatricula = inputMatricula.value;

    const aluno = {
        nome: nomeAluno,
        matricula: numeroMatricula
    };

    const initRequest = {
        method: 'POST',
        body: JSON.stringify(aluno)
    };

    const url = 'http://localhost:3000';

    fetch(`${url}/aluno`, initRequest)
        .then(response => {
            if (response.ok) {
                alert('Aluno cadastrado com sucesso');
                return;
            }
            throw new Error('Matricula ja cadastrada');
        })
        .catch(erro => {
            alert(erro.message);
        });
}
