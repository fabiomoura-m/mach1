const carros = [
    'Gol',
    'Palio',
    'Kwid',
    'Sentra',
    'Siena',
    'Onix',
    'Kombi',
    'Fit',
    'Polo',
    'Civic'
]; // 10 itens
const tamanhoArrCarros = carros.length; // tamanho do meu array quantidade de itens
console.table(carros);

//For classico
for (let indice = 0; indice < 8; indice++) {
    console.log(`No indice ${indice}: ${carros[indice]}`);
}

//For in
// somente o indice dos itens do array
console.log('for IN');
for (let indice in carros) {
    console.log(indice);
}

//For off
// somente o valor dos itens do array
console.log('for OF');
for (let item of carros) {
    console.log(item);
}
