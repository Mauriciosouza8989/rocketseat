//criar uma funcao que filtre produtos com valor entre valor um e valor dois

let produtos = [{
        nome: 'Cadeira gamer',
        valor: 750
    },
    {
        nome: 'sofá',
        valor: 800
    },
    {
        nome: 'apple whatch',
        valor: 1200
    },
    {
        nome: 'smart TV',
        valor: 2500
    },
    {
        nome: 'cafeteira',
        valor: 200
    },

];

function filtrarValor(min, max) {
    console.log('Produtos filtrados:')
    for (let produto of produtos) {
        let valorMinino = produto.valor >= min;
        let valorMaximo = produto.valor <= max;
        if (valorMinino && valorMaximo) {
            console.log(`${produto.nome}: R$${produto.valor},00`);
        } else {
            continue;
        }
    }
}

filtrarValor(150, 1000);