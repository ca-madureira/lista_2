const prompt = require("prompt-sync")();

const nome = prompt("Digite o nome do aluno: ")

let alunos = ["Amanda", "Caroline", "João", "Julio"]

function pesquisarAlunos(aluno) {
  if (alunos.includes(aluno)) {
    console.log(`${aluno} está na lista de matrícula`)
  } else {
    console.log(`${aluno} não está matriculado(a) em nosso sistema`)
  }
}

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const resultadoPesquisa = debounce(pesquisarAlunos, 3000)
resultadoPesquisa(nome)

console.log('Aguarde um momento...estamos verificando nossa base de dados...Estamos executando antes do debounce')