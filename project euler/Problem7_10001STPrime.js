// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function nthPrime(n) {
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

nthPrime(10001);
