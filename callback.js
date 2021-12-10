const fabricantes = ["Mercedes", "Audi", "BMW"]

/*
* Array enxerga primeiro parametro como o nome e o segundo como o indice
* caso haja um terceiro será o array inteiro, um quarto = undefined
*
*/
function imprimir(nome, indice, jacare, abacate){
    console.log(`${indice+1}. ${nome} = ${jacare} é ${abacate}`)
}

fabricantes.forEach(imprimir)

let notas = [6.5, 10, 9.8, 7.7, 6.9, 3.3, 5]

/* 
* Filtrando notas baixas, onde nota é cada elemento do array notas
* quando a arrow function retornar true o novo array notasBaixas recebe a nota
* 
*   Método tradicional
*   let notasBaixas2 = []
*   for(let i in notas){
*       if(notas[i] < 7){
*           notasBaixas2.push(notas[i])
*       }
*   }
*   console.log(notasBaixas2)
*/

// Método com callback + arrow function => 1 linha de código x 6 linhas e código
let notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)