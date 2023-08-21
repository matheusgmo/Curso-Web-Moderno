function InteiroAleatorio(){
    const valor = Math.random() * 10
    return Math.floor(valor)
}

let opcao = Number

do {
    opcao = InteiroAleatorio()
    console.log(`Opção escolhida foi ${opcao}.`)
} while(opcao != 0)

console.log('Até a próxima!')