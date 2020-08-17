function createPhoneNumber(numbers) {
  let newNumber = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      newNumber.push('(' + arr[i]);
    } else if (i == 2) {
      newNumber.push(arr[i] + ')');
    } else if (i == 3) {
      newNumber.push(' ' + arr[i]);
    } else if (i == 5) {
      newNumber.push(arr[i] + '-');
    } else {
      newNumber.push(numbers[i]);
    }
  }
  return newNumber.join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  "(123) 456-7890"
console.log('-------------------------');
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log('------------------------');
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
