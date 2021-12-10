const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true },
    {nome: 'Copo de Vidro', preco: 22.50, fragil: true },
    {nome: 'Bola de Basquete', preco: 129.99, fragil: false }
]

const filtraPreco = produto => produto.preco >= 120
const filtraFragil = produto => produto.fragil

/*
let filtro = produtos.filter( p => {
    return p.fragil
})
*/

//O método filter recebe como parametro uma função que é executada para cada elemento do array
//É possivel também utilizar filters encadeados
//Esse console exibe apenas produtos com preço >= 120 e que fragil == true
console.log(produtos.filter(filtraPreco).filter(filtraFragil))