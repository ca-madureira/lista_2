const prompt = require("prompt-sync")();

let frase = prompt("Digite uma frase: ");
let palavras = frase.split(" ");
let array = [];

for (let i = 0; i < palavras.length; i++) {
  if (!array.includes(palavras[i])) {
    array.push(palavras[i]);
  }
}

console.log(array);
