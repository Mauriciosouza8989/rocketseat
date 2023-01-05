import {
    timerTimeOut,
    minutesDisplay,
    secondsDisplay,
    pauseTime,
    stopTime,

} from "./controls.js";
export let timer = Number(minutesDisplay.textContent);

export function setTime() {
    timer = Number(prompt('Digite o tempo desejado em minutos:'));

    if (!timer) {
        alert('Por favor digite apenas números!')
        return
    }
    minutesDisplay.textContent = String(timer).padStart(2, '0');
}

export function countDown() {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (minutes == 0 && seconds == 0) {
        pauseTime();
        stopTime();
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