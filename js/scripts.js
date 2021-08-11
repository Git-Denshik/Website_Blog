// === Подключаем бургер меню ===
document.querySelector('.btn-burger').addEventListener('click', (event) => {
    document.querySelector('.section-header').classList.toggle('section-header--active-nav')
})
// === / Подключаем бургер меню  ===

// === Модульное окно ===
let button = document.getElementById('button')
let close = document.getElementById('close')
let modal = document.getElementById('modal')

button.addEventListener('click', function(event) {
    event.preventDefault()
    modal.style.display = "block"
})

close.addEventListener('click', function(event) {
    event.preventDefault()
    modal.style.display = "none"
})   

// === / Модульное окно ===