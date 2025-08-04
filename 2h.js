const prompt = require("prompt-sync")();

let largura = Number(prompt(`\n\t--> Digite a largura do estabelecimento (em metros): `));
let profundidade = Number(prompt(`\t--> Digite a profundidade do estabelecimento (em metros): `));
let area = largura*profundidade;

console.log(`\n\tÁrea de ${area}m²\n\tClassificação: `);

if (area==0 && area<=49){
    console.log(`\tMercearia!`);
} else if (area==50 && area<=399) {
    console.log(`\tMercadinho!`);
} else if (area==400 && area<=999) {
    console.log(`\tMercado!`);
} else if (area==1000 && area<=2499) {
    console.log(`\tSupermercado!`);
    return false;
}
console.log(`\tHipermercado!`);

/*
Considere as seguintes classificações de estabelecimentos tendo em conta a sua área:
 0 a 49 m2 – Mercearia
 50 a 399 m2 - Mercadinho
 400 a 999 m2 - Mercado
 1000 a 2499 m2 - Supermercado
 >=2500 m2 – Hipermercado
Escreva um programa que leia os valores de largura e profundidade de um terreno, calcule a área de
um estabelecimento e o classifique segundo o critério referido
*/