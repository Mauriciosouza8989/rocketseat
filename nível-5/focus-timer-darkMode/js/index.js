// import Timer from "./timer.js";

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonDown = document.querySelector('.down');
const cardFloresta = document.querySelector('#floresta');
const cardChuva = document.querySelector('#chuva');
const cardCafeteria = document.querySelector('#cafeteria');
const cardLareira = document.querySelector('#lareira');
const buttonSoundOn = document.querySelector('.soundOn');
const buttonSoundOff = document.querySelector('.soundOff');
const dark = document.querySelector('.darkMode');
const light = document.querySelector('.lightMode');
const body = document.querySelector('body');
const card = document.querySelectorAll('.card');
const span = document.querySelectorAll('span');
const volumeCafeteria = document.querySelector('#cafeteria input');
const volumeChuva = document.querySelector('#chuva input');
const volumeFloresta = document.querySelector('#floresta input');
const volumeLareira = document.querySelector('#lareira input');


let timerTimeOut
let minutes = minutesDisplay.textContent;
let audioFloresta = new Audio("./sounds/Floresta.wav");
let audioChuva = new Audio("./sounds/Chuva.wav");
let audioCafeteria = new Audio("./sounds/Cafeteria.wav");
let audioLareira = new Audio("./sounds/Lareira.wav");

volumeFloresta.addEventListener('input', () => {
    audioFloresta.volume = volumeFloresta.value;
})
volumeChuva.addEventListener('input', () => {
    audioChuva.volume = volumeChuva.value;
})
volumeCafeteria.addEventListener('input', () => {
    audioCafeteria.volume = volumeCafeteria.value;
})

volumeLareira.addEventListener('input', () => {
    audioLareira.volume = volumeLareira.value;
})


light.addEventListener('click', () => {
    darkMode();
});
dark.addEventListener('click', () => {
    lightMode();
})

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    countDown();
});
buttonPause.addEventListener('click', () => {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    clearTimeout(timerTimeOut);
});
buttonStop.addEventListener('click', resetTimerAndControls)

buttonPlus.addEventListener('click', () => {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;
});
buttonDown.addEventListener('click', () => {

    if (Number(minutesDisplay.textContent) >= 5) {
        let decrement5 = Number(minutesDisplay.textContent) - 5;
        minutesDisplay.textContent = String(decrement5).padStart(2, '0');
    } else {
        resetTimerAndControls();
    }
});



cardFloresta.addEventListener('click', () => {
    if (!cardFloresta.classList.contains('playing')) {
        cardFloresta.classList.add('playing');
        cardChuva.classList.remove('playing');
        cardCafeteria.classList.remove('playing');
        cardLareira.classList.remove('playing');
        florestaSound();
        buttonSoundOn.classList.remove('hide');
        buttonSoundOff.classList.add('hide');
    }
});
cardChuva.addEventListener('click', () => {
    if (!cardChuva.classList.contains('playing')) {
        cardFloresta.classList.remove('playing');
        cardChuva.classList.add('playing');
        cardCafeteria.classList.remove('playing');
        cardLareira.classList.remove('playing');
        chuvaSound();
        buttonSoundOn.classList.remove('hide');
        buttonSoundOff.classList.add('hide');
    }
});
cardCafeteria.addEventListener('click', () => {
    if (!cardCafeteria.classList.contains('playing')) {
        cardFloresta.classList.remove('playing');
        cardChuva.classList.remove('playing');
        cardCafeteria.classList.add('playing');
        cardLareira.classList.remove('playing');
        cafeteriaSound();
        buttonSoundOn.classList.remove('hide');
        buttonSoundOff.classList.add('hide');
    }
});
cardLareira.addEventListener('click', () => {
    if (!cardLareira.classList.contains('playing')) {
        cardFloresta.classList.remove('playing');
        cardChuva.classList.remove('playing');
        cardCafeteria.classList.remove('playing');
        cardLareira.classList.add('playing');
        lareiraSound();
        buttonSoundOn.classList.remove('hide');
        buttonSoundOff.classList.add('hide');
    }
});

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.toggle('hide');
    audioFloresta.pause();
    audioChuva.pause();
    audioLareira.pause();
    audioCafeteria.pause();
    cardFloresta.classList.remove('playing');
    cardChuva.classList.remove('playing');
    cardCafeteria.classList.remove('playing');
    cardLareira.classList.remove('playing');
});

function resetTimerAndControls() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = '00';
    clearTimeout(timerTimeOut);
};

function florestaSound() {
    audioFloresta.currentTime = 0;
    audioFloresta.play();
    audioChuva.pause();
    audioCafeteria.pause();
    audioLareira.pause();
    audioFloresta.loop = true;
};

function chuvaSound() {
    audioChuva.currentTime = 0;
    audioFloresta.pause();
    audioCafeteria.pause();
    audioLareira.pause();
    audioChuva.play();
    audioChuva.loop = true;
};

function cafeteriaSound() {
    audioCafeteria.currentTime = 0;
    audioFloresta.pause();
    audioChuva.pause();
    audioLareira.pause();
    audioCafeteria.play();
    audioCafeteria.loop = true;
};

function lareiraSound() {
    audioLareira.currentTime = 0;
    audioFloresta.pause();
    audioChuva.pause();
    audioCafeteria.pause();
    audioLareira.play();
    audioLareira.loop = true;
};


function countDown() {
    if (minutesDisplay.textContent == 0 && secondsDisplay.textContent == 0) {
        resetTimerAndControls();
    }
    let minute = minutesDisplay.textContent;
    let seconds = Number(secondsDisplay.textContent);
    timerTimeOut = setTimeout(() => {
        if (seconds == 0) {
            seconds = 60;
            minute -= 1;
            minutesDisplay.textContent = String(minute).padStart(2, '0');
        }
        seconds -= 1;
        secondsDisplay.textContent = String(seconds).padStart(2, '0');

        countDown();
    }, 1000);
};

function darkMode() {
    body.classList.add('darkTeam');
    body.classList.remove('lightTeam')
    light.classList.add('hide');
    dark.classList.remove('hide');
    card.forEach(card => {
        card.classList.add('cardDark')
    });
    span.forEach(span => {
        span.style.color = '#fff';
    })
    buttonSoundOff.innerHTML = `<img src="./assets/volume-mute.png">`
}

function lightMode() {
    body.classList.remove('darkTeam');
    body.classList.add('lightTeam');
    minutesDisplay.style.color = '#29292E';
    secondsDisplay.style.color = '#29292E';
    dark.classList.add('hide');
    light.classList.remove('hide');
    card.forEach(card => {
        card.classList.remove('cardDark')
    });
}