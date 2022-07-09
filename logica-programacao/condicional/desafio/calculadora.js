/*
Elaborar um programa para receber dois valores e o tipo de operação (+ - * /)
Esse programa irá calcular a expressão entre esses dois valores
Utilizar o if para fazer
Verificar se são numeros  => caso informe um valor diferente de numero: DIGITE UM NUMERO VALIDO
Verificar se os simbolos são válidos => caso informe um simbolo diferente: Os símbolos válidos são + - * /
Executar o calculo conforme o esperado.
Exemplo de entrada:
Digite o valor 1:
10
Digite o valor 2:
30
Infome a operação (+ - * /)
*
Exemplo de saida:
O resutado de 10 * 30 = 300
*/

const prompt = require('prompt-sync')();

console.log('Digite o valor 1:');
let valor1 = Number(prompt());
if (isNaN(valor1)) {
  console.log('DIGITE UM NUMERO VALIDO');
  return;
}

console.log('Digite o valor 2:');
let valor2 = Number(prompt());
if (isNaN(valor2)) {
  console.log('DIGITE UM NUMERO VALIDO');
  return;
}

console.log('Informe a operação desejada (+ - * /)');
let operacao = prompt();
if (
  operacao !== '+' &&
  operacao !== '-' &&
  operacao !== '*' &&
  operacao !== '/'
) {
  console.log('INSIRA UMA OPERACAO VALIDA');
  return;
}

let resultado;
if (operacao === '+') {
  resultado = valor1 + valor2;
}
if (operacao === '-') {
  resultado = valor1 - valor2;
}
if (operacao === '*') {
  resultado = valor1 * valor2;
}
if (operacao === '/') {
  resultado = valor1 / valor2;
}

console.log(`O resutado de ${valor1} ${operacao} ${valor2} = ${resultado}`);
