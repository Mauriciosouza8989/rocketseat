//essa maneira ja separa caracter por caracter e coloca em um array...
let word = 'manipulação';
console.log(Array.from(word));


function divisoria() {
    console.log('--------------------------------------');
    console.log('--------------------------------------');
}

function manipuladoraDeString(str) {

    let phrase = str;
    let myArrey = phrase.split(" ");
    // let phraseWithUnderscore = myArrey.join("_");
    // console.log(phraseWithUnderscore.toLowerCase());
    console.log(myArrey)
}

manipuladoraDeString('EU QUERO VIVER O AMOR!');

// divisoria();

// function isThereThisWord(word) {
//     let phrase = 'Eu quero viver o amor!';
//     phrase.toUpperCase();
//     if (phrase.includes(word).toUpperCase) {
//         console.log(`A palavra ${word} está presente na frase.`);
//     } else {
//         console.log(`A palavra ${word} não está presente na frase.`);
//     }

// }

// isThereThisWord("Amor");
// isThereThisWord("casar");

// divisoria();

// let meuArrey = new Array('a', 'b', 'c');
// console.log(meuArrey);

// divisoria();

// let word = 'manipulação';
// console.log(Array.from(word));

// //Manipulando arreys
// let techs = ['node', 'js', 'python', 'css'];
// //adicionar um item ao fim
// techs.push('sql');
// //adicionar no começo
// techs.unshift('java');
// //remover item do fim
// techs.pop()
//     //remover item do inicio
// techs.shift()
//     //pegar somente alguns elementos do arrey
// console.log(techs.slice(1, 3))
//     //remover um ou mais em qualquer posição do arrey
// techs.splice(1, 2)
//     //encontrar a posição de um elemento no arrey
// let index = techs.indexOf('css')
// console.log('o index de css é ' + index)


// console.log(techs);