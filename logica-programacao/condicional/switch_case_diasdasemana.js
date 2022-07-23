const prompt = require('prompt-sync')();

const numeroDiaSemana = Number(
    prompt('Digite um numero referente a um dia da semana (1 a 7):')
);
// 1 ao 7 (1- domingo e 7- Sábado)

switch (numeroDiaSemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Digite um valor entre 1 e 7');
}
