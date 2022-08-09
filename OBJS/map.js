produtos = [
    {nome: "GTX 1050", preco: 1600},
    {nome: "GTX 1660", preco: 2100},
    {nome: "RTX 2080", preco: 3500},
    {nome: "RTX 3060", preco: 6300},
]

produtos.push({nome:"RTX 2080", preco:3500})
//console.table(produtos);
//produtos.map((p) => console.log("Preço: " + p.preco));

produtosCaros = produtos.filter((p) => p.preco >= 1000)
console.log(produtosCaros)

totalProdutos = produtos.map((p) => p.preco)
        .reduce((previous, current) => previous + current)
console.log(totalProdutos.toFixed(2))

totalMuitoCaro = produtos.filter(p => p.preco > 4000)
                .map(p => p.preco)
                .reduce((previous, current) => previous + current)
console.log(totalMuitoCaro.toFixed(2))