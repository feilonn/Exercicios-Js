let array = [1, 2, 3, 4, 5]

//Pecorrer todos os elementos do array
array.forEach((element, indice, array) => {
    console.log(`[${indice +1}] = ${element} from -> ${array}`);
});

//Map percorre o array e aplica uma function callback para cada elemento
let novoArray = array.map( (e) => {
    return e*e;
})

console.log(novoArray);


const compras = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 2.50}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Transformando json em formato string para formato json
const convertToJson = json => JSON.parse(json)

//Extraindo apenas a informação sobre o preço do produto
const mostraPreco = produto => produto.preco

//convertendo e exibindo preço
const result = compras.map(convertToJson).map(mostraPreco)
console.log(result)