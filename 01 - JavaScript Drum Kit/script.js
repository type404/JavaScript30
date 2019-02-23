
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //ends the function
    audio.currentTime = 0; //sets the current time to keep playing on multiple hits
    audio.play();
    key.classList.add('playing');
}
function removeSound(e){
    if(e.propertyName !== 'transform') return; //ignores transition end is not transform
    this.classList.remove('playing');
}
window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeSound));
