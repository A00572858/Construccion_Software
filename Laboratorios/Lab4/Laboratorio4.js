
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

function suma (){
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
    let r = prompt("¿Cuál es el resultado de la suma: "+a+" + "+b+"?");
    let resp = "";
    if (r == (a+b)){
        resp = "Correcto, la respuesta es " + r;
    }
    else{
        resp = "Incorrecto, la respuesta es " + (a+b);
    }
    return resp;
}

function contador(array){
    let ceros = 0;
    let positivos = 0;
    let negativos = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] == 0){
            ceros += 1;
        }
        else if (array[i] < 0){
            negativos += 1;
        }
        else {
            positivos += 1;
        }
    }
    s = "<table><tr><td>Ceros:</td><td>"+ceros+"</td></tr><tr><td>Positivos:</td><td>"+positivos+"</td></tr><tr><td>Negativos:</td><td>"+negativos+"</td></tr></table>"
    return s;
}

function promedios (matrix){
    let r = "<table>";
    let suma = 0;
    for (let i = 0; i<matrix.length; i++){
        r += "<tr><td>El promedio de la fila numero "+(i+1)+"= </td><td>";
        for (var j = 0; j<matrix[i].length; j++){
            suma += matrix[i][j];
        }
        r += (suma/(j+1)).toFixed(2) + "</td></tr>";
        suma = 0;
    }
    r += "</table>";
    return r;
}

function inverso (num){
    let r = "";
    for (let i = (num.length-1); i > -1  ; i--){
        r += num[i];
    }
    return r;
}

document.getElementById("Problema1").onclick = () => {
    let resp1 = prompt("Escribe un número menor a 20: ");
    document.getElementById("p1").innerHTML = tabla_cuadrados(resp1);
}

document.getElementById("Problema2").onclick = () => {
    document.getElementById("p2").innerHTML = suma();
}

document.getElementById("Problema3").onclick = () => {
    let resp3 = [-2,-1,0,0,1,2,3,0,-4];
    document.getElementById("p3").innerHTML = contador(resp3);
}

document.getElementById("Problema4").onclick = () => {
    let resp4 = [[1,3,5,7,9],[2,4,6,8,10],[1,2,3,5,7,11,13],[3,1,4,1,5,9,2,6]]
    document.getElementById("p4").innerHTML = promedios(resp4);
}

document.getElementById("Problema5").onclick = () => {
    let resp5 = prompt("Escribe un número de más de dos dígitos: ");
    document.getElementById("p5").innerHTML = inverso(resp5);
}