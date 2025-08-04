const prompt = require("prompt-sync")();

let frutas = ["banana", "morango", "uva", "maçã", "melância", "abacate"];

for (let contador=0;contador<=5;contador++) {
    console.log(contador);
    console.log(frutas[contador]);
    console.log(`A fruta ${frutas[contador]} está na posição ${contador}`);
}