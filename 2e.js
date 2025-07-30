const prompt = require("prompt-sync")();
let numeros = [], contagem = 1;
let maior = 0, menor = 0;

for (let i=0;i<5;i++) {
    numeros[i] = Number(prompt(`Digite um número (${contagem}/5): `));
    ++contagem;
}
menor = numeros[0];
maior = numeros[0];
for (let j=0;j<5;j++){
    if (maior <= numeros[j]){
    maior = numeros[j];
    }
    if (menor >= numeros[j]){
        menor = numeros[j];
    }
}
console.log(`\n--> O maior número é ${maior}\n--> O menor número é ${menor}`);



/*
Faça um programa que receba 5 números informados pelo usuário e em seguida apresente uma
mensagem informando qual é o maior e qual é o menor dentre os números informados.
*/