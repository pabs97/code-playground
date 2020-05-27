// even fibonacci numbers

let a = 1;
let b = 2;
let even = false;

let sum = 2;
let fibonacciNumber = 3;

while (fibonacciNumber < 4e6) {
  fibonacciNumber = a + b;

  // if (even) sum += fibonacciNumber;
  if (fibonacciNumber % 2 === 0) sum += fibonacciNumber;

  a = b;
  b = fibonacciNumber;
  even = !even;
}

console.log(sum);