const pilotos = ['Vettel', 'Alonso', 'Reikkoen', 'Massa']
pilotos.pop() //Massa quebrou o carro!
console.log(pilotos)

pilotos.push('Versappen')
console.log(pilotos)

pilotos.shift() //Remove o prieiro!
console.log(pilotos)

pilotos.unshift('Hamilton') //Adicioa no primeiro!
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1) //Masa quebrou :(
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array cortado
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)