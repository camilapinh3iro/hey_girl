'use strict'

import { mulheres } from "./mulheres.js"

const makePhotos = (woman, indice) => {


    const li = document.createElement('li')
    li.classList.add('li-woman')
    li.onclick = () => {
        localStorage.setItem("indice", indice)
    }

    const a = document.createElement('a')
    a.classList.add('content-woman')
    a.href = "../html/she.html"

    const img = document.createElement('img')
    img.classList.add('photo-woman')
    img.src = woman.image

    a.append(img)
    li.append(a)

    return li
}


const loadPhotos = () => {
    const container = document.querySelector('.container-photos-womens')
    const photos = mulheres.map(makePhotos)

    container.replaceChildren(...photos)
}

loadPhotos()