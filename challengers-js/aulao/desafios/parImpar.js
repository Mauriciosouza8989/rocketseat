function parOuImpar(arg, num) {
    const typeArg = typeof('');
    const typeNum = typeof(1);
    if (typeArg == typeof(arg) && typeNum == typeof(num)) {
        arg = arg.toLowerCase();

        if (arg == 'par' || arg == 'impar') {

            const player = num;
            const computer = Math.floor(Math.random() * 10);
            console.log(`Você optou por "${arg}", e escolheu ${num}.`);
            console.log(`O computador escolheu ${computer}.`);
            console.log(`A soma dos numeros escolhidos é ${num + computer}.`);

            if (arg === 'par') {
                (player + computer) % 2 == 0 ? console.log('Então você gonhou!') : console.log('Então você perdeu!');
            } else {
                (player + computer) % 2 != 0 ? console.log('Então você gonhou!') : console.log('Então você perdeu!');
            }

        } else {
            console.log('Opção inválida. escolha "par" ou "impar"...');

        }
    } else {
        console.log('Opção inválida. escolha "par" ou "impar", e um número válido...');
    }
}

parOuImpar('impar', 5);