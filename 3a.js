const prompt = require("prompt-sync")();

// a) Crie um programa que simule 10 batalhas de um personagem. Use um laço for para exibir no
// console a seguinte mensagem a cada batalha: Batalha 1: Você ganhou 10 pontos de experiência! Ao
// final exibir o total de experiência recebida.

let total=0;
for (let i=1;i<=10;i++){
    console.log(`\nBatalha ${i}: Você ganhou 10 pontos de experiência!`);
    total += 10;
}
console.log(`\nTotal de experiência: ${total}`);