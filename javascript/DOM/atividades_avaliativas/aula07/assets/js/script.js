let btnCalcular = document.getElementById('calcular');
let btnLimpar = document.getElementById('limpar');
let numero = document.getElementById('numero');
let resultadoDiv = document.getElementById('resultado');
let arrValores = [];

function adicionaNumeroArray() {
    let numeroRecebido = numero.value;

    arrValores.push(numeroRecebido);

    let arrayMultiplicadoPorTres = arrValores.map(function (item) {
        return item * 3;
    });

    resultadoDiv.innerHTML = arrayMultiplicadoPorTres.join();

    limpaInput();
}

function limpaInput() {
    numero.value = '';
}

function limpaCampos() {
    resultadoDiv.innerHTML = '';
    arrValores = [];
}

btnCalcular.addEventListener('click', adicionaNumeroArray);
btnLimpar.addEventListener('click', limpaCampos);
