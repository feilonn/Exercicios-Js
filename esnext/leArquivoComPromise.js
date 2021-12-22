const fs = require('fs')
const path = require('path')

function lerArquivo(diretorio){
    return new Promise(resolve => {
        fs.readFile(diretorio, function(error, conteudo){
            resolve(conteudo.toString())
        })
    })
}

let diretorio = path.join(__dirname, 'arquivo.txt')

lerArquivo(diretorio)
    .then(conteudo => conteudo.split('\n'))
    .then(linha => linha[2])
    .then(frase => frase.toString())
    .then(frase => frase.toUpperCase())
    .then(console.log)