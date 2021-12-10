function factory_example(nome, idade, curso, emprego){
    return {
        "nome": nome,
        "idade": idade,
        "curso": curso,
        "emprego": emprego
    }
}

let pessoa = factory_example("Raul", 23, "Ciência da Computação", "Analista de Sistemas")
console.log(pessoa)
console.log(typeof(pessoa))
pessoa.emprego = "Empresario"
console.log(pessoa)

function new_factory(nome, preco, qualidade){
    return{
        nome,
        preco,
        qualidade,
        
    }
}

let produto = new_factory("arroz", 22.50, 10)

console.log(produto)