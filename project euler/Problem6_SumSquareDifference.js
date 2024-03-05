// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
  const sumOfN = (n * (n + 1)) / 2;
  const sumOfNSquare = (n * (n + 1) * (2 * n + 1)) / 6;

  return sumOfN ** 2 - sumOfNSquare;
}

sumSquareDifference(100);
