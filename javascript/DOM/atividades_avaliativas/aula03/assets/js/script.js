let inputName = document.getElementById('name');
let inputLastName = document.getElementById('lastName');
let inputCpf = document.getElementById('cpf');
let submitButton = document.getElementById('submit');

let feedbackName = document.getElementById('feedback-name');
let feedbackLastName = document.getElementById('feedback-lastName');
let feedbackCpf = document.getElementById('feedback-cpf');

submitButton.onclick = () => {
    if (validateName()) {
        if (validateLastName()) {
            if (validateCpf()) {
                setTimeout(resetFields, 2000);
            }
        }
    }
};

function validateName() {
    let name = inputName.value;
    if (name === '') {
        feedbackName.style.display = 'block';
        inputName.focus();
        return;
    } else {
        feedbackName.style.display = 'none';
    }
    return true;
}

function validateLastName() {
    let lastName = inputLastName.value;
    if (lastName === '') {
        feedbackLastName.style.display = 'block';
        inputLastName.focus();
        return;
    } else {
        feedbackLastName.style.display = 'none';
    }
    return true;
}

function validateCpf() {
    let cpf = inputCpf.value;
    if (cpf === '') {
        feedbackCpf.style.display = 'block';
        feedbackCpf.textContent = 'Campo obrigatório!';
        inputCpf.focus();
        return;
    } else {
        feedbackCpf.style.display = 'none';
    }

    if (!isNaN(cpf) && String(cpf).length === 11) {
        feedbackCpf.style.display = 'block';
        feedbackCpf.style.color = 'green';
        feedbackCpf.textContent = 'Sucesso!';
        alert('Dados enviados com sucesso!');
    } else {
        feedbackCpf.style.display = 'block';
        feedbackCpf.textContent = 'Cpf inválido!';
        inputCpf.focus();
        return;
    }
    return true;
}

function resetFields() {
    feedbackLastName.style.display = 'none';
    feedbackCpf.style.display = 'none';
    feedbackName.style.display = 'none';
    feedbackCpf.style.color = '#ca3131';
    inputName.value = '';
    inputLastName.value = '';
    inputCpf.value = '';
}
