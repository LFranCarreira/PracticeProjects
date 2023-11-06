// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

function primeSummation(n) {
  let sum = 0;
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

console.log(primeSummation(17));

// primeSummation(17) should return a number.
// primeSummation(17) should return 41.
// primeSummation(2001) should return 277050.
// primeSummation(140759) should return 873608362.
// primeSummation(2000000) should return 142913828922.
