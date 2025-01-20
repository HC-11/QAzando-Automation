/*const nomes = ["Eduardo", "Maria", "Fernando", "Joao", "Francisco"];

nomes.forEach((nome, index) => {
  console.log("Execucao: ", index + 1);
  console.log("Nome: " + nome);
  console.log("------------------------");
});
*/
const cidades = ["Sao Paulo", "Guaruja", "Maresias", "Ubatuba", "Ilhabela"];

cidades.forEach((cidade, index) => {
  console.log("Execucao: ", index + 1);
  if (cidade == "Maresias") {
    console.log("Maresias encontrada na posicao ", index + 1);
  } else {
    console.log(cidade, "na posicao: ", index + 1);
  }
});
