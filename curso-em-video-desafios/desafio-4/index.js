function clicar () {
    let produto = document.querySelector('.botao').onclick = prompt('Que produto vc está comprando?')
    let preco = prompt(`Quanto custa o ${produto} que vc está comprando?`)
    let dinheiro = prompt(`Qual foi o valor que vc deu para pagar o ${produto}`)
    let troco = Number.parseFloat(dinheiro) - Number.parseFloat(preco)
    alert(`Vc comprou um ${produto} que custou ${preco}.
    Deu R$ ${dinheiro} em dinheiro e vai receber R$ ${troco} de troco.`)

}