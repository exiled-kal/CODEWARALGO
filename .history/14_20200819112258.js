function sumOfDivided(lst) {
  var sum = 0;
  for (var i = 1; i <= lst.length; i++) {
    if (!(num % i)) {
      sum += i;
    }
  }
  return sum;
}


console.log(sumOfDivided([12, 15]), [
  [2, 12],
  [3, 27],
  [5, 15],
]);
console.log(sumOfDivided([15, 21, 24, 30, 45]), [
  [2, 54],
  [3, 135],
  [5, 90],
  [7, 21],
]);


