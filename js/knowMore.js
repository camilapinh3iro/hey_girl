'use strict'

import { mulheres } from "./mulheres.js"

const more = (woman) => {
   

    let contentImg = document.querySelector('.image')
    
    let img = document.createElement('img')
    img.classList.add('photo-woman-she')
    img.src = woman.image

    contentImg.append(img)

    return contentImg
}

const loadWoman = () => {
    let localStore = localStorage.getItem('id');

    const container = document.getElementById('main')
    const photo = mulheres.filter(id == localStore)

    container.replaceChildren(...photo)
}

loadWoman()