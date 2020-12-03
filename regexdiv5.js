// Define a regular expression which tests if a given string representing a binary number is divisible by 5.


const divisibleByFive = /^0|(101(0)*)$/; // partial solution

console.log(divisibleByFive.test('101'), true);
