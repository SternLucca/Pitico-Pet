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
let precos = [61, 61, 61, 61, 30, 10, 20, 300];
let produtos = ["Ração Pedigree Adulto", "", "", "", "Condicionador Pet Clean", "Lenço Umedecido para Gatos", "Banho Seco para Gatos", "Cama para Gatos"];

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
const prod = createElement('p', `prod`);
const totalHTML = document.querySelector('#total');
let contProd = [0, 0, 0, 0, 0, 0, 0, 0];
btn1.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contProd[0]++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[0];
    carrinho.append(prod);
    prod.innerHTML = `${contProd[0]} x ${produtos[0]} R$ ${precos[0]},00`;
    totalHTML.innerHTML = `Total: R$ ${total},00`;
    total.innerHTML = `Total: R$ ${total},00`;
});
btn2.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contProd[1]++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[1];
    carrinho.append(prod);
    prod.innerHTML = `${contProd[1]} x ${produtos[1]} R$ ${precos[1]},00`;
    totalHTML.innerHTML = `Total: R$ ${total},00`;
    total.innerHTML = `Total: R$ ${total},00`;
});
btn3.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contProd[2]++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[2];
    carrinho.append(prod);
    prod.innerHTML = `${contProd[2]} x ${produtos[2]} R$ ${precos[2]},00`;
    totalHTML.innerHTML = `Total: R$ ${total},00`;
    total.innerHTML = `Total: R$ ${total},00`;
});
btn4.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contProd[3]++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[3];
    carrinho.append(prod);
    prod.innerHTML = `${contProd[3]} x ${produtos[3]} R$ ${precos[3]},00`;
    totalHTML.innerHTML = `Total: R$ ${total},00`;
    total.innerHTML = `Total: R$ ${total},00`;
});
btn5.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contProd[4]++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[4];
    carrinho.append(prod);
    prod.innerHTML = `${contProd[4]} x ${produtos[4]} R$ ${precos[4]},00`;
    totalHTML.innerHTML = `Total: R$ ${total},00`;
    total.innerHTML = `Total: R$ ${total},00`;
});
btn6.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contProd[5]++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[5];
    carrinho.append(prod);
    prod.innerHTML = `${contProd[5]} x ${produtos[5]} R$ ${precos[5]},00`;
    totalHTML.innerHTML = `Total: R$ ${total},00`;
    total.innerHTML = `Total: R$ ${total},00`;
});
btn7.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contProd[6]++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[6];
    carrinho.append(prod);
    prod.innerHTML = `${contProd[6]} x ${produtos[6]} R$ ${precos[6]},00`;
    totalHTML.innerHTML = `Total: R$ ${total},00`;
    total.innerHTML = `Total: R$ ${total},00`;
});
btn8.addEventListener('click', () => {
    console.log('teste');
    cont++;
    contProd[7]++;
    contador.style.display = "flex";
    contador.innerHTML = cont;
    total += precos[7];
    carrinho.append(prod);
    prod.innerHTML = `${contProd[7]} x ${produtos[7]} R$ ${precos[7]},00`;
    totalHTML.innerHTML = `Total: R$ ${total},00`;
    total.innerHTML = `Total: R$ ${total},00`;
});