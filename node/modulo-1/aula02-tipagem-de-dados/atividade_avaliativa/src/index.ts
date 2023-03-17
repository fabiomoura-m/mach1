import promptSync from 'prompt-sync';

const prompt = promptSync();

let listaPessoas = [];
let nome: string;
let email: string;
let idade: number;
let genero: string;
let msg:string;

do {
    nome = prompt("Digite seu nome: ");
    email = prompt("Digite seu email: ");
    idade = Number(prompt("Digite sua idade: "));
    genero = prompt("Digite seu genero: ");
    msg = prompt("Deseja continuar? Digite s para sim ou qualquer tecla para finalizar: ").toLocaleLowerCase();
    listaPessoas.push(nome);
  } while (msg === "s");
  
  console.table(listaPessoas);