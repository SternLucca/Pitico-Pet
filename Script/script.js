const latido = new Audio('../Áudios/LAtido.mp3');
const logo1 = document.querySelectorAll('.logo')[0];
const logo2 = document.querySelectorAll('.logo')[1];
logo1.addEventListener('mouseenter', () => {
    latido.play();
});
logo2.addEventListener('mouseenter', () => {
    latido.play();
});