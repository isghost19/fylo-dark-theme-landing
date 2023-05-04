# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./Capturaxzc.png)


### Link

- Live Site URL: [live site URL here](https://tourmaline-smakager-650938.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

aprendi mucho con este proyecto personalmente me costo mucho en algunas areas como la colocacion del fondo, pero pude hacerlo que se pareciera mucho al esperado


```css
.bg-comillas {
    position: relative;
    z-index: 2;
    left: 0;
    right: 0;
    transform: translate(160%, -240%);
}
.caja-flotante {
    max-width: 650px;
    height: auto;
    background-color: hsl(219, 30%, 18%);
    margin: 0 auto;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    top: -130px;
    left: 0;
    right: 0;
    padding: 0 15px;
}
```
```js
function validarCorreo() {
    const correo = document.getElementById("email").value;
        if (correo == "") {
            document.getElementById("error").innerHTML = "Debes ingresar un correo electronico";
            setTimeout(() => {
                document.getElementById("error").innerHTML = "";
            }, 5000);
            return false;
        }
}
```


### Continued development

seguiré aprendiendo en la optimización y construcción de proyectos más grandes.

