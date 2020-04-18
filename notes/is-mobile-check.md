---
title: is-mobile check
tags:
  - javascript
emoji: 📱
---

```js
const parser = require('ua-parser-js')

function isUserAgentSignallingMobile(userAgentString) {
    const ua = parser(userAgentString)
    return ua.device.type === 'mobile'
}
```

Repository: [https://github.com/faisalman/ua-parser-js](https://github.com/faisalman/ua-parser-js)
