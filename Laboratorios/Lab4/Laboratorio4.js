function tabla_cuadrados(num) {
    let resultado = "<table>";
    for (let i = 1; i <= num; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>";
    return resultado;
}

document.getElementById("TablaCuadrados").onclick = () => {
    let resp1 = prompt("Escribe un número menor a 20: ");
    document.getElementById("cuadrados").innerHTML = tabla_cuadrados(resp1);
}


