const prompt = require("prompt-sync")();

// .pop()
// .unshift()
// .shift()
// .length
// .indexOf()
// .sort()
// .reverse()
// math.random(x,y)

/*
a) Crie um array chamado jogos com 5 jogos. Em seguida, adicione mais um jogo ao final do array.
Substitua a segunda posição por "Minecraft". Remova o último jogo da lista. Mostre o array final e seu
tamanho.

let jogos = ["Undertale", "UltraKill", "Slime Rancher 2", "Plants vs Zombies", "Red Dead Redemption"];
jogos.push(prompt(`Adicione um jogo ao array: `));
jogos[1] = "Minecraft";
console.log(`Array com seu jogo:`);
console.log(jogos);
jogos.pop();
console.log(`Array final:`);
console.log(jogos);
console.log(`Tamanho do Array: ${jogos.length}`);
*/

/*
b) Uma prova de algoritmos é realizada por 35 alunos. Faça um algoritmo para ler as notas obtidas
pelos alunos, armazená-las em um vetor, e depois exibir um relatório das notas iguais ou superiores a
7.0.

let notas = [], superiores = [];

for (let i=0;i<35;i++){
    notas[i] = Number(prompt(`Digite a nota: `));
    if (notas[i]>=7.0){
        superiores.push(notas[i]);
    }
}
console.log(`Notas iguais ou superiores a 7.0:`);
console.log(superiores);
*/

/*
c) Altere o algoritmo anterior para que, além da nota, também seja armazenado o nome do aluno.
Para isso, um segundo vetor deve ser criado. Posteriormente, exibir um relatório das notas iguais ou
superiores a 7.0 e o nome do aluno com essa nota.

let notas = [];
let nome = [];

for (let i=0;i<35;i++){
    nome[i] = prompt(`Digite o nome do Aluno: `);
    notas[i] = Number(prompt(`Digite a nota: `));
}
console.log(`Notas iguais ou superiores a 7.0:\n`);
for (i=0;i<35;i++){
    if (notas[i]>=7){
        console.log(`Aluno ${nome[i]} - Nota: ${notas[i]}`);
    }
}
*/

/*
d) Crie um algoritmo que inclua valores inteiros em dois vetores com 15 posições cada. Crie um
terceiro vetor onde cada valor é a soma dos valores contidos nas respectivas posições dos dois vetores
criados anteriormente.

let vetor1 = Array(15); vetor1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let vetor2 = Array(15); vetor2 = [7,1,10,4,15,6,2,13,9,3,11,8,5,14,12];
let soma = Array[15]; soma = [0];
    for (let i=0;i<15;i++){
        soma[i] = vetor1[i]+vetor2[i];
    }
    for (i=0;i<15;i++) {
        console.log(`${vetor1[i]} + ${vetor2[i]} = ${soma[i]}`);
    }
*/

/*
e) Faça um algoritmo que armazene 30 valores reais em um vetor. Depois, modifique o vetor de
modo que os valores das posições ímpares sejam aumentados em 5%, e os das posições pares sejam
aumentados em 2%. Imprima o vetor resultante.

let vetor = [45.78,12.31,29.05,3.56,19.99,33.82,48.14,8.77,21.43,41.60,
            5.92,36.25,17.08,2.49,49.33,26.51,10.04,44.91,30.15,7.28,
            23.76,38.47,14.80,47.03,1.62,40.55,32.90,6.18,25.39,9.85];

console.log(vetor);
for (let i=0;i<30;i++){
    if (vetor[i]%2==0){
        vetor[i] += vetor[i]*0.02;
    } else {
        vetor[i] += vetor[i]*0.05;
    }
    vetor[i]=Number(vetor[i].toFixed(2));
}
console.log(`\n\nPosições ímpares aumentadas em 5% e posições pares aumentadas em 2%:`);
console.log(vetor);
*/

/*
f) Dada uma sequência numérica de 30 elementos armazenados num vetor, determinar o índice
(posição) do maior elemento do conjunto. Suponha que os elementos sejam distintos.

let numeros = [27, 5, 14, 21, 9, 29, 1, 18, 30, 25, 11, 28, 7, 23, 16, 4, 19, 13, 26, 8, 3, 22, 6, 17, 10, 24, 15, 20, 12, 2];
let maior=0, index=0;

for (let j=0;j<30;j++){
    if (maior <= numeros[j]){
        maior = numeros[j];
    }
}
index = numeros.indexOf(maior);
console.log(index);
*/