const first = document.getElementById('first')
const button = document.getElementById('button')
const pad = document.getElementById('pad')
const dap = document.getElementById('dap')
const apd =document.getElementById('apd')
const playagain =document.getElementById('playagain')
				let rando = Math.floor(Math.random()*10);
        console.log(rando);

  button.onclick = function () {
if (rando == first.value) {
	apd.innerHTML = 'You win'
	apd.style.backgroundColor = 'black'
	first.remove()
	button.remove()	
	pad.remove()
	dap.remove()
	playagain.style.opacity='100%'
}else if (rando <first.value) {
	dap.innerHTML = `<${first.value}`;
	playagain.remove()
}else if (rando >first.value) {
	pad.innerHTML = `${first.value}>`;
	playagain.remove()
}else{
alert('0 dan 10 gacha raqam kirita olasiz')
}
first.value=''
	}


