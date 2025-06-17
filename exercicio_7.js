let produtos = [{
  nome: "Leite",
  preco: 5.50
}, {
  nome: "Café",
  preco: 18.99
}, {
  nome: "Feijao",
  preco: 7.90
}]

function produtosCaros(array) {
  let ordemProdutos = array.sort((a, b) => a.preco - b.preco).map((produto) => produto.nome)
  console.log(ordemProdutos)
}

produtosCaros(produtos)