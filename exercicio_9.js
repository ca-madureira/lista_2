function paresParaObjeto(pares) {
  let obj = {}

  for (let i = 0; i < pares.length; i++) {
    obj[pares[i][0]] = pares[i][1]
  }

  console.log('objeto: ', obj)
}

function objetoParaPares(obj) {
  let array = [];

  for (let chave in obj) {
    array.push([chave, obj[chave]]);
  }

  console.log('array: ', array);
}

const array = [
  ["nome", "Arroz"],
  ["preco", 25.00],
  ["categoria", "alimento"]
];

paresParaObjeto(array)


const obj = {
  nome: "Arroz",
  preco: 25.00,
  categoria: "alimento"
}

objetoParaPares(obj)