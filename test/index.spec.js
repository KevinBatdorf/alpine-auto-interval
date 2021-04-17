const AlpineAutoInterval = require('../index')

test('x-alpine-interval can accept a function reference', () => {
    testAlpineIntervalEventHandler(`<div class="intervalDataFunction" x-data="{}" x-alpine-interval="go"></div>`, 'go');
    testAlpineIntervalEventHandler(`<div class="intervalDataFunction" x-data="{}" x-alpine-interval="go()"></div>`, 'go');
})

test('x-alpine-interval can accept an object', () => {
    testAlpineIntervalEventHandler(`<div class="intervalDataFunction" x-data="{}" x-alpine-interval="{callback: 'go'}"></div>`, 'go');
    testAlpineIntervalEventHandler(`<div class="intervalDataFunction" x-data="{}" x-alpine-interval="{callback: 'go', timer: 123}"></div>`, 'go');
    testAlpineIntervalEventHandler(`<div class="intervalDataFunction" x-data="{}" x-alpine-interval="{callback: 'go', timer: 123, delay: 456}"></div>`, 'go');
})

const testAlpineIntervalEventHandler = (html, expectedCallbackFunction) => {
    document.body.innerHTML = html;

    AlpineAutoInterval()

    const alpineAutoIntervalElement = document.querySelector('[x-alpine-interval]');
    expect(alpineAutoIntervalElement).toBeDefined();
    expect(alpineAutoIntervalElement.getAttribute('x-on:alpine-interval-update.window'))
        .toEqual(`if ($event.detail.id == $el.getAttribute('x-alpine-interval-id')) ${expectedCallbackFunction}($event.detail)`)
};
