function clicar () {
    let a = document.querySelector('.botao').onclick = prompt('Qual o valor de a?')
    let b = prompt('Qual o valor de b?')
    let c = prompt('Qual é o valor de c?')
    let delta = b**2 -4*a*c
    let resultado = document.querySelector('.resultado')
    resultado.innerHTML += `<p>A equação atual é ${a}x² + ${b}x + ${c} = 0. <br>
    O cálculo realizado será &#916; = ${b}² - 4 . ${a} . ${c} <br>
    O valor calculado foi &#916; = ${delta} </p>` 
}