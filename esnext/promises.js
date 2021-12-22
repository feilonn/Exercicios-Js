/**
 * Uma promise é uma promessa, ela espera uma resposta 
 * e executa com base nela. A promise possui dois estados:
 * Resolve: Quando ela é resolvida com sucesso
 * Reject: Quando por algum motivo ela é rejeitada e ocorre um erro
 */

function chamaPromise (frase, tempo = 2){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve(frase)//Depois que o setTimeout termina, a promise é resolvida
        }, tempo * 1000)
    })
}

/** 
 * O atributo .then() serve para chamar o resolve da promisse
 * Ou seja, seu retorno de sucesso. O then() pode ser chamado n vezes
 * O atributo .catch() pega o erro da Promisse (Reject), chamado apenas uma única vez
*/
chamaPromise(4, "Prometido e cumprido!")
    .then(() => chamaPromise('Promise novamente'))
    .then(() => chamaPromise('Terceira vez ;)'))
    .then(console.log)


let testaPromise = new Promise( (resolve) => {
    resolve(['Raul', 'Vinicius', 'dos', 'Santos', 'Correia'])
})

testaPromise
    .then(array => array[0])//Também é possível passar functions como parametros para .then()
    //O resultado de um .then() é passado para o .then() sucesso a ele.
    .then(primeiroNome => console.log(primeiroNome))
    //No exemplo acima, poderia passar apenas o console.log, já que o .then() retorna apenas um único elemento
    
/** 
* Outra abordagem:
* let pegaFirst = array => array[0]
* testaPromise
*   .then(pegaFirst)
*   .then(console.log)
*/