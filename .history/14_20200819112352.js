function sumOfDivided(lst) {
  var sum = 0;
  for (var i = 1; i <= lst.length; i++) {
    if (!(lst % i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfDivided([12, 15])
);
console.log(sumOfDivided([15, 21, 24, 30, 45])
);
