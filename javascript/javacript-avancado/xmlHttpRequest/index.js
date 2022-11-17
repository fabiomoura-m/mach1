// GET
// URL: http://apicep.com.br?cep=241111582

//POST
// URL: http://apicep.com.br?cep=241111582&rua=Teste
// {rua: "Endereço X", cep: 241111582 }

// XML - trafegar dados com marcações
/* <pessoa>
    <nome>Wesdras</nome>
    <endereco>rua teste</endereco>
</pessoa> */

// JSON
// [
//     pessoa:{
//         nome: 'Wesdras',
//         endereco: 'Rua teste'
//     }
// ]

const request = new XMLHttpRequest();
console.log('State inicial');
console.log(request.readyState);

request.onreadystatechange = function () {
    console.log('Mudando o state');
    console.log(request.readyState);
    // console.log(request.response); mostra a partir de 3 que é o carregamento, e finaliza no codigo 4.

    if (request.readyState == 4) {
        console.log(request.status); // código do status da requisição
        let jsonData = request.response;
        let objData = JSON.parse(jsonData);

        objData.results.forEach(pokemon => {
            const div = document.querySelector('#pokemons');

            div.innerHTML += `<p>${pokemon.name}</p>`;
            // console.log(pokemon.name);
        });
    }
};
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
request.send();
