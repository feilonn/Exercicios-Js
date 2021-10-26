let soma = (a, b) => {
    return a + b
}

let quadrado_classico = function (a) {
    return a * a
}

let quadrado = (a) => { // arrow function
    return a * a
}

let quadradoDois = a => a * a // arrow function reduzida

console.log(quadrado_classico(2))
console.log(quadrado(2))
console.log(quadradoDois(2))

console.log(soma(10, 9))

let somaDois = (a, b) => a + b

console.log(`SOMA = ${somaDois(10, 9)}`)

const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[0]()
console.log(funcs)