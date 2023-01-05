var rendaTotal = 0;
var despesaTotal = 0;

let moradores = [{
        name: 'Mauricio',
        age: 25,
        job: 'Tratorista',
        monthlyIncome: 2000
    },
    {
        name: 'Gisele',
        age: 21,
        job: 'cozinheira',
        monthlyIncome: 1700
    }
];

let despesas = [280, 230, 501, 400, 22, 800, 120, 65, 32, 27];


(function somaRenda() {
    for (i of moradores) {
        rendaTotal += i.monthlyIncome;
    }
    return rendaTotal;
})();

(function somaDespesas() {
    for (i of despesas) {
        despesaTotal += i;
    }
    return despesaTotal;
})();

function situacaoRenda() {

    if (despesaTotal > rendaTotal) {
        console.log(`Este mês a renda de R$${rendaTotal},00, e não foi suficiente!`);
    } else {
        let sobra = rendaTotal - despesaTotal;
        console.log(`As contas foram pagas normalmente este mês e sobrou R$${sobra},00`);
    }
}

situacaoRenda()