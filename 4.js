const prompt = require("prompt-sync")();

/*
.pop()
.unshift()
.shift()
.length
.indexOf()
.sort()
.reverse()
math.random(x,y)

*/

/*
a) Crie um array chamado jogos com 5 jogos. Em seguida, adicione mais um jogo ao final do array.
Substitua a segunda posição por "Minecraft". Remova o último jogo da lista. Mostre o array final e seu
tamanho.


*/

let jogos = ["Undertale", "UltraKill", "Slime Rancher 2", "Plants vs Zombies", "Red Dead Redemption"];
jogos.push(prompt(`Adicione um jogo ao array: `));
jogos[1] = "Minecraft";
jogos.pop();
console.log(jogos);
console.log(`Tamanho do Array: ${jogos.length}`);



