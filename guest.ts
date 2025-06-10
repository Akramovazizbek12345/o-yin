const first = document.getElementById('first') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;
const pad = document.getElementById('pad') as HTMLElement;
const dap = document.getElementById('dap') as HTMLElement;
const apd = document.getElementById('apd') as HTMLElement;
const playagain = document.getElementById('playagain') as HTMLElement;

let rando: number = Math.floor(Math.random() * 10);
console.log(rando);

button.onclick = function () {
  const userGuess: number = parseInt(first.value);

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
    alert('0 dan 10 gacha raqam kirita olasiz');
    return;
  }

  if (rando === userGuess) {
    apd.innerHTML = 'You win';
    apd.style.backgroundColor = 'black';
    apd.style.color= 'white'
    first.remove();
    button.remove();
    pad.remove();
    dap.remove();

  } else if (rando < userGuess) {
    dap.innerHTML = `<${userGuess}`;
    playagain.style.opacity = '0%'; // Remove qilmasdan shunchaki yashirish yaxshiroq
  } else if (rando > userGuess) {
    pad.innerHTML = `${userGuess}>`;
    playagain.style.opacity = '0%';
  }

  first.value = '';
};