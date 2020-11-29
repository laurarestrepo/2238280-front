
function randomTwelve() {

    const MAX = 12, MIN = 1;
    var result;
    let aleatorio = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);

    let mensaje;

    var date = new Date();
    y = date.getFullYear();
    date.setMonth(aleatorio);
    m = date.getMonth();
    var lastDay = new Date(y, m, 0);
    result = lastDay.getDay();

    console.log(aleatorio);
    console.log(lastDay);
    
    mensaje = `El resultado la operación es:  ` +
        (lastDay.getDate() == 30 ? 'Mes de 30 días' : (lastDay.getDate() == 31 ? 'Mes de 31 días ' : 'mes de 29 días'));

    console.log(mensaje);

}
