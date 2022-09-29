let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPhone = document.getElementById('phone');
let form = document.getElementById('form');
let feedback = document.getElementById('feedback');

let sectionRegister = document.getElementById('customer-register');
let sectionList = document.getElementById('container-list');

let buttonSave = document.getElementById('save-button');
let buttonConclude = document.getElementById('conclude-button');

let clientsList = [];

function clearFields() {
    form.reset();
}

function showFeedback(message, typeFeedback) {
    feedback.innerHTML = message;
    feedback.classList.remove('hidden');
    feedback.classList.add(typeFeedback);
}

function validateFields(name, email, phone) {
    if (name === '' || email === '' || phone === '') {
        return false;
    }
    return true;
}

function saveClients() {
    let name = inputName.value;
    let email = inputEmail.value;
    let phone = inputPhone.value;

    let validFields = validateFields(name, email, phone);

    if (validFields) {
        let clientGeneric = {
            name,
            email,
            phone
        };

        clientsList.push(clientGeneric);
        clearFields();
        showFeedback('Cadastro efetuado com sucesso!', 'positive');
    } else {
        showFeedback('Preencha todos os campos!', 'negative');
    }
}

function showClientsList(client, index) {
    let clientList = document.getElementById('clients-list');
    let list = `
        <li><strong>Cliente ${index + 1}</strong></li>
        <ul>
            <li>${client.name}</li>
            <li>${client.email}</li>
            <li>${client.phone}</li>
        </ul>
    `;

    clientList.innerHTML += list;
}

function registerComplete() {
    sectionRegister.classList.add('hidden');
    sectionList.classList.remove('hidden');

    if (clientsList.length === 0) {
        sectionList.innerHTML += 'Não há clientes cadastrados!';
        return;
    }

    clientsList.forEach(showClientsList);
}

buttonSave.addEventListener('click', saveClients);
buttonConclude.addEventListener('click', registerComplete);
