function converterHoras(){
    let getHoras = document.getElementById("horas").value
    let segundos = 3600
    //1h = 3600s

    document.getElementById("resultado").innerHTML = getHoras * segundos

}