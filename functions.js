//Template
/*function gerarNome() {
  const nome = "Eduardo";
  const sobrenome = "Finotti";
  const idade = "30";

  console.log("Nome: ", nome + sobrenome);
  console.log("Idade: ", idade);
}
*/
//Template com parametro
/*function gerarNome(nome, sobrenome, idade) {
  console.log("Nome: ", nome + sobrenome);
  console.log("Idade: ", idade);
}
gerarNome("Luiz", "Silva", 18);
gerarNome("Fernando", "Silva", 68);*/

//Usando return
/*function gerarNome(nome, sobrenome) {
  return "Nome: "+ nome + sobrenome;
}

console.log(gerarNome("Luiz", " da Silva"));*/

function gerarNome(nome, sobrenome) {
  return "Nome: "+ nome + sobrenome;
}

const nomeGerado = gerarNome('Pedro ','Gomes')
console.log(nomeGerado)
