const prompt = require("prompt-sync")();
let i=0;
let nome = prompt("\n\t--> Nome: ");
if (nome=="") {
    console.log(`\t\tNome não preenchido!`);
    ++i
}
let idade = Number(prompt("\t--> Idade: "));
idade < 18 ? console.log(`\tMenor que 18 anos! `) : idade >= 18 ? console.log(`\tMaior ou igual a 18 anos! `) : console.log(`\tIdade inválida! `);

let email = prompt("\t--> E-mail: ");
if (email.includes('@')==false) {
    console.log(`\tE-mail não contém @! `);
    i++
}
if (i==2 || i==1) {
    console.log("\n==+ Preencha os dados corretamente! +==");
    return false;
}
    console.log("\n==+ Cadastro realizado com sucesso! +==");


/*
Crie um sistema de validação de cadastro, onde o usuário vai preencher nome, idade e e-mail.
O sistema deverá verificar:
 Se o nome foi preenchido
 Se a idade é maior ou igual a 18
 Se o e-mail contém "@"
Em seguida, deverá mostrar no console “Cadastro realizado com sucesso!” ou “Preencha os dados
corretamente.”

email.includes('@')
*/
