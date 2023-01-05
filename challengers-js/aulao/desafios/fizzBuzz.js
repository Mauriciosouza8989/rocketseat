//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5=> FizzBuzz



function fizzBuzz(arg) {
    let typeArg = typeof(1);
    if (typeof(arg) != typeArg) {
        console.log(`"${arg}" não é um número! Digite um número...`);
    } else if (arg % 3 == 0) {
        arg % 5 == 0 ? console.log('FizzBuzz') : console.log('Fizz');
    } else if (arg % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(`O número ${arg} não é divisível por 3 nem por 5...`)
    }
}

fizzBuzz("nada");
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz(11);