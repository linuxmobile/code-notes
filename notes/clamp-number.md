---
title: Clamp number
tags:
    - javascript
    - css
emoji: 🗜
---

## JavaScript

```js
const clamp = (value: number, min: number, max: number) => {
	return Math.min(Math.max(value, min), max);
};
```

## CSS

Use this if you only need to support Safari (11.1+) and Chrome (79+)

```css
html {
	font-size: min(max(16px, 4vw), 22px);
}
```

Or even this if you only support Chrome (79+)

```css
body {
	font-size: clamp(16px, 4vw, 22px);
}
```
