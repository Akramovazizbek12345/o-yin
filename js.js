const first = document.getElementById('first')
const button = document.getElementById('button')
const pad = document.getElementById('pad')
const dap = document.getElementById('dap')
const apd =document.getElementById('apd')
const playagain =document.getElementById('playagain')
let rando = Math.floor(Math.random() * 10);
console.log(rando);

let kiritmagan = 0;
let kiritilgan = 5;
button.onclick = function () {
  const userValue = first.value;

  if (
    userValue.length !== 1 ||
    userValue < '0' ||
    userValue > '9'
  ) {
    alert("Faqat 0 dan 9 gacha raqam kiriting!");
    first.value = '';
    return;
  }

  kiritmagan++;

  const userNumber = Number(userValue);

  if (kiritmagan > kiritilgan) {
    apd.innerHTML = "Siz yutqazdingiz!";
    apd.style.color = "red";
    button.disabled = true;
    first.disabled = true;
    return;
  }

  if (userNumber === rando) {
    apd.innerHTML = "You win!";
    apd.style.backgroundColor = "black";
    first.remove();
    button.remove();
    pad.remove();
    dap.remove();
    playagain.style.opacity = "100%";
  } else if (userNumber < rando) {
    apd.innerHTML = `Kattaroq son kiriting: ${userNumber}`;
    apd.style.color = "black"
    playagain.remove();
  } else {
    apd.innerHTML = `Kamroq son kiriting: ${userNumber}`;
    playagain.remove();
  }

  first.value = '';
};


