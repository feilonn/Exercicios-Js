const printaFunc = func => console.log(func)

function soma(...numeros){
    let total = 0
    numeros.forEach(n => { total += n});
    return total
}

console.log(soma(1,2,3,4))
