![image1](https://user-images.githubusercontent.com/93055468/230900659-947d99ad-3e02-4270-bfef-cdb62b66503c.png)

Para cada registro de produto você deverá gerar um ID numérico único. 

- É importante compreender a regra do negócio, então uma explicação sobre algumas propriedades do body esperado para que você programe corretamente:

productTags - Receberá um array com posições string, que vão conter tags relacionadas ao produto, para otimizar possíveis buscas interessantes no futuro.

productRelated - Receberá um array com IDs numéricos de produtos relacionados.  (Aqui é importante não receber IDS de produtos relacionados que não estão cadastrados)

- Construa uma rota utilizando GET para retornar a lista de produtos que foram cadastrados, e caso não exista nenhum devolva uma resposta coerente ao seu “consumidor” da API.

- Construa uma rota utilizando GET para retornar um produto através do ID passado por PARAMS, e caso não exista nenhum com o ID passado  devolva uma resposta coerente ao seu “consumidor” da API.

- Construa uma rota utilizando PUT para atualizar um produto através do ID passado por PARAMS, e caso não exista nenhum com o ID passado  devolva uma resposta coerente ao seu “consumidor” da API.

Atividade extra:
Se conseguiu realizar todas as atividades acima, agora é hora de organizar seu código, PESQUISE como organizar uma API Node e tente aplicar os padrões pesquisados.

Se não conseguir tudo bem, se tentar fazer já alcançou o objetivo!



Dicas importantes:

- Valide os dados recebidos, não grave qualquer coisa no arquivo.

- Utilize a tipagem forte do typescript como aliada para o desenvolvimento.

- Pesquise e questione o que for necessário enquanto estiver desenvolvendo o exercício. 

- Se possível, comente as ideias de solução com os colegas da turma. 
