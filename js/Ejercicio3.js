var n1 = 10;
var n2 = 5;

function randomTen() {

    const MAX = 10, MIN = 1;
    var result;
    let aleatorio = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
    console.log(aleatorio);
    let mensaje;
    if (aleatorio < 5) {
        result = n1 - n2;

    } else {

        result = n1 * n2;
    }

    mensaje = `El resultado la operación es: ${result}`;
    console.log(mensaje);

    document.getElementById("ouputExerciseThree").innerHTML = mensaje;

}
