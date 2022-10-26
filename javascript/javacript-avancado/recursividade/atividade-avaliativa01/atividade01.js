/*
Uma grande loja de produtos resolveu criar um serviço de entrega usando Drones. Todos os dias essa loja recebe uma pilha de produtos a serem enviados para seus clientes. O serviço tem sido um sucesso, porém a loja resolveu criar um sistema para seus clientes saberem quanto tempo faltava para seus pedidos saírem da loja, pois dessa forma os clientes poderiam ficar esperando na porta de casa a chegada do Drone com o produto. Então será criado uma calculadora de tempo que informaria ao cliente quanto tempo falta para o produto sair da loja. A loja demora cerca de 15 minutos para preparar o produto e enviar, com base nesta informação crie uma função recursiva que receberá uma array com os clientes e calculará de forma recursiva quanto tempo levará para o produto sair da loja;


● A loja possui uma array com todos os clientes a qual os produtos ainda não saiam
da loja, porém neste array o primeiro item será o último cliente a receber seu pedido
e o último item do array será o próximo cliente a receber seu produto.
● Cada pedido leva 15 minutos para sair da loja, então some 15 minutos a cada
pedido acima do buscado.
● A função receberá o array com os clientes e o nome do cliente que deseja buscar
para calcular o tempo de saída.
● Caso não exista o cliente retornar null

Ex.: Dado o array baixo caso a função seja executada os resultados serão os seguintes:
const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera']

o CalcularTempoSaida(clientes, “Vera”) – Resultado (15)
o CalcularTempoSaida (clientes, “Manoel”) – Resultado (60)
o CalcularTempoSaida (clientes, “Jorge”) – Resultado (90)
o CalcularTempoSaida (clientes, “Jonas”) – Resultado (null)

*/

const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera'];
let tempoEspera = 15;

function calcularTempoSaida(array, nome) {
    let index = array.length - 1;
    let clienteAtual = array[index];
    if (clienteAtual == nome) {
        console.log(tempoEspera);
    } else if (index == 0) {
        console.log(null);
    } else {
        tempoEspera += 15;
        array.pop();
        calcularTempoSaida(array, nome);
    }
}
calcularTempoSaida(clientes, 'Elis');

// Resolução Agnos
/*
const clientList = ["Jorge", "Maria", "Manoel", "João", "Roberto", "Vera"];
let time = 0;

function calcularTempoSaida(clients, clientFind) {
  const currentClient = clients[clients.length - 1];
  time += 15;
  if (!currentClient) {
    time = undefined;
  }
  if (currentClient && currentClient !== clientFind) {
    clients.pop();
    calcularTempoSaida(clients, clientFind);
  }
  return time;
}

console.log(calcularTempoSaida(clientList, "Roberto"));
console.log(calcularTempoSaida(clientList, "Jorge"));
console.log(calcularTempoSaida(clientList, "Jonas"));
*/
