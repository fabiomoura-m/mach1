/*
Cenário usando o OU (OR)
Cenário 1
Porém, hoje só vou à academia
se não estiver chovendo OU o carro estiver na garagem.
*/
let condicao1 = 'carro está na garagem';
let condicao2 = 'está chovendo';

// para eu ir a academia eu devo estar carro está na garagem ou NÂO ESTAR CHOVENDO
//cond1 V
//cond2 F
if (condicao1 == 'carro está na garagem' || condicao2 == 'não está chovendo') {
  console.log('Devo ir a academia!');
} else {
  console.log('Não vou a academia!');
}
