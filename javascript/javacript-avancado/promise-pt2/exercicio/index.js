import { EnviarMensagemServers } from './utils.js';

const btnEnviar = document.querySelector('#enviar');

btnEnviar.addEventListener('click', () => {
    const mensagem = document.querySelector('#mensagem').value;
    const exibeResposta = document.querySelector('#primeiraResposta');

    if (mensagem == '') {
        exibeResposta.innerHTML = '';
        return alert('Campo mensagem é obrigatório');
    }

    Promise.race(EnviarMensagemServers(mensagem))
        .then(res => {
            exibeResposta.innerHTML = res;
            exibeResposta.style.color = 'green';
        })
        .catch(err => {
            exibeResposta.innerHTML = err;
            exibeResposta.style.color = 'red';
        });
});
