const prompt = require("prompt-sync")();

// c) Escreva um algoritmo que leia o código e o salário de 20 funcionários de uma empresa. Ao final,
// o algoritmo deve determinar o total da folha de pagamento da empresa e sua média salarial.

let salario=0, media=0, soma=0;
let codigo; //aqui ficam os inuteis :)
for (let i=1;i<=20;i++) {
    codigo = prompt(`\n\t--> Código: `);
    salario = Number(prompt(`\t--> Salário: `));
    soma += salario;
}
media = soma/20;
console.log(`\nFolha de pagamento: ${soma}`);
console.log(`Média salarial: ${media}`);
