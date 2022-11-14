let dolar = prompt('Qual a cotação atual do dólar?')

function clicar() {
    let real = document.querySelector('.botao').onclick = prompt('Quantos R$ vc tem na carteira?')
    real = parseFloat(real)
    let converter = real / dolar
    alert(`Seus ${real}R$ serão convertidos para ${converter}US$`)
}