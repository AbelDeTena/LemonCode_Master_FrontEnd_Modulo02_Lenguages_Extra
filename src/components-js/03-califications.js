import { values } from "./02-values";

function printAverage(classResults) {
  const notas = values(classResults);
  const notaMedia = notas.reduce((acc, item) => acc + item) / notas.length;

  let calificacion;

  switch (true) {
    case notaMedia === 10:
      calificacion = "Matrícula de Honor";
      break;
    case notaMedia >= 9 && notaMedia < 10:
      calificacion = "Sobresaliente";
      break;
    case notaMedia >= 7 && notaMedia < 9:
      calificacion = "Notable";
      break;
    case notaMedia >= 6 && notaMedia < 7:
      calificacion = "Bien";
      break;
    case notaMedia >= 5 && notaMedia < 6:
      calificacion = "Suficiente";
      break;
    case notaMedia >= 4 && notaMedia < 5:
      calificacion = "Insuficiente";
      break;
    default:
      calificacion = "Muy deficiente";
  }
  return calificacion;
}

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const botton = document.getElementById("calificationsButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  // Ejemplo
  console.log("Ejercicio 03 => Califications");
  console.log(printAverage(eso2o));
});
