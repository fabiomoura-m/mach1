// Sem default
import { criar, atualizar } from './entidades/produtos.js';

// Com default
import produto from './entidades/produtos.js';

import dadosProdutos from './dados/produtos.mjs';
// Exportação por default não precisa de {} e podemos dar o nome que quiser na importação. Só pode ter um export default por aquivo.

// Importando todos os arquivos que estão export em um arquivo
import * as produtosExportados from './entidades/produtos.js';

criar();
produto.buscarPorNome();
produtosExportados.buscar();

console.log(dadosProdutos);

// mjs é apenas para mudar visualmente que é um módulo

// Importando varios dados de arquivos diferentes
import db from './dados/index.mjs';
// console.log(db.produtos);
console.log(db.status);

let produtoO = { nome: 'Produto1' };
db.pedidos.push(produtoO);
console.log(db.pedidos);

// Importação Dinâmica

function teste() {
    import('./dados/index.mjs').then(dados => console.log(dados.default));
}
console.log('Início');
teste();
console.log('Fim');
