// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (str1, str2) => {
  if (str1.length === 0) return true;

  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));

  return isSubsequence(str1, str2.slice(1));
};

// Examples:

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
