//variables
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const inputNumber = document.querySelector('#inputNumber');
const btnTry = document.getElementById('btnTry');
const btnReset = document.getElementById('btnReset');
let h2 = document.querySelector('h2');
let computer = Math.round(Math.random() * 10);
let msgErro = document.getElementById('erro');
let attempts = 1;

let tryeds = '';


//events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyPrssed)


//functions
function handleTryClick(event) {
    event.preventDefault();
    if (Number(inputNumber.value) == computer) {
        toggleScreen();
        h2.innerText = `Acertou em ${attempts} tentativas`
    } else {
        msgErro.style.scale = 1;
        invalidNumber();
    }
    setTimeout(() => {
        msgErro.style.scale = 0;
    }, 1000);
}



function handleResetClick() {
    toggleScreen();
    attempts = 1;
    computer = Math.round(Math.random() * 10);
    inputNumber.value = '';
    tryeds = ''
}

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

function keyPrssed(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
}

function invalidNumber() {
    let between = inputNumber.value <= 10 && inputNumber.value >= 0;
    if (!between) {
        msgErro.innerText = `O número ${inputNumber.value} não esta entre 0 e 10!`;
    } else if (between && inputNumber.value != computer) {
        if (tryeds.includes(inputNumber.value)) {
            msgErro.innerText = `Número ${inputNumber.value} já foi tentato`
        } else {
            msgErro.innerText = 'Você errou! Tente novamente!';
            attempts++;
            tryeds += String(inputNumber.value);
            inputNumber.value =""
        }
    } else {
        msgErro = `Já tentou o número ${inputNumber.value}`
    }
}