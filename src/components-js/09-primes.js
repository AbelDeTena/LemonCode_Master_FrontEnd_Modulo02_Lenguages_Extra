function showPrimes(from, to) {
  const numeros = crearArray(from, to);

  numeros.forEach((numero) => {
    if (esPrimoOptimizada(numero)) {
      console.log(`${numero} is PRIME!`);
    } else {
      console.log(`${numero} is not a prime`);
    }
  });
}

function crearArray(from, to) {
  const numeros = [];
  for (let index = from; index <= to; index++) {
    numeros.push(index);
  }
  return numeros;
}

function esPrimo(numero) {
  const restos = [];
  for (let index = numero - 1; index > 1; index--) {
    restos.push(numero % index);
  }
  return restos.indexOf(0) === -1;
}

function esPrimoOptimizada(numero) {
  const restos = [];
  for (let index = 2; index <= Math.sqrt(numero); index++) {
    restos.push(numero % index);
  }
  return restos.indexOf(0) === -1;
}

const botton = document.getElementById("primesButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 09 => Primes");
  console.log(showPrimes(1, 100));
});
