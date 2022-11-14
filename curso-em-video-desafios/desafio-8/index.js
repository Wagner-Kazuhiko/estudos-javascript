function clicar () {
    let produto = document.querySelector('.botao').onclick = prompt('Qual é o produto que vc está comprando?')
    let preco = prompt(`Qual é o valor do ${produto}`)
    preco = parseFloat(preco)
    let desconto = preco - (preco * 10/100)
    let descontado = (preco * 10/100)
    let valores = document.querySelector('.valores')
    valores.innerHTML += `<p>O preço original era ${preco}. <br>
    Você acaba de ganhar R$ ${descontado} de desconto (-10%).<br>
    No fim, você vai pagar R$ ${desconto} no produto ${produto}.</p>`
    
}