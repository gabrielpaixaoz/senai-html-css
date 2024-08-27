

const imagem = document.querySelector('#imagem')
const raiva = document.querySelector('#raiva')
const alegria = document.querySelector('#alegria')
const nojinho = document.querySelector('#nojinho')
const tristeza = document.querySelector('#tristeza')

raiva.addEventListener('click',raivaimg)

alegria.addEventListener('click',alegriaimg)

nojinho.addEventListener('click',nojinhoimg)

tristeza.addEventListener('click',tristezaimg)

function raivaimg(){
    imagem.src = 'images/01.png'
}

function alegriaimg(){
    imagem.src = 'images/02.png'
}
function nojinhoimg(){
    imagem.src = 'images/03.png'
}
function tristezaimg(){
    imagem.src = 'images/04.png'
}
/*DOM

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
} */