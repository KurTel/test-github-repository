const body = document.getElementById('body')
const text = document.getElementById('text')

moveTextToCenter()

text.addEventListener('click', (event) => {
	const bodyWidth = body.clientWidth;
	const bodyHeight = body.clientHeight;
	const textWidth = text.clientWidth;
	const textHeight = text.clientHeight;
	
	console.error({
		body,
		text
	})

	console.error({
		bodyWidth,
		bodyHeight,
		textWidth,
		textHeight,
	})

	moveTextToRandomCoord()
})

function moveTextToCenter() {
	text.style.top = `${body.clientHeight/2 - text.clientWidth/2}px`
	text.style.left = `${body.clientWidth/2 - text.clientWidth/2}px`
}

function moveTextToRandomCoord() {
	const avalX = body.clientWidth - text.clientWidth
	const avalY = body.clientHeight - text.clientHeight

	text.style.left = `${Math.floor(Math.random() * avalX)}px`
	text.style.top = `${Math.floor(Math.random() * avalY)}px`
}