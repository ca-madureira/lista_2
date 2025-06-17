const prompt = require("prompt-sync")();

const quantidade = parseInt(prompt("Digite um numero inteiro maior que 0: "))

function memoize(fn) {
  const cache = new Map()

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn.apply(this, args)
    cache.set(key, result)
    return result
  }
}

function gerarFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibonacci = gerarFibonacci(n - 1);
  const proximoValor = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(proximoValor);
  return fibonacci;
}

const sequenciaFibonacci = memoize(gerarFibonacci)

console.time(`tempo para a primeira chamada com o valor ${quantidade}`)
console.log(sequenciaFibonacci(quantidade));
console.timeEnd(`tempo para a primeira chamada com o valor ${quantidade}`)

console.time(`tempo para a segunda chamada com o valor ${quantidade}`)
console.log(sequenciaFibonacci(quantidade));
console.timeEnd(`tempo para a segunda chamada com o valor ${quantidade}`)

console.time(`tempo para a terceira chamada com o valor ${quantidade}`)
console.log(sequenciaFibonacci(quantidade));
console.timeEnd(`tempo para a terceira chamada com o valor ${quantidade}`)

