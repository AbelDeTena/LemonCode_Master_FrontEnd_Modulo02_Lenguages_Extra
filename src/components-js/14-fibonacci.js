const fib = (n) => {
  const fibonacci = [0, 1];
  let [a, b] = fibonacci;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
    fibonacci.push(b);
  }

  return fibonacci[n];
};


const botton = document.getElementById("fibonacciButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 14 => Fibonacci");
  // Ejemplo
  console.log(fib(0));
  console.log(fib(1));
  console.log(fib(2));
  console.log(fib(3));
  console.log(fib(4));
  console.log(fib(5));
  console.log(fib(6));
  console.log(fib(10));
});

