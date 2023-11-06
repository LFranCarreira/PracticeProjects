// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

function primeSummation(n) {
  if (n === 1) {
    return 2; // The first prime number is 2
  }

  let primes = [2]; // Start with 2 as the first prime
  let number = 3; // Start checking for primes from 3

  while (primes.length < n) {
    let isPrime = true;

    // Check if the current number is prime
    for (let prime of primes) {
      if (prime * prime > number) {
        break; // No need to continue checking
      }
      if (number % prime === 0) {
        isPrime = false;
        break; // It's not prime, move to the next number
      }
    }

    if (isPrime) {
      primes.push(number);
    }

    number += 2; // Only check odd numbers (even numbers other than 2 are not prime)
  }

  return primes[n - 1]; // Return the nth prime
}

console.log(primeSummation(20));

// primeSummation(17) should return a number.
// primeSummation(17) should return 41.
// primeSummation(2001) should return 277050.
// primeSummation(140759) should return 873608362.
// primeSummation(2000000) should return 142913828922.
