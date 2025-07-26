/**
 * Returns all consecutive substrings of the input string.
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 * 
 * @param {string} str
 * @returns {string[]} array of consecutive substrings
 */
function getConsecutiveSubstrings(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);
      result.push(substring);
    }
  }

  return result;
}

// Test cases
console.log(getConsecutiveSubstrings("abc"));    // ["a", "ab", "abc", "b", "bc", "c"]
console.log(getConsecutiveSubstrings("a"));      // ["a"]
console.log(getConsecutiveSubstrings(""));       // []
console.log(getConsecutiveSubstrings("aa"));     // ["a", "aa", "a"]
console.log(getConsecutiveSubstrings("AbC"));    // ["A", "Ab", "AbC", "b", "bC", "C"]