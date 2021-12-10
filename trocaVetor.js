function trocaVetor(vetorA, vetorB){
    for(var i = 0; i < vetorA.length; i++){
        var aux = vetorA[i]
        vetorA[i] = vetorB[i]
        vetorB[i] = aux
    }
}

var vetorA = [1, 2, 3, 4, 5]
var vetorB = [6, 7, 8, 9, 10]

console.log(`vetorA = ${vetorA}`)
console.log(`vetorB = ${vetorB}`)

trocaVetor(vetorA, vetorB)

console.log(`vetorA = ${vetorA}`)
console.log(`vetorB = ${vetorB}`)

