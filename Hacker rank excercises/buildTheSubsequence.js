// Build The Subsequences should return all the subsequences of a string in an array full of strings

function getAllSortedSubsequences(s) {
    const result = [""];
    for (const char of s) {
      const currentSubseqCount = result.length;
      for (let i = 0; i < currentSubseqCount; i++) {
        result.push(result[i] + char);
      }
    }
    return result.slice(1).sort();
  }
  
  // Example usage:
  const inputString = 'xyz';
  const result = getAllSortedSubsequences(inputString);
  console.log(result);
  
// The output should be ["x", "xy", "xyz", "xz", "y", "yz", "z"]
