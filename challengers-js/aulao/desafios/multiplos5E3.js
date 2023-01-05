//multiplos de 5 e 3

somarMultipos(10);


function somarMultipos(limite) {
    soma = 0;
    for (let i = 0; i <= limite; i++) {
        if (i % 3 == 0) {
            soma += i;
        }
        if (i % 5 === 0) {
            soma += i;
        }

    }
    console.log(soma)
}