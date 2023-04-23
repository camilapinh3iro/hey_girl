'use strict'

import { mulheres } from "./mulheres.js"

const more = (woman) => {
    let body = document.getElementById('body')

    let header = document.getElementById('header')

    let contentTitle = document.createElement('div')
    contentTitle.classList.add('content-title-section')

    let bar = document.createElement('div')
    bar.classList.add('bar')

    let text = document.createElement('div')
    text.classList.add('title-text')

    let h2 = document.createElement('h2')
    h2.textContent = woman.name

    let a = document.createElement('a')
    a.href = "../index.html#they"
    a.ariaLabel = "Back to previous page"

    let i = document.createElement('i')
    i.classList.add('fas')
    i.classList.add('fa-angle-double-left')

    a.append(i)
    text.append(h2)
    contentTitle.append(bar, text)

    header.append(contentTitle, a)

    let main = document.getElementById('main')

    let contentImg = document.createElement('div')
    contentImg.classList.add('img')

    let img = document.createElement('img')
    img.classList.add('photo-woman-she')
    img.src = `../${woman.image}`
    img.alt = 'Photo woman'

    contentImg.append(img)

    let contentBiography = document.createElement('div')
    contentBiography.classList.add('biography')

    let crownImg = document.createElement('img')
    crownImg.classList.add('image-crown')
    crownImg.src = '../img/crown.png'
    crownImg.alt = 'Image crown'

    let contentP = document.createElement('div')
    contentP.classList.add('content-p')

    for (let index = 0; index < woman.biografia.length; index++) {
        let p = document.createElement('p')
        p.textContent = woman.biografia[index]
        // console.log(woman.biografia[index]);
        contentP.append(p)
    }

    let teste = document.createElement('p')
    teste.classList.add('profissao')
    teste.textContent = woman.profissao

    contentBiography.append(crownImg, teste, contentP)

    main.append(contentImg, contentBiography)
    body.append(header, main)

    return body
}

const loadWoman = () => {
    let indice = localStorage.getItem('indice');
    more(mulheres[indice])
}

loadWoman()
