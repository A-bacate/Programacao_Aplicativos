// 4. c) versão usando matriz
const prompt = require("prompt-sync")();

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