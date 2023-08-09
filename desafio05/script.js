function concatenarArray(){

    let primeiroArray = [document.getElementById("array01").value]
    let segundoArray = [document.getElementById("array02").value]

    let terceiroArray = primeiroArray.concat(segundoArray)

    document.getElementById("resultado").innerHTML = terceiroArray

    console.log(terceiroArray)

    

}