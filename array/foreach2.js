Array.prototype.forEach2 = function(nome, indice){}

const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})