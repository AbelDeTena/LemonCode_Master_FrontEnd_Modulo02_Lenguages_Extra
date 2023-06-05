export const values = (obj) => Object.values(obj);

function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");

const botton = document.getElementById("valuesButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("Ejercicio 02 => Values");

  // Ejemplos:
  console.log(
    values({ id: 31, duration: 310, name: "long video", format: "mp4" })
  ); // [31, 310, "long video", "mp4"]

  console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
});
