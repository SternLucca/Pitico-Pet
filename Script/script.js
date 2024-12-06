const menu = document.querySelector('#menu');
const aside = document.querySelector('aside');
const latido = new Audio('../Áudios/Latido.mp3');
const logo1 = document.querySelectorAll('.logo')[0];
const logo2 = document.querySelectorAll('.logo')[1];
const btn1 = document.querySelector();
const btn2 = document.querySelector();
const btn3 = document.querySelector();
const btn4 = document.querySelector();
const btn5 = document.querySelector();
const btn6 = document.querySelector();
const btn7 = document.querySelector();
const btn8 = document.querySelector();
let isShown = false;
logo1.addEventListener('mouseenter', () => {
    latido.play();
});
logo2.addEventListener('mouseenter', () => {
    latido.play();
});
menu.addEventListener('click', () => {
    if (isShown) {
        aside.style.display = "none";
        isShown = false;
    } else {
        aside.style.display = "flex";
        isShown = true;
    }
});
let precos = [61, 61, 61, 61, 30, 10, 20, 300];
let produtos = ["Ração Pedigree Adulto", "", "", "", "Condicionador Pet Clean", "Lenço Umedecido para Gatos", "Banho Seco para Gatos", "Cama para Gatos"];
let i;
let total = 0;
function AddProd (i){
    total += produtos[i];
}