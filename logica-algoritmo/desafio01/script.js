const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const div = (n1, n2) => (n1 / n2).toFixed(2);
const restoDiv = (n1, n2) => n1 % n2;

const oddPair = (n1, n2) => (n1 + n2) % 2 == 0 ? 'par' : 'impar';
const equalOrDifferent = (n1, n2) => n1 === n2 ? 'iguais' : 'diferentes';



function getNumber(number1, number2) {

    alert(`Por favor, digite apenas números, e que seja maior que zero.
Ou o resultado não sairá como esperado.`);
    number1 = prompt('Digite o primeiro número:');
    number2 = prompt('Digite o segundo número:');
    number1 = Number(number1)
    number2 = Number(number2)



    printResults(number1, number2);

}

function printResults(arg1, arg2) {
    alert(`O resuntado da soma ente o primeiro e o segundo número foi: ${sum(arg1, arg2)}`);
    alert(`O resuntado da subtração ente o primeiro e o segundo número foi: ${sub(arg1, arg2)}`);
    alert(`O resuntado da multiplicação ente o primeiro e o segundo número foi: ${mult(arg1, arg2)}`);
    alert(`O resuntado da divisão ente o primeiro e o segundo número foi: ${div(arg1, arg2)}`);
    alert(`O resto da divisao ente o primeiro e o segundo número foi: ${restoDiv(arg1, arg2)}`);
    alert(`A soma dos dois numeros gerou um número ${oddPair(arg1, arg2)}`);
    alert(`Os dois número digitados são ${equalOrDifferent(arg1,arg2)}`);
}

getNumber();