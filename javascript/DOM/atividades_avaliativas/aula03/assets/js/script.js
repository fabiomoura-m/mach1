let inputName = document.getElementById('name');
let inputLastName = document.getElementById('lastName');
let inputCpf = document.getElementById('cpf');
let submitButton = document.getElementById('submit');

let feedbackName = document.getElementById('feedback-name');
let feedbackLastName = document.getElementById('feedback-lastName');
let feedbackCpf = document.getElementById('feedback-cpf');

submitButton.onclick = () => {
    if (inputName.value === '') {
        feedbackName.style.display = 'block';
        inputName.focus();
        return;
    } else {
        feedbackName.style.display = 'none';
    }

    if (inputLastName.value === '') {
        feedbackLastName.style.display = 'block';
        inputLastName.focus();
        return;
    } else {
        feedbackLastName.style.display = 'none';
    }

    if (inputCpf.value === '') {
        feedbackCpf.style.display = 'block';
        feedbackCpf.textContent = 'Campo obrigatório!';
        inputCpf.focus();
        return;
    } else {
        feedbackCpf.style.display = 'none';
    }

    if (!isNaN(inputCpf.value) && String(inputCpf.value).length === 11) {
        feedbackCpf.style.display = 'block';
        feedbackCpf.style.color = 'green';
        feedbackCpf.textContent = 'Sucesso!';
        alert('Dados enviados com sucesso!');
        setTimeout(resetFields, 2000);
    } else {
        feedbackCpf.style.display = 'block';
        feedbackCpf.textContent = 'Cpf inválido!';
        inputCpf.focus();
        return;
    }
};

function resetFields() {
    feedbackLastName.style.display = 'none';
    feedbackCpf.style.display = 'none';
    feedbackName.style.display = 'none';
    feedbackCpf.style.color = 'red';
    inputName.value = '';
    inputLastName.value = '';
    inputCpf.value = '';
}
