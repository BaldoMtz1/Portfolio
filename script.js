// Activar boton menu  

let menuBtn = document.querySelector("#menu-btn")
let menuBar = document.querySelector(".menu-bar")

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active')
}

// remover el menu-bar on scroll

window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active')
}


// Typing animation 

const animText = new Typed('.animated-text', {
    strings : ['Desarrollador Web', 'Full Stack', 'Front-End' , 'Backt-End'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});