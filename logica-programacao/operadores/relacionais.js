let valor1 = 20;
let valor2 = 40;

console.log(valor1 > valor2); //false
console.log(valor1 >= valor2); //false
console.log(valor1 < valor2); //true
console.log(valor1 <= valor2); //true
console.log(valor1 == valor2); //false
console.log(valor1 != valor2); //true

let valor3 = '40';
console.log(valor2 == valor3); // true
console.log(valor2 != valor3); //false

//estritamente igual/diferente, compara valor e tipo
console.log(valor2 === valor3); // false , valor e tipo devem ser iguais
console.log(valor2 !== valor3); // true, compara o tipo também

let estouEmAula = true;
console.log(estouEmAula); //true
//negação
console.log(!estouEmAula); //false
