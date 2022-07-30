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
      dynamicBullets: true,      
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
  });s 