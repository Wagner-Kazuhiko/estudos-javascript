function clicar() {
    let precoAnterior = document.querySelector('.botao').onclick = prompt('Qual era o preço do produto?')
    precoAnterior = parseFloat(precoAnterior)
    let precoNovo = prompt('Qual é o novo valor do produto?')
    precoNovo = parseFloat(precoNovo)
    let aumentou = precoNovo - precoAnterior
    let diminuiu = precoAnterior - precoNovo
    let variacaoUP = aumentou * 100 / precoAnterior
    let variacaoDOWN = diminuiu * 100 / precoNovo
    let resultado = document.querySelector('.resultado')
    
     if (precoNovo > precoAnterior) {
        resultado.innerHTML += `<p>O produto custava R$ ${precoAnterior} e agora custa R$ ${precoNovo}. <br>
        Hoje o produto está mais caro. <br>
        O preço subiu R$ ${aumentou} em relação ao produto anterior. <br>
        Uma variação de ${variacaoUP}% para cima.
     </p>`
     }
     else if (precoAnterior > precoNovo) {
        resultado.innerHTML += `<p>O produto custava R$ ${precoAnterior} e agora custa R$ ${precoNovo}. <br>
        Hoje o produto está mais barato. <br>
        O preço diminuiu R$ ${diminuiu} em relação ao produto anterior. <br>
        Uma variação de ${variacaoDOWN}% para baixo. 
        </p>`
     
     }
    }


    