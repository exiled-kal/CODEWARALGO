function adjacentElementsProduct(inputArray) {
  let products = [];

  for(let i = 0; i < inputArray.length; i++) {
      products.push(inputArray[i] * inputArray[i]);
  }
}

console.log(adjacentElementsProduct[(3, 6, -2, -5, 7, 3)]);
