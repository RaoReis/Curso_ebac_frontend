const numero_A = document.getElementById("numeroA")
const numero_B = document.getElementById("numeroB")
const form = document.getElementById("formulario")
let validacao = false

function validarnumero(numero_A, numero_B){
    const diferenca = numero_A - numero_B
    return diferenca
}

form.addEventListener("submit", function(e){
    e.preventDefault()

    const mensagemDeError = `O primeiro número A: <b>${numero_A.value}</b> é maior que o segundo número B: <b>${numero_B.value}</b>`
    const mensagemDeSucesso = `O segundo número B: <b>${numero_B.value}</b> é maior que o primeiro número A: <b>${numero_A.value}</b>`
    const mensagemDeIgual = `O número A: <b>${numero_A.value}</b> e o número B: <b>${numero_B.value}</b> são iguais`

    validacao = validarnumero(numero_A.value, numero_B.value)
    console.log(validacao)

    if (validacao < 0){
        const mensagemSucesso = document.querySelector(".sucesso-message")
        mensagemSucesso.innerHTML = mensagemDeSucesso
        document.querySelector(".sucesso-message").style.display = "block"
        document.querySelector(".error-message").style.display = "none"
        document.querySelector(".igual-message").style.display = "none"

        numero_A.value = ""
        numero_B.value = ""
    }else if (validacao === 0){
        const mensagemIgual = document.querySelector(".igual-message")
        mensagemIgual.innerHTML = mensagemDeIgual
        document.querySelector(".igual-message").style.display = "block"
        document.querySelector(".error-message").style.display = "none"
        document.querySelector(".sucesso-message").style.display = "none"

        numero_A.value = ""
        numero_B.value = ""        
    }else {
        const  mensagemErro = document.querySelector(".error-message")
        mensagemErro.innerHTML = mensagemDeError
        document.querySelector(".error-message").style.display = "block"
        document.querySelector(".sucesso-message").style.display = "none"
        document.querySelector(".igual-message").style.display = "none"

        numero_A.value = ""
        numero_B.value = ""
    }

})