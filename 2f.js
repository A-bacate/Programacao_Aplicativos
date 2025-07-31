const prompt = require("prompt-sync")();

let soma = 0;
for (let i=10;i<=30;i++) {
    if (i%2!=0) {
        soma += i;
    }
}
console.log(`A soma de todos os números ímpares maiores que 10 e menores que 30 é:\n--> ${soma}`);


// Calcular a soma de todos os números ímpares maiores que 10 e menores que 30.