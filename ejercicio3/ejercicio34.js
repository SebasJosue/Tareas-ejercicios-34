'use strict';

function obtenerPalabrasMasLargas(frase) {
    const palabras = frase.split(' ');

    const palabrasMasLargas = palabras.filter(palabra => palabra.length > 3);

    return palabrasMasLargas;
}


const miFrase = "La vida es corta, aprovecha cada momento";
const resultado = obtenerPalabrasMasLargas(miFrase);
const resultadoComoCadena = resultado.join(', ');

alert(resultadoComoCadena);

