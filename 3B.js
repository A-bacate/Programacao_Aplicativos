const prompt = require("prompt-sync")();

// b) Faça um algoritmo que apresente na tela as tabuadas de 2 a 9.

for (let i=2;i<=9;i++) {
    console.log(`\nTabuada do ${i}: `);
    for (let j=0;j<=10;j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
