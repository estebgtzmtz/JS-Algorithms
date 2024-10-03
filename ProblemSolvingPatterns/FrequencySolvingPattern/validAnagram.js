// write a function to determinate if the second string is an anagram of the first string

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const stringCounter = {};

  for (let val of str1) {
    stringCounter[val] ? (stringCounter[val] = +1) : (stringCounter[val] = 1);
  }

  for (let val of str2) {
    if (!stringCounter[val]) {
      return false;
    } else {
      stringCounter[val] -= 1;
    }
  }

  return true;
};

console.log(validAnagram("hola", "lohsss"));
