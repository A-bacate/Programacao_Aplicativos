const prompt = require("prompt-sync")();

// i) Calcule a quantidade de dinheiro gasto por um fumante. Realizar a leitura do número de anos  
// que ele fuma, número de cigarros fumados por dia e o preço de uma carteira com 20 
// cigarros.  Considere o ano sempre com 365 dias. Indicar com a mensagem “Você já gastou 
// muito” se o  gasto for maior que R$ 10.000,00. 

let anos, cigarros, precoCarteira;

anos = Number(prompt("Número de anos que você fuma: "));
cigarros = Number(prompt("Número de cigarros fumados por dia: "));
precoCarteira = Number(prompt('Preço de uma carteira com 20 cigarros: '));

let gasto = ((cigarros/20)*precoCarteira)*(anos*365);

if (gasto > 10000.00) {
    console.log('\nVocê já gastou muito!');
}
console.log(gasto);