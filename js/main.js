function suma() {
    const numeroA = parseInt(prompt("Ingrese el primer número a sumar"));
    const numeroB = parseInt(prompt("Ingrese el segundo número a sumar"));

    alert("El resultado es " + (numeroA + numeroB));
}

function resta() {
    const numeroA = parseInt(prompt("Ingrese el primer número a restar"));
    const numeroB = parseInt(prompt("Ingrese el segundo número a restar"));

    alert("El resultado es " + (numeroA - numeroB));
}

function multiplicacion() {
    const numeroA = parseInt(prompt("Ingrese el primer número a multiplicar"));
    const numeroB = parseInt(prompt("Ingrese el segundo número a multiplicar"));

    alert("El resultado es " + (numeroA * numeroB));
}

function division() {
    const numeroA = parseInt(prompt("Ingrese el numerador"));
    const numeroB = parseInt(prompt("Ingrese el denominador"));

    if (numeroB !== 0) {
        alert("El resultado es " + (numeroA / numeroB));
    } else {
        alert("No se puede dividir por cero. Por favor, ingrese un denominador diferente.");
    }
}

let operacion = null;

while (operacion !== "0") {
    operacion = prompt("Ingrese la operación (+, -, *, /) o 0 para salir");

    switch (operacion) {
        case "+":
            suma();
            break;
        case "-":
            resta();
            break;
        case "*":
            multiplicacion();
            break;
        case "/":
            division();
            break;
        case "0":
            alert("¡Hasta luego!");
            break;
        default:
            alert("El valor ingresado es erróneo. Intente nuevamente.");
            break;
    }
}
