/*
variaveis em JS:
var = muda de valor
let = muda de valor
const = nao pode mudar de valor
*/

var nome = "Eduardo";
nome = "Pedro";
console.log(nome);

let idade = 20;
idade = 30;
console.log(idade);

const cidade = "Florianopolis";
// cidade = "Sao Paulo"; *crash*

// Arrays
const paises = ["Brasil", "Argentina", "Colombia"];

//Objects
let devices = {
  nome: "iPhone 14",
  preco: 8000,
  cores: {
    cor1: "preto",
    cor2: "prata",
    cor3: "rosa",
    cor4: "branco",
  },
};
