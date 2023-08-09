function anoBi(){
    let anoDigitado = document.getElementById("ano").value

    if(anoDigitado % 400 == 0 || anoDigitado % 4 == 0){
        document.getElementById("resultado").innerHTML = `${"O ano é bissexto"}`
    }else if(anoDigitado % 100 != 0){
        document.getElementById("resultado").innerHTML = `${"O ano não é bissexto"}`
    }

}