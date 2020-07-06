const AlpineAutoInterval = require('../index')

test('Event listener attribute is added to all elements with x-alpine-interval', () => {
	document.body.innerHTML = `<div id="x-on-applied" x-data="{}" x-alpine-interval="go"></div>`
	AlpineAutoInterval()
	expect(document.querySelector('#x-on-applied')
		.getAttribute('x-on:alpine-interval-update.window'))
		.toEqual("if ($event.detail.id == $el.getAttribute('x-alpine-interval-id')) go($event.detail)")
})

test('x-alpine-interval can accept a function of an object', () => {
	document.body.innerHTML = `<div class="intervalDataFunction" x-data="{}" x-alpine-interval="go"></div>`
	document.body.innerHTML = `<div class="intervalDataFunction" x-data="{}" x-alpine-interval="go()"></div>`
	document.body.innerHTML = `<div class="intervalDataFunction" x-data="{}" x-alpine-interval="{callback: 'go'}"></div>`
	document.body.innerHTML = `<div class="intervalDataFunction" x-data="{}" x-alpine-interval="{callback: 'go', timer: 123}"></div>`
	document.body.innerHTML = `<div class="intervalDataFunction" x-data="{}" x-alpine-interval="{callback: 'go', timer: 123, delay: 456}"></div>`
	AlpineAutoInterval()
	document.querySelectorAll('.intervalDataFunction').forEach(component => {
		expect(component.getAttribute('x-on:alpine-interval-update.window'))
			.toEqual("if ($event.detail.id == $el.getAttribute('x-alpine-interval-id')) go($event.detail)")
	})
})