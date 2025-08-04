const prompt = require("prompt-sync")();

/*

a) Crie um programa que simule 10 batalhas de um personagem. Use um laço for para exibir no
console a seguinte mensagem a cada batalha: Batalha 1: Você ganhou 10 pontos de experiência! Ao
final exibir o total de experiência recebida.

let total=0;
for (let i=1;i<=10;i++){
    console.log(`\nBatalha ${i}: Você ganhou 10 pontos de experiência!`);
    total += 10;
}
console.log(`\nTotal de experiência: ${total}`);

*/



/*

b) Faça um algoritmo que apresente na tela as tabuadas de 2 a 9.

for (let i=2;i<=9;i++) {
    console.log(`\nTabuada do ${i}: `);
    for (let j=0;j<=10;j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

*/



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

*/
let n = [], k = 0, continuar = true;
let maior, menor, soma;
console.log(`\n\tDigite números (0 para encerrar):`);
while(continuar) {
    n[k]= Number(prompt(`\n\t--> `));
    if (n[k]==0) {
        continuar == false;
    }
    ++k;
    soma += n[k]
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
console.log(`\n\t--> Maior número: ${maior}`);
console.log(`\n\t--> Menor número: ${maior}`);
console.log(`\n\t--> Média: ${soma/k}`);

