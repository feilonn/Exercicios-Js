const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //resolve = promise ok, reject = erro na promise
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''

            //res.on('data') -> função da lib 'http' que captura os dados da requisição
            res.on('data', dados => {
                //Concatenando o array de objetos (ele vem como string)
                result += dados
            })

            //res.on('end') -> função da lib 'http' é disparada quando não há mais dados para capturar
            res.on('end', () => {
                try{
                    //Convertendo de string para objeto js
                    resolve(JSON.parse(result))
                }catch(e){
                    //Capturando possível erro na promise
                    reject(e)
                }
            })
        })
    })
}

//Promisse.all() executa todas as promises em paralelo e aguarda a resolução de todas elas para executar .then() 
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    //Fazendo um spread para concatenar tudo em um único array
    .then(turmas => [].concat(...turmas))
    //Mapeando o array e pegando o nome de cada aluno (array de objetos)
    .then(alunos => alunos.map(aluno => aluno.nome))
    //Imprimindo o nome de cada aluno que foi mapeado
    .then(nomes => console.log(nomes))
    //Pegando possível erro
    .catch(e => console.log(e.message))


