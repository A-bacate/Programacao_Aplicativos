const prompt = require("prompt-sync")();

// Faça um algoritmo que leia o nome, a idade e o sexo (‘M’ para masculino e ‘F’ para feminino) 
// de  um grupo de 200 estudantes e determine:   
//  quantos são do sexo feminino e maior de 21 anos;  --> Grupo A
//  quantos são do sexo masculino e maio de 18 anos   --> Grupo B
//  qual a média de idade de pessoas do sexo masculino;   
//  qual a média de idade de pessoas do sexo feminino;  

let nome = [];
let idade = [];
let sexo = [];
let grupoA = 0;
let grupoB = 0;
let somaF = 0, somaM = 0, mediaF = 0, mediaM = 0, contadorF = 0, contadorM = 0;

for (let i=0;i<200;i++){
    nome[i] = prompt('Nome: ');
    idade[i] = Number(prompt('Idade: '));
    sexo[i] = prompt('Sexo (M/F): ').toUpperCase();

    if (sexo[i]=="F"){
        if (idade[i]>21){
            grupoA++;
        }
        somaF += idade[i];
        contadorF++;
    } else if (sexo[i]=="M") {
        if (idade[i]>18){
            grupoB++;
        }
        somaM += idade[i];
        contadorM++;
    }
    console.log('\n');
}
mediaF = somaF/contadorF;
mediaM = somaM/contadorM;

console.log(`\nQuantidade de estudantes do sexo feminino e maiores de 21 anos: ${grupoA}`);
console.log(`\nQuantidade de estudantes do sexo masculino e maiores de 18 anos: ${grupoB}`);

console.log(`\nMédia de idade de pessoas do sexo masculino: ${mediaM}`);
console.log(`\nMédia de idade de pessoas do sexo feminino: ${mediaF}`);

