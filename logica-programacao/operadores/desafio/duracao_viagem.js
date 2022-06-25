/**
Ler a duração de dias e horas.
Calcule e informe a duração total da viagem em número de horas.
Exemplo: 
Numero de dias: 2
Numero de horas: 4
Total de horas: 52
*/

// 1 dia = 24 hr

const prompt = require('prompt-sync')();

console.log('Digite a duração de dias da viagem:');
let dias = Number(prompt());

console.log('Digite a duração de horas da viagem:');
let horas = Number(prompt());

let duracaoHoras = dias * 24 + horas;

console.log('A duração total da viagem em horas é: ' + duracaoHoras);
