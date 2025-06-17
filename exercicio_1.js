const prompt = require("prompt-sync")();

let dia = parseInt(prompt("Digite o dia: "));
let mes = parseInt(prompt("Digite o mês: "));
let ano = parseInt(prompt("Digite o ano: "));
let mes30 = [4, 6, 9, 11];

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1 || dia > 31) return false;

  if (mes30.includes(mes) && dia > 30) return false;

  let éBissexto = (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0));

  if (mes === 2) {
    if ((éBissexto && dia > 29) || (!éBissexto && dia > 28)) {
      return false;
    }
  }

  return true;
}

console.log(ehDataValida(dia, mes, ano));
