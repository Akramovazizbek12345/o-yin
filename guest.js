let randomNumber = 0
let maxNumber = 0
let maximkoniyat = 0
let imkoniyat = 0

function boshlash(max, maximkon) {
	maxNumber = max
	maximkoniyat = maximkon
	imkoniyat = 0
	randomNumber = Math.floor(Math.random() * maxNumber)
	console.log(randomNumber)
	document.getElementById('text_max').textContent = `0 dan ${maxNumber} gacha raqam o‘yini`
	document.getElementById('imkoniyat').textContent = `Urinishlar: ${maximkoniyat}`
	document.getElementById('gameArea').style.display = 'block'
	document.getElementById('buttonlar').style.display = 'none'
	document.getElementById('qaytish').style.display = 'block'
}
function Tektirish() {
	const input = document.getElementById('sonkiritadigan_input')
	const guess = parseInt(input.value)
	const katta_kichiklik = document.getElementById('katta_kichiklik')
	if (isNaN(guess)) {
		katta_kichiklik.textContent = `Iltimos, 0 dan ${maxNumber} gacha son kiriting.`
		return
	}

	imkoniyat++
	const remaining = maximkoniyat - imkoniyat

	if (guess < randomNumber) {
		katta_kichiklik.textContent = `${input.value}>`
	} else if (guess > randomNumber) {
		katta_kichiklik.textContent = `<${input.value}`
	} else {
		katta_kichiklik.textContent = ' To‘g‘ri topdingiz!'
		document.getElementById('imkoniyat').textContent = ''
		document.getElementById('sonkiritadigan_input').disabled = true
		return
	}
	if (imkoniyat >= maximkoniyat) {
		katta_kichiklik.textContent = `  Yutqazdingiz! Raqam: ${randomNumber}`
		document.getElementById('imkoniyat').textContent = ''
	} else {
		document.getElementById(
			'imkoniyat'
		).textContent = `Qolgan urinishlar: ${remaining}`
	}
}
document.getElementById('qaytish').style.display = 'none'
