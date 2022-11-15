//parâmetros da função
function soma (num1, num2) {
    return num1 + num2;
}

console.log(soma(2,2))
console.log(soma(23,45))
console.log(soma(5,25))

//parâmetros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`
}

console.log(nomeIdade("Kaz", 34))

function multiplica (num1, num2) {
    return num1 * num2;
}

console.log(multiplica(soma(4,5), soma(3,3)))

function multiplica2 (num1 = 1, num2 = 2) {
    return num1 * num2;
}

console.log(multiplica2(soma(4,5)))