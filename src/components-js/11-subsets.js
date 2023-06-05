function subsets(word) {
  return Array.from(word, (ac, i) => word.slice(i));
}

const botton = document.getElementById("subsetsButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 11 => Subsets");
  // Ejemplo:
  console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
});
