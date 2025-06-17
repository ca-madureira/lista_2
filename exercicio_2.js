const prompt = require("prompt-sync")()

let chute = null
let resposta = Math.floor(Math.random() * 100) + 1

console.log(resposta)

while (chute !== resposta) {
  chute = Number(prompt("Tente adivinhar o numero: "))

  if (chute === resposta) {
    console.log(`Parabéns! Acertou! o seu chute foi ${chute} e a resposta correta é ${resposta}`)

  } else {
    if (chute < resposta) {
      console.log("Mais alto!")
    } else {
      console.log("Mais baixo!")
    }
  }
}