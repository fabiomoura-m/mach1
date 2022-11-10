class Produto {
    #id;
    nome = '';

    constructor(nome) {
        this.nome = nome;
    }

    criarEtiqueta() {
        return `Produto : ${this.nome}`;
    }

    calcularFrete() {
        throw new Error('Método não implementado');
    }
}

class Bebida extends Produto {
    constructor(nome, litros) {
        super(nome);
        this.litros = litros;
    }

    criarEtiqueta() {
        let etiqueta = super.criarEtiqueta();
        return `${etiqueta}
                Tipo: Bebida`;
    }
}

let refrigerante = new Bebida('Coca cola', 2);

console.log(refrigerante);
console.log(refrigerante instanceof Bebida);
console.log(refrigerante instanceof Produto);

// atributos privados se mantém apenas no pai

class Comida extends Produto {
    peso = 0;
    #ingredientes = [];

    adicionarIngrediente(ingrediente) {
        this.#ingredientes.push(ingrediente);
    }

    calcularFrete() {
        return 10;
    }
}

class Pizza extends Comida {
    fatias = 0;
}

class Hamburguer extends Comida {
    tamanho = 0;
}

let minhaPizza = new Pizza('Pizza Chocolate');
minhaPizza.adicionarIngrediente('Granulado');
minhaPizza.adicionarIngrediente('Castanha');

let meuHamburguer = new Hamburguer('O maior');
meuHamburguer.adicionarIngrediente('Cebola');
meuHamburguer.adicionarIngrediente('Tomate');

console.log(minhaPizza);
console.log(meuHamburguer);

class ChocolateQuente extends Bebida {}
let chocolate = new ChocolateQuente();

console.log(minhaPizza.calcularFrete());
// console.log(chocolate.calcularFrete());

console.log(refrigerante.criarEtiqueta());
console.log(minhaPizza.criarEtiqueta());

/** PROGRAMAÇÃO FUNCIONAL **/

console.log('PROTOTYPE');
console.log(chocolate.__proto__);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.exibirNomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`;
    };
}

function PessoaFisica(nome, sobrenome) {
    Pessoa.call(this, nome, sobrenome);
}

PessoaFisica.prototype = Object.create(Pessoa.prototype);

let wesdras = new PessoaFisica('Wesdras', 'Alves');
console.log(wesdras);
console.log(wesdras.exibirNomeCompleto());
