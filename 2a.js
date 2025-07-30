const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite a nota 1: "));
if (nota1<0 || nota1>10) {
    console.log("Nota inválida!");
    return false;
}
let nota2 = Number(prompt("Digite a nota 2: "));
if (nota2<0 || nota2>10) {
    console.log("Nota inválida!");
    return false;
}
let nota3 = Number(prompt("Digite a nota 3: "));
if (nota3<0 || nota3>10) {
    console.log("Nota inválida!");
    return false;
}
let media = (nota1+nota2+nota3)/3;

if (media>=7) {
    console.log("\nO aluno está aprovado!");
return false;
}
console.log("\nO aluno reprovou!");