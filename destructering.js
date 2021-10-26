let pessoa = {
    nome: "Raul",
    idade: 23,
    sexo: "masculino",
    endereco : {
        rua: "Rua A",
        numero: 9,
    }
}

let { nome, idade } = pessoa
console.log(nome)
console.log(idade)

let { endereco : {rua, numero, complemento = false} } = pessoa
console.log(rua)
console.log(numero)
console.log(complemento)