
# Alpine — Auto Interval
A lightweight interval plugin for Alpine.js that lets you call a function every n milliseconds

![GitHub file size in bytes](https://img.shields.io/github/size/kevinbatdorf/alpine-auto-interval/dist/index.js?label=minified&style=flat-square)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/kevinbatdorf/alpine-auto-interval?label=version&style=flat-square)

## About

Useful when you need to change state every n seconds, such as in a slideshow, or even to check on some external data.

**Note: By default, the timer will pause when the browser tab is idle**

```html
<!-- Counter example -->
<div
  x-data="{ count: 0, add() { this.count++ } }"
  x-alpine-interval="add"
  x-text="count">
</div>
```
[Demo](https://codepen.io/KevinBatdorf/pen/816d973df4cd45d060999c7dab8ceb98?editors=1000)

The timer defaults to 1000ms but you can pass in parameters to override
```html
<!-- Counter example with timer adjusted -->
<div
  x-data="{ count: 0, add() { this.count++ } }"
  x-alpine-interval="{ callback: 'add', timer: 3000 }"
  x-text="count">
</div>
```
[Demo](https://codepen.io/KevinBatdorf/pen/41aa6f9dddc37036ead75c086fb8f7c7?editors=1000)

The delay defaults to the timer but you can pass in parameters to override.
```html
<!-- Counter example with delay adjusted  -->
<div
  x-data="{ count: 0, add() { this.count++ } }"
  x-alpine-interval="{ callback: 'add', delay: 3000 }"
  x-text="count">
</div>
```
[Demo](https://codepen.io/KevinBatdorf/pen/20a55f4c172e86aa11d16de192475391?editors=1000)

## Installation

Include the following `<script>` tag in the `<head>` of your document (before Alpine):

```html
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-auto-interval@0.x.x/dist/index.js"></script>
```

### Manual

If you wish to create your own bundle:

```bash
npm install kevinbatdorf/alpine-auto-interval --save
```

Then add the following to your script:

```javascript
import 'alpine-auto-interval'
import 'alpinejs'
```

## License

Copyright (c) 2020 Kevin Batdorf

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
