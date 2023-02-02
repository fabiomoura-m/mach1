Crie um arquivo de contexto:

- Crie um arquivo separado chamado "context.js" na pasta do seu projeto
- No arquivo "context.js", use o método createContext() para criar um contexto
- No arquivo "context.js" crie uma função Provider que compartilha um state
- Criar e disponibilizar pelo provider uma propriedade de leitura e escrita do
estado {produto, setProduto}.
- Estado inicial do contexto deve ser nome: “”, preco: 0, descricao: “sem
descricao”
- As informações de produto devem ser os seguintes dados: nome, preço e
descrição do produto.

Adicione o Provider ao componente principal:
- Importe o objeto de contexto criado no arquivo "context.js" em seu componente Produto.
- Certifique-se de que o Provider está disponível para todos os componentes da aplicação, adicioná-lo no componente raiz do projeto.

Consumir o estado compartilhado usando o componente Produto:
- No componente Produto, importe o objeto de contexto
- e carrega os dados do componente com os dados que vem do contexto

Atualizando estado em App componente
- Criar um botão em App componente
- Importar o componente de Produto no App componente
- Ao clicar no botão deve atualizar o context de produto usando o setProdutos
- Após essa ação o componente de produto deve mostrar as atualizações do estado.  
