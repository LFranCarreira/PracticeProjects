// Build The Subsequences should return all the subsequences of a string in an array full of strings
function buildSubsequences(s) {
  // Return case
  if (!s.length) {
    return [];
  }

  // Recur with the string excluding the first character
  const subseqWithoutFirst = buildSubsequences(s.slice(1));

  // Include the first character in each subsequence
  const subseqWithFirst = subseqWithoutFirst.map((subseq) => s[0] + subseq);

  // Combine both sets of subsequences and include the empty string
  return [...subseqWithFirst, ...subseqWithoutFirst, s[0]];
}

// function getAllSortedSubsequences(s) {
//   const allSubsequences = buildSubsequences(s);
//   return allSubsequences.filter((subseq) => subseq !== '').sort();
// }

// Example usage:
const inputString = 'xyz';
const result = buildSubsequences(inputString);
console.log(result);
// The output should be ["x", "xy", "xyz", "xz", "y", "yz", "z"]
