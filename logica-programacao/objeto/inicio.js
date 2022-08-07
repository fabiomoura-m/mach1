const carro = {
    marca: 'Fiat', // indice: valor
    modelo: 'Palio',
    peso: 1000,
    emOferta: true,
    opcionais: ['ar-condicionado', 'vidro eletrico'],
    itensObrigatorios: { primeiro: 'abs', 2: 'air-bag' },
    ligar: function () {
        return console.log('estou ligando...');
    },
    exibirMarcaModelo: function () {
        return this.marca + ' ' + this.modelo;
    }
};

//forma comum de exibição das propriedades de objeto
console.log('###2a FORMA###');
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.peso);
console.log(carro.emOferta);
console.log(carro.opcionais);
console.log(carro.itensObrigatorios.primeiro);
console.log(carro.itensObrigatorios[2]);
carro.ligar();
console.log(carro.exibirMarcaModelo());
carro.velocidadeMaxima = 190; // adicionando uma nova propriedade e valor ao meu objeto carro
console.log(carro.velocidadeMaxima);

//2a forma de exibição das propriedades de um objeto
console.log('###2a FORMA###');
console.log(carro['marca']);
console.log(carro['modelo']);
console.log(carro['peso']);
