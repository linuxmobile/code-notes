---
title: Styling siblings on hover
tags:
    - css
emoji: 💄
---

Use the :not CSS selector to stylize siblings on hover.

Normally, you would need JavaScript to stylize all the siblings of an element you're interacting with. But wait! There's a cool method based 100% on CSS.

The idea, in short, is to target the :hover of the parent, then target all the children except the one you're hovering over.

```css
.parent:hover .child:not(:hover) {
	/* this style affects all the children except the one you're hovering over */
}
```

<iframe height="512" style="width: 100%; margin-bottom: 24px;" scrolling="no" title="CSS Nugget: Styling siblings on hover" src="https://codepen.io/codyhouse/embed/KKdrmXj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/codyhouse/pen/KKdrmXj">
  CSS Nugget: Styling siblings on hover</a> by CodyHouse (<a href="https://codepen.io/codyhouse">@codyhouse</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
