$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault()

        const novaTarefa = $("#nome-tarefa").val()
        const novaLinha = $(`<li></li>`)

        $(`<p>${novaTarefa}</p>`).appendTo(novaLinha)

        $(novaLinha).appendTo("ul")
        $("#nome-tarefa").val("")

        $("ul").on("click", "p", function(){
            $(this).addClass("active")
            $("p").dblclick(function(){
                $(this).removeClass("active")
            })
        })
    })
})