const lodash = require('lodash')
const meuModulo = require('../meuModulo')
setInterval(() => console.log(lodash.random(1, 100)), 2000)

/*
* ./ ~> Procura pelo arquivo na pasta atual
* ../ ~> Procura pelo arquivo na pasta de nível acima (saindo da pasta atual)
*/


console.log(meuModulo.ola)