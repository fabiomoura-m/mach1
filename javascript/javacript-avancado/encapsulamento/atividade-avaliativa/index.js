function incrementaID(contador) {
    let numeroLoop = () => {
        return contador++;
    };
    return numeroLoop;
}

const contador = incrementaID(1);

class Aluno {
    #id;
    nome = '';
    endereco = '';
    data_nascimento;
    email = '';
    telefone = '';
    #avaliacoes = [];
    #idade;
    #aprovado;

    constructor(nome, data_nascimento) {
        this.nome = nome;
        this.#id = contador();
        this.data_nascimento = data_nascimento;

        if (!this.data_nascimento) {
            throw new Error('Data de Nascimento não informada.');
        }
    }

    #calculaIdade() {
        const dataAtual = new Date();
        const formataDataBrParaEua = this.data_nascimento
            .split('/')
            .reverse()
            .join('/');
        const dataNascimento = new Date(formataDataBrParaEua);

        let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
        const meses = dataAtual.getMonth() - dataNascimento.getMonth();

        if (
            meses < 0 ||
            (meses === 0 && dataAtual.getDate() < dataNascimento.getDate())
        ) {
            idade--;
        }

        this.#idade = idade;
    }

    get idade() {
        this.#calculaIdade();
        return this.#idade;
    }

    adicionarAvaliacao(avaliacao) {
        this.#avaliacoes.push(avaliacao);
    }

    obterMedia() {
        let somaDasAvaliacoes = this.#avaliacoes.reduce((prev, current) => {
            return prev + current;
        }, 0);

        let media = somaDasAvaliacoes / this.#avaliacoes.length;

        return media.toFixed(2);
    }

    get aprovado() {
        this.#aprovado = this.obterMedia() >= 7 ? true : false;
        return this.#aprovado;
    }
}

class Avaliacao {
    tipo = '';
    nota = 0;
    observacao = '';

    constructor(tipo) {
        this.tipo = tipo;
    }
}

const aluno = new Aluno('Pedro', '07/11/1991');
aluno.adicionarAvaliacao(5);
aluno.adicionarAvaliacao(10);
aluno.adicionarAvaliacao(6);
console.log(aluno.idade);
console.log(aluno.obterMedia());
console.log(aluno.aprovado);
