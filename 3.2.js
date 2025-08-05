const prompt = require("prompt-sync")();

/*
g) Crie um algoritmo que apresente a série Fibonacci até o 15 termo. A série de Fibonacci é
formada pela sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34... etc. Esta série se caracteriza pela soma de um
termo posterior com seu subsequente.

fn = fn-1 + fn-2 if n>1
*/
let fibo = [];
let ultimo=0;

for (let n=0;n<15;n++){
    if (n==1 || n == 0) {

        fibo.push(1);
        ultimo = 0;

    } else {

        fibo.push(fibo[n] + ultimo);
        ultimo = fibo[n] - ultimo;

        /*
            fibo = fibo + ultimo
            (fibo = 1 + 0)
            ultimo = fibo - ultimo
            (ultimo = 1 - 0)
        */

    }
}
console.log(fibo);





/*
h) Escreva um algoritmo que receba o número da conta e o saldo de várias pessoas. O algoritmo
deve imprimir todas as contas, os respectivos saldos e uma das mensagens: positivo/negativo. Ao
final, o percentual de pessoas com saldo negativo deve ser informado. O algoritmo acaba quando se
digita o número da conta igual a 0 (zero).



let conta;
while (conta !=0)
*/