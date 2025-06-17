const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "Julia", total: 200 },
  { cliente: "Ana", total: 150 },
  { cliente: "Carlos", total: 300 },
  { cliente: "Julia", total: 100 }
];

const gerarObjetos = vendas.reduce((acum, venda) => {
  if (acum[venda.cliente]) {
    acum[venda.cliente] += venda.total
  } else {
    acum[venda.cliente] = venda.total;
  }

  return acum;
}, {});


console.log(gerarObjetos)
