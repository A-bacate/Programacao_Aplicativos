const prompt = require("prompt-sync")();

// i) Escreva um algoritmo que determine todos os divisores de um número N informado pelo  
// usuário. (Dica, os divisores de um número são definidos quando o resto da sua divisão é zero 
// 10%2 ==  0)  

console.log('Digite um número: ');
let n = Number(prompt('--> '));

console.log(`\nDivisores de ${n}:`);

for (let i=0; i<=n; i++){
    if (n%i==0){
        console.log(`-> ${i}`);
    }
}
