let inicio = 'Iniciando...\n';
let meio = 'Carregando...\n';
let fim = 'Finalizando...\n';

inicio += 'após o inicio do texto inseri esse trecho aqui \n';
inicio += 'outro texto \n';
meio += 'inserindo após carregando \n';

console.log(inicio + meio + fim);

console.log('Usando a ``');
let textoCompleto = `Teste usando a crase ${inicio} ${meio} ${fim}`;
console.log(textoCompleto);
