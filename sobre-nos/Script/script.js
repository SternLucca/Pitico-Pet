const menu = document.querySelector('#menu');
const aside = document.querySelector('aside');
const latido = new Audio('../Áudios/Latido.mp3');
const logo1 = document.querySelectorAll('.logo')[0];
const logo2 = document.querySelectorAll('.logo')[1];
let isShown = false;
logo1.addEventListener('mouseenter', () => {
    latido.play();
});
logo2.addEventListener('mouseenter', () => {
    latido.play();
});
menu.addEventListener('click', () => {
    if (isShown){
        aside.style.display = "none";
        isShown = false;
    }else{
        aside.style.display = "flex";
        isShown = true;
    }
});