let x = ""
console.log(x);
x = "oi"

//declaração de função
function imprimeTexto (texto) {
    console.log(texto)
}

imprimeTexto ("Olá mundo!")

imprimeTexto (x)

//três formas de escrever funções
/*
function soma () {
    const resultado = 2 + 2;
}

soma();
*/

function soma () {
    return console.log(2 + 2);
}

soma()

