---
title: Primeros pasos con HTML
tags:
  - html 
emoji: ✏️
---

### Comenzamos desde Cero

*Esta primer semana comencé con el curso de [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5) de FreeCodeCamp. Es una web donde hay cursos gratuitos. Así que voy a comenzar desde ahí.*

### HTML y HTML5 Básico

#### Headlines | Paragraph

*Los Headlines son como "Títulos".*

```html
<!-- Headlines -->
<h1> </h1>
<h2> </h2>
<h3> </h3>
<h4> </h4>
<h5> </h5>
<h6> </h6>
<!-- Paragraph -->
<p> </p>
```

#### Main

*En HTML5 hay algunos tags que deberíamos conocer: main, header, footer, nav, video, article, section, entre otros. Estos tags ayudan para que sea fácil de leer y además en el SEO*

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```
#### Imágenes

```html
<!-- Solo la imágen -->
<img src="https://www.url.com/your-image.jpg">
<!-- La imágen con un texto -->
<img src="https://www.url.com/your-image.jpg" alt="Ejemplo del texto">
```
#### Links 

```html
<!-- Externo -->
<a href="https://www.linuxmobile.netlify.app">Un ejemplo de un link</a>

<!-- Interno (dentro de la web) -->
<a href="#contacts-header">Contactos</a>
...
<h2 id="contacts-header">Contactos</h2>
```

#### Footer 

```html
<footer>Copyright linuxmobile</footer>
```

#### Anchor Elements

*El Anchor Elements, es el clásico `<a></a>` Utilizado para poner links dentro de un elemento de texto*

```html
<a href="https://linuxmobile.netlify.app/" target="_blank">linuxmobile web</a>
```

#### Links en Imágenes

```html
<img src="https://url.org/curriculum/ejemplo.png" alt="ejemplo de una imagen - link">
```

#### Listas

```html
<!-- Sin orden -->
<ul>
    <li>milk</li>
    <li>cheese</li>
</ul>
<!-- Ordenadas -->
<ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
</ol>
```

#### Input & Placeholder

*Input, es un tag para insertar. En este ejemplo, vamos a estar usando "text". Y placeholder, es utilizado para escribir el texto dentro del input.*

```html
<input type="text" placeholder="this is placeholder text">
```

#### Form

```html
<form action="/url-donde-usaremos-el-formulario">
  <input>
</form>
```
