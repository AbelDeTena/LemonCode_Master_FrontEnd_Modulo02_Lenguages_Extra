const biggestWord = (phrase) =>
  phrase.split(" ").sort((a, b) => b.length - a.length);

  
  const botton = document.getElementById("biggestWordButton");
  botton.addEventListener("click", function (event) {
    event.preventDefault();
    
    // Ejemplo
    console.log("Ejercicio 01 => Biggest World")
    console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
    console.log(biggestWord("Ejercicios básicos de JavaScript")); // "ejercicios"
  })
