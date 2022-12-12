let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

/* QR */
const contenedorQR = document.getElementById('contenedorQR');
new QRCode(contenedorQR,'https://drive.google.com/file/d/1wI_lbXmZuKzGKjTRg0vUVKiZmCylpJhe/view?usp=share_link');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
} 
