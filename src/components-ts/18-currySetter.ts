type User = { name: string; surname: string; age: number };

const julia: User = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia: User = set(julia, "age", 25);

function set(name: User, property: keyof User, value: string | number): User {
  return {
    ...name,
    [property]: value,
  };
}
//opcional

const setName = (name: User, value: string) => set(name, "name", value);
const setSurname = (name: User, value: string) => set(name, "surname", value);
const setAge = (name: User, value: number) => set(name, "age", value);


const button18 = document.getElementById("currySetterButton") as HTMLElement;
button18.addEventListener("click", function (event: Event) {
  event.preventDefault();
  console.log("Ejercicio 18 => Curry Setter");
  // Ejemplo 
  console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
  console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
  console.log(julia === updatedJulia); // false
  console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
  console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
  console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
});
