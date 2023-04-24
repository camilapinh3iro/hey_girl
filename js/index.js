'use strict'

import { women } from "./women.js"

const makePhotos = (woman, indice) => {
    const li = document.createElement('li')
    li.classList.add('li-woman')
    li.onclick = () => {
        localStorage.setItem("indice", indice)
    }

    const a = document.createElement('a')
    a.classList.add('content-woman')
    a.href = "./html/she.html"
    a.ariaLabel = "Learn more about the woman in the photo"

    const img = document.createElement('img')
    img.classList.add('photo-woman')
    img.src = woman.image
    img.alt = `Photo ${woman.name}`

    a.append(img)
    li.append(a)

    return li
}


const loadPhotos = () => {
    const container = document.querySelector('.container-photos-women')
    const photos = women.map(makePhotos)

    container.replaceChildren(...photos)
}

loadPhotos()