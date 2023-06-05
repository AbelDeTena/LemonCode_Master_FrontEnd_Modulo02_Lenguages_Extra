let a = "A";
let b = "B";

[a, b] = [b, a];


const botton = document.getElementById("swapButton");
botton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Ejercicio 16 => Swap");
    // Ejemplo
    console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");
});
