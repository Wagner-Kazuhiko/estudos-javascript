function clicar () {
    let temp = document.querySelector('.botao').onclick = prompt('Digite uma temperatura em °C (Celsius):')
    let fahrenheit = (temp * 3/5) + 32
    let kelvin = temp - 273.15
    alert(`A temperatura de ${temp}°C, corresponde a:
    ${kelvin}°K (Kelvin)
    ${fahrenheit}°F (Fahrenheit)`)
}