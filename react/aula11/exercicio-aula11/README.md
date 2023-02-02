Criar um estado inicial para a lista de produtos
- Crie um arquivo de reducer com as seguintes Actions ADICIONAR E REMOVER
- No arquivo do reducer crie um initialStateProdutos com lista vazia
- Crie um arquivo de componente React chamado "ProductList.js"
- Importe "ProductList.js" o useReducer do React adicionando nosso reducer e nosso initialState no hook.

Adicionando lógica nas Ações
- ação de ADICIONAR deve adicionar um produto no final da lista
- ação REMOVER deve remover o último produto da lista
- você pode gerar os nomes dos produtos usando algum contador numérico ou de forma randômica  

Disparando ações em APP.js
- Adicionar componente de ProductList em App.js ● Adicionar os seguintes botões em App.js , acima de ProductList
- Criar um botão de adicionar que ao ser clicado adicionar um produto na lista de produtos (deve atualizar "ProductList.js de forma automática)
- Criar um botão de remover que ao ser clicado adicionar um produto na lista de produtos (deve atualizar "ProductList.js de forma automática)
