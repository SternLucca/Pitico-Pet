const menu = document.querySelector('#menu');
const aside = document.querySelector('aside');
const latido = new Audio('../Áudios/Latido.mp3');
const logo1 = document.querySelectorAll('.logo')[0];
const logo2 = document.querySelectorAll('.logo')[1];
const btn1 = document.querySelectorAll('.btn')[0];
const btn2 = document.querySelectorAll('.btn')[1];
const btn3 = document.querySelectorAll('.btn')[2];
const btn4 = document.querySelectorAll('.btn')[3];
const btn5 = document.querySelectorAll('.btn')[4];
const btn6 = document.querySelectorAll('.btn')[5];
const btn7 = document.querySelectorAll('.btn')[6];
const btn8 = document.querySelectorAll('.btn')[7];
const contador = document.querySelector('.contador');
const carrinho = document.querySelector('.offcanvas-body');
const createElement = (tag, className = "") => {
    const element = document.createElement(tag);
    element.className = className;
    return element
};
let i = 0, cont = 0;
let total = 0;
let isShown = false;
let precos = [61, 13, 120, 11, 30, 10, 20, 300];
let produtos = ["Ração Pedigree Adulto", "Corda de Brinquedo", "Cama de Cachorro 70x70", "Petisco Dentastix Pedigree", "Condicionador Pet Clean", "Lenço Umedecido para Gatos", "Banho Seco para Gatos", "Cama para Gatos"];

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
let j = 0;
const prod = (j) => {
    const prod = createElement('p', 'prod');
    prod.innerHTML = `${produtos[j]} R$ ${precos[j]},00`;
    return prod;
};
const totalHTML = document.querySelector('#total');
btn1.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[0];
    carrinho.append(prod(0));
    totalHTML.innerHTML = `Total: R$ ${total},00`;
});
btn2.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[1];
    carrinho.append(prod(1));
    totalHTML.innerHTML = `Total: R$ ${total},00`;
});
btn3.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[2];
    carrinho.append(prod(2));
    totalHTML.innerHTML = `Total: R$ ${total},00`;
});
btn4.addEventListener('click', () => {
    cont++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[3];
    carrinho.append(prod(3));
    totalHTML.innerHTML = `Total: R$ ${total},00`;
});
btn5.addEventListener('click', () => {
    cont++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[4];
    carrinho.append(prod(4));
    totalHTML.innerHTML = `Total: R$ ${total},00`;
});
btn6.addEventListener('click', () => {
    cont++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[5];
    carrinho.append(prod(5));
    totalHTML.innerHTML = `Total: R$ ${total},00`;
});
btn7.addEventListener('click', () => {
    cont++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[6];
    carrinho.append(prod(6));
    totalHTML.innerHTML = `Total: R$ ${total},00`;
});
btn8.addEventListener('click', () => {
    cont++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[7];
    carrinho.append(prod(7));
    totalHTML.innerHTML = `Total: R$ ${total},00`;
});

function finished(){
    window.alert("Obrigado por comprar conosco! Volte Sempre");
    location.reload();
}