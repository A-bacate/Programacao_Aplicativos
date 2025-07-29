const prompt = require("prompt-sync")();

let num1 = 54;
let num2 = 15;
let resultado;

console.log(`\nOs números são: ${num1} e ${num2}\n`);

resultado = num1+num2;

console.log(`--> ${num1} + ${num2} = ${resultado}\n`);

resultado = num1-num2;

console.log(`--> ${num1} - ${num2} = ${resultado}\n`);

resultado = num1*num2;

console.log(`--> ${num1} x ${num2} = ${resultado}\n`);

resultado = num1/num2;

console.log(`--> ${num1} / ${num2} = ${resultado}\n`);

resultado = num1%num2;

console.log(`--> ${num1} % ${num2} = ${resultado}\n`);
