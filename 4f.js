const prompt = require("prompt-sync")();

// .pop()
// .unshift()
// .shift()
// .length
// .indexOf()
// .sort()
// .reverse()
// math.random(x,y)

// f) Dada uma sequência numérica de 30 elementos armazenados num vetor, determinar o índice
// (posição) do maior elemento do conjunto. Suponha que os elementos sejam distintos.

let numeros = [27, 5, 14, 21, 9, 29, 1, 18, 30, 25, 11, 28, 7, 23, 16, 4, 19, 13, 26, 8, 3, 22, 6, 17, 10, 24, 15, 20, 12, 2];
let maior=0, index=0;

for (let j=0;j<30;j++){
    if (maior <= numeros[j]){
        maior = numeros[j];
    }
}
index = numeros.indexOf(maior);
console.log(index);