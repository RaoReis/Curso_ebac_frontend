$(document).ready(function(){

    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(xx) xxxxx-xxxx"
    })

    $("#cpf").mask("000.000.000-00", {
        placeholder: "xxx.xxx.xxx-xx"
    })

    $("#cep").mask("00000-000", {
        placeholder: "xxxxx-xxx"
    })

    $("form").validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: false
            },
            cep:{
                required: true
            }
        },
        messages:{
            nome:"Insira o Nome Completo",
            email:"Insira o E-mail corretamente",
            telefone:"Insira o Telefone corretamente",
            cpf:"Insira o CPF corretamente",
            cep:"Insira o CEP corretamente"
        }    
    })
})