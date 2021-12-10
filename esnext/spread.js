let meuObjeto = {
    "nome": "Raul",
    idade: 23,

}

//Spread em objeto
let clone = {clone: true, ...meuObjeto}
console.log(clone)

//Spread em array
let meuArray = [1, 2, 3, 4, 5]

let cloneDois = [...meuArray, 6, 7, 8, 9, 10]
console.log(cloneDois)