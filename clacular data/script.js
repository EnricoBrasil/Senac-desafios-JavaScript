function enviar() {
    let dia = document.getElementById("dia").value
    let mes = document.getElementById("mes").value
    let ano = document.getElementById("ano").value

    if (ano === 0 && mes === 0 && ano === 0) {
        alert(`${"digite os numeros"}`)
    }

    let data = new Date();
    let anoHoje = data.getFullYear();
    let mesHoje = data.getMonth() + 1;
    let diaHoje = data.getDate();

 

    document.getElementById("diaR").innerHTML = dia - diaHoje
    document.getElementById("mesR").innerHTML = mesHoje - mes
    document.getElementById("anoR").innerHTML = anoHoje - ano
}
