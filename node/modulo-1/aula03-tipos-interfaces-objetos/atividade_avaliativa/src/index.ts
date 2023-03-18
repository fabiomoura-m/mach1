import promptSync from 'prompt-sync';

const prompt = promptSync();

interface IClient {
    CPF: number;
    Nome: string;
    Idade: number;
    EstadoCivil: string;
    Endereco: string;
    Cidade: string;
    Estado: string;
}

const clientesCadastrados: Array<IClient> = [];

function validateCPF(cpf: number) {
    if (isNaN(cpf) || String(cpf).length !== 11) {
        return false;
    }
    return true;
}

console.log('Bem vindo ao Cadastro de Clientes');

do {
    const cpf = Number(prompt('Digite seu cpf: '));

    if (!validateCPF(cpf)) {
        console.log('CPF inválido, digite 11 dígitos. \n');

        let resposta: string = prompt(
            'Aperte enter para continuar ou digite EXIT para sair: '
        );
        if (resposta.toLowerCase() == 'exit') {
            console.log('Até logo!\n');
            break;
        } else {
            continue;
        }
    }

    const nome = prompt('Digite o nome: ');
    const idade = Number(prompt('Digite a idade: '));
    const estadoCivil = prompt('Digite o estado civil: ');
    const endereco = prompt('Digite o endereço: ');
    const cidade = prompt('Digite a cidade: ');
    const estado = prompt('Digite o estado: ');

    let client: IClient = {
        CPF: cpf,
        Nome: nome,
        Idade: idade,
        EstadoCivil: estadoCivil,
        Endereco: endereco,
        Cidade: cidade,
        Estado: estado
    };

    clientesCadastrados.push(client);

    console.log('\nCliente cadastrado com sucesso!\n');

    let pergunta = prompt(
        'Deseja Cadastrar outro cliente? Aperte enter para sim ou digite EXIT para sair: '
    );

    if (pergunta.toLowerCase() == 'exit') {
        break;
    }
    
} while (true);

console.log('Clientes cadastrados: \n', clientesCadastrados);
