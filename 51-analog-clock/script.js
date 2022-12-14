setInterval(setClock, 1000)
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const tickSound = document.getElementById("tick");

function setClock() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotate) {
    element.style.setProperty("--rotate", rotate * 360);
    playSound();
}

function playSound() {
    tickSound.currentTime = 0;
    tickSound.volume = 0.1;
    tickSound.play();
}

setClock();
playSound();