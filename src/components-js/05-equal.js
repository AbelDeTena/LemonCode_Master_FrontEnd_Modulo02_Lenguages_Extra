const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };


function isEqual(a, b) {
  const propiedadesA = Object.keys(a);
  const propiedadesB = Object.keys(b);
  
  if (propiedadesA.length === propiedadesB.length) {
    return propiedadesA.every((propiedad) => {
      return b.hasOwnProperty(propiedad) && a[propiedad] === b[propiedad];
    });
  } else return false;
}

const botton = document.getElementById("equalButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  
  console.log("Ejercicio 05 => Equal");
  console.log(user === clonedUser); // false
  console.log(isEqual(user, clonedUser)); // true
 
});
