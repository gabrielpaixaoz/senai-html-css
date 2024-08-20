//DOM

const lampada = document.querySelector('#lamp')
const btligar = document.querySelector('#ligar')
const btdesligar = document.querySelector('#desligar')

//evento

btligar.addEventListener('click', acender)
btdesligar.addEventListener('click', apagar)

//funçoes 

function acender(){
    lampada.src = 'images/acesa.gif'
}


function apagar(){
    lampada.src = 'images/apagada.gif'
}