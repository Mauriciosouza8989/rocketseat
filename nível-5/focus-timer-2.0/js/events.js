import Timer from "./timer.js";


export default function events({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonDown,
    buttonSoundOff,
    buttonSoundOn,
    cardLareira,
    cardCafeteria,
    cardChuva,
    cardFloresta,
    audioFloresta,
    audioCafeteria,
    audioChuva,
    audioLareira,
    minutesDisplay,
    secondsDisplay,
    florestaSound,
    cafeteriaSound,
    chuvaSound,
    lareiraSound,
    countDown,
    minutes,
    timerTimeOut
}) {


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


}