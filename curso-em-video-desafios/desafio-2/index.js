function clicar() {
    let nome = document.querySelector('.botao').onclick = prompt('Qual é o seu nome?');
    let idade = prompt(`Olá ${nome}! Qual é a sua idade?`);
    alert(`Prazer em te conhecer ${nome} de ${idade} anos.`)
}