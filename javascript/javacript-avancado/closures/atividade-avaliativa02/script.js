/* 
A Mach1 está desenvolvendo um cadastro de alunos, porém é necessário que cada aluno tenha um número único e esse número precisa ser sequencial. 
Por exemplo: Se estou cadastrando o primeiro aluno o número dele será 1, quando for cadastrar o segundo aluno o número será 2 e assim consecutivamente. Dado as seguintes informações crie uma função Closure que seja responsável por criar um contador a partir de um número passado, e toda vez que a função for chamada ela devolverá o número anterior +1;
Abaixo um exemplo de como a função deve ser chamada e como deve funcionar.
 */

function criarContadorNumerico(numero) {
    function contador() {
        console.log(`${numero++}`);
    }
    return contador;
}
const contador = criarContadorNumerico(1);

const idPrimeiroAluno = contador();
const idSegundoAluno = contador();
const idTerceiroAluno = contador();

const novoContador = criarContadorNumerico(6);

novoContador();
novoContador();
