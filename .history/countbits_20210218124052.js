function countsBit(n) {
  let newArr = n.toString(0).split('').map(Number);
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    count += newArr[i];
  }
  return count;
}



console.log(countsBit();