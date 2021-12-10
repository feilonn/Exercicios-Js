const porta = 3003

const express = require('express')
const app = express()

//Exemplo com next
app.get('/produtos', (req, res, next) => {
    console.log('1ª Middleware')
    next()//Chama o próximo middleware
})

/* app.use((req, res) => {}) -> atende para qualquer requisição feita */

app.get('/produtos', (req, res, next) =>{
    res.send({nome:'Notebook', preco: 3789.99}) // Converte para JSON (método send)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}.`)
})