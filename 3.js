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

for (let i=0;i<=10;i++) {
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



*/