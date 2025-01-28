// Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number.

function isPrime(a) {
  if (a <= 1) return false;
  for (let i = 2; i < a / 2; i++) {
    if (a % i === 0) return false;
  }
  return true;
}

function nextPrime(a) {
  while (!isPrime(a)) {
    a++;
  }
  return a;
}

console.log(nextPrime(6));
