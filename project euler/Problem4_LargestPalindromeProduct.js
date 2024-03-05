// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  const min = Math.pow(10, n - 1);
  const max = Math.pow(10, n) - 1;
  let maxPalindrome = 0;

  for (let i = max; i >= min; i--) {
    for (let j = i; j >= min; j--) {
      const product = i * j;
      if (product <= maxPalindrome) {
        break;
      }
      const productStr = product.toString();
      if (productStr === productStr.split('').reverse().join('')) {
        maxPalindrome = product;
      }
    }
  }

  return maxPalindrome;
}
largestPalindromeProduct(3);
