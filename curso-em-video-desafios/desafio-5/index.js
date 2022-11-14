function clicar() {
    let metros = document.querySelector('.botao').onclick = prompt('Digite uma distância em metros(m):')
    metros = parseFloat(metros)
    let quilometros =  metros / 1000
    let hectometros = metros / 100
    let decametros = metros / 10
    let decimetros = metros * 10
    let centimetros = metros * 100
    let milimetros = metros * 1000
    alert(`A distância de ${metros} metros, corresponde a: 
    ${quilometros} Km
    ${hectometros} Hm
    ${decametros} Dam
    ${decimetros} dm
    ${centimetros} cm
    ${milimetros} mm`)
}