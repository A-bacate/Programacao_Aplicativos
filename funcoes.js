//declaração
// function mostrarMensagem(nome){
//     console.log(`Olá ${nome}`);
// }

//função (possui retorno)

//chamada
// let resultado = somar(3,8);
// console.log(resultado);

console.log(somar(3,8));

//declaração
function somar(num1,num2){
    return num1+num2;
}
let notas = [7,5.5,8.5,10,2.5];
console.log(calcularMedia(notas));

function calcularMedia(numeros){
    if (numeros.length <= 0){
        return 0;
    }
    let soma = 0;
    
    numeros.forEach(element => {
        soma += element;
    });
    return soma / notas.length;
}