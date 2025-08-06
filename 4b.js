const prompt = require("prompt-sync")();

// .pop()
// .unshift()
// .shift()
// .length
// .indexOf()
// .sort()
// .reverse()
// math.random(x,y)

// b) Uma prova de algoritmos é realizada por 35 alunos. Faça um algoritmo para ler as notas obtidas
// pelos alunos, armazená-las em um vetor, e depois exibir um relatório das notas iguais ou superiores a
// 7.0.

let notas = [], superiores = [];

for (let i=0;i<35;i++){
    notas[i] = Number(prompt(`Digite a nota: `));
    if (notas[i]>=7.0){
        superiores.push(notas[i]);
    }
}
console.log(`Notas iguais ou superiores a 7.0:`);
console.log(superiores);