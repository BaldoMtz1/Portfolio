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
    strings : ['Desarrollador Web', 'Full Stack', 'Front-End' , 'Back-End'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});



const fibonacci = (limit) => {
  
    let fibo = [0,1]
     for (let i = 0; i < limit; i++) {
       if(fibo[fibo.length] <= limit){
         fibo[fibo.length] = fibo[fibo.length -1] + fibo[fibo.length -2]
       }
       
       return fibo
       
   
     }
  

  
  }
  console.log(fibonacci(10))