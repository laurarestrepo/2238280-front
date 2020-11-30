var n1 = 10;
var n2 = 5;

function subtractionAndMultiplication() {

    var result = n1 - n2;

    var multi = n1 * n2;
    var mensaje = `El resultado de la resta es: ${result}, y de la multiplicación: ${multi}`;

    console.log(mensaje);
    document.getElementById("ouputExerciseTwo").innerHTML = mensaje;
}
