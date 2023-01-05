export default function Timer() {

    function countDown() {

        let minute = minutesDisplay.textContent;
        let seconds = Number(secondsDisplay.textContent);
        timerTimeOut = setTimeout(() => {
            if (seconds == 0) {
                seconds = 6;
                minute -= 1;
                minutesDisplay.textContent = String(minute).padStart(2, '0');
            }
            secondsDisplay.textContent = String(seconds).padStart(2, '0') - 1;

            countDown();
        }, 1000);
    }


    return {
        countDown,
    }
}