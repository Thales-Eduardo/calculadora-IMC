const pessoa = document.querySelector('.nome')
const num1 = document.querySelector('.altura')
const num2 = document.querySelector('.peso')
const calcular = document.querySelector('.calcular')
const div = document.querySelector('.mensagem')

calcular.addEventListener('click', regras)

function regras() {
    let nome = pessoa
    let altura = Number(num1.value)
    let peso = Number(num2.value)
    let resultado = peso / (altura * altura)
    if (altura === 0 || peso === 0) {
        alert('imposivel calcular! por favor preencha todos os campos')
    } else if (resultado < 18.5) {
        div.innerHTML = `<p> ${nome.value} seu IMC é ${resultado.toFixed(1).replace('.', ',')} e você está abaixo do peso</p>`
    } else if (resultado > 18.5 && resultado < 25) {
        div.innerHTML = `<p> ${nome.value} seu IMC é ${resultado.toFixed(1).replace('.', ',')} e você está com o peso normal</p>`
    } else if (resultado > 25 && resultado < 30) {
        div.innerHTML = `<p> ${nome.value} seu IMC é ${resultado.toFixed(1).replace('.', ',')} e você está acima do peso</p>`
    } else if (resultado > 30 && resultado < 35) {
        div.innerHTML = `<p> ${nome.value} seu IMC é ${resultado.toFixed(1).replace('.', ',')} e você está obeso tipo 1</p>`
    } else if (resultado > 35 && resultado < 40) {
        div.innerHTML = `<p> ${nome.value} seu IMC é ${resultado.toFixed(1).replace('.', ',')} e você está obeso tipo 2</h3>`
    } else {
        div.innerHTML = `<p> ${nome.value} seu IMC é ${resultado.toFixed(1).replace('.', ',')} e você está obeso tipo 3 (obesidade morbida)</p>`
    }
}
