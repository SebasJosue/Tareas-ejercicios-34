'use strict';

// Escribir una función que reciba como parámetro una frase.
// Separar por palabras y devolver el número de palabras que tiene la frase:

function separarPalabras(phrase) {
  let palabras = phrase.split(' '); 
  return palabras;
}

let miFrase = 'La programación web es fundamental para el progreso';
let palabrasSeparadas = separarPalabras(miFrase);

alert('Número de palabras en la frase: ' + palabrasSeparadas.length);
