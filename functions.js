function funcao1 (a, b){
    return a + b
}

function funcao2 (a, b){
    return a * b
}

//Criado um array de funções
//numero * undefined => return NaN(Not a Number)
let guardaFunc = [funcao1, funcao2, function funcao3(a, b){ return a**b}]

console.log(guardaFunc[0](2,3))
console.log(guardaFunc[1](2,3))
console.log(guardaFunc[2](2, 3))

function padrao (a = 0, b = 0, c = 0){
    return a + b + c
}