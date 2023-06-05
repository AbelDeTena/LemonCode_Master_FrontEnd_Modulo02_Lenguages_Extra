const f = (input) => {
  let result = input === undefined ? "Unknown" : input === null ? "" : input;
  return result;
};

const a = undefined;
const b = null;
const c = "string";

const botton = document.getElementById("checkArgumentsButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("Ejercicio 04 => Check Arguments");
  console.log(f(a));
  console.log(f(b));
  console.log(f(c));
});
