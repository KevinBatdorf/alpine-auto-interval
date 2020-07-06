function AlpineAutoInterval() {
	Array.from(document.querySelectorAll('[x-alpine-interval]')).forEach(alpineComponent => {
		const id = Date.now() + Math.floor(Math.random() * 1000000)
		alpineComponent.setAttribute('x-alpine-interval-id', id)

		let functionName = alpineComponent.getAttribute('x-alpine-interval').replace(/[()]/g, '') // Remove ()
		let timer = 1000
		let delay = 0
		let forceInterval = false
		if (functionName.indexOf('{') === 0) {
			// convert to JSON in case it's an object
			functionNameObject = JSON.parse(functionName.replace(/([a-zA-Z0-9]+?):/g, '"$1":').replace(/'/g, '"'))
			functionName = functionNameObject['callback']
			timer = functionNameObject['timer'] ? functionNameObject['timer'] : timer
			delay = functionNameObject['delay'] ? functionNameObject['delay'] - timer : 0
			forceInterval = functionNameObject['forceInterval'] === 'true' ? true : false
		}

		alpineComponent.setAttribute(
			'x-on:alpine-interval-update.window',
			`if ($event.detail.id == $el.getAttribute('x-alpine-interval-id')) ${functionName}($event.detail)`
		)

		const loop = () => {
			// TODO: Possible feature would be to listen for an event to update the timer
			setTimeout(() => {
				window.dispatchEvent(new CustomEvent('alpine-interval-update', {
					detail: {
						id: id,
					},
					bubbles: true,
				}))
				forceInterval ? loop() : requestAnimationFrame(loop)
			}, timer)
		}
		setTimeout(() => {
			forceInterval ? loop() : requestAnimationFrame(loop)
		}, delay)
	})
}

const buffered = window.deferLoadingAlpine || false
window.deferLoadingAlpine = function (alpine) {
	AlpineAutoInterval()
	typeof buffered == "function" && buffered()
	alpine()
}

module.exports = AlpineAutoInterval