// Largest prime factor

const aaa = 600851475143;
console.log(findLargestPrimeFactor(aaa));

function findLargestPrimeFactor(num) {
  let i = 0;

  while (++i <= num) {
    const res = num / i;
    if (Number.isInteger(res) && isPrime(res)) return res;
  }
  return 1;
}


function isPrime(number) {
  for (let i = 2; i <= number - 1; i++) {
    if (number % i === 0) return false;
  }
  return true;
}