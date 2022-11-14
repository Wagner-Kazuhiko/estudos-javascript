function clicar() {
    let numero = document.querySelector('.botao').onclick = prompt('Digite um número inteiro qualquer')
    let sucessor = parseInt(numero) + 1
    let antecessor = numero - 1
    alert(`Depois do ${numero}, temos o número ${sucessor}.
    Antes do ${numero}, temos o número ${antecessor}.`)
}