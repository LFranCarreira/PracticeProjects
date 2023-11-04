// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

function fiboEvenSum(n) {
  let a = 1;
  let b = 2;
  let evenSum = 0;

  while (a <= n) {
    if (a % 2 === 0) {
      evenSum += a;
    }

    const temp = a;
    a = b;
    b = temp + b;
  }
  return evenSum;
}

console.log(fiboEvenSum(34)); // 44
