function clicar() {
    let nome = document.querySelector('.botao').onclick = prompt('Qual é o nome do funcionário?')
    let salario = prompt(`Qual é o salário de ${nome}?`)
    salario = parseFloat(salario)
    let aumento = prompt(`O aumento do funcionário ${nome} será aumentado em qual porcentagem?`)
    aumento = parseFloat(aumento)
    let reajuste = (salario * aumento/100)
    let novoSalario = reajuste + salario
    let novo = document.querySelector('.novo')
    novo.innerHTML += `<p>
    O salário atual era R$ ${salario}. <br>
    Com o aumento de ${aumento}%, o salário vai aumentar R$ ${reajuste} no próximo mês. <br>
    E a partir daí, ${nome} vai passar a ganhar R$ ${novoSalario}.
    </p>`

}