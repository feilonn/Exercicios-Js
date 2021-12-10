//Estrutura que não aceita repetição

const meuSet = new Set()
meuSet.add('Raul')
meuSet.add('Vinicius')
meuSet.add('Tangamandapio')
meuSet.add('Raul')

console.log(meuSet)

//Passando array para set
let array = ['a', 'b', 'c', 'a', 'd', 'z', 'c', 'w', 'b']
let set2 = new Set(array)
console.log(set2)