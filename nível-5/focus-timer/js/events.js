import Sounds from './sounds.js';
import countDown from './main.js';
import { timerTimeOut } from './main.js';
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const minutesDisplay = document.querySelector('span.minuts');
const secondsDisplay = document.querySelector('span.seconds');
const buttonSoundOn = document.querySelector('.soundOn');
const buttonSoundOff = document.querySelector('.soundOff');

const sound = Sounds();



let timer = Number(minutesDisplay.textContent);
export default function events() {

    function playTime() {
        buttonPlay.classList.toggle('hide');
        buttonPause.classList.toggle('hide');
        buttonStop.classList.remove('hide');
        buttonSet.classList.add('hide');
        countDown();
        sound.pressButton();
    }

    function pauseTime() {
        buttonPlay.classList.toggle('hide');
        buttonPause.classList.toggle('hide');
        buttonStop.classList.remove('hide');
        buttonSet.classList.add('hide');
        clearTimeout(timerTimeOut);
        sound.pressButton();
    }

    function stopTime() {
        buttonStop.classList.add('hide');
        buttonSet.classList.remove('hide');
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
        clearTimeout(timerTimeOut);
        minutesDisplay.textContent = String(timer).padStart(2, '0');
        secondsDisplay.textContent = '00';
        sound.pressButton();
    }

    function sounOn() {
        buttonSoundOn.classList.toggle('hide');
        buttonSoundOff.classList.toggle('hide');
        sound.pressButton()
        sound.bgAudio.pause();
    }

    function soundOff() {
        buttonSoundOn.classList.toggle('hide');
        buttonSoundOff.classList.toggle('hide');
        sound.bgAudio.play()
    }


    function setTime() {

        let time = Number(prompt('Digite o tempo desejado em minutos:'));

        if (!time) {
            alert('Por favor digite apenas números!');
            return;
        }
        timer = time;
        minutesDisplay.textContent = String(timer).padStart(2, '0');
    }

    return {
        playTime,
        pauseTime,
        stopTime,
        sounOn,
        soundOff,
        setTime,
    }
}