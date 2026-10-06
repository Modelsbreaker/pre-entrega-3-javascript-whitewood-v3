const RACIONES_POR_DIA = 3;

function solicitarDato(mensaje) {
    return prompt(mensaje);
}

function calcularRaciones(cantidadViajeros, diasViaje, racionesPorDia){
    return cantidadViajeros * diasViaje * racionesPorDia + cantidadViajeros;
}

let calcularCosto = (totalRaciones, precioRacion) => totalRaciones * precioRacion;

let mostrarResultado = function (nombre, cantidadViajeros, diasViaje, totalRaciones, costoTotal) {
    let evaluacionCosto = "";

    if (costoTotal <= 500){
        evaluacionCosto = "La expedicion tiene un costo bajo.";
    } else if (costoTotal <= 1000) {
        evaluacionCosto = "La expedicion tiene un costo moderado.";
    } else {
        evaluacionCosto = "La expedicion tiene un costo elevado.";
    }

    alert(
        "expedicion de: " + nombre + ":\n" +
        "Viajeros: " + cantidadViajeros + ":\n" +
        "Duracion: " + diasViaje + " dias\n" +
        "Raciones necesarias: " + totalRaciones + ":\n" +
        "Costal total: " + costoTotal + " coronas.\n" +
        evaluacionCosto
    );
};

let expedicionesCalculadas = 0;
let nombre = solicitarDato (
    "Ingresa el nombre del lider de la expedicion o escribi ESC para salir:"
);

while (nombre !== null && nombre.trim().toUpperCase() !== "ESC") {
    if (nombre.trim() === "") {
        alert ("Ingresa un nombre para el lider de la expedicion.");
    } else {
        let cantidadViajeros = Number(
            solicitarDato("¿Cuantos viajeros forman el grupo? Ingresa un numero entero positivo.")
        );

        let diasViaje = Number(
            solicitarDato ("¿cuantos dias durara la expedicion? ingresa un numero entero positivo.")
        );

        let precioRacion = Number(
            solicitarDato("¿Cuanto cuesta cada racion? Usa punto para los decimales.")
        );

        if (
            !Number.isInteger(cantidadViajeros) ||
            !Number.isInteger(diasViaje) ||
            !Number.isFinite(precioRacion) ||
            cantidadViajeros <= 0 ||
            diasViaje <= 0 ||
            precioRacion <= 0
        ){
            alert("Los datos no son validos. Viajeros y dias deben ser enteros positivos; el precio debe ser un numero positivo");
        } else {
            let totalRaciones = calcularRaciones(
                cantidadViajeros,
                diasViaje,
                RACIONES_POR_DIA
            );
            let costoTotal = calcularCosto(totalRaciones, precioRacion);

            mostrarResultado(nombre.trim(), cantidadViajeros, diasViaje, totalRaciones, costoTotal);
            expedicionesCalculadas++;
        }
    }
    nombre = solicitarDato(
        "Ingresa otro lider para realizar una nueva simulaciono escribi ESC para salir:"
    );

}

console.log ("Expediciones calculadas correctamente: " + expedicionesCalculadas);
alert("simulador finalizado.");
