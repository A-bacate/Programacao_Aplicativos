const prompt = require("prompt-sync")();

let conta = parseFloat(prompt("\nDigite o total da conta: "));
let clientes = parseInt(prompt("Digite a quantidade de pessoas que efetuarão o pagamento: "));

let pagamento = conta/clientes;

console.log(`Cada um deve pagar R$${pagamento}`);

/*
receba o valor total da conta de uma mesa em um restaurante e a
quantidade de clientes que efetuarão o pagamento. Calcule quanto cada um deverá pagar dividindo
igualmente para todos.
*/