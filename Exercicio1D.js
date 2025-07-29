const prompt = require("prompt-sync")();

let num1 = 120.00;
let valor_final = 120-((15/100)*120)-10;
console.log(`\n--> ${num1} - (15% + taxa de entrega (R$10)) = ${valor_final}\n`);


/*
Crie um código que, com base no valor de um produto de R$120,00:
 Aplique um desconto de 15%.
 Calcule o valor final com desconto.
 Depois, adicione uma taxa de entrega de R$ 10.
 Mostre o valor final do pedido.
*/