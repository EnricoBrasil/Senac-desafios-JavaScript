function enviar(){
    let numeroDigitado = document.getElementById("num").value

    document.getElementById("retorno").innerHTML = numeroDigitado

    if(numeroDigitado % 3 == 0){
        document.getElementById("retorno").innerHTML = `${"Fizz"}`
    } else if(numeroDigitado % 5 == 0){
        document.getElementById("retorno").innerHTML = `${"FizzBuzz"}`
    }else{
        document.getElementById("retorno").innerHTML = numeroDigitado
    }
}