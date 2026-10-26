function calcularAhorro() {
    let objetivo = Number(document.getElementById("objetivo").value);
    let ahorrado = Number(document.getElementById("ahorrado").value);

    let falta = objetivo - ahorrado;

    if (falta < 0) {
        falta = 0;
    }

    document.getElementById("resultado").textContent = 
        "Te faltan " + falta + " € para alcanzar tu objetivo.";
    
}