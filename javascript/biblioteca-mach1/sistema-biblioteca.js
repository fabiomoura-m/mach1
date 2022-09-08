/*
    - Criar um array para armazenar os livros
    - Criar um prompt para definir a funcionalidade a ser utilizada
    - Criar a instrução de cada funcionalidade
    - Criar funcionalidade de inclusão
*/

let armazenaLivros = [
    ['100', ' Estruturas de Dados e Algoritmos com JavaScript', '8575226932'],
    ['101', 'Livro Clean code', '8575226940'],
    ['102', 'livro 3', '857522']
];

let recebeFuncionalidade = prompt(
    'Digite a funcionalidade desejada: (Incluir,Consultar ou Excluir'
).toLowerCase();

let mensagem = '';

switch (recebeFuncionalidade) {
    case 'incluir':
        /* Possibilidade 1
        let incluirLivro = prompt("Insira um livro(codigo,titulo,ISBN)")
        incluirLivro = incluirLivro.split(',')
        */
        // Possibilidade 2
        let codigo = prompt('Digite o código');
        let titulo = prompt('Digite o título');
        let isbn = prompt('Digite o ISBN');

        let incluirLivro = [codigo, titulo, isbn];
        armazenaLivros.push(incluirLivro);
        mensagem = `Livro incluído com sucesso: ${codigo} ${titulo} ${isbn}`;
        break;
    case 'consultar':
        let recebeCodigoOuISBN = prompt(
            'Digite o código ou o ISBN do livro que deseja encontrar:'
        );
        let encontrouLivro = '';
        for (let livro of armazenaLivros) {
            encontrouLivro = livro.indexOf(recebeCodigoOuISBN);
            console.log('indice retornado', encontrouLivro);
            if (encontrouLivro !== -1) {
                mensagem = `Livro: ${livro[0]} ${livro[1]} ${livro[2]} `;
                break;
            } else {
                mensagem = 'Livro não encontrado!';
            }
        }
        break;
    case 'excluir':
        let recebeCodigoOuISBNParaExcluir = prompt(
            'Digite o código ou o ISBN do livro que deseja excluir:'
        );
        let encontrouLivroExcluir = '';
        let contador = 0;
        for (let livro of armazenaLivros) {
            encontrouLivroExcluir = livro.indexOf(
                recebeCodigoOuISBNParaExcluir
            );
            if (encontrouLivroExcluir !== -1) {
                armazenaLivros.splice(contador, 1);
                mensagem = 'Livro excluído com sucesso!';
                break;
            } else {
                mensagem = 'O livro não foi encontrado para exclusão!';
            }
            contador++;
        }
        break;
    default:
        mensagem = 'Funcionalidade não encontrada';
}

alert(mensagem);
