const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));
let sexo = prompt("Digite seu sexo [feminino/masculino]: ");

if (idade == 18 && sexo == "masculino") {
    console.log("\nO alistamento militar é obrigatório esse ano!");
    return false;
}
console.log("\nVocê não precisa se alistar!");


/*
Crie um código em que o usuário digite a idade e o sexo de uma pessoa. O programa deve
responder se o alistamento militar é obrigatório para aquela pessoa naquele ano.
*/