/*
Cenário usando o E (AND)
Cenário 1
Porém, hoje só vou à academia
se eu estiver disposto e não estiver chovendo.
*/
let condicao1 = 'disposto';
let condicao2 = 'esta chovendo';

// para eu ir a academia eu devo estar DISPOSTO e NÂO ESTAR CHOVENDO
//disposto V
//esta chovendo F
if (condicao1 == 'disposto' && condicao2 == 'não está chovendo') {
  console.log('Devo ir a academia!');
} else {
  console.log('Não vou a academia!');
}
