const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco =  document.querySelector('#preco')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')



botao.addEventListener('click', calcular)

function calcular(){
    d = Number(distancia.value)
    c = Number(consumo.value)
    p = Number(preco.value)
    valorFinal = (d / c) * p
    resultado.textContent = `O valor para essa viagem será de R$ ${valorFinal.toFixed(2)}`
}