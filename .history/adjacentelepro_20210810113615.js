// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The largest product of adjacent elements.

function adjacentElementsProduct(inputArray) {
  let result = inputArray[0];

  for (let i = 0; i < inputArray.length; i++) {
    result *= inputArray[i];
  }
  if (inputArray.length == 1) return 0;

  let maxProduct = inputArray[0] * inputArray[i];

  for(let i = 0; i < inputArray.length -1; i++) {
      if(inp)
  }
}
