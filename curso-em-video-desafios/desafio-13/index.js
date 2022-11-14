function clicar() {
    let aluno = document.querySelector('.botao').onclick = prompt('Qual é o nome do aluno?')
    let nota1 = prompt(`Primeira nota de ${aluno}:`)
    let nota2 = prompt(`Segunda nota de ${aluno}:`)
    nota1 = parseFloat(nota1)
    nota2 = parseFloat(nota2)
    let media = (nota1 + nota2) / 2
    let tabela = document.createElement('table')
    let cabecalho = document.createElement('thead')
    let corpo = document.createElement('tbody')
    let container = document.querySelector('container')
    document.querySelector('.tabela').appendChild(tabela)
    tabela.appendChild(cabecalho)
    tabela.appendChild(corpo)

    if (media < 3) {
        container.innerHTML += `
            <table>
                <thead><strong>Média</strong></thead>
            </table>
        `
    }
    
    

}