function removeTransition(e) {
     if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}


function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const drum = document.querySelector(`div[data-key="${key}"]`);
    if (!audio) return;

    drum.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function playSoundFromKeyEvent(e) {
    playSound(e.keyCode);
}


function playSoundFromClick(key) {
    playSound(key);
}



const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSoundFromKeyEvent);
window.addEventListener('onclick', playSound);























