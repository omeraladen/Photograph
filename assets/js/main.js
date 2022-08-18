// Active NavBar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// Contact Button ( Circular text around button )
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map
    ((character, index) => `<span style="transform: rotate(${index * 12}deg)"> ${character} </span>`).join('')
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    spaceBetween:20, // mobile view small Screen
    pagination: {
        el: ".swiper-pagination",
        clickable: true,    
    },
    breakpoints:{
        599: {
            slidesPerView:2, // on Mobile Layout => Tablet view
            spaceBetween:40
        },
        1023:{
            slidesPerView:3,
            spaceBetween:60
        }
    }
  });


   
     
 

// Toggle Nav

const nav = document.querySelector('.navbar__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');


const openNav = () => {
    nav.style.display="flex";
    openNavBtn.style.display="none";
    closeNavBtn.style.display="inline-block";
}
openNavBtn.addEventListener('click' , openNav)

const closeNav = () => {
    nav.style.display="none";
    openNavBtn.style.display="inline-block";
    closeNavBtn.style.display="none";
}
closeNavBtn.addEventListener('click' , closeNav)