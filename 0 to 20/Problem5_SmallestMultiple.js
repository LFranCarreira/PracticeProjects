// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

//LCM of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

//Euclidean recursive algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function smallestMult(n) {
  return true;
}

smallestMult(20);
