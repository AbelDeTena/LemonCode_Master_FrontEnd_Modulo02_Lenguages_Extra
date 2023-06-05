const getPlayersOrder = (players, turns) => {
  for (let index = 0; index < turns; index++) {
    let [first, ...others] = players;
    players = [...others, first];
  }
  return players;
};


const botton = document.getElementById("ordersButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 15 => Players Order");
  // Ejemplo
  const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
  console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

});
