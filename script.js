const nombre = "johana";
let vegetariana = false;
let mayorDeEdad = 18

function isANumber( n ) {
    var numStr = /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/;
    return numStr.test( n.toString() );
}

/**
 * Funcion encargada de sumar 2 numeros
 * @param {Numeric} n1 Numero a sumar
 * @param {Numeric} n2 Numeroasumar
 */
function sumarNumeros(n1, n2)
{
    let validarNumero ="/^[0-9]*$/";

    // Validar los datos de entrada
    if(!isANumber(n1)){
        alert(n1 + " no es un tipo de dato valido");
        return;
    }
    if(!isANumber(n2)){
        alert(n2 + " no es un tipo de dato valido");
        return;
    }

    // Sumar y devolver suma
    return parseFloat(n1) + parseFloat(n2);
}

function resta(n1, n2){

    if(!isANumber(n1)){
        alert(n1 + " no es un tipo de dato valido");
        return;
    }

    if(!isANumber(n2)){
        alert(n2 + " no es un tipo de dato valido");
        return;
    }

    return n1 - n2;
}

function multiplicar(n1,n2,n3){

    if(!isANumber(n1)){
        alert(n1 + " no es un tipo de dato valido");
        return;
    }

    if(!isANumber(n2)){
        alert(n2 + " no es un tipo de dato valido");
        return;
    }

    if(!isANumber(n3)){
        alert(n3 + " no es un tipo de dato valido");
        return;
    }

    return (n1 * n2) * n3
}

function dividir(n1, n2){

    if(!isANumber(n1)){
        alert(n1 + " no es un tipo de dato valido");
        return;
    }
    if(!isANumber(n2)){
        alert(n2 + " no es un tipo de dato valido");
        return;
    }

    // validar division por cero
    if(n2 == 0)
        return;

    return n1/n2;
}

/**
 * Funcion que incremente de 1 hasta mi edad
 */
function incrementarHastaEdad(edad){

    // Validar los datos de edad
    if(!isANumber(edad)){
        alert(n1 + " no es un tipo de dato valido");
        return;
    }
    var edadCero = 0;
    for(var i = 0; i <= edad - 1; i++){
        // aumentar edad
        edadCero++;
    }

    return edadCero;

}

function esMayorDeEdad(edad){
    return edad >= mayorDeEdad
}


function onLoad(){

    // sumade numeros
    var contenedor = document.getElementById("contenedor");
    var n1 = parseInt((Math.random() * 100), 10)
    var n2 = parseInt((Math.random() * 100), 10)
    var n3 = parseInt((Math.random() * 100), 10)
    contenedor.innerHTML =
        "El resultado de la suma de " + n1 + " + " + n2 + " es: " + sumarNumeros(n1,n2) + "<br/>" 
        + "El resultado de la resta de " + n1 + " - " + n2 + " es: " + resta(n1,n2) + "<br/>" 
        + "El resultado de la multiplicacion de " + n1 + " * " + n2 + " * " + n3 + " es: " + multiplicar(n1,n2,n3) + "<br/>" 
        + "El resultado de la division de " + n1 + " / " + n2 + " es: " + dividir(n1,n2) + "<br/>"
        + n1 + ": es " + (esMayorDeEdad(n1) ? "mayor" : "menor") + " de edad";
    

}
