const pessoa = {
    nome: "Raul",
    idade: 23,
    peso: 69
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(pessoa["nome"])
console.log(pessoa["idade"])