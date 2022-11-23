import { ProcessarArquivos } from './utils.js';

const btnProcessar = document.querySelector('#processar');

const files = [];
for (let i = 1; i <= 100; i++) {
    files.push({ text: `Arquivo ${i}`, id: i, file: `arquivo_${i}.txt` });
}

files.forEach(x => {
    let op = document.createElement('option');
    op.value = x.file;
    op.innerText = x.text;
    document.querySelector('#arquivos').appendChild(op);
});

btnProcessar.addEventListener('click', () => {
    const arquivosSelecionados = document.querySelectorAll('option:checked');
    const totalArquivos = document.querySelector('#totalArquivos');
    const totalArquivosSucesso = document.querySelector(
        '#totalArquivosSucesso'
    );
    const totalArquivosErros = document.querySelector('#totalArquivosErros');

    const arquivos = Array.from(arquivosSelecionados).map(
        arquivo => arquivo.value
    );

    Promise.allSettled(ProcessarArquivos(arquivos))
        .then(resp => {
            console.log(resp);
            const totalSucesso = resp.filter(
                item => item.status == 'fulfilled'
            );
            const totalErros = resp.filter(item => item.status == 'rejected');

            totalArquivos.innerHTML = resp.length;
            totalArquivosSucesso.innerHTML = totalSucesso.length;
            totalArquivosErros.innerHTML = totalErros.length;
        })
        .catch(err => console.log(err));
});
