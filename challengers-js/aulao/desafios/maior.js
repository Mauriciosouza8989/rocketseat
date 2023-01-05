function printMaior(n1, n2) {
    if (n1 > n2) {
        console.log(`O promeito número (${n1}) digitado é maior que o segundo (${n2})`);
    } else if (n2 > n1) {
        console.log(`O segundo número (${n2}) digitado é maior que o primiro (${n1})`);
    } else {
        console.log('Os números são iguais...');
    }
}

printMaior(35, 20);
printMaior(3, 20);
printMaior(3, 3);