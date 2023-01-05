function exibirNumerosPrimos(limite) {
    let primos = [];
    for (let i = 2; i <= limite; i++) {
        let cont = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cont += 1;
            } else {
                continue;
            }

        }
        if (cont === 2) {
            primos.push(i);
        } else {
            continue;
        }
    }
    console.log(`Os npumero primos encontrados neste intervalo foram ${primos}...`)
}

exibirNumerosPrimos(15)