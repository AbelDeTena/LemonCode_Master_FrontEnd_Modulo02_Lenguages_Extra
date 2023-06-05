function includes(array, value) {
  return array.indexOf(value) !== -1;
}

const botton = document.getElementById("includesButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 08 => Includes");
  // Ejemplo:
  console.log(includes([1, 2, 3], 3)); // true
  console.log(includes([1, 2, 3], 0)); // false
});
