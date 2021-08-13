// function countBits(n) {
//   let newArr = n.toString(2).split('').map(Number);
//   let count = 0;

//   for (let i = 0; i < newArr.length; i++) {
//     count += newArr[i];
//   }
//   return count;
// }

// console.log(countBits(0));
// console.log(countBits(4));
// console.log(countBits(7));
// console.log(countBits(9));
// console.log(countBits(10));
// console.log(countBits(1234));

const MostPopularNumber = arr =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

console.log(MostPopularNumber([34, 31, 34, 77, 82], 5));
