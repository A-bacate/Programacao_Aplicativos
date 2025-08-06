const prompt = require("prompt-sync")();

// d) Criar um algoritmo para ler o nome e a idade de um grupo de pessoas, sendo o número desse
// grupo determinado pelo usuário. Ao final, o programa deverá imprimir o nome e a idade da pessoa mais
// idosa e o nome e a idade da pessoa mais jovem.

let n = Number(prompt(`\n\t--> Quantidade de pessoas: `));
let maior, menor, c, d;
let idade = [], nome = [];

for (let i=1;i<=n;i++) {
    console.log(`\n\t--> Pessoa ${i}:`);
    nome[i] = prompt(`\t--> Nome: `);
    idade[i] = Number(prompt(`\t--> Idade: `));
}
menor = idade[0];
maior = idade[0];
for (let j=0;j<5;j++){
    if (maior <= idade[j]){
        maior = idade[j];
        c = j;
    }
    if (menor >= idade[j]){
        menor = idade[j];
        d = j;
    }
}
console.log(`\n\n\t--> Pessoa mais idosa:\n\t\t--> ${nome[c]}\n\t\t--> ${maior} anos`);
console.log(`\n\n\t--> Pessoa mais jovem:\n\t\t--> ${nome[d]}\n\t\t--> ${menor} anos`);
