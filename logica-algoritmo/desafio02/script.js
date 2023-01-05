const alunos = [{
        nome: 'Maurício',
        primeiraNota: 9.5,
        segundaNota: 8
    },
    {
        nome: 'Luciano',
        primeiraNota: 5,
        segundaNota: 7
    },
    {
        nome: 'Gisele',
        primeiraNota: 6.5,
        segundaNota: 8
    },
    {
        nome: 'Lucas',
        primeiraNota: 4,
        segundaNota: 9
    },
];

const calcMedia = (nota1, nota2) => (nota1 + nota2) / 2;

function checkSituacao() {
    for (let aluno of alunos) {
        let media = calcMedia(aluno.primeiraNota, aluno.segundaNota);
        let printMedia = `A média do(a) aluno(a) ${aluno.nome} foi: ${media}`;
        if (media >= 7) {
            alert(`${printMedia} \nParabéns ${aluno.nome}, você foi aprovado(a) no concurso!`);
        } else {
            alert(`${printMedia} \nNão foi dessa vez ${aluno.nome}, tente novamente!`);
        }
    }
}

checkSituacao();