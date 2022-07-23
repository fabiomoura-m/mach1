const carros = ['Gol', 'Palio', 'Kwid', 'Sentra', 'Siena', 'Onix', , 'Fit']; // 8 itens
// a ultima posicao (indice) do array é o tamanho - 1;
//const carros = new Array();
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]);
console.log(carros[4]);
console.log(carros[5]);
console.log(carros[6]); // undefined (não definido)
console.log(carros[7]);
console.log(carros[12]); // nao encontra a posicao 12 -> undefined

//Iterando o array

for (let item in carros) {
    console.log(item);
}
