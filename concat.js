const turmaA = ["Murdock", "McGuinty", "Baldwin", "McMurder"]
const turmaB = ["Falconer", "Delaney", "Tezuka", "Oliver"]


//Criando um array e concatenando a partir de um ja existente
const arrayConcat = turmaA.concat(turmaB)
//console.log(arrayConcat)

//Criando um array novo e a partir dele concatenando com os demais
const concatAndAddParameter = [].concat("Evans",turmaA, turmaB)
//concatAndAddParameter.concat(turmaA, turmaB, "Evans")
console.log(concatAndAddParameter)