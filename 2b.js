const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite um número: "));

if(num1%2==0){
    console.log("\nO número é par!");
    return false;    
}
console.log(`\n${num1} é ímpar!`);
    