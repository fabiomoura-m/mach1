// const texto = 'WESDRAS';
// const numero = 1;
// const verdade = true;
// const produto = {
//     codigo: 1,
//     nome: 'Refrigerante'
// };
// const produto2 = {
//     codigo: 2,
//     nome: 'Pizza'
// };

/* Primeira parte abstração e definição de class */

// class Produto {
//     codigo = null;
//     nome = '';
// }

// class Pedido {
//     codigo = null;
//     nome = '';
// }

// function adicionarProduto(produto) {
//     if (!(produto instanceof Produto)) {
//         throw new Error('Produto inválido');
//     }
//     meusProdutos.push(produto);
// }

// const meusProdutos = [];
// const produtoObj = new Produto();
// const produtoObj2 = new Produto();
// produtoObj.codigo = 3;
// produtoObj.nome = 'Suco';

// const pedido = new Pedido();

// adicionarProduto(produtoObj);
// adicionarProduto(produtoObj2);
// // adicionarProduto({ id: 4, nome: 'Hamburguer' });
// // adicionarProduto(pedido);

// console.log(produto);
// console.log(produto2);
// console.log(produtoObj);
// console.log(produtoObj2);

// console.log(meusProdutos);

/* Parte 2 - Conceito de construtor */

// class Produto {
//     codigo = null;
//     nome = '';

//     constructor(codigo, nome) {
//         this.codigo = codigo;
//         this.nome = nome;
//     }

//     mostraNome() {
//         return this.nome;
//     }
// }

// let produto1 = new Produto(1, 'Refrigerante');
// let produto2 = new Produto(2, 'Pizza');
// let produto3 = new Produto();

// console.log(produto1);
// console.log(produto2);
// console.log(produto3);
// console.log(produto1.mostraNome());
// console.log(produto2.mostraNome());

/* Parte 3 - Propriedades privadas e públicas */

class Produto {
    #codigo = null;
    #nome = '';

    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
    }

    get codigo() {
        return this.#codigo;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = `Refrigerante ${value}`;
    } // se criar o set, é possível alterar mesmo sendo privado.

    mostrarDados() {
        // console.table(this);
        console.log('Meu código é: ', this.#codigo);
        console.log('Meu nome é: ', this.#nome);
    }
}

let refrigerante = new Produto(1, 'Refrigerante');
refrigerante.codigo = 2;
refrigerante.nome = 'Suco';
console.log(refrigerante);
console.log(refrigerante.codigo);
refrigerante.mostrarDados();
