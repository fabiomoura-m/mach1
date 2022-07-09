let tentativas = 0;
let NUMERO_LIMITE = 0.9999;
// console.log(Math.random()); // gera um numero aleatorio de 0 a 1
// return;

//quantidade indeterminada de repetições
while (Math.random() < NUMERO_LIMITE) {
  // console.log('encontrou valor < 0.9');
  // console.log(tentativas++);
  tentativas++;
}

console.log(
  `Foi um encontrado um numero maior que ${NUMERO_LIMITE} com ${tentativas} tentativas`
);
