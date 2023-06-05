function dices() {
  let resultados = [undefined, undefined];

  function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function reset() {
    resultados = [undefined, undefined];
    console.log("Se ha reiniciado el resultado de los dados.");
  }

  function tirarDados() {
    resultados = resultados.map((item) => lanzamiento());
    console.log("Los dados han sido lanzados. Puede consultar el resultado.");
  }

  function verResultados() {
    if (resultados.every((item) => item === undefined)) {
      console.log("Debe lanzar los dados primero.");
    } else {
      console.log(
        `El resultado fue ${resultados[0]} para el primer dado y ${resultados[1]} para el segundo.`
      );

      if (resultados.every((item) => item === 6)) {
        console.log(
          "¡Enhorabuena! Obtienes un premio por sacar la puntuación máxima."
        );
      }

      reset();
    }
  }

  return {
    reset,
    tirarDados,
    verResultados,
  };
}

const juegoDados = dices();

const botton = document.getElementById("dicesButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  
  console.log("Ejercicio 07 => Dices");
  juegoDados.verResultados();
  juegoDados.tirarDados();
  juegoDados.verResultados();
  juegoDados.verResultados();
  juegoDados.verResultados();
  juegoDados.tirarDados();
  juegoDados.verResultados(); 
});


