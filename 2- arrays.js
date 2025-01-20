const paises = ["Brasil", "Argentina", "Colombia", "Uruguai", "Chile"];

console.log(paises[3]);

console.log("A string tem " + paises.length + " elementos");

/*Operacoes com o array
Adicionar um elemento no final do array*/
paises.push("Equador");
console.log(paises);

//Remover o ultimo elemento do array
paises.pop();
console.log(paises);

//Adicionar um elemento no inicio do array
paises.unshift("Bolivia");
console.log(paises);

//Remover o primeiro elemento do array [0]
paises.shift();
console.log(paises);
