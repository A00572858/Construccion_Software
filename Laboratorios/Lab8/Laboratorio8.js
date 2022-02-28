const filesystem = require('fs');
const rl = require('readline').createInterface({input : process.stdin, output: process.stdout});

function arreglo(array) {
    let suma = 0;
    for (var i in array){
        suma += array[i];
    }
    return suma/(Number(i)+1)
}

function showarray () {
    let array = [];
    console.log("Tamaño de array = 5")
        console.log('Los valores del array son: ');
        for (let j = 0; j < 5; j++){
            num = (j+1)*2;
            console.log(num);
            array.push(num);
        }
    console.log('El promedio del array es:');
    console.log(arreglo(array));
}

function escribirstring () {
    console.log('El string a guardar en el archivo string.txt es: \nEste archivo es demasiado corto, pero bueno.');
    let string = "Este archivo es demasiado corto, pero bueno.";
        filesystem.writeFileSync('string.txt',string);
        console.log('Archivo creado con exito.');
}

function fibonacci (n, a) {
    if (n in a){return a[n]}
    if (n <=2){return 1}
    else{
        a[n] = fibonacci(n-1,a) + fibonacci(n-2,a);
        return a[n]
    }
}

function showfibo() {
    let a = {};
    console.log("Fibonacci number to test = 50 \n(50th iteration of the sequence)");
    console.log(fibonacci(50,a));
}


const http = require("http");
const server = http.createServer((request,response) => {
    response.setHeader('Content-Type','text/html');
    let string = filesystem.readFileSync('Laboratorios/Lab8/Laboratorio1.html', 'utf-8');
    response.write(string);
    response.end();
});

showarray();
escribirstring();
showfibo();
server.listen(3000);