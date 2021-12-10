/**
 * Uma promise é uma promessa, ela espera uma resposta 
 * e executa com base nela. A promise possui dois estados:
 * Resolve: Quando ela é resolvida com sucesso
 * Reject: Quando por algum motivo ela é rejeitada e ocorre um erro
 */

function chamaPromise (tempo, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)//Depois que o setTimeout termina, a promise é resolvida
        }, tempo * 1000)
    })
}

/** 
 * O atributo .then() serve para chamar o resolve da promisse
 * Ou seja, seu retorno de sucesso. O then() pode ser chamado n vezes
 * O atributo .catch() pega o erro da Promisse (Reject), chamado apenas uma única vez
*/
chamaPromise(2, "Prometido e cumprido!").then(texto => texto.concat(' :)'))
    .then(texto => console.log(texto))