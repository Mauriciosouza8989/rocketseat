import { modal } from "./modal.js"


//Variavles
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');



form.onsubmit = (event) => {
    event.preventDefault();
    if (inputWeight.value != '' && inputHeight.value != '') {

        const weight = inputWeight.value;
        const height = inputHeight.value;
        modal.IMCresult.innerText = `Seu IMC é de ${calcIMC(weight, height)}`;
        modal.open();
    } else {
        modal.msgError.classList.add('open');
        setTimeout(() => {
            modal.msgError.classList.remove('open');

        }, 1500);
    }

}

function calcIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}



function removePopup() {
    modal.close();
    inputWeight.value = '';
    inputHeight.value = '';

}

window.addEventListener('keydown', handleClick);

function handleClick(event) {
    if (event.key === 'Escape') {
        modal.close();
    }
}