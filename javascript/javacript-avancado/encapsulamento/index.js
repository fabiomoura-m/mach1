/* Encapsulamento */

// class Produto {
//     #id;
//     #nome;
//     valor = 0;
//     imposto = 0;
//     #ingredientes = [];

//     constructor(id, nome) {
//         this.#id = id;
//         this.#nome = nome;
//     }

//     exibirValorComImposto() {
//         return this.valor + this.valor * this.imposto;
//     }

//     adicionarIngrediente(ingrediente) {
//         if (!(ingrediente instanceof Ingrediente)) {
//             throw new Error('Ingrediente inválido!');
//         }
//         this.#ingredientes.push(ingrediente);
//     }

//     obterCaloriasTotais() {
//         return this.#ingredientes.reduce((prev, current) => {
//             return prev + current.calorias;
//         }, 0);
//     }
// }

// class Ingrediente {
//     nome;
//     calorias = 0;

//     constructor(nome, calorias) {
//         this.nome = nome;
//         this.calorias = calorias;
//     }
// }

// const refrigerante = new Produto(1, 'Coca');

// refrigerante.valor = 10;
// refrigerante.imposto = 0.05;

// let ingrediente1 = new Ingrediente('Açúcar', 10);
// let ingrediente2 = new Ingrediente('Água', 100);
// let ingrediente3 = new Ingrediente('Corante', 50);

// refrigerante.adicionarIngrediente(ingrediente1);
// refrigerante.adicionarIngrediente(ingrediente2);
// refrigerante.adicionarIngrediente(ingrediente3);

// console.log(refrigerante.obterCaloriasTotais());
// // refrigerante.adicionarIngrediente({ nome: 'Açúcar', calorias: 10 });

// console.log(refrigerante.exibirValorComImposto());
// console.log(refrigerante);

class Botao {
    #id;
    text = '';
    #cssClass = [];

    constructor(id) {
        this.#id = id;
    }

    // readOnly
    get id() {
        return this.#id;
    }

    addClass(classCss) {
        this.#cssClass.push(classCss);
    }

    get cssClass() {
        return [...this.#cssClass];
    }

    render(element) {
        let html = `<button id=${this.#id}>${this.text}</button>`;
        element.innerHTML = html;
    }
}

const div1 = document.querySelector('.data-1');
const div2 = document.querySelector('.data-2');

const botaoOK = new Botao('btnOK');
botaoOK.text = 'OK';
botaoOK.render(div1);
console.log(botaoOK.id);
// botaoOK.id = 'novoBotao';  // error, pois qnd coloca set nao podemos alterar.

botaoOK.addClass('class1');

console.log('Class do botao OK', botaoOK.cssClass);
botaoOK.cssClass.push('class2'); // é possível adicionar devido a referência que faz do array, mas não deveria, para tirar essa possibilidade, retornamos no get uma cópia do array.

// Referencia dos #cssClass do objeto botaoOK
let array = botaoOK.cssClass;
array.push('class2');
console.log(array);
console.log('Class do botao OK', botaoOK.cssClass);

const botaoSalvar = new Botao('btnSalvar');
botaoSalvar.text = 'Salvar';
botaoSalvar.render(div2);

// obs: para array e objetos, quando criamos um get, devemos retornar uma copia do objeto e nao o objeto em si, pois mesmo sendo privado é possivel manipular devido a referência.
