const prompt = require("prompt-sync")();

// .pop()
// .unshift()
// .shift()
// .length
// .indexOf()
// .sort()
// .reverse()
// math.random(x,y)

// d) Crie um algoritmo que inclua valores inteiros em dois vetores com 15 posições cada. Crie um
// terceiro vetor onde cada valor é a soma dos valores contidos nas respectivas posições dos dois vetores
// criados anteriormente.

let vetor1 = Array(15); vetor1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let vetor2 = Array(15); vetor2 = [7,1,10,4,15,6,2,13,9,3,11,8,5,14,12];
let soma = Array[15]; soma = [0];
    for (let i=0;i<15;i++){
        soma[i] = vetor1[i]+vetor2[i];
    }
    for (i=0;i<15;i++) {
        console.log(`${vetor1[i]} + ${vetor2[i]} = ${soma[i]}`);
    }