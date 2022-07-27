window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// let nav = document.querySelector('nav');
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 0){
//         nav.classList.add("window-scrolled");
//     }else{
//         nav.classList.remove("window-scrolled");
//     }
// }