// Given non-negative integers m and n, generate all size m combinations of the integers from 0 (zero) to n-1 in sorted order (each combination is sorted and the entire table is sorted).
// Example:
// 3 comb 5 is:
// 0 1 2
// 0 1 3
// 0 1 4
// 0 2 3
// 0 2 4
// 0 3 4
// 1 2 3
// 1 2 4
// 1 3 4
// 2 3 4

function combinations(m, n) {
  const result = [];

  function generateCombination(current, start) {
    if (current.length === m) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < n; i++) {
      current.push(i);
      generateCombination(current, i + 1);
      current.pop();
    }
  }

  generateCombination([], 0);
  return result;
}
