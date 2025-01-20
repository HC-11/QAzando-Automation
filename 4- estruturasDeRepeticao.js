//repeticao com array
/*
const cidades = ["Sao Paulo", "Guaruja", "Maresias", "Ubatuba"];
cidades.forEach((cidade, index) => {
  console.log("Execucao numero: " + index);
  console.log(cidade);
});
*/

//For
//Enquanto o indice for menor que 10, repetir e acrescentar 1 no indice
/*
for (let indice = 0; indice < 10; indice++) {
  console.log(indice);
}
*/
/*For - enquanto o numero de repeticoes for menor que o numero de 
elementos em um array*/
const cidades = ["Sao Paulo", "Guaruja", "Maresias", "Ubatuba"];
for (let indice = 0; indice < cidades.length; indice++) {
  console.log(cidades[indice]);
}
