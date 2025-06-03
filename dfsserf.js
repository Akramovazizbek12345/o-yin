"use strict";
const first = document.getElementById('first');
const button = document.getElementById('button');
const pad = document.getElementById('pad');
const dap = document.getElementById('dap');
const apd = document.getElementById('apd');
const playagain = document.getElementById('playagain');
let rando = Math.floor(Math.random() * 10);
console.log(rando);
button.onclick = function () {
    const userGuess = parseInt(first.value);
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
        alert('0 dan 10 gacha raqam kirita olasiz');
        return;
    }
    if (rando === userGuess) {
        apd.innerHTML = 'You win';
        apd.style.backgroundColor = 'black';
        first.remove();
        button.remove();
        pad.remove();
        dap.remove();
        playagain.style.opacity = '100%';
    }
    else if (rando < userGuess) {
        dap.innerHTML = `<${userGuess}`;
        playagain.style.opacity = '0%'; // Remove qilmasdan shunchaki yashirish yaxshiroq
    }
    else if (rando > userGuess) {
        pad.innerHTML = `${userGuess}>`;
        playagain.style.opacity = '0%';
    }
    first.value = '';
};
