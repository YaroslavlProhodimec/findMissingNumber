const findUnique = (input) => {
  let hashMap = {};

  for (const char of input) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }

  for (const [key, value] of Object.entries(hashMap)) {
    if (value === 1) {
      return key;
    }
  }

  return false;
};

console.log(findUnique([1, 1, 2, 2, 3])); // Ожидаемый результат: 3
console.log(findUnique([4, 4, 5, 5, 6, 6, 7])); // Ожидаемый результат: 7

const findMissingNumber = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] - input[i] !== 1) {
      return input[i] + 1;
    }
  }
};

console.log(findMissingNumber([1, 2, 4, 5, 6])); // Ожидаемый результат: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Ожидаемый результат: 6
console.log(findMissingNumber([5, 2, 6, 1])); // Ожидаемый результат: 3
