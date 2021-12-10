//lib que le arquivos
const fs = require('fs')

//__dirname é o diretorio atual, variavel presente em arquivos node
const filePath = __dirname + "/identificacao.json"

//Lendo de forma síncrona - Para o event loop até que a leitura seja concluida
//para arquivos pequenos não há problema
const conteudo = fs.readFileSync(filePath, 'utf-8')//endereço e tipo de encoding
console.log(conteudo)

//Lendo de forma assíncrona - Sem parar o event loop, irá ler após o arquivo carregar totalmente
//Utilizando uma callback que tras possíveis erros e a informação do arquivo, ela é disparada
//quando o arquivo for totalmente carregado
fs.readFile(filePath, 'utf-8', (err, info) => {
    //Convertendo o arquivo de String para Objeto
    const config = JSON.parse(info)
    console.log(`${config.pessoa.username}:${config.pessoa.senha}`)
})

//Lendo arquivo de forma direta, já tras o arquivo convertido em objeto
const config = require('./identificacao.json')
console.log(config)

//Lendo diretorio
fs.readdir(__dirname,(err, arquivos) => {
    console.log(arquivos)
})