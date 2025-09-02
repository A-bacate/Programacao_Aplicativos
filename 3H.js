const prompt = require("prompt-sync")();

// h) Escreva um algoritmo que receba o número da conta e o saldo de várias pessoas. O algoritmo
// deve imprimir todas as contas, os respectivos saldos e uma das mensagens: positivo/negativo. Ao
// final, o percentual de pessoas com saldo negativo deve ser informado. O algoritmo acaba quando se
// digita o número da conta igual a 0 (zero).

let fim = false;
let contador = 0;
let conta = [];
let saldo = [];
let negativo = 0;

console.log('');
while (!fim) {
    conta[contador] = Number(prompt("Número da conta [0 para encerrar] --> "));
    if (conta[contador]==0){
        fim=true
        break;
    } else {
        saldo[contador] = Number(prompt('Saldo --> '));
        if (saldo[contador]<0){
            console.log('\nNegativo!\n');
            negativo++;
        } else if (saldo[contador]==0){
            console.log('\nZero!\n');
        } else {
            console.log('\nPositivo!\n');
        }
        contador++
    }
}

console.log('\n');
for (let i=0;i<contador;i++){
    console.log(`--> ${conta[i]} - Saldo: ${saldo[i]}`);
}
console.log(`\n${negativo} pessoas têm saldo negativo!`);

