const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//Filtrando a mulher com maior salário de Portugal
const filtraPais = pessoa => pessoa.pais == 'Portugal'
const filtraGenero = pessoa => pessoa.genero == 'F'
const maiorSalario = (pessoa, pessoaAtual) =>{
    return pessoa.salario > pessoaAtual.salario ? pessoa : pessoaAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)

    const pessoa = funcionarios.filter(filtraPais).filter(filtraGenero).reduce(maiorSalario)

    console.log(pessoa)
    //console.log('babaluga')
})



