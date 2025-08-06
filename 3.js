const prompt = require("prompt-sync")();

/*
c) Escreva um algoritmo que leia o código e o salário de 20 funcionários de uma empresa. Ao final,
o algoritmo deve determinar o total da folha de pagamento da empresa e sua média salarial.

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

*/



/*
d) Criar um algoritmo para ler o nome e a idade de um grupo de pessoas, sendo o número desse
grupo determinado pelo usuário. Ao final, o programa deverá imprimir o nome e a idade da pessoa mais
idosa e o nome e a idade da pessoa mais jovem.

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

*/



/*
e) Crie um algoritmo que leia vários números e encerre a leitura com 0 (zero). Após o
encerramento, deve-se imprimir o maior, o menor e a média aritmética dos números. O número 0 (zero)
não faz parte da sequência.

let n = [], k=0, continuar = true;
let maior, menor, soma=0, media=0;

console.log(`\n\tDigite números (0 para encerrar):`);
while(continuar) {
    n[k]= Number(prompt(`\n\t--> `));
    console.log(n[k]);
    if (n[k]==0) {
        continuar = false;
        break;
    }
    console.log(n[k]);
    Number(soma += n[k]);
    k++;
}
menor = n[0];
maior = n[0];
for (let j=0;j<k;j++){
    if (maior <= n[j]){
        maior = n[j];
    }
    if (menor >= n[j]){
        menor = n[j];
    }
}
media = soma/k;
console.log(`\n\t--> Maior número: ${maior}`);
console.log(`\n\t--> Menor número: ${menor}`);
console.log(`\n\t--> Média: ${media}`);

*/



/*
f) Romário tem 1,50m e cresce 2 centímetros por ano, enquanto Bebeto tem 1,10 e cresce 3
centímetros por ano. Construa um algoritmo que calcule em quantos anos Bebeto será maior que
Romário.


let romario, bebeto;
let i=0;
romario = 1.50;
bebeto = 1.10;
while (bebeto < romario){
    romario += 0.02;
    bebeto += 0.03;
    ++i;
}
console.log(`Bebeto será maior que Romário em ${i} anos!`);

*/

