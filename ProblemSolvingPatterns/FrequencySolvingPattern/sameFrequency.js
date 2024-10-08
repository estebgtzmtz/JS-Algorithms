const sameFrequency = (num1, num2) => {
  const splitedNum1 = num1.toString().split("");
  const splitedNum2 = num2.toString().split("");

  if (splitedNum1.length != splitedNum2.length) return false;

  const lookup = {};

  for (let i = 0; i < splitedNum1.length; i++) {
    const digit = splitedNum1[i];
    lookup[digit] ? (lookup[digit] += 1) : (lookup[digit] = 1);
  }

  for (let i = 0; i < splitedNum2.length; i++) {
    const digit = splitedNum2[i];
    if (!lookup[digit]) {
      return false;
    } else {
      lookup[digit] -= 1;
    }
  }

  return true;
};

console.log(sameFrequency(123, 321));
