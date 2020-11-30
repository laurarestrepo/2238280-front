var n1 = 10;
var n2 = 5;

function randomTen() {

    const MAX = 10, MIN = 1;
   
    var aleatorio = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
    console.log(aleatorio);
    
    var result;

    if (aleatorio < 5) {
        
        result = n1 - n2;

    } else {

        result = n1 * n2;
    }

    var mensaje = `El resultado la operación es: ${result}`;

    console.log(mensaje);

    document.getElementById("ouputExerciseThree").innerHTML = mensaje;

}
