/*solicite dois números com "prompt" e dê o resultado da soma dos dois*/


// let number1 = prompt('Qual Digite o primeiro número:');
// let number2 = prompt('Qual Digite o segundo número:');
// number1 = Number(number1);
// number2 = Number(number2);
// alert(`O resultado da soma entre ${number1} e ${number2} é: ${number1 + number2}`);


/*
Capturar  2 números e fazer as operações matemáticas
soma, subtração, multiplicação, divisão e resto da divisão.
e mostrar em um "alert"
*/

let numberOne = prompt('Digite o primeiro número:');
let numberTwo = prompt('Digite o segundo número:');

let sum = Number(numberOne) + Number(numberTwo);
let subtracao = Number(numberOne) - Number(numberTwo);
let multiplicação = Number(numberOne) * Number(numberTwo);
let divisao = Number(numberOne) / Number(numberTwo);
let resto = Number(numberOne) % Number(numberTwo);

alert(`
Soma: ${sum}.
Subtração: ${subtracao}.
Multiplicação: ${multiplicação}.
Divisão: ${divisao.toFixed(2)}.
Resto: ${resto}
`)