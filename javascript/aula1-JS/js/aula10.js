/*
OBJETO: Carro
Portas: 4
Marca: Chevrolet
Cor: Cinza
Pneus: 4
Motor:
    Quantidade: 1
    Tipo: Combustão
Lugares: 5
*/

let carro = {
    portas: {
        quantidade: 4,
        portasDianteiras: {
            quantidade: 2
        },
        portasTraseiras: {
            quantidade: 2
        }
    },
    marca: 'Chevrolet',
    cor: 'Cinza',
    pneus: 4,
    motor: {
        quantidade: 1,
        tipo: 'Combustão',
        combustivel: ['Gasolina', 'Etanol']
    },
    lugares: 5
};
//Exibindo
console.log('Valor Exibido', carro.motor.combustivel[1]);

// Adicionando valor no objeto criado
carro.direcao = 'Hidráulica';

// Alterando valor de uma propriedade no objeto
carro.portas = 2;
console.log(carro);

/*
    OBJETO: Email
    Assunto
    Mensagem
    Destinatário
    Anexo
    Remetente
*/

let email = {};
let contatos = {
    contato: [
        {
            nome: 'Kayk',
            email: 'kayk@gmail.com'
        },
        {
            nome: 'Geovana',
            email: 'geovana@gmail.com'
        }
    ]
};

//Propriedades do Objeto
email.contatos = contatos.contato[0];
let listaEmail = ['fabio,fabio@teste.com', 'Geovana, geovana@hotmail.com'];
// email.assunto = '';
email.mensagem = '';
email.destinatario = '';
email.anexo = '';
email.remetente = 'cleytonwide@gmail.com';
let newEmail = {};
let emailEnviados = [];

for (let contato of listaEmail) {
    contato = contato.split(',');
    email.assunto = 'oi ' + contato[0];
    console.log(email.assunto);
    let newEmail = email;
    emailEnviados.push(newEmail);
    newEmail = '';
}
console.log(emailEnviados);
