let inputName1 = document.getElementById('name');
let inputName2 = document.getElementById('name2');
let inputName3 = document.getElementById('name3');
let saveButton = document.getElementById('save-btn');
let elementListName1 = document.querySelector('.name1-list');
let elementListName2 = document.querySelector('.name2-list');
let elementListName3 = document.querySelector('.name3-list');

let feedback = document.getElementById('feedback-names');

saveButton.onclick = () => {
    let name1 = inputName1.value;
    let name2 = inputName2.value;
    let name3 = inputName3.value;

    if (validateFields(name1, name2, name3)) {
        fillListNames(name1, name2, name3);
    }
};

function validateFields(name1, name2, name3) {
    if (name1 === '' || name2 === '' || name3 === '') {
        feedback.style.display = 'block';
        feedback.textContent = 'Erro, todos os campos devem ser preenchidos!';
        return;
    } else {
        feedback.style.display = 'none';
    }
    return true;
}

function fillListNames(name1, name2, name3) {
    elementListName1.innerHTML = `<span>Nome1:</span> ${name1}`;
    elementListName2.innerHTML = `<span>Nome2:</span> ${name2}`;
    elementListName3.innerHTML = `<span>Nome3:</span> ${name3}`;
}
