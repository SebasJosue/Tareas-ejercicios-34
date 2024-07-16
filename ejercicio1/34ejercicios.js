'use stric';

//Escribir una función que reciba como parámetros un array de nombres y un nombre a buscar, 
//muestre en pantalla si el nombre esta en lista o no.

function filtrarNombres(names, nombreABuscar) {
  if (names.includes(nombreABuscar)) {
    alert(`El nombre "${nombreABuscar}" está en la lista.`);
  } else {
    alert(`El nombre "${nombreABuscar}" no está en la lista.`);
  }

}

let estudiantes = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let nombreBuscado = prompt("Ingresa un nombre para buscar en la lista:");
filtrarNombres(estudiantes, nombreBuscado);
