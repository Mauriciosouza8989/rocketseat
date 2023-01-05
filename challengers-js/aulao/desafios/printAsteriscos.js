function exibirAsteriscos(line) {
    let asterisco = '*'
    for (let i = 0; i <= line; i++) {
        console.log(`Total de ${i}: ${asterisco}`)
        asterisco += '*'

    }
}

exibirAsteriscos(10)