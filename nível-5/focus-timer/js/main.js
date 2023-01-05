import Sounds from './sounds.js';
import events from './events.js';

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const minutesDisplay = document.querySelector('span.minuts');
const secondsDisplay = document.querySelector('span.seconds');
const buttonSoundOn = document.querySelector('.soundOn');
const buttonSoundOff = document.querySelector('.soundOff');

const sound = Sounds();

const event = events();

let timer = Number(minutesDisplay.textContent);
export let timerTimeOut;

buttonPlay.addEventListener('click', event.playTime);
buttonPause.addEventListener('click', event.pauseTime);
buttonStop.addEventListener('click', event.stopTime);
buttonSet.addEventListener('click', event.setTime);
buttonSoundOn.addEventListener('click', event.sounOn);
buttonSoundOff.addEventListener('click', event.soundOff);


export default function countDown() {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (minutes == 0 && seconds == 0) {
        event.stopTime();
        sound.timeEnd();
        return;
    }
    timerTimeOut = setTimeout(() => {

        if (seconds <= 0 && minutes >= 0) {
            seconds = 60;
            minutes -= 1
            minutes < 10 ? minutesDisplay.textContent = `0${minutes}` : minutesDisplay.textContent = minutes;
        }
        seconds <= 10 ? secondsDisplay.textContent = `0${seconds -1}` : secondsDisplay.textContent = seconds - 1;

        countDown();

    }, 1000);

}