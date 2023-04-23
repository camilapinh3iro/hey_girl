'use strict'

import { mulheres } from "./mulheres.js"

const more = (woman) => {
    let body = document.getElementById('body')


    let header = document.getElementById('header')

    let contentTitle = document.querySelector('content-title-section')
    header.append(contentTitle)


    let main = document.getElementById('main')
   
    let contentImg = document.createElement('div')
    contentImg.classList.add('img')
    
    let img = document.createElement('img')
    img.classList.add('photo-woman-she')
    img.src = woman.image

    contentImg.append(img)

    let contentBiography = document.createElement('div')
    contentBiography.classList.add('biography')

    let crownImg = document.createElement('img')
    crownImg.classList.add('image-crown')
    crownImg.src = '../img/crown.png'

    let contentP = document.createElement('div')
    contentP.classList.add('content-p')

    let p = document.createElement('p')
    p.textContent = woman.biografia

    contentBiography.append(crownImg, contentP)
    contentP.append(p)

    main.append(contentImg, contentBiography)
    body.append(header, main)

    return body
}

const loadWoman = () => {
    let indice = localStorage.getItem('indice');

    const container = document.getElementById('main')
    const photo = more(mulheres[indice]) 

    container.replaceChildren(photo)
}

loadWoman()
