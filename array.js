let array = [1, 2, 3, 4, 5]
console.log(array.length)
console.log(array[6])
array[5] = 6
console.log(array[6])
array[7] = 7 //Pulando uma posição do array
//adiciona no array
array.push(8)
console.log(array)
//remove ultimo do array
array.pop()
console.log(array)
//deleta pela posição do array
delete array[0]
console.log(array)
//Multiplos tipos no array
array.push({id: 1}, null, true, [10, 11, 12])
console.log(array[11])
console.log(array)

let array2 = ['Ferrari', 'Lamborghini', 'Ford', 'Porshe', 'Nissan']
array2.pop()// remove ultimo elemento
console.log(array2)
array2.shift()// remove o primeiro elemento
console.log(array2)
array2.push('BMW')//adiciona na ultima posição
array2.unshift('Rolls Royce')//adiciona na primeira posição
console.log(array2)