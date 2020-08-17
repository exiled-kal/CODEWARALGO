function createPhoneNumber(numbers) {
  let newNumber = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      newNumber.push('(' + numbers[i]);
    } else if(i == 2) {
        newNumber.push()
    }
  }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  "(123) 456-7890"
