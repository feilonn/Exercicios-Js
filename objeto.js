function obj(nome){
    this.nome = nome
}

let teste = new obj("Abacaxi")
console.log(teste)
console.log(teste.nome)

teste["tipo"] = "Fruta"
console.log(teste)
console.log(teste.tipo)