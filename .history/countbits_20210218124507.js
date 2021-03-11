function countsBit(n) {
  let newArr = n.toString(2).split('').map(Number);
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    count += newArr[i];
  }
  return count;
}

console.log(countsBit(0), 0);
console.log(countsBit(1234));
console.log(countsBit(4),);
