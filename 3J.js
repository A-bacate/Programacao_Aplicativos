const prompt = require("prompt-sync")();

// j) Escreva um algoritmo que leia 30 números inteiros e imprima quantos são pares e quantos são  
// ímpares.  

let numeros = [];
let par = 0, impar = 0;

console.log('\nDigite 30 números:');

for (let i=0;i<30;i++){
    numeros[i] = Number(prompt('--> '));
    if (numeros[i]%2==0){
        par++;
    } else {
        impar++;
    }
}
console.log(`\nQuantidade de números pares --> ${par}`);
console.log(`\nQuantidade de números ímpares --> ${impar}`);
