var n1 = 10;
var n2 = 5;

function subtractionAndMultiplication() {

    let result = n1 - n2;

    let multi = n1 * n2;
    let mensaje = `El resultado de la resta es: ${result}, y de la multiplicación: ${multi}`;

    console.log(mensaje);
    document.getElementById("ouputExerciseTwo").innerHTML = mensaje;
}
