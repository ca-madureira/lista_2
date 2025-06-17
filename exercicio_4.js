const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número: "))

function fatorial(n) {
  if (n < 0) throw new Error("Valor invalido")
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(numero));

