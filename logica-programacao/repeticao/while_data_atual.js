console.log(Date.now()); //quantidade de milisegundos

//const dataAtual = Date.now();

let dataFim = Date.now() + 2000; // 2000 representa 2 segundos (data + 2segundos)

let quantidade = 0;

while (Date.now() < dataFim) {
  quantidade++;
}

console.log(quantidade);
