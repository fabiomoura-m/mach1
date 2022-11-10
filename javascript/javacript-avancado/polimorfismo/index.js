/* Polimorfismo */

// class Animal {
//     emitirSom() {
//         throw new Error('Som não definido');
//     }
// }

// class Cachorro extends Animal {
//     emitirSom() {
//         console.log('Latir');
//     }
// }

// const bob = new Cachorro();
// bob.emitirSom();

// const animal = new Animal();
// animal.emitirSom();

/* Xadrez */

class Peca {
    #status = true;

    mover() {}

    get statusPeca() {
        return this.#status;
    }

    set statusPeca(value) {
        this.#status = value;
    }
}

class Peao extends Peca {
    mover() {
        console.log('Mover pra frente');
    }
}

class Cavalo extends Peca {
    mover() {
        console.log('Mover em L');
    }
}

class Bispo extends Peca {
    mover() {
        console.log('Mover em diagonal');
    }

    get statusPeca() {
        return false;
    }
}

const peao1 = new Peao();
const cavalo1 = new Cavalo();
const bispo1 = new Bispo();

peao1.mover();
console.log(peao1.statusPeca);
cavalo1.mover();
cavalo1.statusPeca = false;
console.log(cavalo1.statusPeca);
bispo1.mover();
console.log(bispo1.statusPeca);

class Mensagem {
    texto = '';
    titulo = '';

    constructor(titulo, texto) {
        this.texto = texto;
        this.titulo = titulo;
    }

    renderMensagem(element) {
        let mensagem = this.obterMensagem();
        element.innerHTML = `
            <h1>${this.titulo}</h1>
            <p>
                ${mensagem}
            </p>
            `;
    }

    obterMensagem() {
        return this.texto;
    }
}

class MensagemErro extends Mensagem {
    obterMensagem() {
        let mensagem = super.obterMensagem();
        return `<p style="color:red">${mensagem}</p>`;
    }
}

class MensagemSucesso extends Mensagem {
    obterMensagem() {
        let mensagem = super.obterMensagem();
        return `<p style="color:green">${mensagem}</p>`;
    }
}

let mensagem = new MensagemSucesso('Titulo', 'Tudo feito correto');
let elemento = document.querySelector('#mensagem');

mensagem.renderMensagem(elemento);

function Produto(nome) {
    this.nome = nome;
}

Produto.prototype.exibirEtiqueta = function () {
    return `Etiqueta do ${this.nome}`;
};

function Pizza(nome) {
    Produto.call(this, nome);
}

Pizza.prototype = Object.create(Produto.prototype);
Pizza.prototype.exibirEtiqueta = function (preco) {
    return `Etiqueta do ${this.nome} ${preco}`;
};

const pizzaQueijo = new Pizza('pizza do wesdras');
console.log(pizzaQueijo.exibirEtiqueta('R$ 20.00'));

console.log(Pizza.prototype);
