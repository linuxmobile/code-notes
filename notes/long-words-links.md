---
title: 'Handling Long Words and URLs (Forcing Breaks, Hyphenation, Ellipsis, etc)'
tags:
    - css
emoji: 🦒
---

```css
.dont-break-out {
	/* These are technically the same, but use both */
	overflow-wrap: break-word;
	word-wrap: break-word;
	/* This is the dangerous one in WebKit, as it breaks things wherever */
	word-break: break-all;
	/* Instead use this non-standard one: */
	word-break: break-word;
	/* Adds a hyphen where the word breaks, if supported (No Blink) */
	hyphens: auto;
}
```

### Preventing Overflow with Ellipsis

Another approach to consider is truncating the text altogether and adding ellipses where the string of text hits the container:

```css
.ellipses {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
```
