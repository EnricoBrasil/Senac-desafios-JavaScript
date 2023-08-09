function verificar(){
    let num = document.getElementById("campoNumero").value

    if(num > 0 ){
        document.getElementById("resultado").innerHTML = `${"o numero é positivo"}`
    } else if(num <= 0 ){
        document.getElementById("resultado").innerHTML = `${"o numero é negativo"}`
    } else{
        document.getElementById("resultado").innerHTML = `${"o numero é negativo"}`
    }
    
}