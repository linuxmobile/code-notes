---
title: Primer Capitulo de aprendiendo CSS
tags:
  - css
emoji: 🖼️
---

### ¡Comenzamos CSS desde cero!

*En esta semana comencé la segunda parte del curso de [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5) de FreeCodeCamp. La verdad, fue bastante sencillo. No es algo muy dificil de entender CSS. Vamos a ver que aprendí.*


### CSS Básico

*Comenzamos con css dentro del html. Utilizando `<style></style>`*

```css
/* Selectores */
h1 {
    /* Propiedades */
    color: #fff;
    font: "arial";
    font-size: 1.5em;
    text-align: center;
    font-family: "monospace";
}
/* Clases */
.header {
    width: 100%;
    height: 100px;
    border: 1px solid #000;
    border-radius: 5px;
    border-color: #000;
    border-width: 1px;
    border-style: solid;
    background-color: #000;
}
```

```css
/* atributos ID */
#images {
    padding: 10px;
    margin: 10px;
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px; /* top / right / bottom / left */
    font-size: 1.5em; /* em está basado en el tamaño de la fuente */
}
```

```css
/* Custom CSS Variables */
.example {
    --example-color: #000;
    --example-font-size: 1.5em;
}
/* Otra forma de incluir CSS */
.example-2 {
    background: var(--example-color);
}
/* Media query */
@media (max-width: 350px) {
    :root {
        --example-font-size: 1.2em;
    }
```
