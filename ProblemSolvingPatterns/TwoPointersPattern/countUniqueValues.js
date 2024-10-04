// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let uniqueValueCounter = 1;

  let firstPointer = 0;
  let comparePointer = 1;

  while (comparePointer < arr.length) {
    if (arr[firstPointer] === arr[comparePointer]) {
      comparePointer++;
    } else {
      firstPointer = comparePointer;
      comparePointer++;
      uniqueValueCounter++;
    }
  }

  return uniqueValueCounter;
};

console.log(
  countUniqueValues([1, 1, 2, 3, 4, 4, 555, 5345, 34525423, 34525423])
);
