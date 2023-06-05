const text = "uno dos tres";

function reverseText(text) {
  return text.split(" ").reverse().join(" ");
}

const botton = document.getElementById("reverseTextButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 10 => Reverse Text");
  // Ejemplo:
  console.log(reverseText(text)); 
});

