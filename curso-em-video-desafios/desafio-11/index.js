function clicar() {
    let ano = document.querySelector('.botao').onclick = prompt('Qual ano você quer verificar?')
    ano = parseInt(ano)
    let resultado = document.querySelector('.resultado')
    if (ano % 4 == 0) {
        return resultado.innerHTML += `<p>O ano ${ano}! É BISSEXTO!</p>`
    }
    else if (ano % 100 != 0) {
        return resultado.innerHTML += `<p>O ano ${ano}! É BISSEXTO!</p>`
    }
    else if (ano % 400 == 0) {
        return resultado.innerHTML += `<p>O ano ${ano}! É BISSEXTO!</p>`
    }

    else {
        return resultado.innerHTML += '<p>O ano ${ano} não é ano BISSEXTO!</p>'
    }

}