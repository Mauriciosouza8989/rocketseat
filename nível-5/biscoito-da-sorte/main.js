const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const wholeBiscuit = document.querySelector('.wholeBiscuit');
const brokenBiscuit = document.querySelector('.brokenBiscuit');
const button = document.querySelector('button');
const phrase = document.getElementById('phrase');

wholeBiscuit.querySelector('img').addEventListener('click', openBiscuit);
button.addEventListener('click', playAgain);

function openBiscuit() {
    hideScreen();

    phrase.style.animation = 'upMsg 1s ease-out both';

}

function playAgain() {
    hideScreen();
}

function hideScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}