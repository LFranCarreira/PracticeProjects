// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  let largestFactor = number;
  for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
    if (!(largestFactor % i)) {
      let factor = largestFactor / i;
      let candidate = largestPrimeFactor(factor);
      return i > candidate ? i : candidate;
    }
  }
  return largestFactor;
}

largestPrimeFactor(13195);
