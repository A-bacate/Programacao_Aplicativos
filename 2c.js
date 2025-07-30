const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));
console.log("\n*+ Classificação: +*");

if (idade <= 12) {
    console.log("Criança!");
} else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente!");
} else if (idade >= 18 && idade <= 64) {
    console.log("Adulto!");
} else if (idade >= 65) {
    console.log("Idoso!");
}

/*
Crie um programa que pergunte a idade de uma pessoa e classifique:
 Até 12 anos: "Criança"
 De 13 a 17: "Adolescente"
 De 18 a 64: "Adulto"
 65 ou mais: "Idoso"
*/