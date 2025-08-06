const prompt = require("prompt-sync")();

// c) Altere o algoritmo anterior para que, além da nota, também seja armazenado o nome do aluno.
// Para isso, um segundo vetor deve ser criado. Posteriormente, exibir um relatório das notas iguais ou
// superiores a 7.0 e o nome do aluno com essa nota.

// let notas = [];
// let nome = [];

// for (let i=0;i<35;i++){
//     nome[i] = prompt(`Digite o nome do Aluno: `);
//     notas[i] = Number(prompt(`Digite a nota: `));
// }
// console.log(`Notas iguais ou superiores a 7.0:\n`);
// for (i=0;i<35;i++){
//     if (notas[i]>=7){
//         console.log(`Aluno ${nome[i]} - Nota: ${notas[i]}`);
//     }
// }


// 4. c) versão usando matriz
let notas = Array(35);
for (let j=0;j<35;j++){
    notas[j] = Array(2);
}

for (let i=0;i<35;i++){
    notas[i][0] = (prompt(`Digite o nome do Aluno: `));
    notas[i][1] = Number(prompt(`Digite a nota: `));
}
console.log(`\n\nNotas iguais ou superiores a 7.0:\n`);
for (i=0;i<35;i++){
    if (notas[i][1]>=7){
        console.log(`O aluno ${notas[i][0]} tem ${notas[i][1]} de nota`);
    }
}