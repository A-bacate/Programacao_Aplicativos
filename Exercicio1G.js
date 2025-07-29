const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

if (num%3==0) {
    console.log("É múltiplo de três!");
    return false;
}
console.log("Não é múltiplo de três!");

/*
Escreva um algoritmo que receba um número e imprima uma das seguintes mensagens: “É
múltiplo de três” ou “Não é múltiplo de três”.
*/
