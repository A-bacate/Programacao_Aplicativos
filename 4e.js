const prompt = require("prompt-sync")();

// .pop()
// .unshift()
// .shift()
// .length
// .indexOf()
// .sort()
// .reverse()
// math.random(x,y)

// e) Faça um algoritmo que armazene 30 valores reais em um vetor. Depois, modifique o vetor de
// modo que os valores das posições ímpares sejam aumentados em 5%, e os das posições pares sejam
// aumentados em 2%. Imprima o vetor resultante.

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