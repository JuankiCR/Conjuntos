const elementosA = document.getElementById('elementosA');
const elementosB = document.getElementById('elementosB');
const resConjunto = document.getElementById('resConjunto');

elementosA.value = '🌰, 🍌, 🍎, 🦦';
elementosB.value = '🦴, 🌰, 🥕, 🦦';

// Quitar espacios y convertir a array
let arrayA = elementosA.value.replace(/ /g, '').split(',');
let arrayB = elementosB.value.replace(/ /g, '').split(',');

// Funcion calcular la diferencia simetrica
function diferenciaSimetrica(arrayA, arrayB) {
  return arrayA
    .filter((element) => !arrayB.includes(element))
    .concat(arrayB.filter((element) => !arrayA.includes(element)));
}

// Mostrar resultado
const mostrarResultado = (arrayA, arrayB) => {
  const resultado = diferenciaSimetrica(arrayA, arrayB);
  resultado.forEach((element) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = element;
    resConjunto.appendChild(newElement);
  });
};

// Evento onchange
elementosA.onchange = () => {
  resConjunto.innerHTML = '';
  arrayA = elementosA.value.replace(/ /g, '').split(',');
  mostrarResultado(arrayA, arrayB);
};

elementosB.onchange = () => {
    resConjunto.innerHTML = '';
    arrayB = elementosB.value.replace(/ /g, '').split(',');
    mostrarResultado(arrayA, arrayB);
}

mostrarResultado(arrayA, arrayB);