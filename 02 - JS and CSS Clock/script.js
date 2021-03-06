const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
     const now = new Date();
     const second = now.getSeconds();
     const secondDegrees = ((second / 60 ) * 360 + 90);
     secondHand.style.transform = `rotate(${secondDegrees}deg)`

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}
setInterval(setDate, 1000);