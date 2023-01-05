/*Crie um algoritimo que transforme notas numericas em Letras
EX:
*de 90 pra cima = A,
*de 80 a 89 = B,
de 70 a 79 = C,
de 60 a 69 = D
de 50 a 59 = E */

let classe = [{
        name: 'Mauricio',
        age: 25,
        note: 95
    },
    {
        name: 'Mayk',
        age: 23,
        note: 85
    },
    {
        name: 'Luciano',
        age: 26,
        note: 75
    },
    {
        name: 'Junior',
        age: 26,
        note: 65
    },
    {
        name: 'Marcos',
        age: 28,
        note: 55
    },
    {
        name: 'Marcelo',
        age: 32,
        note: 'sem nota'
    }

]

for (studant of classe) {
    if (studant.note >= 90) {
        console.log(`O aluno ${studant.name} teve nota ${studant.note}. E com isso tirou "A"`);
    } else if (studant.note >= 80) {
        console.log(`O aluno ${studant.name} teve nota ${studant.note}. E com isso tirou "B"`);
    } else if (studant.note >= 70) {
        console.log(`O aluno ${studant.name} teve nota ${studant.note}. E com isso tirou "C"`);
    } else if (studant.note >= 60) {
        console.log(`O aluno ${studant.name} teve nota ${studant.note}. E com isso tirou "D"`);
    } else if (studant.note >= 50) {
        console.log(`O aluno ${studant.name} teve nota ${studant.note}. E com isso tirou "F"`);
    } else {
        console.log(`A nota do aluno ${studant.name} é inválida!`);
    }
}