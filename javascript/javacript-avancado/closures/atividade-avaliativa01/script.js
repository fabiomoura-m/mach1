/*
Criar uma função usando o conceito de closure que prepare e exiba uma tabuada seguindo as seguintes regras.

a. A primeira função seja montarTabuada(numero) – Que será responsável por receber o número e preparar a tabuada.

b. Após armazenar a chamada do montarTabuada()
*/

function montarTabuada(numero) {
    function exibeTabuada(inicio, fim) {
        for (let i = inicio; i <= fim; i++) {
            console.log(`${i} x ${numero} = ${i * numero}`);
        }
    }
    return exibeTabuada;
}
const tabuada2 = montarTabuada(2);

tabuada2(1, 10);
