function zipObject(keys, values) {
  const result = {};
  for (let i = 0; i < values.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}

const botton = document.getElementById("zipButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 12 => Zip");
  // Ejemplo
  console.log(
    zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
  ); // {spanish: "hola", english: "hi", french: "salut"}

  console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
});
