// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

const areThereDuplicates = (...args) => {
  const counter = {};

  for (let value of args) {
    if (!counter[value]) {
      counter[value] = 1;
    } else {
      return true;
    }
  }

  return false;
};

console.log(areThereDuplicates("a", "b", "c", "a"));
