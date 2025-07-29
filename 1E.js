const prompt = require("prompt-sync")();

let distancia = Number(prompt("Digite a distância da viagem: "));
let consumo = Number(prompt("Digite o consumo médio do carro (km/l): "));
let gasolina = Number(prompt("Digite o preço da gasolina: "));

let litros, custo_viagem;

litros = distancia/consumo;
custo_viagem = litros*gasolina;

console.log(`\n--> São necessários ${litros} litro(s) de combustível\n--> A viagem vai custar R$${custo_viagem}`);

/*
usuário preencha a distância de uma viagem, o consumo médio do
carro em km/l e o preço da gasolina. O sistema deve exibir quantos litros de combustível serão
necessários e quanto a viagem vai custar.
*/
