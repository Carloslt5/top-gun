'use strict'

const enlaces  = document.querySelectorAll('.container_photo img')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('#sinopsis-close')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
    
})