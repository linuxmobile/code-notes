---
title: Axios
emoji: 🐕
tags:
    - javascript
---

## Dependencies

```shell
npm install axios
yarn add axios
```

## Example

```js
const axios = require('axios');
const token = 'path/to/token';

axios
	.get('/user?ID=12345', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	.then(function (response) {
		// handle success
		console.log(response);
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.then(function () {
		// always executed
	});
```
