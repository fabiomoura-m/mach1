//!Não tem entrada de dados do usuario!
/**
 Declare e inicialize um array chamado planetas com 5 posicoes, 
 exiba no console.log cada item do array e o índice em cada iteração.
 Ex de saída:
 terra - 0
 marte - 1

 */

let planetas = ['Marte', 'Jupiter', 'Saturno', 'Mercúrio', 'Terra'];

for (let indice = 0; indice < planetas.length; indice++) {
    console.log(`${planetas[indice]} - ${indice}`);
}
