const user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
  prueba: { prueba: { prueba: 8 } },
};

const clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
  prueba: { prueba: { prueba: 8 } },
};

//funcion recursiva
function isDeepEqual(a, b) {
  if (typeof a !== "object" || typeof b !== "object") {
    return a === b;
  }

  const propiedadesA = Object.keys(a);
  const propiedadesB = Object.keys(b);

  if (propiedadesA.length === propiedadesB.length) {
    return propiedadesA.every((propiedad) => {
      return (
        b.hasOwnProperty(propiedad) && isDeepEqual(a[propiedad], b[propiedad])
      );
    });
  } else return false;
}

const botton = document.getElementById("deepEqualButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 06 => Deep Equal");
  console.log(isDeepEqual(user, clonedUser)); // true
});
