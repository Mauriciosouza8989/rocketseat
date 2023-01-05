//Quantas letras especificas há na frase:

//Minha solução
function howManyLeters(letter, phrase) {
    let str = phrase.toLowerCase();
    let myArrey = str.split('');
    let times = 0;
    for (let i of myArrey) {
        if (i == letter.toLowerCase()) {
            times += 1
        } else {
            continue;
        }
    }
    if (times == 1) {
        console.log(`A letra ${letter} se repete ${times} vez na frase digitada...`);
    } else {
        console.log(`A letra ${letter} se repete ${times} vezes na frase digitada...`);
    }
}

howManyLeters('o', 'mauricio dos santos sousa');

//solução do autor
const countLeter = (letter, string) => {
    let cont = 0;
    for (let i in string) {
        if (letter.toLowerCase() == string[i].toLowerCase()) {
            cont++;
        }
    }

    if (cont == 1) {
        console.log(`A letra ${letter} se repete ${cont} vez na frase digitada...`);
    } else {
        console.log(`A letra ${letter} se repete ${cont} vezes na frase digitada...`);
    }

};
countLeter('A', 'mauricio');